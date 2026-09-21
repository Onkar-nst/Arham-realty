/* ------------------------------------------------------------------
   Project catalogue.

   Every word of copy in this file — blurbs, connectivity, amenities,
   neighbourhood notes, categories, configurations, areas and MahaRERA
   numbers — is taken verbatim from "ARHAM REALTY - WEB CONTENT -
   10.09.2026.docx", which the client has had verified by their lawyers.
   Do not reword it without going back to that document.

   What is NOT in that document and comes from the earlier project
   schedule ("Arham Group of Companies Past, On-Going & Up-Coming
   Projects.xlsx"): the map pins, Google Maps links, group company
   names (`developer`, held for reference and not rendered), the sq-ft
   figures used for sorting, and the photography.

   Two rules carried over from the client:

   1. The up-coming projects are listed by locality only — building
      names are withheld until statutory approvals come through. Their
      society/plot names are held in `internalRef`, which is never
      rendered. Do not surface it in the UI.
   2. Nothing here is invented. Where the client supplied no photograph,
      `images` is empty and the UI falls back to a branded plate rather
      than a stock stand-in.
   ------------------------------------------------------------------ */

export type ProjectStatus = 'Completed' | 'Ongoing' | 'Upcoming'

export interface ProjectImage {
  src: string
  alt: string
  caption?: string
}

export interface Project {
  slug: string
  /** Title on the project page and listing card. */
  name: string
  /** Name as it appears in the geographical-network list (e.g. with "CHSL"). */
  listName: string
  /** Name on the home-page feature card, where the client uses a slightly different form. */
  cardName?: string
  /** Locality line under the title. Up-coming projects carry the withheld-name note instead. */
  locality?: string
  /** True when the building name is deliberately withheld. */
  nameWithheld?: boolean
  /** Society/plot name held back under the client's disclosure rule. Never rendered. */
  internalRef?: string
  /** Group company from the schedule. Held for reference; not rendered. */
  developer: string
  status: ProjectStatus
  /** The bold introductory paragraph on the project page. */
  blurb: string
  /** Short line for feature cards and meta descriptions. */
  summary: string
  /** Amenity teaser on the home-page card, as the client wrote it. */
  cardAmenities?: string
  /** The "+ N More" tail on that teaser, also as the client wrote it. */
  cardMore?: string
  location: string
  category: string
  configuration?: string
  /** "2024 - 2027". Absent for up-coming projects, which carry no dates. */
  timeline?: string
  start: number
  end: number
  /** "1.5 L+ Sq. Ft." — the tentative construction area as the client states it. */
  areaLabel: string
  /** Sort key only. Not displayed. */
  areaSqFt: number
  rera?: string
  /** MahaRERA QR image, where the client has supplied one. */
  reraQr?: string
  connectivity: string[]
  /** A closing line under the connectivity list, where the client added one. */
  connectivityFootnote?: string
  amenities: string[]
  neighbourhood?: { title: string; paras: string[] }
  coords: [number, number]
  mapUrl: string
  images: ProjectImage[]
}

const IMG = (file: string) => `/projects/${file}`

/** Printed beneath every connectivity list. */
export const CONNECTIVITY_NOTE =
  '* Distances and travel times are approximate and subject to traffic and route conditions. Upcoming infrastructure is subject to statutory approvals, construction and commissioning timelines.'

/** Printed on every up-coming project. */
export const PRELAUNCH_NOTE =
  '*This project is at a pre-launch stage and is not yet registered with MahaRERA. No booking, sale or allotment can be made until registration.'

/** Heads the up-coming tab on the projects page. */
export const UPCOMING_NOTE = [
  'Exact details, projects names, building names or any other kind of information is withheld until Statutory approvals come through.',
  'These projects are at the pre-launch stage and are not yet registered with MahaRERA. No booking, sale or allotment can be made until registration.',
  'Location, Category, Connectivity & Scale is shown in full.',
]

