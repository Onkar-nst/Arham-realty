/* ------------------------------------------------------------------
   Site copy.

   The project catalogue lives in ./projects.ts, rebuilt from the
   client's own schedule. Figures quoted here (areas, counts) are
   derived from that file rather than typed by hand, so the two can
   never drift apart.
   ------------------------------------------------------------------ */

import { AREA_TOTALS, PROJECT_COUNTS, PROJECTS } from './projects'
import type { ProjectStatus } from './projects'

export const BRAND = {
  name: 'Arham Realty',
  markTop: 'ARHAM',
  markBottom: 'REALTY',
  blurb:
    'For over three decades, Arham Realty has stood as a symbol of trust, quality, and architectural precision across Mumbai.',
}

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Values', href: '/#values' },
  { label: 'Contact', href: '/#contact' },
]

export const HERO = {
  eyebrow: 'Building across Mumbai & Thane since 1994',
  titleLines: ['Redefining', "Mumbai's Skyline", 'for 30+ Years'],
  body:
    'Three decades of trust, and a legacy of excellence. We build spaces that hold their value, and their character, long after the handover.',
  primary: { label: 'Our Story', href: '/about' },
  secondary: { label: 'View Projects', href: '/projects' },
  image: '/projects/premia-bc-2.jpg',
}

/* Every figure below is computed from the project schedule. */
const lakhs = (sqft: number) => Math.round((sqft / 100000) * 10) / 10

export const HERO_STATS = [
  { value: 30, suffix: '+', label: 'Years Since 1994' },
  { value: PROJECT_COUNTS.Completed, suffix: '', label: 'Projects Completed' },
  { value: lakhs(AREA_TOTALS.Completed), suffix: 'L', label: 'Sq. Ft. Delivered', decimals: 1 },
  { value: lakhs(AREA_TOTALS.Upcoming), suffix: 'L', label: 'Sq. Ft. In Pipeline', decimals: 1 },
]

/* ---------------------------------- About ------------------------ */

export const ABOUT = {
  eyebrow: 'About Arham Realty',
  title: ['Building Dreams', 'Since', '1994'],
  lead: {
    before: 'Born from a vision to redefine urban living, Arham Realty stands as a symbol of ',
    emphasis: 'progressive infrastructure, architectural precision, and timeless value',
    after:
      ', developing premium spaces that blend modern design, functionality, and sustainable growth.',
  },
}

/**
 * Copy for the About page. The four introduction paragraphs are taken
 * verbatim from the client's own brand guidelines (Evolved Monkeys,
 * v1.0, 26 May 2026, p.1) — this is approved brand language and should
 * not be reworded without going back to that document.
 */
export const ABOUT_PAGE = {
  eyebrow: 'About Arham Realty',
  title: ['Thirty years of', 'building Mumbai'],
  intro: [
    'Born from a vision to redefine urban living, Arham Realty stands as a symbol of progressive infrastructure, architectural precision, and timeless value.',
    'With a commitment to shaping the evolving skyline of Mumbai, Arham Realty develops premium residential and commercial spaces that blend modern design, functionality, and sustainable growth.',
    'Driven by excellence and rooted in integrity, the brand continuously pushes boundaries in construction quality, design intelligence, and customer experience.',
    'Every project reflects the spirit of Mumbai itself: ambitious, dynamic, and constantly evolving.',
  ],
  storyTitle: 'From Nalasopara to the island city',
  story: [
    'The first entry on the Arham Group schedule is Vardaman Park at Nalasopara East. 46,000 sq ft, started in 1994 and handed over two years later. The decade that followed was spent out in the Thane belt and the far western suburbs, at Mira Road, Bhayander and Kandivali, building the kind of community housing the city’s outward growth was asking for.',
    'Worli changed the scale of things. Shubhda Tower, finished in 2005, was 4.1 lakh sq ft and is still the largest completed project on the schedule. It was the practice’s arrival in the island city, and Bandra, Khar and Santacruz followed quickly after.',
    'The 2010s went to redevelopment. Dakshata CHSL in Chembur West and Pramod CHSL in Ghatkopar East were both rebuilt for the societies already living on them, work that asks for patience with the approvals and with the families waiting to move back home. Premia at Tilak Nagar and Anvaya at Andheri East are built on that record.',
  ],
  groupsTitle: 'Arham Group of Companies',
  groupsBody:
    'Projects are delivered through the group’s development companies and joint ventures. Every project on this site is listed against the entity that built it.',
}

