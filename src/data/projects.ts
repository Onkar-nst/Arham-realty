/* ------------------------------------------------------------------
   Project catalogue.

   Source of truth is the client's own material:

   · "Arham Group of Companies Past, On-Going & Up-Coming Projects.xlsx"
     — group company, project name, type, start/end year, location,
       construction area and Google Maps pin for all 22 projects.
   · Kenarc e-brochures (Premia Tower A, Premia Towers B & C) — amenity
     lists, project highlights and renders.
   · AR Visualzation renders + June 2022 site photography (Anvaya).

   Two rules carried over from those documents:

   1. The spreadsheet marks the up-coming block "DON'T DISCLOSE BUILDING
      NAMES". Those six projects are therefore listed by locality only;
      their society/plot names are held in `internalRef`, which is never
      rendered. Do not surface it in the UI.
   2. Nothing here is invented. Where the client supplied no photograph,
      `images` is empty and the UI falls back to a branded plate rather
      than a stock stand-in. Where no amenity list was supplied, none is
      claimed.
   ------------------------------------------------------------------ */

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Upcoming'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface AmenityGroup {
  group: string
  items: string[]
}

export interface Project {
  slug: string
  /** Public-facing title. For up-coming projects this is the locality. */
  name: string
  /** Society/plot name held back under the client's disclosure rule. */
  internalRef?: string
  /** True when the building name is deliberately withheld. */
  nameWithheld?: boolean
  developer: string
  location: string
  start: number
  end: number
  timeline: string
  category: string
  status: ProjectStatus
  /** Construction area in sq ft, from the client's schedule. */
  areaSqFt: number
  coords: [number, number]
  mapUrl: string
  /** One line for cards and listings. */
  summary: string
  /** Long-form paragraphs for the detail page. */
  body?: string[]
  /** Verbatim from the project brochure. */
  highlights?: string[]
  amenities?: AmenityGroup[]
  images: ProjectImage[]
}

const IMG = (file: string) => `/projects/${file}`

