/* ------------------------------------------------------------------
   Site copy.

   Everything in this file is taken from "ARHAM REALTY - WEB CONTENT -
   10.09.2026.docx", the client's own web copy, which they have had
   verified by their lawyers. It is reproduced verbatim — headline
   figures included — and should not be reworded, rounded or "improved"
   without going back to that document. Where the document's page
   numbers are cited below, they refer to that file.

   The project catalogue lives in ./projects.ts; the legal texts in
   ./legal.ts.
   ------------------------------------------------------------------ */

import { PROJECTS } from './projects'
import type { ProjectStatus } from './projects'

export const BRAND = {
  name: 'Arham Realty',
  markTop: 'ARHAM',
  markBottom: 'REALTY',
  /* Footer blurb, doc p.12. */
  blurb:
    'For Over Three Decades, Leaders of Arham Realty have positioned as a symbol of trust, quality and precision across Mumbai & Thane.',
}

export const NAV = [
  { label: 'Home', href: '/' },
  { label: 'Projects', href: '/projects' },
  { label: 'About Us', href: '/about' },
  { label: 'Our Values', href: '/about#values' },
  { label: 'Contact', href: '/#contact' },
]

/* ---------------------------------- Home — Page 1 ---------------- */

export const HERO = {
  eyebrow: 'Est. 1994 | Mumbai & Thane',
  titleLines: ['A Legacy', 'In Every Detail.'],
  accentIndex: 0,
  body: '30+ years of building spaces with permanence, character and purpose.',
  primary: { label: 'Our Story', href: '/about' },
  secondary: { label: 'View Projects', href: '/projects' },
  image: '/projects/premia-bc-2.jpg',
}

/* Page 2 — headline figures exactly as the client states them. */
export const HERO_STATS = [
  { value: 30, suffix: '+', label: 'Years' },
  { value: 14, suffix: '', label: 'Projects Delivered' },
  { value: 13.6, suffix: 'L+', label: 'Sq. Ft. Delivered', decimals: 1 },
  { value: 2300, suffix: '+', label: 'Homes Created' },
]

/* ---------------------------------- Developments — Page 2 -------- */

export const DEVELOPMENTS = {
  eyebrow: 'Our Developments',
  title: ['A selection of our work.', 'In the right places.'],
  body:
    'From established neighbourhoods to Mumbai’s most promising addresses, our developments are built around the value of location.',
  /* The locality band, in the client's order. */
  marquee: ['Mulund', 'Chembur', 'Borivali', 'Malad', 'Andheri', 'Khar', 'Bandra'],
}

/* ---------------------------------- About — Page 3 --------------- */

export const ABOUT = {
  eyebrow: 'About Arham Realty',
  title: ['30 Years.', 'Still Building.'],
  paras: [
    '30+ years have taught us that exceptional development is not about building more. It is about building better with thought, discipline and a long-term view.',
    'From our first development to the homes we create today, every chapter has been shaped by experience, trust and a commitment to building better.',
  ],
}