export const TIMELINE = [
  {
    era: '1994',
    kicker: 'Beginnings',
    title: 'Founded in 1994',
    body:
      'Established in Mulund and Nalasopara, with a plan to build quality, dependable homes for Mumbai’s growing families.',
    image: '/projects/anvaya-5.jpg',
  },
  {
    era: '2000s',
    kicker: 'Into the island city',
    title: 'Shubhda Tower & Blossom CHSL',
    body:
      'The practice moved into South Mumbai and the western suburbs, delivering Shubhda Tower at Worli and Blossom CHSL, part shops and part homes, at Santacruz West.',
    image: '/projects/shubhda-tower.jpg',
  },
  {
    era: '2010s',
    kicker: 'Redevelopment at scale',
    title: 'Chembur & Ghatkopar',
    body:
      'Dakshata CHSL and Pramod CHSL established Arham as a dependable redevelopment partner for housing societies across the central suburbs.',
    image: '/projects/dakshata-chsl.jpg',
  },
  {
    era: '2020s',
    kicker: 'A landmark address',
    title: 'Premia, Tilak Nagar',
    body:
      'Premia Tower A was finished in 2023, a residential tower with premium finishes and excellent connectivity. Towers B and C are now underway on the same estate.',
    image: '/projects/premia-a-1.jpg',
  },
  {
    era: '2026',
    kicker: 'What comes next',
    title: 'Six upcoming addresses',
    body:
      'A pipeline spanning Bandra West, Mahalaxmi, Borivali East and West, Malad East and Bhandup East, carrying three decades of practice into the next skyline.',
    image: '/projects/premia-bc-1.jpg',
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
    'Known for creating sustainable, future ready spaces and enriching communities for generations to come. We aim to revolutionise urban living through visionary, community centric designs.',
}

/* ---------------------------------- Footprint -------------------- */

export const FOOTPRINT = {
  index: '03 / Geographical network',
  title: ['Our Footprint Across', 'Mumbai & Thane'],
  body:
    'Since 1994 we have built across Mumbai and Thane, uniting progressive architecture with structural reliability. Here is where you will find us.',
  caption: ['Landmarks Built on', 'Precision & Spatial Impact'],
}

export const FOOTPRINT_STATS = [
  { value: lakhs(AREA_TOTALS.Completed), suffix: 'L', label: 'Sq Ft Delivered', decimals: 1 },
  { value: lakhs(AREA_TOTALS.Ongoing), suffix: 'L', label: 'Sq Ft Under Construction', decimals: 1 },
  { value: lakhs(AREA_TOTALS.Upcoming), suffix: 'L', label: 'Sq Ft Upcoming', decimals: 1 },
  { value: PROJECTS.length, suffix: '', label: 'Projects Since 1994' },
]

export interface Cluster {
  region: string
  count: number
  entries: { name: string; status: ProjectStatus }[]
}

/* Localities grouped into the five corridors the practice actually works
   in. Derived from the project schedule so a new project appears on the
   map the moment it is added — there is no second list to maintain. */
const REGION_OF: Record<string, string> = {
  'Chembur West, Mumbai': 'Chembur, Ghatkopar & Bhandup',
  'Ghatkopar East, Mumbai': 'Chembur, Ghatkopar & Bhandup',
  'Bhandup East, Mumbai': 'Chembur, Ghatkopar & Bhandup',
  'Bandra West, Mumbai': 'Bandra, Khar & Santacruz',
  'Khar West, Mumbai': 'Bandra, Khar & Santacruz',
  'Santacruz West, Mumbai': 'Bandra, Khar & Santacruz',
  'Worli, Mumbai': 'Worli & Mahalaxmi',
  'Mahalaxmi, Mumbai': 'Worli & Mahalaxmi',
  'Andheri East, Mumbai': 'Andheri, Kandivali, Borivali & Malad',
  'Kandivali West, Mumbai': 'Andheri, Kandivali, Borivali & Malad',
  'Borivali East, Mumbai': 'Andheri, Kandivali, Borivali & Malad',
  'Borivali West, Mumbai': 'Andheri, Kandivali, Borivali & Malad',
  'Malad East, Mumbai': 'Andheri, Kandivali, Borivali & Malad',
  'Mira Road East, Thane': 'Mira Road, Bhayander & Nalasopara',
  'Bhayander East, Thane': 'Mira Road, Bhayander & Nalasopara',
  'Nalasopara East, Thane': 'Mira Road, Bhayander & Nalasopara',
}

const REGION_ORDER = [
  'Chembur, Ghatkopar & Bhandup',
  'Andheri, Kandivali, Borivali & Malad',
  'Bandra, Khar & Santacruz',
  'Mira Road, Bhayander & Nalasopara',
  'Worli & Mahalaxmi',
]

export const CLUSTERS: Cluster[] = REGION_ORDER.map((region) => {
  const entries = PROJECTS.filter((p) => REGION_OF[p.location] === region).map((p) => ({
    name: p.name,
    status: p.status,
  }))
  return { region, count: entries.length, entries }
})

/* ---------------------------------- Values ----------------------- */

export const VALUES_HEADER = {
  eyebrow: 'Why Arham',
  title: ['The values we', 'build on'],
  body:
    'Four principles have shaped every project since 1994. They guide how we design, how we build, and how we stand behind every home we hand over.',
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
    kicker: 'Future Ready Design',
    title: 'Innovation',
    body:
      'Implementing progressive architectural ideas and technology to engineer functional, elegant living experiences.',
  },
  {
    n: '04',
    kicker: 'Green Compass',
    title: 'Sustainability',
    body:
      'Building responsibly for a greener tomorrow, integrating eco friendly designs and efficient resources for future generations.',
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
        'S.V. Road, Malad West, Mumbai 400064',
      ],
    },
    { label: 'Phone', lines: ['+91 98190 91599'], href: 'tel:+919819091599' },
    {
      label: 'Email',
      lines: ['arhamlanddevelopers@gmail.com'],
      href: 'mailto:arhamlanddevelopers@gmail.com',
    },
    { label: 'Hours', lines: ['Mon to Sat · 10:00 AM to 7:00 PM'] },
  ],
  form: {
    title: 'Send us an enquiry',
    body: "Tell us what you're looking for and we'll match you to the right project.",
    interests: [
      'Premia Towers B & C, Chembur',
      'Anvaya, Andheri East',
      'Upcoming at Bandra West',
      'Upcoming at Mahalaxmi',
      'Upcoming at Borivali, Malad or Bhandup',
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
    { label: 'Premia Towers B & C', href: '/projects/premia-towers-b-c' },
    { label: 'Anvaya, Andheri East', href: '/projects/anvaya-medinee-niketan' },
    { label: 'Premia Tower A', href: '/projects/premia-tower-a' },
    { label: 'All Projects', href: '/projects' },
  ],
  legal: ['Privacy Policy', 'Terms & Conditions'],
  copyright: '© 2026 Arham Realty. All rights reserved.',
  /* Standard Indian real-estate marketing disclaimer. Renders and plans
     shown on this site come from project brochures and are indicative. */
  disclaimer:
    'Images, plans and amenity layouts shown are artists’ impressions taken from project brochures and are indicative only. They do not form part of any offer or contract. Areas quoted are construction areas as recorded in the Arham Group project schedule. Details of upcoming projects are subject to statutory approvals and are shown by locality. Building names are withheld pending those approvals.',
}
