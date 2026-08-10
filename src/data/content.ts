/* ------------------------------------------------------------------
   All copy is carried over verbatim from the previous Arham Realty
   site. The only authored additions are the timeline entries for
   2000s–2026, which the old site loaded client-side and never
   rendered; they are reconstructed from the project record below.
   ------------------------------------------------------------------ */

export const BRAND = {
  name: 'Arham Realty',
  markTop: 'ARHAM',
  markBottom: 'REALTY',
  blurb:
    'For over three decades, Arham Realty has stood as a symbol of trust, quality, and architectural precision across Mumbai.',
}

export const NAV = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'About Us', href: '#about' },
  { label: 'Our Values', href: '#values' },
  { label: 'Contact', href: '#contact' },
]

export const HERO = {
  eyebrow: 'Worli Sea Face Landmark',
  titleLines: ['Redefining', "Mumbai's Skyline", 'for 30+ Years'],
  body:
    'Three decades of trust. A legacy of excellence — building iconic spaces that stand the test of time and elevate urban living.',
  primary: { label: 'Our Story', href: '#about' },
  secondary: { label: 'View Projects', href: '#projects' },
  image:
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1800&auto=format&fit=crop',
}

export const HERO_STATS = [
  { value: 30, suffix: '+', label: 'Years of Trust' },
  { value: 14, suffix: '+', label: 'Landmark Projects' },
  { value: 12, suffix: 'L+', label: 'Sq. Ft. Underway' },
  { value: 900, suffix: '+', label: 'Happy Residents' },
]

/* ---------------------------------- Projects --------------------- */

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Upcoming'

export interface Project {
  name: string
  developer: string
  location: string
  timeline: string
  category: string
  status: ProjectStatus
  description?: string
  images: string[]
}

const IMG = (id: string) =>
  `https://images.unsplash.com/${id}?w=1400&auto=format&fit=crop`

