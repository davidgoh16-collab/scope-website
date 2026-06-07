// SCOPE — Shared data (sample schools, FAQs, testimonials, etc.)

const SAMPLE_SCHOOLS = [
  {
    id: "hillside",
    name: "Hillside Academy",
    type: "State secondary",
    location: "Battersea, London",
    distance: "1.2 mi",
    match: 94,
    ofsted: "Outstanding",
    pupils: 1240,
    ageRange: "11–18",
    specialisms: ["Science", "Maths", "Music"],
    accent: "blue",
    shortBio: "A bright, well-supported academy with strong STEM and pastoral programmes. Sixth form on site.",
    transport: ["Bus 137", "Walk 18 min"],
    sen: "SENCO + speech & language support",
    headTeacher: "Mrs. Helen Okafor",
    intake: "180 / year",
    snapshot: { science: 92, maths: 88, arts: 74, sport: 81, support: 90 },
  },
  {
    id: "riverside",
    name: "Riverside Secondary",
    type: "Academy",
    location: "Wandsworth, London",
    distance: "2.8 mi",
    match: 87,
    ofsted: "Good",
    pupils: 980,
    ageRange: "11–18",
    specialisms: ["Drama", "English", "Languages"],
    accent: "purple",
    shortBio: "Performing-arts focused academy with strong English Lit results and a thriving languages programme.",
    transport: ["Bus 44", "Tube 12 min"],
    sen: "ASD specialist resource base",
    headTeacher: "Mr. Daniel Whitfield",
    intake: "150 / year",
    snapshot: { science: 70, maths: 72, arts: 95, sport: 65, support: 84 },
  },
  {
    id: "stcatherines",
    name: "St Catherine's College",
    type: "Academy (faith)",
    location: "Clapham, London",
    distance: "3.4 mi",
    match: 73,
    ofsted: "Good",
    pupils: 820,
    ageRange: "11–18",
    specialisms: ["Humanities", "Languages"],
    accent: "pink",
    shortBio: "Catholic academy with humanities specialism and strong A Level results. Mixed ability intake.",
    transport: ["Bus 35", "Walk 28 min"],
    sen: "Inclusion team",
    headTeacher: "Dr. Sarah Bellucci",
    intake: "120 / year",
    snapshot: { science: 74, maths: 76, arts: 80, sport: 68, support: 78 },
  },
  {
    id: "oakwell",
    name: "Oakwell School",
    type: "State secondary",
    location: "Tooting, London",
    distance: "4.1 mi",
    match: 68,
    ofsted: "Good",
    pupils: 1100,
    ageRange: "11–16",
    specialisms: ["Sport", "Design Tech"],
    accent: "green",
    shortBio: "Community school with strong sports and design-technology programmes. No sixth form on site.",
    transport: ["Bus 219", "Train + Bus"],
    sen: "EAL and SEMH support",
    headTeacher: "Mr. James Patel",
    intake: "200 / year",
    snapshot: { science: 68, maths: 65, arts: 70, sport: 95, support: 75 },
  },
  {
    id: "lambeth",
    name: "Lambeth Sixth Form",
    type: "Sixth form college",
    location: "Brixton, London",
    distance: "5.0 mi",
    match: 62,
    ofsted: "Outstanding",
    pupils: 1800,
    ageRange: "16–19",
    specialisms: ["A Levels", "BTECs", "Arts"],
    accent: "coral",
    shortBio: "Large sixth-form college offering 40+ A Levels and applied courses. Strong progression to RG unis.",
    transport: ["Tube Victoria line", "Bus 159"],
    sen: "Dedicated SEND team",
    headTeacher: "Ms. Priya Anand",
    intake: "900 / year",
    snapshot: { science: 80, maths: 82, arts: 88, sport: 60, support: 85 },
  },
];