/** "A legacy, built over time, in process." — the five chapters on the home page. */
export const LEGACY = {
  eyebrow: 'A legacy, built over time, in process.',
  body:
    'From our earliest developments in 1994 to the addresses we are shaping today, every chapter reflects a deeper understanding of place, people and permanence.',
  chapters: [
    {
      kicker: 'The Foundation',
      era: '1994 – 2002',
      title: 'From Nalasopara to Mulund and Mira Road',
      body: [
        'Vardhaman Park, Sai Dhara, Jesal Apartment, Toral Apartment and Pooja Park marked the beginning, establishing a foundation built on thoughtful development, enduring relationships and a commitment to quality.',
      ],
      image: '/Sketch/Vardaman Park1 - Sketch - Final.png',
    },
    {
      kicker: 'Into Mumbai',
      era: '2000 – 2008',
      title: 'From Worli to Bandra, Khar and Santacruz',
      body: [
        'With Shubhda Tower, Akhand Aabhar, Shailesh Apartment and Blossom, our footprint extended into some of Mumbai’s most established neighbourhoods, bringing with it greater scale and a more refined approach to development.',
      ],
      image: '/projects/shubhda-tower.jpg',
    },
    {
      kicker: 'A Wider Footprint',
      era: '2010 – 2018',
      title: 'Chembur and Ghatkopar',
      body: [
        'Dakshata CHSL and Pramod CHSL marked a new chapter of considered development across Mumbai’s evolving residential landscape, with an increasingly refined approach to design, planning and the way people live.',
      ],
      image: '/projects/dakshata-chsl.jpg',
    },
    {
      kicker: 'A New Standard',
      era: '2018 – 2026',
      title: 'Andheri to Chembur',
      body: [
        'Anvaya and Premia marked the next chapter of our evolution, bringing together contemporary design, thoughtful amenities and strategically chosen locations.',
        'With Premia Tower B & C now shaping the future of Tilak Nagar, the journey continues with greater ambition and a sharper vision.',
      ],
      image: '/projects/premia-a-1.jpg',
    },
    {
      kicker: 'The Next Horizon',
      era: '2027 Onwards',
      title: 'Building for what comes next.',
      body: [
        'With over three decades of experience behind us, we look ahead with the same discipline that shaped our journey, pursuing distinctive locations, thoughtful design and developments created to hold their value for generations.',
      ],
      image: '/projects/premia-bc-1.jpg',
    },
  ],
  closing: ['30+ years behind us.', 'The next chapter ahead.'],
}


/** "Our Story" on the home page. */
export const STORY = {
  eyebrow: 'Our Story',
  title: ['From a first home', 'to a growing city story.'],
  lead:
    'The journey began in Nalasopara in 1994. What followed was a steady move across neighbourhoods, generations and increasingly complex forms of development.',
  paras: [
    {
      lead: 'A Beginning in Nalasopara:',
      text: 'Vardhaman Park marked the beginning of our promoter’s real estate journey, a 46,000 sq. ft. development started in 1994 and was completed in 1996.',
    },
    {
      text: 'The years that followed took us through Nalasopara, Bhayandar, Mulund and the western suburbs, building homes in neighbourhoods that were themselves growing and changing.',
    },
    {
      lead: 'Finding Our Place in Mumbai,',
      text: 'By the early 2000s, the journey had reached established Mumbai addresses across Kandivali, Worli, Bandra, Khar and Santacruz. Each location brought its own character and challenges, from dense residential precincts to some of the city’s more prominent addresses.',
    },
    {
      text: 'These projects gradually expanded our experience while keeping the focus close to the people and communities we were building for.',
    },
    {
      lead: 'A New Chapter in Redevelopment:',
      text: 'The following decade brought a deeper involvement in redevelopment, with projects such as Dakshata CHSL in Chembur and Pramod CHSL in Ghatkopar East.',
    },
    {
      text: 'Today, that experience continues through projects across Chembur, Andheri East and other established neighbourhoods, alongside a growing pipeline for the years ahead.',
    },
    {
      text: 'The journey has moved forward, but the intent remains familiar to understand the place, respect the people and build something that belongs there.',
    },
  ],
}

/* ---------------------------------- Why Arham — Page 4 ----------- */

export const VALUES_HEADER = {
  eyebrow: 'Why Arham?',
  title: ['The values we', 'build on'],
  body: 'The principles have shaped every project since 1994;',
  // lines: ['How we design,', 'How we build, and', 'How we stand behind every home we hand over.'],
}

/* Icons are the ones embedded in the client's document (doc p.4). */
export const VALUES = [
  {
    n: '01',
    kicker: 'Crafting Standards',
    title: 'Quality',
    icon: '/brand/values/quality.svg',
    body:
      'Superior construction and design that stands the test of time, utilizing premium materials and meticulous execution.',
  },
  {
    n: '02',
    kicker: 'Ethical Foundation',
    title: 'Integrity',
    icon: '/brand/values/integrity.svg',
    body:
      'Honestly, absolute transparency, and ethical practices in everything we do, establishing over three decades of homeowner trust.',
  },
  {
    n: '03',
    kicker: 'Future Ready Design',
    title: 'Innovation',
    icon: '/brand/values/innovation.svg',
    body:
      'Implementing progressive architectural ideas and technology to engineer functional, elegant living experiences.',
  },
  {
    n: '04',
    kicker: 'Green Compass',
    title: 'Sustainability',
    icon: '/brand/values/sustainability.svg',
    body:
      'Building responsibility for a greener tomorrow, integrating eco-friendly designs and efficient resources for future generation.',
  },
]