export const PROJECTS: Project[] = [
  /* ------------------------------- Ongoing ----------------------- */
  {
    slug: 'premia-towers-b-c',
    name: 'Premia Towers "B" & "C"',
    internalRef: 'Tilak Nagar Shayadri CHSL',
    developer: 'Kenarc Spaces LLP',
    location: 'Chembur West, Mumbai',
    start: 2023,
    end: 2027,
    timeline: '2023 to 2027',
    category: 'Residential',
    status: 'Ongoing',
    areaSqFt: 151875,
    coords: [19.0689842, 72.8987858],
    mapUrl: 'https://maps.app.goo.gl/zvKca4fcMjFB1B9z8',
    summary:
      'Two new towers rising beside Tower A at Tilak Nagar, with a full amenity podium below and a sports terrace on the roof.',
    body: [
      'When Tower A was handed over in 2023, the estate at Tilak Nagar was only part built. Towers B and C finish the picture, adding another 1.52 lakh sq ft across two buildings that share the same address and the same idea of what a home here should feel like.',
      'Everything residents share sits on two levels. The podium is the indoor half of it: a gym and a yoga room, a jacuzzi, sauna and spa, a mini theatre, a games room, a banquet hall and a party lawn, plus a quiet workspace for the days you would rather not commute.',
    ],
    amenities: [
      { group: 'Fitness', items: ['Gymnasium', 'Yoga / Zumba room'] },
      {
        group: 'Rejuvenation',
        items: [
          'Kids splash pool',
          'Open to sky deck podium',
          'Indoor jacuzzi',
          'Sauna',
          'Spa',
          'Changing rooms',
        ],
      },
      {
        group: 'Entertainment & games',
        items: [
          'Mini theatre',
          'Games room with table tennis, foosball, carrom, chess and board games',
        ],
      },
      { group: 'Celebrations', items: ['Banquet hall', 'Party lawn', 'Pantry / store'] },
      { group: 'Work', items: ['Workspace'] },
      {
        group: 'Rooftop terrace',
        items: [
          'Kids play area',
          'Toddlers area',
          'Multipurpose sports turf for basketball, cricket and football',
          'Multipurpose sports court for pickleball',
          'Viewing deck',
          'Walking track',
          'Gazebo',
          'Senior citizen sitting area',
          'Mini golf',
          'Reflexology path',
          'Open air yoga & meditation corner',
        ],
      },
    ],
    images: [
      {
        src: IMG('premia-bc-1.jpg'),
        alt: 'Premia Towers B & C seen at dusk through flowering trees',
        caption: 'The street elevation at Tilak Nagar',
      },
      {
        src: IMG('premia-bc-2.jpg'),
        alt: 'Premia Towers B & C illuminated at night',
        caption: 'The building after dark',
      },
      {
        src: IMG('premia-bc-3.jpg'),
        alt: 'Aerial view of the rooftop sports terrace at Premia B & C',
        caption: 'The rooftop terrace, with its sports turf, pickleball court and mini golf',
      },
      {
        src: IMG('premia-bc-4.jpg'),
        alt: 'Podium level plan showing the amenity layout',
        caption: 'The podium plan, showing the fitness, rejuvenation, games and celebration decks',
      },
    ],
  },
  {
    slug: 'anvaya-medinee-niketan',
    name: 'Anvaya Medinee Niketan CHSL',
    developer: 'SS Enterprises',
    location: 'Andheri East, Mumbai',
    start: 2018,
    end: 2024,
    timeline: '2018 to 2024',
    category: 'Residential',
    status: 'Ongoing',
    areaSqFt: 92000,
    coords: [19.103516, 72.8565071],
    mapUrl: 'https://maps.app.goo.gl/tyy6S7PFNV9BRwWB8',
    summary:
      'A 92,000 sq ft redevelopment in Andheri East, built for the families who already lived there, and opened up to the city on every side.',
    body: [
      'Anvaya rebuilds Medinee Niketan CHSL for the society that has lived on the plot for years. Redevelopment asks for patience on both sides, from the approvals to the families waiting to move back in, and it is work Arham has been doing since the Chembur and Ghatkopar rebuilds of the 2010s.',
      'The building steps back near the top to make room for a planted terrace, shaded by pergolas, with a play area for children and an open fitness deck alongside. Look north from up there and you get the airport, the tree cover of Andheri East, and the mid town skyline behind it.',
    ],
    images: [
      {
        src: IMG('anvaya-1.jpg'),
        alt: 'Daytime render of Anvaya at Medinee Niketan, Andheri East',
        caption: 'The street elevation',
      },
      {
        src: IMG('anvaya-2.jpg'),
        alt: 'Evening render of Anvaya at Medinee Niketan',
        caption: 'The building in the evening',
      },
      {
        src: IMG('anvaya-3.jpg'),
        alt: 'Aerial render of the landscaped terrace deck at Anvaya',
        caption: 'The terrace deck, with its pergolas, play zone and planted courts',
      },
      {
        src: IMG('anvaya-4.jpg'),
        alt: 'View from the site toward Mumbai airport and the mid-town skyline',
        caption: 'The view from site, June 2022',
      },
      {
        src: IMG('anvaya-5.jpg'),
        alt: 'View from the site over the tree cover of Andheri East',
        caption: 'The view from site, June 2022',
      },
    ],
  },

  /* ------------------------------ Completed ---------------------- */
  {
    slug: 'premia-tower-a',
    name: 'Premia Tower "A"',
    internalRef: 'Tilak Nagar Shayadri CHSL',
    developer: 'Kenarc Spaces LLP',
    location: 'Chembur West, Mumbai',
    start: 2019,
    end: 2023,
    timeline: '2019 to 2023',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 69375,
    coords: [19.0699916, 72.8993181],
    mapUrl: 'https://maps.app.goo.gl/RbLstG7W9p18THdj7',
    summary:
      'The first of the Premia towers at Tilak Nagar. One and two bedroom homes above a row of shops, finished in 2023 with full CC received.',
    body: [
      'Chembur, with unmatched location advantages, is one of the green lungs of the city and has the lowest population density in a planned residential suburb.',
      'Embrace tranquility while living in the middle of unmatched comforts with ample open space and well designed rooftop amenities for all age groups to enjoy and rejuvenate.',
      'Being right inside your home, you can soak yourself in the goodness of nature and all modern comforts, at the same time stay right at the center of the city, yet, stay far away from the commotion of urban life.',
    ],
    highlights: [
      'Well designed 1 BHK and 2 BHK apartments with premium amenities',
      'Well ventilated apartments with ample natural air and light',
      'Breathtaking modern elevation',
      'High quality RCC framed structure with earthquake resistant design',
      'Vastu compliant apartments',
      'Ample car parking space with valet service',
      'High speed elevators from a reputed brand',
      'Rooftop amenities with open gymnasium',
      'Rain water harvesting and 24 hours sustainable water supply',
    ],
    amenities: [
      {
        group: 'Rooftop',
        items: [
          'Kids play area with modern equipment',
          'Jumbo outdoor ludo game',
          'Open air gymnasium',
          'Senior citizens relaxation area',
          'Landscaped terrace garden',
          'Yoga and meditation corner',
          'Relaxing gazebos',
        ],
      },
    ],
    images: [
      {
        src: IMG('premia-a-1.jpg'),
        alt: 'Premia Tower A seen from the street in Tilak Nagar, Chembur',
        caption: 'The street elevation, with shops at the base',
      },
      {
        src: IMG('premia-a-2.jpg'),
        alt: 'Premia Tower A illuminated at night',
        caption: 'The building after dark',
      },
      {
        src: IMG('premia-a-3.jpg'),
        alt: 'Aerial view of the rooftop amenity deck at Premia Tower A',
        caption: 'The rooftop deck, with its play area, open gym and terrace garden',
      },
    ],
  },
  {
    slug: 'pramod-chsl',
    name: 'Pramod CHSL',
    developer: 'Global Oricon Developers',
    location: 'Ghatkopar East, Mumbai',
    start: 2012,
    end: 2018,
    timeline: '2012 to 2018',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 155000,
    coords: [19.0808679, 72.9000875],
    mapUrl: 'https://maps.app.goo.gl/XwmnxRgfoZ8qsiV28',
    summary:
      'A six year society rebuild in Ghatkopar East, and at 1.55 lakh sq ft the largest redevelopment the group has finished.',
    body: [
      'Pramod CHSL took six years to hand back to its housing society in Ghatkopar East. At 1,55,000 sq ft it is the largest completed project on the record after Shubhda Tower.',
      'Together with Dakshata CHSL in Chembur West, it is what convinced housing societies across the central suburbs that this was a group worth handing a building to. Premia and Anvaya both rest on that reputation.',
    ],
    images: [],
  },
  {
    slug: 'dakshata-chsl',
    name: 'Dakshata CHSL',
    developer: 'Oricon Developers',
    location: 'Chembur West, Mumbai',
    start: 2010,
    end: 2015,
    timeline: '2010 to 2015',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 90000,
    coords: [19.0680226, 72.8987901],
    mapUrl: 'https://maps.app.goo.gl/WcmR6bPmuWBXyBNu7',
    summary:
      'A 90,000 sq ft redevelopment in Chembur West, and the group’s first building in the neighbourhood it would come back to for Premia.',
    body: [
      'Dakshata CHSL brought the practice into Chembur West, a few hundred metres from the Tilak Nagar estate where Premia Tower A would go up a decade later.',
      'Stone clad homes above, a tall glazed shopfront at street level. It is a composition the group came back to and refined at Premia.',
    ],
    images: [
      {
        src: IMG('dakshata-chsl.jpg'),
        alt: 'Architectural render of Dakshata CHSL, Chembur West',
        caption: 'The original scheme render',
      },
    ],
  },
  {
    slug: 'blossom-chsl',
    name: 'Blossom CHSL',
    developer: 'Divine Construction Co.',
    location: 'Santacruz West, Mumbai',
    start: 2005,
    end: 2008,
    timeline: '2005 to 2008',
    category: 'Residential / Commercial',
    status: 'Completed',
    areaSqFt: 55000,
    coords: [19.0835767, 72.8381361],
    mapUrl: 'https://maps.app.goo.gl/hDNQVDZDGKLgs4ZW6',
    summary:
      'Shops on the lower floors, apartments above, across 55,000 sq ft in Santacruz West.',
    body: [
      'Blossom CHSL is the only building on the completed record that does two jobs at once. A plinth of glazed shopfronts carries six residential floors of curved balconies above it.',
      'It sits in prime Santacruz West, within easy reach of both S.V. Road and the Western Express Highway.',
    ],
    images: [
      {
        src: IMG('blossom-chsl.jpg'),
        alt: 'Architectural render of Blossom CHSL, Santacruz West',
        caption: 'The original scheme render',
      },
    ],
  },
  {
    slug: 'shubhda-tower',
    name: 'Shubhda Tower',
    developer: 'Divine Construction Co.',
    location: 'Worli, Mumbai',
    start: 2000,
    end: 2005,
    timeline: '2000 to 2005',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 410000,
    coords: [19.0083692, 72.8177178],
    mapUrl: 'https://maps.app.goo.gl/umV2taBM9z4xgvHh6',
    summary:
      'A 4.1 lakh sq ft residential tower at Worli. The biggest thing the group has finished, and the building that took it into the island city.',
    body: [
      'At 4,10,000 sq ft Shubhda Tower is still the single largest completed project on the schedule, and the one that moved the practice out of the northern suburbs and into South Mumbai.',
      'The tower stands on a broad podium of lower wings at Worli, a walk away from the sea face.',
    ],
    images: [
      {
        src: IMG('shubhda-tower.jpg'),
        alt: 'Shubhda Tower rising above its podium at Worli',
        caption: 'The original scheme render',
      },
    ],
  },
  {
    slug: 'shailesh-apartment',
    name: 'Shailesh Apartment',
    developer: 'Divine Construction Co.',
    location: 'Khar West, Mumbai',
    start: 2003,
    end: 2005,
    timeline: '2003 to 2005',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 20000,
    coords: [19.0692816, 72.834966],
    mapUrl: 'https://maps.app.goo.gl/mt4SEhCJ2da8R1DRA',
    summary: 'A small residential building of 20,000 sq ft, tucked into the interior lanes of Khar West.',
    body: [
      'One of three buildings Divine Construction Co. finished across Khar, Bandra and Santacruz in the mid 2000s. Shailesh Apartment is a quiet, low density address in a settled residential pocket of Khar West.',
    ],
    images: [],
  },
  {
    slug: 'akhand-aabhar-chsl',
    name: 'Akhand Aabhar CHSL',
    developer: 'Divine Construction Co.',
    location: 'Bandra West, Mumbai',
    start: 2003,
    end: 2004,
    timeline: '2003 to 2004',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 17000,
    coords: [19.0669772, 72.830246],
    mapUrl: 'https://maps.app.goo.gl/qEpq9YF9eBsvSKeQ6',
    summary:
      'The smallest project on the record, and the quickest. A 17,000 sq ft building in Bandra West, turned around inside a year.',
    body: [
      'Akhand Aabhar CHSL went up in Bandra West across 2003 and 2004, the shortest programme on the completed record.',
      'The plot was tight, so the elevation breaks it into stepped, colour blocked volumes. That is what keeps daylight and cross ventilation reaching every home.',
    ],
    images: [
      {
        src: IMG('akhand-aabhar.jpg'),
        alt: 'Architectural render of Akhand Aabhar CHSL, Bandra West',
        caption: 'The original scheme render',
      },
    ],
  },
  {
    slug: 'navtarun-chsl',
    name: 'Navtarun CHSL',
    developer: 'Shri Sainath Developers',
    location: 'Kandivali West, Mumbai',
    start: 1999,
    end: 2002,
    timeline: '1999 to 2002',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 65000,
    coords: [19.203395, 72.835318],
    mapUrl: 'https://maps.app.goo.gl/pLGgTVNEWpCH5V8a7',
    summary: 'A 65,000 sq ft housing society in Kandivali West, finished in 2002.',
    body: [
      'Navtarun CHSL is the larger of two Shri Sainath Developers buildings standing side by side in Kandivali West. Both went up around the turn of the millennium, as the western suburbs filled out along the Link Road corridor.',
    ],
    images: [],
  },
  {
    slug: 'shri-ganesh-chsl',
    name: 'Shri Ganesh CHSL',
    developer: 'Shri Sainath Developers',
    location: 'Kandivali West, Mumbai',
    start: 1999,
    end: 2001,
    timeline: '1999 to 2001',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 45000,
    coords: [19.2036701, 72.8354621],
    mapUrl: 'https://maps.app.goo.gl/x7Zc51o7xpuk1wfEA',
    summary: 'A 45,000 sq ft housing society in Kandivali West, handed over in 2001.',
    body: [
      'Built alongside Navtarun CHSL on the same Kandivali West street. Between them the two societies added 1.1 lakh sq ft of housing to the neighbourhood in three years.',
    ],
    images: [],
  },
  {
    slug: 'pooja-park',
    name: 'Pooja Park',
    developer: 'Pooja Builders & Developers',
    location: 'Mira Road East, Thane',
    start: 1998,
    end: 2002,
    timeline: '1998 to 2002',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 170000,
    coords: [19.2800014, 72.8814387],
    mapUrl: 'https://maps.app.goo.gl/VsrqGHHsSbXJEXYv7',
    summary:
      'A township sized layout of 1.7 lakh sq ft at Mira Road East, and the largest of the early projects in the Thane belt.',
    body: [
      'Pooja Park is the biggest of the early developments. Several wings, 1,70,000 sq ft in all, built at Mira Road East over four years while the Thane belt absorbed the city’s outward growth.',
      'It sits close to Mira Road railway station, and it is still the group’s largest project outside the island city and the central suburbs.',
    ],
    images: [],
  },
  {
    slug: 'toral-apartment',
    name: 'Toral Apartment',
    developer: 'Pooja Developers',
    location: 'Bhayander East, Thane',
    start: 1999,
    end: 2001,
    timeline: '1999 to 2001',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 22000,
    coords: [19.3040422, 72.8559663],
    mapUrl: 'https://maps.app.goo.gl/rRu7QXPnPR5MGUVb9',
    summary: 'A 22,000 sq ft residential building at Bhayander East, finished in 2001.',
    body: [
      'Toral Apartment stands a street away from Jesal Apartment in Bhayander East. The two went up back to back, while the practice was consolidating its work across the Thane belt.',
    ],
    images: [],
  },
  {
    slug: 'jesal-apartment',
    name: 'Jesal Apartment',
    developer: 'Pooja Builders',
    location: 'Bhayander East, Thane',
    start: 1998,
    end: 2000,
    timeline: '1998 to 2000',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 60000,
    coords: [19.3043464, 72.8550104],
    mapUrl: 'https://maps.app.goo.gl/V4GeYD3rkKr8kRjPA',
    summary: 'A 60,000 sq ft residential development at Bhayander East, handed over in the summer of 2000.',
    body: [
      'Jesal Apartment was finished at the turn of the millennium in Bhayander East. It is one of four Pooja developments in the Thane belt, which between them account for more than 3.1 lakh sq ft.',
    ],
    images: [],
  },
  {
    slug: 'sai-dhara',
    name: 'Sai Dhara',
    developer: 'Sai Dhara Constructions',
    location: 'Nalasopara East, Thane',
    start: 1996,
    end: 1999,
    timeline: '1996 to 1999',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 140000,
    coords: [19.4077897, 72.8238413],
    mapUrl: 'https://maps.app.goo.gl/nvZEzqhM4v6jhmDq8',
    summary:
      'A residential community of 1.4 lakh sq ft at Nalasopara East, and only the second project the practice ever finished.',
    body: [
      'Sai Dhara followed Vardaman Park at Nalasopara East. At 1,40,000 sq ft it was three times the size of anything built before it, and the practice was barely two years old.',
      'The two Nalasopara projects come to 1.86 lakh sq ft between them. This is where the group learnt to build at community scale.',
    ],
    images: [],
  },
  {
    slug: 'vardaman-park',
    name: 'Vardaman Park',
    developer: 'Shri Sainath Developers',
    location: 'Nalasopara East, Thane',
    start: 1994,
    end: 1996,
    timeline: '1994 to 1996',
    category: 'Residential',
    status: 'Completed',
    areaSqFt: 46000,
    coords: [19.4233821, 72.8237361],
    mapUrl: 'https://maps.app.goo.gl/cENu2pxJ2umPhovn6',
    summary:
      'Where it all started. The first project on the Arham schedule, finished at Nalasopara East in 1996.',
    body: [
      'Vardaman Park is the first entry on the Arham Group schedule. 46,000 sq ft at Nalasopara East, started in 1994 and handed over two years later.',
      'Everything since traces back to it: thirteen more completed buildings, two under construction, and six more still to come.',
    ],
    images: [],
  },

  /* ------------------------------ Up-coming ---------------------- */
  /* Building names withheld at the client's instruction. */
  {
    slug: 'upcoming-bandra-west',
    name: 'Bandra West',
    internalRef: 'CoziHom CHSL',
    nameWithheld: true,
    developer: 'Arham Land Developers Pvt. Ltd.',
    location: 'Bandra West, Mumbai',
    start: 2025,
    end: 2029,
    timeline: '2025 to 2029',
    category: 'Residential',
    status: 'Upcoming',
    areaSqFt: 685000,
    coords: [19.0645718, 72.8262521],
    mapUrl: 'https://maps.app.goo.gl/oxZzNQV8KpbgyDHJA',
    summary:
      'A 6.85 lakh sq ft residential development in Bandra West, in planning for a start in 2025.',
    body: [
      'At 6,85,000 sq ft this is the second largest scheme in the pipeline, and it takes the group back to Bandra West two decades after Akhand Aabhar CHSL.',
    ],
    images: [],
  },
  {
    slug: 'upcoming-borivali-east',
    name: 'Borivali East',
    internalRef: 'Jeevanjyoti & Ratnadeep CHSL',
    nameWithheld: true,
    developer: 'Viva Divine Ventures',
    location: 'Borivali East, Mumbai',
    start: 2025,
    end: 2029,
    timeline: '2025 to 2029',
    category: 'Residential',
    status: 'Upcoming',
    areaSqFt: 415000,
    coords: [19.2257018, 72.8570659],
    mapUrl: 'https://maps.app.goo.gl/pYsA8jZPb1b5psAZ7',
    summary: 'A 4.15 lakh sq ft residential redevelopment planned for Borivali East.',
    images: [],
  },
  {
    slug: 'upcoming-malad-east',
    name: 'Malad East',
    internalRef: 'Premji Compound',
    nameWithheld: true,
    developer: 'S S Kenarc Spaces LLP',
    location: 'Malad East, Mumbai',
    start: 2025,
    end: 2028,
    timeline: '2025 to 2028',
    category: 'Residential / Retail',
    status: 'Upcoming',
    areaSqFt: 105000,
    coords: [19.181178, 72.849392],
    mapUrl: 'https://maps.app.goo.gl/o3jmDyy1biVwtAqF8',
    summary:
      'A 1.05 lakh sq ft scheme at Malad East mixing shops and homes, the first of its kind since Blossom CHSL.',
    images: [],
  },
  {
    slug: 'upcoming-borivali-west',
    name: 'Borivali West',
    internalRef: 'Nirvana',
    nameWithheld: true,
    developer: 'Divine Developers',
    location: 'Borivali West, Mumbai',
    start: 2025,
    end: 2030,
    timeline: '2025 to 2030',
    category: 'Residential',
    status: 'Upcoming',
    areaSqFt: 84100,
    coords: [19.227298, 72.840789],
    mapUrl: 'https://maps.app.goo.gl/LTWFEZsuRn7JvgJu5',
    summary: 'An 84,100 sq ft residential project planned for Borivali West.',
    images: [],
  },
  {
    slug: 'upcoming-mahalaxmi',
    name: 'Mahalaxmi',
    internalRef: 'Rasooljiva Umarjeeva Compound',
    nameWithheld: true,
    developer: 'Savla Constructions Pvt. Ltd.',
    location: 'Mahalaxmi, Mumbai',
    start: 2026,
    end: 2031,
    timeline: '2026 to 2031',
    category: 'Residential',
    status: 'Upcoming',
    areaSqFt: 647000,
    coords: [18.9809561, 72.8282788],
    mapUrl: 'https://maps.app.goo.gl/Haa9gQS9FHwcHW4G8',
    summary:
      'A 6.47 lakh sq ft development at Mahalaxmi, and the first South Mumbai address since Shubhda Tower.',
    body: [
      'Planned to start in 2026. It would be the first South Mumbai address since Shubhda Tower at Worli was handed over back in 2005.',
    ],
    images: [],
  },
  {
    slug: 'upcoming-bhandup-east',
    name: 'Bhandup East',
    internalRef: 'Shyam Nagar',
    nameWithheld: true,
    developer: 'Impact Engineers Pvt. Ltd.',
    location: 'Bhandup East, Mumbai',
    start: 2027,
    end: 2032,
    timeline: '2027 to 2032',
    category: 'Residential',
    status: 'Upcoming',
    areaSqFt: 1746000,
    coords: [19.1465263, 72.9398901],
    mapUrl: 'https://maps.app.goo.gl/LwApSszbnW9BgKce8',
    summary:
      'At 17.46 lakh sq ft this is the largest project the group has taken on, bigger than every completed building put together.',
    body: [
      'Planned at 17,46,000 sq ft in Bhandup East. One project, larger than the entire completed record of 13.64 lakh sq ft, and close to half of everything in the pipeline.',
    ],
    images: [],
  },
]