export const PROJECTS: Project[] = [
  {
    name: 'Premia "A"',
    developer: 'Kenarc Spaces LLP',
    location: 'Tilak Nagar, Chembur West',
    timeline: '2019–2023',
    category: 'Residential',
    status: 'Completed',
    description:
      'An landmark residential tower designed to offer luxury living in prime location. It features beautifully planned apartments with high-end finishes and excellent connectivity.',
    images: [
      IMG('photo-1545324418-cc1a3fa10c00'),
      IMG('photo-1600585154340-be6161a56a0c'),
      IMG('photo-1486325212027-8081e485255e'),
    ],
  },
  {
    name: 'Pramod CHSL',
    developer: 'Global Oricon Developers',
    location: 'Ghatkopar East, Mumbai',
    timeline: '2012–2018',
    category: 'Residential',
    status: 'Completed',
    images: [
      IMG('photo-1600585154340-be6161a56a0c'),
      IMG('photo-1486325212027-8081e485255e'),
      IMG('photo-1545324418-cc1a3fa10c00'),
    ],
  },
  {
    name: 'Dakshata CHSL',
    developer: 'Oricon Developers',
    location: 'Chembur West, Mumbai',
    timeline: '2010–2015',
    category: 'Residential',
    status: 'Completed',
    images: [
      IMG('photo-1486325212027-8081e485255e'),
      IMG('photo-1545324418-cc1a3fa10c00'),
      IMG('photo-1600585154340-be6161a56a0c'),
    ],
  },
  {
    name: 'Blossom CHSL',
    developer: 'Divine Construction Co.',
    location: 'Santacruz West, Mumbai',
    timeline: '2005–2008',
    category: 'Residential / Commercial',
    status: 'Completed',
    images: [
      IMG('photo-1600607687939-ce8a6c25118c'),
      IMG('photo-1545324418-cc1a3fa10c00'),
      IMG('photo-1486325212027-8081e485255e'),
    ],
  },
  {
    name: 'Shubhda Tower',
    developer: 'Divine Construction Co.',
    location: 'Worli, Mumbai',
    timeline: '2000–2005',
    category: 'Residential',
    status: 'Completed',
    images: [
      IMG('photo-1512917774080-9991f1c4c750'),
      IMG('photo-1600585154340-be6161a56a0c'),
      IMG('photo-1545324418-cc1a3fa10c00'),
    ],
  },
  {
    name: 'Premia "B" & "C"',
    developer: 'Kenarc Spaces LLP',
    location: 'Tilak Nagar, Chembur West',
    timeline: '2024–',
    category: 'Residential',
    status: 'Ongoing',
    description:
      'The next two towers of the Premia estate, extending the masterplan with larger configurations and a raised podium deck.',
    images: [
      IMG('photo-1600585154340-be6161a56a0c'),
      IMG('photo-1545324418-cc1a3fa10c00'),
      IMG('photo-1486325212027-8081e485255e'),
    ],
  },
  {
    name: 'Anvaya — Medinee Niketan CHSL',
    developer: 'Arham Realty',
    location: 'Andheri, Mumbai',
    timeline: '2024–',
    category: 'Residential',
    status: 'Ongoing',
    description:
      'A redevelopment in the Andheri corridor pairing progressive architecture with structural reliability.',
    images: [
      IMG('photo-1486325212027-8081e485255e'),
      IMG('photo-1600607687939-ce8a6c25118c'),
      IMG('photo-1545324418-cc1a3fa10c00'),
    ],
  },
  {
    name: 'Pali Hill',
    developer: 'Arham Realty',
    location: 'Bandra West, Mumbai',
    timeline: 'Upcoming',
    category: 'Ultra Luxury Residential',
    status: 'Upcoming',
    images: [
      IMG('photo-1512917774080-9991f1c4c750'),
      IMG('photo-1486325212027-8081e485255e'),
    ],
  },
  {
    name: 'Mahalaxmi Heights',
    developer: 'Arham Realty',
    location: 'Mahalaxmi, Mumbai',
    timeline: 'Upcoming',
    category: 'Residential',
    status: 'Upcoming',
    images: [
      IMG('photo-1545324418-cc1a3fa10c00'),
      IMG('photo-1600585154340-be6161a56a0c'),
    ],
  },
  {
    name: 'Arham Square',
    developer: 'Arham Realty',
    location: 'Malad East, Mumbai',
    timeline: 'Upcoming',
    category: 'Commercial',
    status: 'Upcoming',
    images: [
      IMG('photo-1600607687939-ce8a6c25118c'),
      IMG('photo-1512917774080-9991f1c4c750'),
    ],
  },
]

/** Counts shown on the portfolio filter tabs — from the old site. */
export const PROJECT_COUNTS: Record<ProjectStatus, number> = {
  Completed: 14,
  Ongoing: 2,
  Upcoming: 6,
}

/* ---------------------------------- About ------------------------ */

export const ABOUT = {
  eyebrow: 'About Arham Realty',
  title: ['Building Dreams', 'Since', '1994'],
  lead: {
    before: 'Born from a vision to redefine urban living, Arham Realty stands as a symbol of ',
    emphasis: 'progressive infrastructure, architectural precision, and timeless value',
    after:
      ' — developing premium spaces that blend modern design, functionality, and sustainable growth.',
  },
}