const FAQS = [
  {
    category: "Getting started",
    items: [
      {
        q: "Is Scope free to use?",
        a: "Yes. Scope is completely free for every student in England. There are no premium tiers, no paywalls, and no upsells. We're funded by partnerships with local authorities, not by schools paying for placement.",
      },
      {
        q: "How long does the quiz take?",
        a: "About five minutes for the core quiz. You can pause and come back to it whenever you like — your progress is saved on your device. If you want a more detailed match, there are optional deeper questions that add another five to ten minutes.",
      },
      {
        q: "Do I need an account?",
        a: "You can take the quiz without an account. If you want to save your results, share them with a parent or guardian, or come back later, you can create a free account using just an email address.",
      },
      {
        q: "What ages is Scope for?",
        a: "Scope is designed for two transitions: Year 6 (age 10–11) looking at secondary schools, and Year 11 (age 15–16) looking at sixth forms. Parents and guardians can use it on behalf of their child too.",
      },
    ],
  },
  {
    category: "How matching works",
    items: [
      {
        q: "How are schools matched to me?",
        a: "We combine what you tell us in the quiz — your interests, subjects you like, support needs, what's important to you in a school — with public data on every school: Ofsted, GCSE/A Level results, specialisms, admissions criteria, and exact travel distance from your postcode.",
      },
      {
        q: "Why is my match percentage what it is?",
        a: "Every school's match score is broken down on its profile page. You can see exactly which of your answers contributed to the score, and which factors counted against. Nothing is hidden.",
      },
      {
        q: "Can I change my answers and see new results?",
        a: "Yes. You can retake or edit any answer at any time. We'll re-run the matching instantly and show you what changed.",
      },
      {
        q: "Does Scope cover the whole UK?",
        a: "We currently cover England in full. Scotland, Wales and Northern Ireland are on the roadmap for late 2026.",
      },
    ],
  },
  {
    category: "Privacy & data",
    items: [
      {
        q: "What data do you collect?",
        a: "Just the answers you give in the quiz and, if you sign up, your email. We don't ask for your full name, date of birth, or address — only your postcode, and only the first half (e.g. SW11) unless you opt in to share the full one for more accurate distance matching.",
      },
      {
        q: "Is my SEN data safe?",
        a: "Yes. SEN and disability information is classified as 'special category data' under Article 9 of UK GDPR and is encrypted, never shared with schools, never sold, and only ever used to improve your matches. You can delete it at any time, separately from the rest of your data.",
      },
      {
        q: "Do schools see my answers?",
        a: "No. Schools cannot see who has matched with them, what scores they received, or any individual data. They only ever see aggregate, anonymised trends — and only if they pay for a basic dashboard subscription.",
      },
      {
        q: "Can I delete my account?",
        a: "Yes, instantly, from your account settings. We delete everything within 30 days. You don't need to email us or wait for approval.",
      },
    ],
  },
  {
    category: "For parents",
    items: [
      {
        q: "Can I use Scope on behalf of my child?",
        a: "Yes. Many parents and guardians do, especially for Year 6 students. We recommend doing it together — the quiz is designed for the student to be in the driving seat, with you alongside.",
      },
      {
        q: "Will I be able to see my child's results?",
        a: "Only if they share them with you. We don't have parent portals or oversight features — Scope is built around the student. We'll soon offer a share-link so students can send their list to you in one click.",
      },
      {
        q: "What if my child has additional needs?",
        a: "Scope is especially useful for students with SEN, EHCPs, or physical disabilities. The quiz includes specific questions about support needs, and matching factors in each school's documented provision. All sensitive data is protected under Article 9 GDPR.",
      },
    ],
  },
];

const TESTIMONIALS = [
  {
    quote: "I never would have found Hillside Academy on my own. It was exactly what I was looking for, and it's only 20 minutes away.",
    name: "Aisha",
    role: "Year 6 · Scoped her secondary school",
    accent: "blue",
  },
  {
    quote: "We spent weeks reading prospectuses and visiting open evenings. With Scope we had a real shortlist in an evening, and the matches actually made sense.",
    name: "Maya & Robin",
    role: "Parents of a Year 6 student",
    accent: "green",
  },
  {
    quote: "Honestly the SEN bit was the thing. I have an EHCP and most search sites either ignore it or make it feel like a tick box. Scope asked properly.",
    name: "Theo",
    role: "Year 11 · Choosing a sixth form",
    accent: "purple",
  },
  {
    quote: "It actually felt like it was made for someone my age. Not patronising. Not like a Government website.",
    name: "Yusuf",
    role: "Year 11",
    accent: "coral",
  },
];

const STATS = [
  { value: "2,400+", label: "Schools indexed across England" },
  { value: "94%", label: "Of users find a school they hadn't heard of" },
  { value: "5 min", label: "Average time to first results" },
  { value: "Free", label: "Forever, for every student in England" },
];

Object.assign(window, { SAMPLE_SCHOOLS, FAQS, TESTIMONIALS, STATS });