export const MISSION = {
  label: 'Our Mission',
  headline: 'Redefining Mumbai’s residential landscape with excellence, integrity and innovation.',
  body:
    'Since 1994, We build spaces that exceed expectations with thoughtful planning, well-chosen locations, premium craftsmanship, and absolute transparency, nurturing vibrant communities where families thrive.',
}

export const VISION = {
  label: 'Our Vision',
  headline: 'To be Mumbai’s most trusted real estate developers, shaping iconic skyline landmarks.',
  body:
    'Known for creating sustainable, future ready spaces and enriching communities for generations to come. We aim to revolutionise urban living through visionary, community centric designs to enrich the lives of generations that excel the test of time.',
}

/* ---------------------------------- Footprint — Page 5 ----------- */

export const FOOTPRINT = {
  index: 'Geographical network',
  title: ['Our Footprint Across', 'Mumbai & Thane'],
  body:
    'Since 1994 we have built across Mumbai and Thane, uniting progressive architecture with structural reliability. Here is where you will find us.',
  caption: ['Landmarks Built on', 'Precision & Spatial Impact'],
}

/* Figures as the client states them. */
export const FOOTPRINT_STATS = [
  { value: 13.6, suffix: 'L+', label: 'Sq. Ft. Delivered', decimals: 1 },
  { value: 2.4, suffix: 'L+', label: 'Sq. Ft. Under Construction', decimals: 1 },
  { value: 29.5, suffix: 'L+', label: 'Sq. Ft. Upcoming', decimals: 1 },
  { value: 20, suffix: '+', label: 'Projects from 1994 to 2032' },
]

export interface Cluster {
  region: string
  count: number
  entries: { slug: string; name: string; status: ProjectStatus }[]
}

/* Localities grouped into the five corridors the client lists. Derived
   from the catalogue so a project can never be on the map but missing
   from the list. Brahma Niwas at Mulund East is not in the client's
   grouping; it sits with the eastern-suburb cluster here. */
const REGION_OF: Record<string, string> = {
  'Tilak Nagar, Chembur': 'Chembur, Ghatkopar & Bhandup',
  'Rajawadi, Ghatkopar East': 'Chembur, Ghatkopar & Bhandup',
  'Veer Savarkar Road, Bhandup East': 'Chembur, Ghatkopar & Bhandup',
  'MHADA Colony, Mulund East': 'Chembur, Ghatkopar & Bhandup',
  'Sahar Village, Andheri East': 'Andheri, Kandivali, Borivali & Malad',
  'Mathuradas Road, Kandivali West': 'Andheri, Kandivali, Borivali & Malad',
  'Haji Bapu Road, off Jitendra Road, Malad East': 'Andheri, Kandivali, Borivali & Malad',
  'Link Road, Borivali West': 'Andheri, Kandivali, Borivali & Malad',
  'Carter Road, Borivali East': 'Andheri, Kandivali, Borivali & Malad',
  'Guru Gangeshwar Marg, Khar West': 'Bandra, Khar & Santacruz',
  'Dr. Ambedkar Road, Bandra West': 'Bandra, Khar & Santacruz',
  'S.V. Road, Santacruz West': 'Bandra, Khar & Santacruz',
  'Nargis Dutt Road, Pali Hill': 'Bandra, Khar & Santacruz',
  'Mira Bhayandar Road, Mira Road East': 'Mira Road, Bhayandar & Nalasopara',
  'Kharegaon, Bhayander East': 'Mira Road, Bhayandar & Nalasopara',
  'Achole Road, Nalasopara East': 'Mira Road, Bhayandar & Nalasopara',
  'Tulinj Road, Nalasopara East': 'Mira Road, Bhayandar & Nalasopara',
  'Dr. Ambedkar Road, Worli': 'Worli',
  'Jacob Circle': 'Worli',
}