export const TIMELINE = [
  {
    era: '1994',
    kicker: 'Beginnings',
    title: 'Founded in 1994',
    body:
      "Established in Mulund & Nalasopara with a vision to build quality, dependable homes for Mumbai's growing families.",
    image: IMG('photo-1486325212027-8081e485255e'),
  },
  {
    era: '2000s',
    kicker: 'Into the island city',
    title: 'Shubhda Tower & Blossom CHSL',
    body:
      'The practice moved into South Mumbai and the western suburbs, delivering Shubhda Tower at Worli and the mixed-use Blossom CHSL at Santacruz West.',
    image: IMG('photo-1512917774080-9991f1c4c750'),
  },
  {
    era: '2010s',
    kicker: 'Redevelopment at scale',
    title: 'Chembur & Ghatkopar',
    body:
      'Dakshata CHSL and Pramod CHSL established Arham as a dependable redevelopment partner for housing societies across the central suburbs.',
    image: IMG('photo-1600585154340-be6161a56a0c'),
  },
  {
    era: '2020s',
    kicker: 'A landmark address',
    title: 'Premia, Tilak Nagar',
    body:
      'Premia "A" completed in 2023 — a luxury residential tower with high-end finishes and excellent connectivity, with towers B and C now underway.',
    image: IMG('photo-1545324418-cc1a3fa10c00'),
  },
  {
    era: '2026',
    kicker: 'What comes next',
    title: 'Six upcoming addresses',
    body:
      'A pipeline spanning Pali Hill, Mahalaxmi, Bandra West, Borivali and Malad — carrying three decades of practice into the next skyline.',
    image: IMG('photo-1600607687939-ce8a6c25118c'),
  },
]

export const MISSION = {
  label: 'Our Mission',
  headline:
    "Redefining Mumbai's residential landscape with excellence, integrity, and innovation.",
  body:
    'Since 1994 we have crafted exceptional living spaces that exceed expectations. We build with premium craftsmanship and absolute transparency, nurturing vibrant communities where families thrive.',
}

export const VISION = {
  label: 'Our Vision',
  headline:
    "To be Mumbai's most trusted real estate brand, shaping iconic skyline landmarks.",
  body:
    'Known for creating sustainable, future-ready spaces and enriching communities for generations to come. We aim to revolutionize urban living through visionary, community-centric designs.',
}

/* ---------------------------------- Footprint -------------------- */

export const FOOTPRINT = {
  index: '03 / Geographical network',
  title: ['Our Footprint Across', 'Mumbai & Thane'],
  body:
    'Since 1994, Arham Realty has established landmark spaces that unite progressive architecture and structural reliability. Dive into our geographical distribution.',
  caption: ['Landmarks Built on', 'Precision & Spatial Impact'],
}

export const FOOTPRINT_STATS = [
  { value: 2.4, suffix: 'M+', label: 'Sq Ft Delivered', decimals: 1 },
  { value: 900, suffix: '+', label: 'Happy Families' },
  { value: 22, suffix: '+', label: 'Prime Locations' },
  { value: 1.2, suffix: 'M+', label: 'Sq Ft Upcoming', decimals: 1 },
]

export interface Cluster {
  region: string
  count: number
  entries: { name: string; status: ProjectStatus }[]
}

export const CLUSTERS: Cluster[] = [
  {
    region: 'Chembur & Ghatkopar',
    count: 4,
    entries: [
      { name: 'Premia "A"', status: 'Completed' },
      { name: 'Premia "B" & "C"', status: 'Ongoing' },
      { name: 'Pramod CHSL', status: 'Completed' },
      { name: 'Dakshata CHSL', status: 'Completed' },
    ],
  },
  {
    region: 'Bandra & Santacruz',
    count: 4,
    entries: [
      { name: 'Blossom CHSL', status: 'Completed' },
      { name: 'Shailesh Apartment', status: 'Completed' },
      { name: 'Akhand Aabhar CHSL', status: 'Completed' },
      { name: 'Bandra West, Mumbai', status: 'Upcoming' },
    ],
  },
  {
    region: 'Worli & South Mumbai',
    count: 2,
    entries: [
      { name: 'Shubhda Tower', status: 'Completed' },
      { name: 'Mahalaxmi, Mumbai', status: 'Upcoming' },
    ],
  },
  {
    region: 'Thane & Central Suburbs',
    count: 6,
    entries: [
      { name: 'Pooja Park', status: 'Completed' },
      { name: 'Toral Apartment', status: 'Completed' },
      { name: 'Jesal Apartment', status: 'Completed' },
      { name: 'Sai Dhara', status: 'Completed' },
      { name: 'Vardaman Park', status: 'Completed' },
      { name: 'Bhandup East, Mumbai', status: 'Upcoming' },
    ],
  },
  {
    region: 'Andheri & Borivali',
    count: 6,
    entries: [
      { name: 'Anvaya — Medinee Niketan CHSL', status: 'Ongoing' },
      { name: 'Navtarun CHSL', status: 'Completed' },
      { name: 'Shri Ganesh CHSL', status: 'Completed' },
      { name: 'Borivali East, Mumbai', status: 'Upcoming' },
      { name: 'Borivali West, Mumbai', status: 'Upcoming' },
      { name: 'Malad East, Mumbai', status: 'Upcoming' },
    ],
  },
]