export const PROJECTS: Project[] = [
  /* ------------------------------ Ongoing ----------------------- */
  {
    slug: "premia-towers-b-c",
    name: "Premia ‘B’ & ‘C’",
    listName: "Premia Towers ‘B’ & ‘C’",
    cardName: "Premia Tower “B” & “C”",
    locality: "Chembur",
    internalRef: "Tilak Nagar Shayadri CHSL",
    developer: "Kenarc Spaces LLP",
    status: "Ongoing",
    blurb: "At over 1.5 Lakh sq. ft., Towers ‘B’ & ‘C’ continue the Premia story in Tilak Nagar, Chembur, extending a residential development that brings together well-connected homes and the established character of one of Mumbai’s evolving eastern suburbs.",
    summary: "A refined address in Tilak Nagar, Premia brings contemporary homes to the heart of Chembur. With the Eastern Express Highway connecting you seamlessly to BKC, Thane and Navi Mumbai, and a thoughtfully designed amenity podium complemented by a dedicated sports rooftop, Premia brings together connectivity, recreation and refined urban living.",
    cardAmenities: "Gymnasium, Yoga/Zumba Room, Co-Working Space, Mini Theatre, Banquet Hall, Kids Splash Pool, Spa, Cricket & Football Turf, Pickleball & Basketball Court",
    cardMore: "+ 15 More",
    location: "Tilak Nagar, Chembur",
    category: "Residential",
    configuration: "2 & 3 BHK",
    timeline: "2023 - 2027",
    start: 2023,
    end: 2027,
    areaLabel: "1.5 L+ Sq. Ft.",
    areaSqFt: 151875,
    rera: "P51800080303",
    reraQr: "/rera/P51800080303.png",
    connectivity: [
      "Tilak Nagar Railway Station — approx. 5-10 mins*",
      "Chembur Railway Station — approx. 5-10 mins*",
      "Chembur Metro Station — Line 2B — approx. 5-10 mins*",
      "Eastern Express Highway — approx. 10-15 mins*",
      "Sion – Panvel Highway — approx. 10-15 mins*",
      "Bandra–Kurla Complex — approx. 15-20 mins*",
      "Santacruz – Chembur Link Road — convenient access",
    ],
    amenities: ["Gymnasium", "Yoga / Zumba Room", "Kids Splash Pool", "Sky Deck Podium", "Indoor Jacuzzi", "Sauna & Spa", "Mini Theatre", "Games Room", "Banquet Hall & Party Lawn", "Co-Working Space", "Study Room", "Rooftop Kids’ Play Area", "Rooftop Cricket / Football Turf", "Rooftop Pickleball / Basketball Court", "Mini Putting Golf", "Walking & Reflexology Track", "Senior Citizen Relaxing Area", "Open-Air Meditation & Yoga Corner", "Viewing Deck", "24×7 Security", "Intercom Facility", "Automated Fire Fighting System", "Cat Lift", "Parking Tower", "Mechanical Parking System", "High-Speed Elevators", "Rainwater Harvesting", "Earthquake Resistant Design", "CCTV At All Common Spaces", "Aesthetic Double Heighted Entrance Lobbies", "Vastu Compliant Planning"],
    neighbourhood: {
      title: "A WELL-CONNECTED ADDRESS, WITH THE CITY MOVING CLOSER",
      paras: [
        "Tilak Nagar sits at an important intersection of Mumbai’s eastern suburban network, with suburban rail, road and metro connectivity bringing Chembur, Kurla, BKC and the wider city within convenient reach. The area benefits from access to both Tilak Nagar and Chembur railway stations, while the Eastern Express Highway and Sion – Panvel Highway provide strong road connections across Mumbai and the MMR.",
        "The neighbourhood’s connectivity has gained another significant layer with Metro Line 2B. The line now extends to Chembur, creating an increasingly integrated network connecting Chembur with BKC, Kurla, Bandra and the western suburbs, while also linking with the suburban railway and monorail systems.",
        "With major road and transit infrastructure continuing to strengthen the eastern suburbs, Premia ‘B’ & ‘C’ are positioned within a locality where everyday connectivity is already established and the wider network continues to evolve.",
      ],
    },
    coords: [19.0689842, 72.8987858],
    mapUrl: "https://maps.app.goo.gl/zvKca4fcMjFB1B9z8",
    images: [
      { src: IMG("premia-bc-1.jpg"), alt: "Premia Towers B & C seen at dusk through flowering trees", caption: "Street view elevation" },
      { src: IMG("premia-bc-2.jpg"), alt: "Premia Towers B & C illuminated at night", caption: "Night view elevation" },
      { src: IMG("premia-bc-3.jpg"), alt: "Aerial view of the rooftop sports terrace at Premia B & C", caption: "Rooftop layout" },
      { src: IMG("premia-bc-4.jpg"), alt: "Podium level plan showing the amenity layout", caption: "Podium layout" },
    ],
  },
  {
    slug: "anvaya",
    name: "Anvaya",
    listName: "Anvaya",
    cardName: "Anvaya",
    locality: "Andheri East",
    internalRef: "Medinee Niketan CHSL",
    developer: "SS Enterprises",
    status: "Ongoing",
    blurb: "At over 0.9 Lakh sq. ft., Anvaya continues the redevelopment journey in Andheri East, bringing thoughtfully planned 1 & 2 BHK homes to a well-connected part of the city. With proximity to the Western Express Highway, Andheri’s business districts, Mumbai International Airport and the city’s expanding Metro network, the development brings together everyday convenience, connectivity and a distinctive urban outlook.",
    summary: "A well-connected address in Andheri, Anvaya places the city within easy reach. With proximity to the Western Express Highway, Marol and Saki Naka’s business districts, and Mumbai International Airport, it offers thoughtfully designed homes, distinctive runway views and everyday convenience.",
    cardAmenities: "Open Air Gymnasium, Kids Play Area, Senior Citizen Area, Landscape Garden, Yoga & Meditation Corner, Viewing Deck",
    cardMore: "+ 5 More",
    location: "Sahar Village, Andheri East",
    category: "Residential",
    configuration: "1 & 2 BHK",
    timeline: "2018 - 2024",
    start: 2018,
    end: 2024,
    areaLabel: "0.9 L+ Sq. Ft.",
    areaSqFt: 92000,
    /* Client note against this field: "Add QR Code once the project is
       out of Abeyance". A QR is to follow; nothing is shown until then. */
    rera: "P51800017639",
    connectivity: [
      "Andheri Railway Station — approx. 10-15 mins*",
      "Western Express Highway — approx. 5-10 mins*",
      "Western Express Highway Metro Station — Line 1 — approx. 5-10 mins*",
      "Chakala (J.B. Nagar) Metro Station — Line 1 — approx. 5-10 mins*",
      "Marol Naka Metro Station — Lines 1 & 3 interchange — approx. 10-15 mins*",
      "Mumbai International Airport — approx. 10-15 mins*",
      "Marol / MIDC business district — approx. 10 mins*",
      "Saki Naka — approx. 10-15 mins*",
    ],
    connectivityFootnote: "Andheri’s Metro Line 1 provides direct connectivity between the Western and Central suburbs, with interchanges at Andheri with Western Railway and at Marol Naka with Metro Line 3.",
    amenities: ["Open to Sky Gymnasium", "Open Air Meditation & Yoga Corner", "Reflexology Path", "Viewing Deck", "Senior Citizen Relaxing Area", "Rooftop Kids’ Play Area", "Toddler Area", "Parking Tower", "24×7 Security", "Intercom Facility", "Automated Fire Fighting System", "High-Speed Elevators", "Rainwater Harvesting", "Earthquake Resistant Design", "CCTV At All Common Spaces", "Aesthetic Entrance Lobby", "Vastu Compliant Planning"],
    neighbourhood: {
      title: "A CONNECTED ADDRESS IN ANDHERI EAST",
      paras: [
        "Anvaya is positioned within one of Mumbai’s established residential and employment corridors, with the Western Express Highway providing a key north–south road connection and Metro Line 1 linking the neighbourhood to Andheri, Ghatkopar and the wider western and eastern suburban network. The proximity to Marol, Saki Naka, MIDC and SEEPZ further places the development close to major employment centres, while Mumbai International Airport adds to its convenience for frequent travellers.",
        "The location also benefits from Mumbai’s expanding multimodal transit network. Metro Line 3’s interchange with Line 1 at Marol Naka strengthens access towards the airport and South Mumbai, while Metro Line 7 further integrates Andheri East with the northern suburbs and other major corridors.",
      ],
    },
    coords: [19.103516, 72.8565071],
    mapUrl: "https://maps.app.goo.gl/tyy6S7PFNV9BRwWB8",
    images: [
      { src: IMG("anvaya-1.jpg"), alt: "Daytime render of Anvaya, Andheri East", caption: "Street view elevation" },
      { src: IMG("anvaya-2.jpg"), alt: "Evening render of Anvaya", caption: "Night view elevation" },
      { src: IMG("anvaya-3.jpg"), alt: "Aerial render of the landscaped terrace deck at Anvaya", caption: "Rooftop layout" },
      { src: IMG("anvaya-4.jpg"), alt: "View from the site toward Mumbai airport and the mid-town skyline", caption: "View from project" },
      { src: IMG("anvaya-5.jpg"), alt: "View from the site over the tree cover of Andheri East", caption: "View from project" },
    ],
  },
  /* ------------------------------ Completed --------------------- */
  {
    slug: "premia-tower-a",
    name: "Premia ‘A’",
    listName: "Premia Towers ‘A’",
    cardName: "Premia Tower ‘A’",
    locality: "Chembur",
    internalRef: "Tilak Nagar Shayadri CHSL",
    developer: "Kenarc Spaces LLP",
    status: "Completed",
    blurb: "At over 0.7 Lakh sq. ft., Towers ‘A’ continue the Premia story in Tilak Nagar, Chembur, extending a residential development that brings together well-connected homes and the established character of one of Mumbai’s evolving eastern suburbs.",
    summary: "A refined residential address in Tilak Nagar, Chembur, Premia is now OC received, offering thoughtfully designed homes complemented by curated retail spaces. With the Eastern Express Highway connecting Chembur seamlessly to BKC, Thane and Navi Mumbai.",
    cardAmenities: "Open Air Gymnasium, Kids Play Area, Landscape Garden, Yoga/Meditation Corner, Relaxing Gazebo",
    cardMore: "+ 5 More",
    location: "Tilak Nagar, Chembur",
    category: "Residential + Retail",
    configuration: "1 & 2 BHK",
    timeline: "2019 - 2023",
    start: 2019,
    end: 2023,
    areaLabel: "0.7 L+ Sq. Ft.",
    areaSqFt: 69375,
    rera: "P51800029578",
    connectivity: [
      "Tilak Nagar Railway Station — approx. 5-10 mins*",
      "Chembur Railway Station — approx. 5-10 mins*",
      "Chembur Metro Station — Line 2B — approx. 5-10 mins*",
      "Eastern Express Highway — approx. 10-15 mins*",
      "Sion – Panvel Highway — approx. 10-15 mins*",
      "Bandra–Kurla Complex — approx. 15-20 mins*",
      "Santacruz – Chembur Link Road — convenient access",
    ],
    amenities: ["Open Air Gymnasium", "Open-Air Meditation & Yoga Corner", "Relaxing Gazebo", "Walking & Kids Play Area", "Senior Citizen Relaxing Area", "Open to Sky Deck", "24×7 Security", "Automated Fire Fighting System", "Cat Lift", "Parking Tower", "Basement Stack Parking", "High-Speed Elevators", "Rainwater Harvesting", "Earthquake Resistant Design", "CCTV at All Common Spaces", "Aesthetic Entrance Lobbies", "Intercom Facility", "Vastu Compliant Planning"],
    neighbourhood: {
      title: "A WELL-CONNECTED ADDRESS, WITH THE CITY MOVING CLOSER",
      paras: [
        "Tilak Nagar sits at an important intersection of Mumbai’s eastern suburban network, with suburban rail, road and metro connectivity bringing Chembur, Kurla, BKC and the wider city within convenient reach. The area benefits from access to both Tilak Nagar and Chembur railway stations, while the Eastern Express Highway and Sion – Panvel Highway provide strong road connections across Mumbai and the MMR.",
        "The neighbourhood’s connectivity has gained another significant layer with Metro Line 2B. The line now extends to Chembur, creating an increasingly integrated network connecting Chembur with BKC, Kurla, Bandra and the western suburbs, while also linking with the suburban railway and monorail systems.",
        "With major road and transit infrastructure continuing to strengthen the eastern suburbs, Premia ‘A’ is positioned within a locality where everyday connectivity is already established and the wider network continues to evolve.",
      ],
    },
    coords: [19.0699916, 72.8993181],
    mapUrl: "https://maps.app.goo.gl/RbLstG7W9p18THdj7",
    images: [
      { src: IMG("premia-a-1.jpg"), alt: "Premia Tower A seen from the street in Tilak Nagar, Chembur", caption: "Street view elevation" },
      { src: IMG("premia-a-2.jpg"), alt: "Premia Tower A illuminated at night", caption: "Night view elevation" },
      { src: IMG("premia-a-3.jpg"), alt: "Aerial view of the rooftop amenity deck at Premia Tower A", caption: "Rooftop layout" },
    ],
  },
  {
    slug: "pramod-chsl",
    name: "Pramod",
    listName: "Pramod CHSL",
    locality: "Ghatkopar East",
    developer: "Global Oricon Developers",
    status: "Completed",
    blurb: "At over 1.5 Lakh sq. ft., Pramod Society represents a redevelopment of an established residential community in Rajawadi, Ghatkopar East. With the first phase completed and existing members re-accommodated, the project sits within a well-connected neighbourhood offering convenient access to rail, Metro, major arterial roads and the wider eastern suburbs.",
    summary: "At over 1.5 Lakh sq. ft., Pramod Society represents a redevelopment of an established residential community in Rajawadi, Ghatkopar East. With the first phase completed and existing members re-accommodated, the project sits within a well-connected neighbourhood offering convenient access to rail, Metro, major arterial roads and the wider eastern suburbs.",
    location: "Rajawadi, Ghatkopar East",
    category: "Residential",
    configuration: "1 & 2 BHK",
    timeline: "2012 - 2018",
    start: 2012,
    end: 2018,
    areaLabel: "1.55 L+ Sq. Ft.",
    areaSqFt: 155000,
    connectivity: [
      "Ghatkopar Railway Station — approx. 5-10 mins*",
      "Ghatkopar Metro Station — Line 1 — approx. 5-10 mins*",
      "Eastern Express Highway — approx. 5-10 mins*",
      "LBS Road — approx. 5-10 mins*",
      "Santacruz–Chembur Link Road — approx. 10-15 mins*",
      "Chhatrapati Shivaji Maharaj International Airport — approx. 20-30 mins*",
    ],
    amenities: ["Gymnasium", "Meditation & Yoga Space", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design", "Aesthetic Entrance Lobbies"],
    neighbourhood: {
      title: "AN ESTABLISHED ADDRESS, WELL CONNECTED TO THE CITY",
      paras: [
        "Rajawadi is among Ghatkopar East’s established residential neighbourhoods, offering the advantage of a mature community setting alongside strong city connectivity. Ghatkopar Railway Station provides access to the Central Line, while the adjoining Metro Line 1 connects the eastern and western suburbs, with Ghatkopar serving as an important interchange between suburban rail and Metro networks.",
        "With the Eastern Express Highway, LBS Road and the Santacruz–Chembur Link Road within convenient reach, the location offers practical access towards Thane, South Mumbai, BKC, Navi Mumbai and the airport. The neighbourhood's established social infrastructure and proximity to major transport corridors add to its appeal as a well-connected residential address in the eastern suburbs.",
      ],
    },
    coords: [19.0808679, 72.9000875],
    mapUrl: "https://maps.app.goo.gl/XwmnxRgfoZ8qsiV28",
    images: [],
  },
  {
    slug: "dakshata-chsl",
    name: "Dakshata",
    listName: "Dakshata CHSL",
    locality: "Chembur",
    developer: "Oricon Developers",
    status: "Completed",
    blurb: "At 0.9 Lakh+ sq. ft., Dakshata CHSL brings together residential homes and ground-floor retail in the established neighbourhood of Tilak Nagar, Chembur — a well-connected eastern suburb with convenient access to Central and Harbour Line rail networks, major arterial roads and Mumbai’s growing Metro infrastructure.",
    summary: "At 0.9 Lakh+ sq. ft., Dakshata CHSL brings together residential homes and ground-floor retail in the established neighbourhood of Tilak Nagar, Chembur — a well-connected eastern suburb with convenient access to Central and Harbour Line rail networks, major arterial roads and Mumbai’s growing Metro infrastructure.",
    location: "Tilak Nagar, Chembur",
    category: "Residential + Retail",
    configuration: "2 & 3 BHK",
    timeline: "2010 - 2015",
    start: 2010,
    end: 2015,
    areaLabel: "0.9 L+ Sq. Ft.",
    areaSqFt: 90000,
    connectivity: [
      "Tilak Nagar Railway Station — approx. 5 mins*",
      "Chembur Railway Station — approx. 5-10 mins*",
      "Chembur Monorail Station — approx. 5-10 mins*",
      "Chembur Metro Station — Line 2B — approx. 5-10 mins*",
      "Eastern Express Highway — approx. 10 mins*",
      "Sion–Panvel Highway — approx. 10-15 mins*",
      "Eastern Freeway — approx. 10-15 mins*",
    ],
    amenities: ["Gymnasium", "Meditation & Yoga Space", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design", "Aesthetic Entrance Lobbies"],
    neighbourhood: {
      title: "A WELL-CONNECTED ADDRESS IN CHEMBUR",
      paras: [
        "Tilak Nagar has long been valued for its central position within Mumbai’s eastern suburbs, with multiple modes of public transport within easy reach. The proximity of Tilak Nagar and Chembur railway stations, together with the Monorail and the growing Metro Line 2B network, gives residents convenient access across the city. Major road corridors including the Eastern Express Highway, Eastern Freeway and Sion–Panvel Highway further strengthen the neighbourhood’s road connectivity.",
        "As Chembur continues to evolve as a multi-modal transit hub, the opening of the Chembur Metro station has added another layer of connectivity, creating a close interchange between Metro, suburban rail and Monorail services. For a residential neighbourhood with an established community and everyday retail at the doorstep, this combination of existing infrastructure and expanding connectivity adds to the enduring appeal of the address.",
      ],
    },
    coords: [19.0680226, 72.8987901],
    mapUrl: "https://maps.app.goo.gl/WcmR6bPmuWBXyBNu7",
    images: [
      { src: "/Sketch/Dakshata1 - Sketch - Final.png", alt: "Architectural render of Dakshata CHSL, Chembur", caption: "Street view elevation" },
      { src: "/Sketch/Dakshata2 - Sketch - Final.png", alt: "Architectural render of Dakshata CHSL, Chembur", caption: "Another view" },
    ],
  },
  {
    slug: "blossom-chsl",
    name: "Blossom",
    listName: "Blossom CHSL",
    locality: "Santacruz West",
    developer: "Divine Construction Co.",
    status: "Completed",
    blurb: "A 0.55 Lakh sq. ft. residential development with retail at ground level, Blossom brings homes and everyday convenience together on S.V. Road, Santacruz West, placing residents within easy reach of the city’s key neighbourhoods, transport networks and airport.",
    summary: "A 0.55 Lakh sq. ft. residential development with retail at ground level, Blossom brings homes and everyday convenience together on S.V. Road, Santacruz West, placing residents within easy reach of the city’s key neighbourhoods, transport networks and airport.",
    location: "S.V. Road, Santacruz West",
    category: "Residential + Retail",
    configuration: "2 & 3 BHK",
    timeline: "2005 - 2008",
    start: 2005,
    end: 2008,
    areaLabel: "0.55 L+ Sq. Ft.",
    areaSqFt: 55000,
    connectivity: [
      "Santacruz Railway Station — approx. 5–10 mins*",
      "Santacruz Metro Station — Line 3 — approx. 8–12 mins*",
      "Western Express Highway — approx. 8–10 mins*",
      "Mumbai International Airport — approx. 10–15 mins*",
      "Bandra-Kurla Complex — approx. 15–25 mins*",
      "Linking Road / Bandra West — approx. 5–10 mins*",
    ],
    amenities: ["Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A LOCATION WOVEN INTO THE CITY’S EVERYDAY RHYTHM",
      paras: [
        "Set along S.V. Road in Santacruz West, Blossom sits within a neighbourhood where residential life, local commerce and city connectivity naturally come together. Santacruz Railway Station provides access to the Western suburban rail network, while Metro Line 3 adds a direct connection towards BKC, South Mumbai and the airport corridor. The Western Express Highway further opens up access across the western and central parts of the city.",
        "The location also places the airport within convenient reach, making Blossom particularly well positioned for a city where work, travel and everyday life often intersect. With ground-floor retail complementing the residential spaces above, the development reflects the practical character of Santacruz West, a neighbourhood that continues to connect people, businesses and communities across Mumbai.",
      ],
    },
    coords: [19.0835767, 72.8381361],
    mapUrl: "https://maps.app.goo.gl/hDNQVDZDGKLgs4ZW6",
    images: [
      { src: "/Sketch/Blossom1 - Sketch - Final.png", alt: "Architectural render of Blossom CHSL, Santacruz West", caption: "Street view elevation" },
      { src: "/Sketch/Blossom2 - Sketch - Final.png", alt: "Architectural render of Blossom CHSL, Santacruz West", caption: "Another view" },
    ],
  },
  {
    slug: "shailesh-apartment",
    name: "Shailesh Apartments",
    listName: "Shailesh Apartment",
    locality: "Khar West",
    developer: "Divine Construction Co.",
    status: "Completed",
    blurb: "A compact residential development of 0.20 Lakh sq. ft. in Khar West, Shailesh Apartment sits within a mature neighbourhood known for its quiet residential pockets, strong social infrastructure and effortless access to the city’s western corridor.",
    summary: "A compact residential development of 0.20 Lakh sq. ft. in Khar West, Shailesh Apartment sits within a mature neighbourhood known for its quiet residential pockets, strong social infrastructure and effortless access to the city’s western corridor.",
    location: "Guru Gangeshwar Marg, Khar West",
    category: "Residential",
    configuration: "2 & 3 BHK",
    timeline: "2003 - 2005",
    start: 2003,
    end: 2005,
    areaLabel: "0.2 L+ Sq. Ft.",
    areaSqFt: 20000,
    connectivity: [
      "Khar Road Railway Station — approx. 5-10 mins*",
      "Bandra Railway Station — approx. 10 mins*",
      "Western Express Highway — approx. 10 mins*",
      "S.V. Road — approx. 5-10 mins*",
      "Bandra-Worli Sea Link — approx. 15 mins*",
      "Mumbai Domestic Airport — approx. 20-25 mins*",
      "Mumbai International Airport — approx. 20-25 mins*",
    ],
    amenities: ["Gymnasium", "Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A QUIET POCKET, CLOSE TO EVERYTHING",
      paras: [
        "Shailesh Apartment is located in the quieter residential fabric of Khar West, while remaining within easy reach of the neighbourhood’s key roads and transport networks. Khar Road and Bandra railway stations provide suburban rail connectivity, while S.V. Road and the Western Express Highway offer convenient movement across Mumbai’s western suburbs. The Bandra–Worli Sea Link further opens access towards South Mumbai.",
        "The location also offers practical connectivity beyond the immediate neighbourhood, with Mumbai’s domestic and international airports within convenient driving distance. Together, the surrounding road, rail and airport network makes Shailesh Apartment a well-positioned residential address within the established fabric of Khar West.",
      ],
    },
    coords: [19.0692816, 72.834966],
    mapUrl: "https://maps.app.goo.gl/mt4SEhCJ2da8R1DRA",
    images: [
      { src: "/Sketch/Sailesh Apartments - Sketch - Final.png", alt: "Architectural render of Shailesh Apartments, Khar West", caption: "Street view elevation" }
    ],
  },
  {
    slug: "akhand-aabhar-chsl",
    name: "Akhand Aabhar",
    listName: "Akhand Aabhar CHSL",
    locality: "Bandra West",
    developer: "Divine Construction Co.",
    status: "Completed",
    blurb: "At 0.17 Lakh sq. ft., Akhand Aabhar sits along Dr. Ambedkar Road in Bandra West, within a neighbourhood shaped by the distinctive character, community and everyday rhythm of Bandra. The project reflects an earlier chapter of residential development in one of Mumbai’s most recognisable western suburban precincts.",
    summary: "At 0.17 Lakh sq. ft., Akhand Aabhar sits along Dr. Ambedkar Road in Bandra West, within a neighbourhood shaped by the distinctive character, community and everyday rhythm of Bandra. The project reflects an earlier chapter of residential development in one of Mumbai’s most recognisable western suburban precincts.",
    location: "Dr. Ambedkar Road, Bandra West",
    category: "Residential",
    configuration: "2 & 3 BHK",
    timeline: "2003 - 2004",
    start: 2003,
    end: 2004,
    areaLabel: "0.17 L+ Sq. Ft.",
    areaSqFt: 17000,
    connectivity: [
      "Bandra Railway Station — approx. 5-10 mins*",
      "Khar Road Railway Station — approx. 10 mins*",
      "S.V. Road — approx. 5-10 mins*",
      "Western Express Highway — approx. 10-15 mins*",
      "Bandra-Worli Sea Link — approx. 10-15 mins*",
      "Bandra-Kurla Complex — approx. 15-20 mins*",
    ],
    amenities: ["Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "WITHIN THE RHYTHM OF BANDRA",
      paras: [
        "Dr. Ambedkar Road places Akhand Aabhar within a well-connected part of Bandra West, with rail, road and neighbourhood connections close at hand. Bandra Railway Station is within convenient reach, while the surrounding road network provides access towards S.V. Road, the Western Express Highway, Bandra-Kurla Complex and the Bandra-Worli Sea Link.",
        "Developed between 2003 and 2004, Akhand Aabhar represents an earlier chapter in the journey, a residential development rooted in the character of its neighbourhood and the everyday convenience of a well-connected part of Bandra.",
      ],
    },
    coords: [19.0669772, 72.830246],
    mapUrl: "https://maps.app.goo.gl/qEpq9YF9eBsvSKeQ6",
    images: [
      { src: "/Sketch/Akhand Abhaar1 - Sketch - Final.svg", alt: "Architectural render of Akhand Aabhar CHSL, Bandra West", caption: "Street view elevation" },
      { src: "/Sketch/Akhand Abhaar2 - Sketch - Final.png", alt: "Architectural render of Akhand Aabhar CHSL, Bandra West", caption: "Another view" },
    ],
  },
  {
    slug: "shubhda-tower",
    name: "Shubhda Tower",
    listName: "Shubhda Tower",
    locality: "Worli",
    developer: "Divine Construction Co.",
    status: "Completed",
    blurb: "At 4.1 Lakh+ sq. ft., Shubhda Tower brings together residences and ground-floor retail on Pochkhanawala Road, Worli, a location positioned between the city’s established residential districts, the Racecourse and the rapidly evolving coastal corridor. Its setting offers the advantage of being close to both South Mumbai and the western suburbs, with the city’s major road and transit networks continuing to move closer.",
    summary: "At 4.1 Lakh+ sq. ft., Shubhda Tower brings together residences and ground-floor retail on Pochkhanawala Road, Worli, a location positioned between the city’s established residential districts, the Racecourse and the rapidly evolving coastal corridor. Its setting offers the advantage of being close to both South Mumbai and the western suburbs, with the city’s major road and transit networks continuing to move closer.",
    location: "Dr. Ambedkar Road, Worli",
    category: "Residential + Retail",
    configuration: "2 & 3 BHK",
    timeline: "2000 - 2005",
    start: 2000,
    end: 2005,
    areaLabel: "4.1 L+ Sq. Ft.",
    areaSqFt: 410000,
    connectivity: [
      "Mahalaxmi Railway Station — approx. 5-10 mins*",
      "Mumbai Central Railway Station — approx. 10 mins*",
      "Mahalaxmi Metro Station — Line 3 — approx. 5-10 mins*",
      "Coastal Road — Haji Ali / Worli access — approx. 5-10 mins*",
      "Bandra–Worli Sea Link — approx. 10-15 mins*",
      "Lower Parel — approx. 10 mins*",
    ],
    amenities: ["Gymnasium", "Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "WHERE SOUTH MUMBAI MEETS THE CITY’S NEXT CONNECTIVITY STORY",
      paras: [
        "Sir Pochkhanawala Road places Shubhda Tower within a part of Worli where established neighbourhoods meet some of Mumbai’s most significant recent infrastructure. The Coastal Road has already strengthened movement between Worli, Haji Ali and South Mumbai, while Metro Line 3 and nearby railway stations add further public-transport connectivity. The Haji Ali interchange also provides access towards Mahalaxmi and the wider city network.",
        "The transformation continues beyond the existing network. Ongoing and planned improvements around Worli, Haji Ali and Mahalaxmi are steadily strengthening east-west and north-south movement, bringing key commercial, residential and cultural districts into closer reach. For an address on Pochkhanawala Road, that means the advantage is not only where it sits today, but how the surrounding city continues to connect around it.",
      ],
    },
    coords: [19.0083692, 72.8177178],
    mapUrl: "https://maps.app.goo.gl/umV2taBM9z4xgvHh6",
    images: [
      { src: "/Sketch/Shubhda Tower - Sketch - Final.png", alt: "Shubhda Tower rising above its podium at Worli", caption: "Street view elevation" },
    ],
  },
  {
    slug: "navtarun-chsl",
    name: "Navtarun",
    listName: "Navtarun CHSL",
    locality: "Kandivali West",
    developer: "Shri Sainath Developers",
    status: "Completed",
    blurb: "At 0.65 Lakh sq. ft., represents one of the early SRA redevelopment initiatives undertaken during a period when Mumbai was beginning to reimagine informal settlements through planned rehabilitation and urban renewal. Conceived under the Slum Rehabilitation Scheme, the project contributed to the creation of formal housing while supporting the broader transformation of the surrounding neighbourhood.",
    summary: "At 0.65 Lakh sq. ft., represents one of the early SRA redevelopment initiatives undertaken during a period when Mumbai was beginning to reimagine informal settlements through planned rehabilitation and urban renewal. Conceived under the Slum Rehabilitation Scheme, the project contributed to the creation of formal housing while supporting the broader transformation of the surrounding neighbourhood.",
    location: "Mathuradas Road, Kandivali West",
    category: "Residential",
    configuration: "1 RK & 1 BHK",
    timeline: "1999 - 2002",
    start: 1999,
    end: 2002,
    areaLabel: "0.65 L+ Sq. Ft.",
    areaSqFt: 65000,
    connectivity: [
      "Kandivali Railway Station — approx. 5-10 mins*",
      "Kandivali West Metro Station — Line 2A — approx. 5-10 mins*",
      "S.V. Road — approx. 5-10 mins*",
      "Link Road — approx. 10 mins*",
      "Western Express Highway — approx. 10-15 mins*",
    ],
    amenities: ["24×7 Security", "Automated Fire Fighting System", "High-Speed Elevators", "CCTV at All Common Spaces", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A PROJECT FROM KANDIVALI'S EARLY REDEVELOPMENT YEARS",
      paras: [
        "Navtarun CHSL belongs to an important period in Kandivali's growth, when established residential neighbourhoods were beginning to take shape alongside Mumbai's wider rehabilitation movement. Its location on Mathuradas Road places it within a well-connected part of Kandivali West, with the railway station close by and Metro Line 2A adding a newer layer of suburban connectivity. Mathuradas Road is approximately 1 km by road from Kandivali station, while the surrounding Dahanukarwadi area is within easy reach of the Line 2A stations.",
        "The project reflects an early chapter in rehabilitation-led development, where redevelopment was not simply about replacing structures, but about bringing formal housing into the changing fabric of Mumbai's neighbourhoods.",
      ],
    },
    coords: [19.203395, 72.835318],
    mapUrl: "https://maps.app.goo.gl/pLGgTVNEWpCH5V8a7",
    images: [],
  },
  {
    slug: "shree-ganesh-chsl",
    name: "Shree Ganesh",
    listName: "Shri Ganesh CHSL",
    locality: "Kandivali West",
    developer: "Shri Sainath Developers",
    status: "Completed",
    blurb: "At 0.45 Lakh sq. ft., Shri Ganesh CHSL holds a special place in our journey as the first SRA redevelopment project undertaken by Arham Realty. Developed between 1999 and 2001, during the early years of Mumbai’s rehabilitation-led urban transformation, the project marked an important step towards creating formal housing and improving living conditions for resident families. It also laid an early foundation for the community-focused redevelopment experience that continues to shape the business today.",
    summary: "At 0.45 Lakh sq. ft., Shri Ganesh CHSL holds a special place in our journey as the first SRA redevelopment project undertaken by Arham Realty. Developed between 1999 and 2001, during the early years of Mumbai’s rehabilitation-led urban transformation, the project marked an important step towards creating formal housing and improving living conditions for resident families. It also laid an early foundation for the community-focused redevelopment experience that continues to shape the business today.",
    location: "Mathuradas Road, Kandivali West",
    category: "Residential",
    configuration: "1 RK & 1 BHK",
    timeline: "1999 - 2001",
    start: 1999,
    end: 2001,
    areaLabel: "0.45 L+ Sq. Ft.",
    areaSqFt: 45000,
    connectivity: [
      "Kandivali Railway Station — approx. 5-10 mins*",
      "Kandivali West Metro Station — Line 2A — approx. 5-10 mins*",
      "S.V. Road — approx. 5-10 mins*",
      "Link Road — approx. 10 mins*",
      "Western Express Highway — approx. 10-15 mins*",
    ],
    amenities: ["24×7 Security", "Automated Fire Fighting System", "High-Speed Elevators", "CCTV at All Common Spaces", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A NEIGHBOURHOOD THAT HAS GROWN WITH THE CITY",
      paras: [
        "Mathuradas Road sits within the established residential fabric of Kandivali West, with rail, Metro and road networks providing convenient access across the western suburbs. Kandivali Railway Station and Metro Line 2A provide strong local connectivity, while S.V. Road, Link Road and the Western Express Highway connect the neighbourhood to the wider city. Metro Line 2A already links Kandivali West with Dahisar and Andheri West, strengthening east-west and north-south movement across the western suburbs.",
        "The next chapter of connectivity is also taking shape along Mumbai’s western edge. The proposed Mumbai Coastal Road North is planned to extend the coastal corridor through the northern suburbs, with the alignment passing through the Kandivali-Gorai-Dahisar belt and incorporating major elevated stretches, interchanges and connections towards Dahisar and beyond. Over time, this wider infrastructure network is expected to add another layer of connectivity to the western suburbs.",
      ],
    },
    coords: [19.2036701, 72.8354621],
    mapUrl: "https://maps.app.goo.gl/x7Zc51o7xpuk1wfEA",
    images: [
      { src: "/Sketch/Shree Ganesh1 - Sketch - Final.png", alt: "Architectural render of Shri Ganesh CHSL, Kandivali West", caption: "Street view elevation" },
      { src: "/Sketch/Shree Ganesh2 - Sketch - Final.png", alt: "Architectural render of Shri Ganesh CHSL, Kandivali West", caption: "Another view" },
    ],
  },
  {
    slug: "pooja-park",
    name: "Pooja Park",
    listName: "Pooja Park",
    locality: "Mira Road East",
    developer: "Pooja Builders & Developers",
    status: "Completed",
    blurb: "At 1.7 Lakh+ sq. ft., Pooja Park was developed during a formative period in Mira Road’s residential growth, when the neighbourhood was steadily taking shape as a significant housing destination for Mumbai’s expanding suburban population.",
    summary: "At 1.7 Lakh+ sq. ft., Pooja Park was developed during a formative period in Mira Road’s residential growth, when the neighbourhood was steadily taking shape as a significant housing destination for Mumbai’s expanding suburban population.",
    location: "Mira Bhayandar Road, Mira Road East",
    category: "Residential",
    configuration: "1 RK, 1 & 2 BHK",
    timeline: "1998 - 2002",
    start: 1998,
    end: 2002,
    areaLabel: "1.7 L+ Sq. Ft.",
    areaSqFt: 170000,
    connectivity: [
      "Mira Road Railway Station — approx. 10-15 mins*",
      "Mira–Bhayandar Road — approx. 5-10 mins*",
      "Western Express Highway — approx. 15-20 mins*",
      "Dahisar Check Naka — approx. 15-20 mins*",
      "Kashigaon Metro Station — Line 9 — approx. 5-10 mins*",
    ],
    amenities: ["Gymnasium", "Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A NEIGHBOURHOOD ON THE RISE",
      paras: [
        "Pooja Park came at a time when Mira Road was moving through an important phase of residential expansion. With the suburban railway already providing a crucial link towards Mumbai and the road network connecting the area to Dahisar, the Western Express Highway and the wider western suburbs, the locality was steadily becoming a practical choice for families seeking accessible homes beyond the traditional city limits.",
        "Metro Line 9 is being developed as an extension from Dahisar East towards Mira-Bhayandar, creating a new rapid-transit connection between the suburb, the Western Express Highway, Metro Line 7 and Metro Line 2A. The corridor is designed to strengthen public transport access and reduce dependence on road travel as the region continues to grow. The area's connectivity has strengthened further with Metro Line 9, now operational between Dahisar East and Kashigaon, just over a kilometre from Mira Road. The line connects the suburb to Metro Line 7 and Metro Line 2A, with the next stretch toward Bhandup currently undergoing testing ahead of commissioning.",
      ],
    },
    coords: [19.2800014, 72.8814387],
    mapUrl: "https://maps.app.goo.gl/VsrqGHHsSbXJEXYv7",
    images: [],
  },
  {
    slug: "toral-apartment",
    name: "Toral Apartments",
    listName: "Toral Apartment",
    locality: "Bhayandar East",
    developer: "Pooja Developers",
    status: "Completed",
    blurb: "A 0.22 Lakh sq. ft. residential development from an early chapter of our journey, Toral Apartments was developed in Kharegaon, Bhayandar East, at a time when the neighbourhood was steadily taking shape as a residential destination. Built alongside Jesal Apartments, the project reflects the practical experience of developing within a growing suburban community.",
    summary: "A 0.22 Lakh sq. ft. residential development from an early chapter of our journey, Toral Apartments was developed in Kharegaon, Bhayandar East, at a time when the neighbourhood was steadily taking shape as a residential destination. Built alongside Jesal Apartments, the project reflects the practical experience of developing within a growing suburban community.",
    location: "Kharegaon, Bhayander East",
    category: "Residential",
    configuration: "1 RK & 1 BHK",
    timeline: "1999 - 2001",
    start: 1999,
    end: 2001,
    areaLabel: "0.22 L+ Sq. Ft.",
    areaSqFt: 22000,
    connectivity: [
      "Bhayandar Railway Station — approx. 10-15 mins*",
      "Western Express Highway — approx. 20-25 mins*",
      "Mira Road — approx. 15-20 mins*",
      "Ghodbunder Road — approx. 20-25 mins*",
      "Thane — approx. 30-40 mins*",
    ],
    amenities: ["24×7 Security", "Automated Fire Fighting System", "High-Speed Elevators", "CCTV at All Common Spaces", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A NEIGHBOURHOOD TAKING SHAPE",
      paras: [
        "Kharegaon offered a setting where residential development was growing alongside the needs of an expanding suburban population. Toral Apartments brought together homes and ground-floor retail within this emerging neighbourhood, creating a development closely connected to the everyday life of its residents.",
        "Its significance lies in the period it represents, the early years of our development journey, when projects such as Toral and Jesal Apartments helped build experience through the realities of developing in growing and densely occupied suburban locations.",
      ],
    },
    coords: [19.3040422, 72.8559663],
    mapUrl: "https://maps.app.goo.gl/rRu7QXPnPR5MGUVb9",
    images: [
      { src: "/Sketch/Toral Apartment - Sketch - Final.png", alt: "Architectural render of Toral Apartments, Bhayandar East", caption: "Street view elevation" },
    ],
  },
  {
    slug: "jesal-apartment",
    name: "Jesal Apartments",
    listName: "Jesal Apartment",
    locality: "Bhayandar East",
    developer: "Pooja Builders",
    status: "Completed",
    blurb: "At 0.60 Lakh+ sq. ft., Jesal Apartments was developed in Kharegaon, Bhayandar East, during a period when the neighbourhood was taking shape as an important residential corridor. Combining homes with ground-floor retail, the project was designed around the everyday needs of a growing community.",
    summary: "At 0.60 Lakh+ sq. ft., Jesal Apartments was developed in Kharegaon, Bhayandar East, during a period when the neighbourhood was taking shape as an important residential corridor. Combining homes with ground-floor retail, the project was designed around the everyday needs of a growing community.",
    location: "Kharegaon, Bhayander East",
    category: "Residential",
    configuration: "1 RK & 1 BHK",
    timeline: "1998 - 2000",
    start: 1998,
    end: 2000,
    areaLabel: "0.6 L+ Sq. Ft.",
    areaSqFt: 60000,
    connectivity: [
      "Bhayandar Railway Station — approx. 10-15 mins*",
      "Mira Road Railway Station — approx. 15-20 mins*",
      "Western Express Highway — approx. 20-25 mins*",
      "Mira-Bhayandar Road — immediate local connectivity",
      "Metro Line 9 (Phase 1) — now operational between Dahisar East and Kashigaon, with the next stretch toward Mira-Bhayandar currently under testing*",
    ],
    amenities: ["24×7 Security", "Automated Fire Fighting System", "High-Speed Elevators", "CCTV at All Common Spaces", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "A FOUNDATION IN A GROWING SUBURB",
      paras: [
        "Situated in Kharegaon, Bhayandar East, Jesal Apartments was developed at a time when the area was steadily taking shape as an important residential extension of Mumbai. Its location offered access to established road and rail networks while remaining within a neighbourhood that was developing its own residential character.",
        "Today, the wider Bhayandar–Mira Road belt continues to benefit from improving regional connectivity and infrastructure. The area remains well connected to the Western Express Highway and the wider Mumbai-Ahmedabad corridor, while planned and ongoing infrastructure across the MMR is expected to further strengthen movement through the northern suburbs.",
      ],
    },
    coords: [19.3043464, 72.8550104],
    mapUrl: "https://maps.app.goo.gl/V4GeYD3rkKr8kRjPA",
    images: [
      { src: "/Sketch/Jesal Apartment - Sketch - Final.png", alt: "Architectural render of Jesal Apartments, Bhayandar East", caption: "Street view elevation" },
    ],
  },
  {
    slug: "sai-dhara",
    name: "Sai Dhara",
    listName: "Sai Dhara",
    locality: "Nalasopara East",
    developer: "Sai Dhara Constructions",
    status: "Completed",
    blurb: "At 1.4 Lakh+ sq. ft., Sai Dhara CHSL was developed at a time when Nalasopara East was taking shape as an important residential destination for Mumbai’s growing workforce. Combining residential homes with ground-floor retail, the project formed part of the early development journey in a suburb that continues to grow as part of the wider Mumbai Metropolitan Region.",
    summary: "At 1.4 Lakh+ sq. ft., Sai Dhara CHSL was developed at a time when Nalasopara East was taking shape as an important residential destination for Mumbai’s growing workforce. Combining residential homes with ground-floor retail, the project formed part of the early development journey in a suburb that continues to grow as part of the wider Mumbai Metropolitan Region.",
    location: "Achole Road, Nalasopara East",
    category: "Residential",
    configuration: "1 & 2 BHK",
    timeline: "1996 - 1999",
    start: 1996,
    end: 1999,
    areaLabel: "1.4 L+ Sq. Ft.",
    areaSqFt: 140000,
    connectivity: [
      "Nalasopara Railway Station — approx. 10-15 mins*",
      "Virar Railway Station — approx. 15-20 mins*",
      "Western Express Highway — approx. 30-40 mins*",
      "Vasai — approx. 20-25 mins*",
      "Mumbai — approx. 60-90 mins*",
    ],
    amenities: ["Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "AN ADDRESS FROM THE EARLY YEARS",
      paras: [
        "Sai Dhara CHSL belongs to an important chapter in Nalasopara’s residential story, when the suburb was steadily taking shape as a housing destination for Mumbai’s expanding communities. Its combination of residential homes and ground-floor retail reflects the practical character of the developments of that period, creating a place where every day needs could remain close to home.",
        "Today, Nalasopara East continues to benefit from its connection to the Western Railway network, with Nalasopara station serving as the principal rail link for the area and local bus routes providing access within the eastern suburb.",
      ],
    },
    coords: [19.4077897, 72.8238413],
    mapUrl: "https://maps.app.goo.gl/nvZEzqhM4v6jhmDq8",
    images: [
      { src: "/Sketch/Sai Dhara - Sketch - Final.png", alt: "Architectural render of Sai Dhara, Nalasopara East", caption: "Street view elevation" },
    ],
  },
  {
    slug: "vardhaman-park",
    name: "Vardhaman Park",
    listName: "Vardhaman Park",
    locality: "Nalasopara East",
    developer: "Shri Sainath Developers",
    status: "Completed",
    blurb: "At 0.46 Lakh+ sq. ft., Vardhaman Park marks the beginning of our promoter’s real estate journey, developed in Nalasopara East between 1994 and 1996. A residential development from the early years of the suburb’s expansion, it reflects the first steps of a journey that would go on to span more than three decades and multiple neighbourhoods across the Mumbai Metropolitan Region.",
    summary: "At 0.46 Lakh+ sq. ft., Vardhaman Park marks the beginning of our promoter’s real estate journey, developed in Nalasopara East between 1994 and 1996. A residential development from the early years of the suburb’s expansion, it reflects the first steps of a journey that would go on to span more than three decades and multiple neighbourhoods across the Mumbai Metropolitan Region.",
    location: "Tulinj Road, Nalasopara East",
    category: "Residential",
    configuration: "1 & 2 BHK",
    timeline: "1994 - 1996",
    start: 1994,
    end: 1996,
    areaLabel: "0.46 L+ Sq. Ft.",
    areaSqFt: 46000,
    connectivity: [
      "Nalasopara Railway Station — approx. 10-15 mins*",
      "Tulinj Road — immediate access",
      "Nalasopara–Virar Link Road — convenient access*",
      "Western Express Highway — approx. 30-40 mins*",
      "Vasai Road Railway Station — approx. 20-25 mins*",
    ],
    amenities: ["Relaxing Area", "24×7 Security", "Automated Fire Fighting System", "Ample Parking", "High-Speed Elevators", "CCTV at All Common Spaces", "Intercom Facility", "Vastu Compliant Planning", "Rainwater Harvesting", "Earthquake Resistant Design"],
    neighbourhood: {
      title: "WHERE THE JOURNEY BEGAN",
      paras: [
        "Vardhaman Park stands as an early chapter in the story, a residential development undertaken when Nalasopara East was still taking shape as a destination for growing families. Its location on Tulinj Road places it within an established residential network, with Nalasopara Railway Station providing access to Mumbai and the wider Western Railway corridor.",
        "Today, the Vasai-Virar region continues to evolve as an important part of the wider MMR, with expanding road, rail and regional connectivity supporting its growth. For us, however, Vardhaman Park represents something more personal: the address where a real estate journey that began in 1994 first took shape.",
      ],
    },
    coords: [19.4233821, 72.8237361],
    mapUrl: "https://maps.app.goo.gl/cENu2pxJ2umPhovn6",
    images: [
      { src: "/Sketch/Vardaman Park1 - Sketch - Final.png", alt: "Architectural render of Vardhaman Park, Nalasopara East", caption: "Street view elevation" },
      { src: "/Sketch/Vardaman Park2 - Sketch - Final.png", alt: "Architectural render of Vardhaman Park, Nalasopara East", caption: "Another view" },
    ],
  },
  /* ------------------------------ Upcoming ---------------------- */
  {
    slug: "upcoming-bandra-west",
    name: "Bandra West",
    listName: "Bandra West",
    nameWithheld: true,
    internalRef: "CoziHom CHSL",
    developer: "Arham Land Developers Pvt. Ltd.",
    status: "Upcoming",
    blurb: "At over 6.85 Lakh Sq. ft., this is envisioned as a significant residential development in Pali Hill, bringing ultra-luxury residences to one of Mumbai's most established addresses.\nSet along Nargis Dutt Road, the development combines exceptional connectivity with elevated views of the Arabian Sea and the unmistakable character of Pali Hill.",
    summary: "At over 6.85 Lakh Sq. ft., this is envisioned as a significant residential development in Pali Hill, bringing ultra-luxury residences to one of Mumbai's most established addresses.",
    location: "Nargis Dutt Road, Pali Hill",
    category: "Residential",
    start: 2025,
    end: 2029,
    areaLabel: "6.8 L+ Sq. Ft.",
    areaSqFt: 685000,
    connectivity: [
      "Bandra Railway Station — approx. 10–15 mins*",
      "Khar Road Railway Station — approx. 10 mins*",
      "Bandra Metro Station — Line 2B — upcoming*",
      "Linking Road — approx. 5–10 mins*",
      "S.V. Road — approx. 10 mins*",
      "Western Express Highway — approx. 10–15 mins*",
      "Bandra–Worli Sea Link — approx. 10 mins*",
      "Mumbai International Airport — approx. 20–25 mins*",
    ],
    amenities: [],
    neighbourhood: {
      title: "THE ADDRESS EVERY MUMBAIKAR DESIRES",
      paras: [
        "Pali Hill has long occupied a rare place in Mumbai’s imagination, an established residential enclave where privacy, prestige and proximity to the city come together.",
        "Nargis Dutt Road places the development within this distinctive setting, surrounded by the character of Pali Hill and the wider Bandra neighbourhood, an address long associated with Mumbai’s film, business and cultural circles.",
        "The location is equally defined by its connectivity. Linking Road, S.V. Road, the Western Express Highway and the Bandra – Worli Sea Link provide established road access, while Bandra and Khar Road railway stations serve the Western Railway network.",
        "Metro Line 2B is being developed through Bandra, providing another future layer of east-west connectivity and interchange with other major Metro corridors.",
        "The next chapter of connectivity is already taking shape along Mumbai’s western waterfront.",
        "The northern extension of the Coastal Road is progressing from Versova towards Dahisar and beyond, with planned connections around the Bandra–Carter Road stretch.",
        "The Bandra–Versova Sea Link, forming part of this wider coastal network, is also under construction and is expected to strengthen north-south movement along the western seafront.",
        "For a Pali Hill address, the proposition ultimately comes down to rarity, a limited neighbourhood, a highly established social ecosystem, exceptional city connectivity and, from the upper levels, the possibility of looking out towards the Arabian Sea.",
      ],
    },
    coords: [19.0645718, 72.8262521],
    mapUrl: "https://maps.app.goo.gl/oxZzNQV8KpbgyDHJA",
    images: [],
  },
 
  {
    slug: "upcoming-malad-east",
    name: "Malad East",
    listName: "Malad East",
    nameWithheld: true,
    internalRef: "Premji Compound",
    developer: "S S Kenarc Spaces LLP",
    status: "Upcoming",
    blurb: "At over 1.05 Lakh sq. ft., this residential development brings thoughtfully planned, accessible homes to Malad East, a well-connected neighbourhood with established social infrastructure, strong suburban connectivity and a growing pipeline of city-scale infrastructure improvements.",
    summary: "At over 1.05 Lakh sq. ft., this residential development brings thoughtfully planned, accessible homes to Malad East, a well-connected neighbourhood with established social infrastructure, strong suburban connectivity and a growing pipeline of city-scale infrastructure improvements.",
    location: "Haji Bapu Road, off Jitendra Road, Malad East",
    category: "Residential / Retail",
    start: 2025,
    end: 2028,
    areaLabel: "1.0 L+ Sq. Ft.",
    areaSqFt: 105000,
    connectivity: [
      "Malad Railway Station — approx. 5 - 10 mins*",
      "Dindoshi Metro Station — approx. 3 - 5 mins*",
      "Western Express Highway — approx. 5 -10 mins*",
      "S.V. Road — approx. 10 mins*",
    ],
    amenities: [],
    neighbourhood: {
      title: "A WELL-CONNECTED ADDRESS, WITH MORE TO COME",
      paras: [
        "Malad East has grown into a practical residential choice for families and working professionals, combining access to the Western Express Highway, S.V. Road, Malad Railway Station and Metro connectivity with established schools, hospitals and everyday urban infrastructure.",
        "Haji Bapu Road sits within this established network, with Dindoshi Metro Station and Malad Railway Station both within convenient reach.",
        "For a neighbourhood where affordability and everyday connectivity matter, these strengths are further enhanced by upcoming city-scale infrastructure such as the Goregaon–Mulund Link Road, which will significantly improve east-west movement across the suburban corridor through a tunnel-based connection beneath Sanjay Gandhi National Park.",
      ],
    },
    coords: [19.181178, 72.849392],
    mapUrl: "https://maps.app.goo.gl/o3jmDyy1biVwtAqF8",
    images: [],
  },
  {
    slug: "upcoming-bhandup-east",
    name: "Bhandup East",
    listName: "Bhandup East",
    nameWithheld: true,
    internalRef: "Shyam Nagar",
    developer: "Impact Engineers Pvt. Ltd.",
    status: "Upcoming",
    blurb: "At over 17.46 Lakh Sq. Ft., this is our largest and most ambitious development to date, bringing primarily 1 & 2 BHK homes and retail spaces to one of Mumbai’s emerging eastern neighbourhoods, with open, uninterrupted views across the saltpans and Thane Creek.",
    summary: "At over 17.46 Lakh Sq. Ft., this is our largest and most ambitious development to date, bringing primarily 1 & 2 BHK homes and retail spaces to one of Mumbai’s emerging eastern neighbourhoods, with open, uninterrupted views across the saltpans and Thane Creek.",
    location: "Veer Savarkar Road, Bhandup East",
    category: "Residential",
    start: 2027,
    end: 2032,
    areaLabel: "17.4 L+ Sq. Ft.",
    areaSqFt: 1746000,
    connectivity: [
      "Bhandup Railway Station — 550 m*",
      "Nahur Railway Station — approx. 2 km*",
      "Upcoming Metro Line 4 — approx. 2–5 mins*",
      "Eastern Express Highway — approx. 10 mins*",
      "LBS Marg — approx. 10 mins*",
      "Bhandup–Airoli Corridor — easy access",
    ],
    amenities: [],
    neighbourhood: {
      title: "THE NEIGHBOURHOOD IS CHANGING",
      paras: [
        "Bhandup East is entering a significant new phase of urban growth.",
        "The wider Bhandup – Kanjurmarg – Mulund belt is seeing major planning activity linked to the Dharavi Redevelopment Project, including the proposed use of large salt-pan land parcels for rehabilitation and associated development.",
        "This is bringing previously constrained land into a broader development framework and is expected to reshape the eastern suburbs over time.",
        "Closer to home, the proposed Bhandup East-West Road Over Bridge is planned to connect LBS Marg with Veer Savarkar Marg near Bhandup Station, a 530 Mtrs. structure intended to ease east-west movement through the locality, subject to civic approvals and construction timelines.",
      ],
    },
    coords: [19.1465263, 72.9398901],
    mapUrl: "https://maps.app.goo.gl/LwApSszbnW9BgKce8",
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

/**
 * Headline area figures, as the client states them. These are quoted
 * rather than summed from the catalogue because the client's own totals
 * are the ones their lawyers have signed off on.
 */
export const AREA_LABELS: Record<ProjectStatus, string> = {
  Completed: '13.6 Lakh Sq. Ft.',
  Ongoing: '2.4 Lakh Sq. Ft.',
  Upcoming: '29.5 Lakh Sq. Ft.',
}

export const findProject = (slug: string) => PROJECTS.find((p) => p.slug === slug)

/** Featured on the home page, in the client's presentation order. */
export const FEATURED = ['premia-tower-a', 'premia-towers-b-c', 'anvaya']
  .map(findProject)
  .filter((p): p is Project => Boolean(p))