const REGION_ORDER = [
  'Chembur, Ghatkopar & Bhandup',
  'Andheri, Kandivali, Borivali & Malad',
  'Bandra, Khar & Santacruz',
  'Mira Road, Bhayandar & Nalasopara',
  'Worli',
]

export const CLUSTERS: Cluster[] = REGION_ORDER.map((region) => {
  const entries = PROJECTS.filter((p) => REGION_OF[p.location] === region).map((p) => ({
    slug: p.slug,
    name: p.listName,
    status: p.status,
  }))
  return { region, count: entries.length, entries }
})

/* Flat pin list for the map. Same source as CLUSTERS. */
export interface Pin {
  slug: string
  name: string
  location: string
  status: ProjectStatus
  region: string
  coords: [number, number]
  href: string
}

export const FOOTPRINT_PINS: Pin[] = PROJECTS.map((p) => ({
  slug: p.slug,
  name: p.listName,
  location: p.location,
  status: p.status,
  region: REGION_OF[p.location] ?? 'Mumbai & Thane',
  coords: p.coords,
  href: `/projects/${p.slug}`,
}))

/* ---------------------------------- About page — Pages 6 to 9 ---- */

export const ABOUT_PAGE = {
  eyebrow: 'About Arham Realty',
  title: ['Over thirty years of', 'building Mumbai & Thane'],
  intro: [
    'Born from a vision to redefine urban living, Arham Realty stands as a symbol of progressive infrastructure, architectural precision, and timeless value.',
    'With a commitment to shaping the evolving skyline of Mumbai, Arham Realty develops premium residential and commercial spaces that blend modern design, functionality, and sustainable growth.',
    'Driven by excellence and rooted in integrity, the brand continuously pushes boundaries in construction quality, design intelligence, and customer experience.',
    'Every project reflects the spirit of Mumbai itself: ambitious, dynamic, and constantly evolving.',
  ],
  story: {
    eyebrow: 'Our Story',
    title: ['From Nalasopara', 'to Mumbai’s island city'],
    columns: [
      {
        lead: 'The journey began in 1994 with Vardhaman Park at Nalasopara East, a 46,000 sq. ft. development completed and handed over within two years.',
        text: 'The years that followed saw a growing presence across Nalasopara, Mira Road, Bhayander and Kandivali, building communities alongside Mumbai’s expanding suburbs.',
      },
      {
        lead: 'The move into Mumbai brought a new scale of development. Shubhda Tower in Worli, completed in 2005, marked a significant milestone at 4 Lakh sq. ft., our largest completed project at the time.',
        text: 'Developments across Bandra, Khar and Santacruz followed, establishing a presence across some of Mumbai’s most sought-after neighbourhoods.',
      },
      {
        lead: 'The years since have been defined by redevelopment and a more considered approach to urban living.',
        text: 'From Dakshata in Chembur and Pramod in Ghatkopar to Premia in Tilak Nagar and Anvaya in Andheri, each development reflects an evolving understanding of location, design and the needs of modern Mumbai.',
      },
    ],
    tagline: '30+ Years · 17 Developments · Mumbai & Thane',
    taglineSub: 'From our first 46,000 sq. ft. development to our next generation of addresses.',
  },
  milestones: {
    eyebrow: 'Milestones',
    title: ['Three and a half decades,', '5 chapters'],
  },
  leadership: {
    eyebrow: 'Our Leadership',
  },
}