/* ---------------------------------- Values ----------------------- */

export const VALUES_HEADER = {
  eyebrow: 'Why Arham',
  title: ['The values we', 'build on'],
  body:
    'Four principles have shaped every project since 1994 — guiding how we design, how we build, and how we stand behind every home we deliver.',
}

export const VALUES = [
  {
    n: '01',
    kicker: 'Crafting Standards',
    title: 'Quality',
    body:
      'Superior construction and design that stands the test of time, utilizing premium materials and meticulous execution.',
  },
  {
    n: '02',
    kicker: 'Ethical Foundation',
    title: 'Integrity',
    body:
      'Honesty, absolute transparency, and ethical practices in everything we do, establishing three decades of homeowner trust.',
  },
  {
    n: '03',
    kicker: 'Future-Ready Design',
    title: 'Innovation',
    body:
      'Implementing progressive architectural ideas and technology to engineer functional, elegant living experiences.',
  },
  {
    n: '04',
    kicker: 'Green Compass',
    title: 'Sustainability',
    body:
      'Building responsibly for a greener tomorrow, integrating eco-friendly designs and efficient resources for future generations.',
  },
]

/* ---------------------------------- Contact ---------------------- */

export const CONTACT = {
  eyebrow: 'Get in Touch',
  title: ["Let's", 'talk'],
  sub: ['Reach the', 'Arham team.'],
  body:
    "Our team responds to every enquiry personally. Visit us, call, or send a note and we'll be in touch within one business day.",
  details: [
    {
      label: 'Office',
      lines: [
        'Office No. 7, 1st Floor, Shantinath Shopping Centre,',
        'S.V. Road, Malad West, Mumbai — 400064',
      ],
    },
    { label: 'Phone', lines: ['+91 98190 91599'], href: 'tel:+919819091599' },
    {
      label: 'Email',
      lines: ['arhamlanddevelopers@gmail.com'],
      href: 'mailto:arhamlanddevelopers@gmail.com',
    },
    { label: 'Hours', lines: ['Mon – Sat · 10:00 AM – 7:00 PM'] },
  ],
  form: {
    title: 'Send us an enquiry',
    body: "Tell us what you're looking for and we'll match you to the right project.",
    interests: [
      'Premia "B" & "C" — Chembur',
      'Anvaya — Andheri',
      'Arham Square — Commercial',
      'Pali Hill — Ultra Luxury',
      'Mahalaxmi Heights',
      'Redevelopment / Land',
      'General Enquiry',
    ],
    configurations: ['Any', '1 BHK', '2 BHK', '3 BHK', 'Commercial'],
    consent: 'I agree to receive updates and communications from Arham Realty.',
    submit: 'Submit Enquiry',
  },
}

export const CTA = {
  eyebrow: 'Arham Realty Legacy',
  title: ["Shaping Mumbai's skyline,", 'one landmark', 'at a time.'],
  action: 'Partner With Us',
}

export const FOOTER = {
  projects: [
    'Premia B & C — Chembur',
    'Anvaya — Andheri',
    'Pali Hill — Upcoming',
    'All Projects',
  ],
  legal: ['Privacy Policy', 'Terms & Conditions'],
  copyright: '© 2026 Arham Realty. All rights reserved.',
}
