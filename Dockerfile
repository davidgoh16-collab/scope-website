# SCOPE website — static single-page app served by nginx.
# Designed for Google Cloud Run, which injects a $PORT env var (default 8080)
# that the server MUST bind to.

FROM nginx:1.27-alpine

# Default for local runs; Cloud Run overrides this at deploy time.
ENV PORT=8080

# The official nginx image runs envsubst over files in /etc/nginx/templates/
# at startup, expanding ${PORT} into the live config before nginx launches.
COPY nginx.conf.template /etc/nginx/templates/default.conf.template

# The bundled, standalone site (no other files are needed at runtime).
COPY index.html /usr/share/nginx/html/index.html

# Informational only — Cloud Run routes via $PORT regardless.
EXPOSE 8080

# Base image's entrypoint expands templates, then runs `nginx -g 'daemon off;'`.