/** Milestones on the About page (doc p.8). Distinct copy from the home-page LEGACY chapters. */
export const TIMELINE = [
  {
    era: '1994',
    kicker: 'Beginning',
    title: 'Founded in 1994',
    body: [
      'Established in Nalasopara at Vardhaman Park, having our first development of 46,000 sq. ft., it was a modest beginning with a plan to build quality & dependable homes for families.',
    ],
    image: '/Sketch/Vardaman Park1 - Sketch - Final.png',
  },
  {
    era: '2000s',
    kicker: 'Into the island city',
    title: 'A Presence in Mumbai',
    body: [
      'The practice moved into South Mumbai and Western Suburbs, with developments in Worli, Bandra, Khar and Santacruz. Shubhda Tower, completed in 2005, marked a significant step up in scale at 4 Lakh sq. ft.',
    ],
    image: '/projects/shubhda-tower.jpg',
  },
  {
    era: '2010s',
    kicker: 'Redevelopment at scale',
    title: 'Building Across Mumbai',
    body: [
      'With Dakshata in Chembur and Pramod in Ghatkopar, our work established as a dependable redevelopment partner for housing societies rooted in central suburbs.',
    ],
    image: '/projects/dakshata-chsl.jpg',
  },
  {
    era: '2020s',
    kicker: 'A landmark address',
    title: 'A New Perspective',
    body: [
      'Anvaya in Andheri East reflects how our approach has evolved with the city combining connectivity, considered design and spaces made for modern living.',
      'Premia Tower ‘A’ was finished in 2023, a residential tower with premium finishes and excellent connectivity.',
      'Tower ‘B’ & ‘C’ are now underway on the same estate.',
    ],
    image: '/projects/premia-a-1.jpg',
  },
  {
    era: '2027',
    kicker: 'What comes next',
    title: 'The Next Horizon',
    body: [
      'A growing pipeline across Bandra West, Borivali East, Malad East and Bhandup East carries over three decades of experience into the next skyline with the same intent to build thoughtfully, and build for generations.',
    ],
    image: '/projects/premia-bc-1.jpg',
  },
]

export const LEADERSHIP = [
  {
    heading: ['From building materials to', 'building addresses.'],
    accentIndex: 1,
    name: 'Mr. Sanjay Hirji Savla',
    role: 'Promoter / Managing Director',
    paras: [
      'Beginning in 1982 in construction materials and logistics before entering Mumbai and Thane real estate in 1994, Mr. Sanjay Savla has shaped a three-decade legacy guided by location discipline, thoughtful planning, and enduring value across Mumbai and the MMR region.',
    ],
    quote: '“Three decades of experience, one enduring philosophy — build thoughtfully and build to endure.”',
  },
  {
    heading: ['A new perspective', 'on what we build'],
    accentIndex: 0,
    name: 'Mr. Karan Sanjay Savla',
    role: 'Co-Promoter / Chief Executive Officer',
    paras: [
      'Representing the next generation, Mr. Karan Savla combines Civil Engineering, an MBA.Tech from NMIMS, and an MSc in Real Estate Development from Westminster, London. Since joining in 2022, he leads day-to-day operations, sales, marketing, and strategic growth.',
    ],
    quote: '“Grounded in experience. Looking ahead with a new perspective.”',
  },
  {
    heading: ['A legacy of trust', 'behind the numbers'],
    accentIndex: 0,
    name: 'Mr. Prakash Shivji Visaria',
    role: 'Non-Executive Director',
    paras: [
      'Associated with the leadership since 1992, Mr. Prakash Visaria brings over three decades of continuity to group company boards, while overseeing day-to-day administration, operations, and vendor coordination.',
    ],
    quote: '“Over Three decades of trust. Experience that continues forward.”',
  },
  {
    heading: ['A legacy of knowledge', 'that continues to inspire'],
    accentIndex: 0,
    name: 'Mr. Purshottam Gobindram Bansi',
    role: 'Mentor',
    paras: [
      'A 1958 VJTI graduate, former BAI Chairman (1991–92), Chartered Engineer, and marine engineering contractor with over 40 years of experience, Mr. Purshottam Bansi provided foundational mentorship guiding generations of leadership.',
    ],
    quote: '“A lifetime spent building knowledge, an influence carried across generations.”',
  },
]

/* ---------------------------------- Projects page — Page 10 ------ */

