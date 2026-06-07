# Deploying SCOPE to Google Cloud Run

The site is a single static `index.html` served by nginx. The container binds to
the `$PORT` Cloud Run provides (defaulting to `8080` for local runs).

## Prerequisites

- A Google Cloud project with billing enabled
- The [`gcloud` CLI](https://cloud.google.com/sdk/docs/install) installed and authenticated:
  ```sh
  gcloud auth login
  gcloud config set project YOUR_PROJECT_ID
  ```

## One-command deploy (recommended)

From the repo root. Cloud Build detects the `Dockerfile`, builds the image, and
deploys it:

```sh
gcloud run deploy scope-website \
  --source . \
  --region europe-west2 \
  --allow-unauthenticated
```

The command prints a public URL when it finishes. Re-run it to ship updates.

## Explicit build + deploy (if you prefer separate steps)

```sh
# Build and push to Artifact Registry via Cloud Build
gcloud builds submit \
  --tag europe-west2-docker.pkg.dev/YOUR_PROJECT_ID/web/scope-website

# Deploy the pushed image
gcloud run deploy scope-website \
  --image europe-west2-docker.pkg.dev/YOUR_PROJECT_ID/web/scope-website \
  --region europe-west2 \
  --allow-unauthenticated
```

## Run the container locally

```sh
docker build -t scope-website .

# Cloud Run-style: pass a PORT; nginx binds to it
docker run --rm -e PORT=8080 -p 8080:8080 scope-website
# → http://localhost:8080   (health check: http://localhost:8080/healthz)
```

## Notes

- **Region**: `europe-west2` (London) suits a UK audience; change `--region` freely.
- **Port**: never hard-code a port in app config — Cloud Run injects `$PORT` and
  the nginx template expands it at startup.
- **Cost**: Cloud Run scales to zero, so an idle deployment costs nothing.