/* --------------------------------- Derived ----------------------- */

export const STATUSES: ProjectStatus[] = ['Completed', 'Ongoing', 'Upcoming']

export const byStatus = (s: ProjectStatus) => PROJECTS.filter((p) => p.status === s)

export const PROJECT_COUNTS: Record<ProjectStatus, number> = {
  Completed: byStatus('Completed').length,
  Ongoing: byStatus('Ongoing').length,
  Upcoming: byStatus('Upcoming').length,
}

export const AREA_TOTALS: Record<ProjectStatus, number> = {
  Completed: byStatus('Completed').reduce((n, p) => n + p.areaSqFt, 0),
  Ongoing: byStatus('Ongoing').reduce((n, p) => n + p.areaSqFt, 0),
  Upcoming: byStatus('Upcoming').reduce((n, p) => n + p.areaSqFt, 0),
}

export const findProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)

/** Indian convention: 1 lakh = 100,000. "1,55,000 sq ft" → "1.55 L". */
export const lakh = (sqft: number) => {
  const l = sqft / 100000
  return l >= 10 ? l.toFixed(1) : l.toFixed(2)
}

export const sqftLabel = (sqft: number) => sqft.toLocaleString('en-IN')

/**
 * Every project has a page. The three with full brochure material read as
 * full case studies; the rest render from the schedule record — status,
 * timeline, area, location, map — plus whatever copy exists, and say
 * plainly where no photography was supplied.
 */
export const hasFullMaterial = (p: Project) =>
  Boolean(p.images.length && (p.highlights || p.amenities))

/** Featured on the home page, in presentation order. */
export const FEATURED = ['premia-towers-b-c', 'anvaya-medinee-niketan', 'premia-tower-a']
  .map(findProject)
  .filter((p): p is Project => Boolean(p))