export const PORTFOLIO = {
  eyebrow: 'Portfolio – 1994 to 2032',
  title: ['Every address.'],
  body:
    'What began with a 46,000 sq. ft. development in Nalasopara in 1994 has grown into a portfolio of 20 projects across Mumbai and Thane, culminating in opportunities as significant as a 17.5 Lakh sq. ft. development at Bhandup East.',
  /* The client captions only the ongoing group; the others carry none. */
  captions: {
    Ongoing: 'Ongoing – 2018 to 2027',
  } as Partial<Record<ProjectStatus, string>>,
}

/* ---------------------------------- Contact — Page 11 ------------ */

export interface ContactDetail {
  label: string
  lines?: string[]
  links?: { label: string; href: string }[]
}

export const CONTACT = {
  eyebrow: 'Get in Touch',
  title: [{ text: 'Let’s', accent: 'talk' }],
  sub: 'Reach the Arham team',
  body: [
    'Our team responds to every enquiry personally.',
    'Visit us, call or send us a note and we’ll be in touch about 15 working days.',
  ],
  details: [
    {
      label: 'Office',
      lines: [
        'Office No.6&7, 1st Floor, Shantinath Shopping Centre,',
        'SV Road, Malad West, Mumbai, Maharashtra, India - 400 064.',
      ],
    },
    {
      label: 'Phone',
      links: [
        { label: '022-49707727', href: 'tel:+912249707727' },
        { label: '+91 9819091599', href: 'tel:+919819091599' },
      ],
    },
    {
      label: 'E-Mail',
      links: [
        { label: 'arhamlanddevelopers@gmail.com', href: 'mailto:arhamlanddevelopers@gmail.com' },
        { label: 'karansavla@arhamlanddeveloper.com', href: 'mailto:karansavla@arhamlanddeveloper.com' },
        { label: 'sanjaysavla@arhamlanddeveloper.com', href: 'mailto:sanjaysavla@arhamlanddeveloper.com' },
      ],
    },
    { label: 'Hours', lines: ['Mon to Sat – 10:00 AM to 7:00 PM'] },
  ] as ContactDetail[],
  form: {
    title: 'Send Us An Enquiry',
    body: 'Tell us what you’re looking for and we’ll match you to the right project.',
    /* The project list is the catalogue itself, ongoing first, plus a general option. */
    interests: [
      ...PROJECTS.filter((p) => p.status !== 'Completed').map((p) =>
        p.nameWithheld ? `Upcoming at ${p.name}` : `${p.name}, ${p.locality}`,
      ),
      'General Enquiry',
    ],
    configurations: ['Any', '1 RK', '1 BHK', '2 BHK', '3 BHK', 'Retail'],
    messagePlaceholder: 'Tell us what you’re looking for…',
    consent: 'I agree to receive updates and communications from Arham Realty.',
    submit: 'Submit Enquiry',
    done: {
      title: 'Enquiry received',
      body: 'Thank you. Our team will be in touch about 15 working days.',
    },
  },
}

/* ---------------------------------- Legacy CTA + footer — Page 12 */

export const CTA = {
  eyebrow: 'Arham Realty Legacy',
  title: ['Shaping Mumbai’s skyline,', 'one landmark', 'at a time.'],
  action: 'Get in Touch',
}

export const FOOTER = {
  projects: [
    { label: 'Premia Tower ‘B’ & ‘C’', href: '/projects/premia-towers-b-c' },
    { label: 'Anvaya', href: '/projects/anvaya' },
    { label: 'All Projects', href: '/projects' },
  ],
  address: 'Office No.6&7, 1st Floor, Shantinath Shopping Centre, SV Road, Malad West, Mumbai, Maharashtra, India - 400 064.',
  legal: [
    { label: 'Disclaimer & Terms of Use', href: '/legal/disclaimer' },
    { label: 'Privacy Policy', href: '/legal/privacy' },
    { label: 'Cookie Preferences', href: '#cookies' },
  ],
  copyright: '© 2026 Arham Realty. All Rights Reserved.',
}
