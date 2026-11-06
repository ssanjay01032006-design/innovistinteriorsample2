export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  location: string;
  year: string;
  area: string;
  coverImage: string;
  gallery: string[];
  beforeImage?: string;
  afterImage?: string;
  description: string;
  concept: string;
  materials: string[];
  features: string[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  deliverables: string[];
  duration: string;
}

export interface MaterialItem {
  id: string;
  name: string;
  origin: string;
  category: string;
  description: string;
  macroImage: string;
  roomImage: string;
  qualities: string[];
}

export interface StoryStage {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  quote: string;
  image: string;
  details: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  residence: string;
  location: string;
  image: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export const HERO_SLIDES = [
  {
    id: 1,
    title: "Spaces That\nSpeak Your Story.",
    eyebrow: "INTERIOR DESIGN • ARCHITECTURE • LIVING",
    location: "Kavala Penthouse • Luxury Living Room",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000&auto=format&fit=crop",
    desc: "Thoughtfully designed interiors that bring together aesthetics, functionality and the way you love to live."
  },
  {
    id: 2,
    title: "Sanctuary of\nCalm & Light.",
    eyebrow: "PRIVATE RESIDENCES • BEDROOM DESIGN",
    location: "The Courtyard Villa • Master Suite",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=2000&auto=format&fit=crop",
    desc: "Intimate personal spaces crafted with tactile bouclé, bespoke fluted oak, and ambient architectural lighting."
  },
  {
    id: 3,
    title: "Culinary Elegance,\nFlawless Function.",
    eyebrow: "MODULAR ARCHITECTURE • KITCHEN ATELIER",
    location: "Vesper Residence • Chef's Kitchen",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2000&auto=format&fit=crop",
    desc: "Seamless walnut joinery, monolithic Calacatta marble counters, and hidden storage for modern living."
  },
  {
    id: 4,
    title: "Sculptural Spaces\nfor Gathering.",
    eyebrow: "ARCHITECTURAL INTERIORS • DINING & ATRIUM",
    location: "Bespoke Pavilion • Formal Dining",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop",
    desc: "Dramatic volumes harmonized with soft limestone textures and custom artisan bronze fixtures."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "aethel-residence",
    title: "The Aethel Residence",
    subtitle: "Monolithic Travertine & Warm Oak Sanctuary",
    category: "Residential Interiors",
    location: "Bengaluru, India",
    year: "2025",
    area: "5,400 sq.ft",
    coverImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1600&auto=format&fit=crop"
    ],
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    description: "A complete transformation of a high-rise duplex into an urban refuge. Clean geometric lines intersect with tactile organic materials, balancing monumental presence with deep residential warmth.",
    concept: "We embraced the Japanese concept of Ma (negative space), allowing natural illumination from the expansive terrace to carve dynamic light patterns across hand-finished micro-cement walls.",
    materials: ["Navona Roman Travertine", "Smoked Belgian Oak", "Hand-troweled Lime Plaster", "Brushed Antiqued Bronze"],
    features: ["Double-height living atrium", "Custom cantilevered walnut staircase", "Integrated perimeter shadow-gap lighting", "Concealed climate and acoustic systems"]
  },
  {
    id: "penthouse-nine",
    title: "Penthouse No. 9",
    subtitle: "Panoramic Waterfront Living with Editorial Calm",
    category: "Luxury Living Spaces",
    location: "Marine Drive, Mumbai",
    year: "2024",
    area: "6,800 sq.ft",
    coverImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop"
    ],
    beforeImage: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    description: "Designed for a discerning art collector, this penthouse prioritizes unobstructed Arabian Sea panoramas while curating museum-grade wall planes for large-format contemporary canvases.",
    concept: "Subtle neutrality. By paring back decorative excess, the horizon becomes the primary artwork, framed by floor-to-ceiling acoustic glass and warm basalt floor slabs.",
    materials: ["Grey Basalt Stone", "Bouclé Wool Upholstery", "Fluted Cast Glass", "Gunmetal Steel Accents"],
    features: ["Bespoke curved conversation pit", "Automated temperature-controlled wine cellar", "Curated architectural art niches", "Private sea-facing terrace lounge"]
  },
  {
    id: "komorebi-villa",
    title: "The Komorebi Villa",
    subtitle: "Japandi Serenity & Courtyard Architecture",
    category: "Complete Home Interiors",
    location: "Alibaug, Maharashtra",
    year: "2025",
    area: "8,200 sq.ft",
    coverImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1600&auto=format&fit=crop"
    ],
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d0fbb1861564?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    description: "A tranquil coastal estate celebrating raw textures and botanical views. Built around a central frangipani courtyard, the boundaries between internal shelter and nature dissolve gracefully.",
    concept: "Komorebi — the sunlight filtering through leaves. Custom slatted timber screens filter the harsh tropical sun into rhythmic, dancing shadows across earthen terrazzo floors.",
    materials: ["Hand-poured Terrazzo", "Reclaimed Teak Wood", "Raw Woven Linen", "Cleft Black Slate"],
    features: ["Open-air ensuite rainfall pavilions", "Sunken library lounge", "Internal water mirror courtyard", "Zero-threshold indoor-outdoor glass sliders"]
  },
  {
    id: "marina-kitchen",
    title: "Atelier Culinaire",
    subtitle: "Precision Engineering & Monolithic Stone",
    category: "Modern Kitchens",
    location: "Jubilee Hills, Hyderabad",
    year: "2024",
    area: "1,200 sq.ft",
    coverImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=1600&auto=format&fit=crop"
    ],
    beforeImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    description: "A showpiece modular kitchen designed for both quiet morning rituals and vibrant private dining gatherings. German precision fittings concealed behind hand-selected bookmatched marble.",
    concept: "Functional invisibility. State-of-the-art induction hobs and extraction are integrated directly into the stone slab, creating a clean monolithic sculpture when not in use.",
    materials: ["Bookmatched Calacatta Viola", "Smoked Fluted Walnut", "Matte Black PVD Hardware", "Satin Etched Glass"],
    features: ["Continuous 4.2m island monolith", "Motorized touch-to-open pocket larders", "Dedicated sommelier bar station", "Integrated organic herb planter lights"]
  },
  {
    id: "suite-elysian",
    title: "The Elysian Master Suite",
    subtitle: "Tactile Restfulness & Tailored Acoustic Warmth",
    category: "Bedroom Interiors",
    location: "Vasant Vihar, New Delhi",
    year: "2025",
    area: "1,850 sq.ft",
    coverImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1600&auto=format&fit=crop"
    ],
    beforeImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    description: "An intimate sanctuary isolated from city vibrations. Acoustic textile wall panels, bespoke low-slung platform bed, and a walk-through wardrobe crafted in reeded glass and bronze.",
    concept: "Sensory decompression. The palette revolves around oatmeal cashmere, softened limestone, and warm 2400K circadian lighting that mimics natural twilight.",
    materials: ["Italian Cashmere Wall Panels", "White Oak Flooring", "Warm Leather Bedhead", "Muted Brass Hardware"],
    features: ["Circadian light sequences", "Hidden vanity & dressing bar", "Acoustic triple-glazed private balcony", "Integrated soundscape audio"]
  },
  {
    id: "the-luminary",
    title: "The Luminary Studio",
    subtitle: "Biophilic Executive Workspace & Gallery",
    category: "Commercial Interiors",
    location: "Bandra Kurla Complex, Mumbai",
    year: "2024",
    area: "4,200 sq.ft",
    coverImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1600&auto=format&fit=crop"
    ],
    beforeImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    description: "A private wealth boutique office that challenges the cold sterility of traditional corporate towers. Fluid curves, live ficus trees, and tailored hospitality lounges.",
    concept: "Hospitality meets workplace rigor. Clients are greeted with barista coffee at an undulating travertine reception bar rather than a standard desk.",
    materials: ["Cast Concrete", "Fluted Oak Screens", "Leather Banquettes", "Oxidized Steel Dividers"],
    features: ["Acoustic boardroom with hidden media screens", "Private executive shower suite", "Indoor biophilic garden courtyards", "Smart daylight harvesting sensors"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "residential",
    number: "01",
    title: "Residential Interior Design",
    category: "Full Architecture & Styling",
    shortDesc: "Complete home interiors tailored to individual lifestyles, cultural heritage, and modern spatial rituals.",
    fullDesc: "We craft cohesive residential sanctuaries from ground-up villas to high-rise duplexes. Every room is designed as part of a continuous narrative, uniting architectural volumes, custom joinery, curated art, and bespoke furniture pieces into one harmonious living experience.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Comprehensive 3D visualizations & walkthroughs", "Complete technical MEP & civil drawings", "Custom bespoke furniture design & fabrication", "Turnkey procurement & white-glove styling"],
    duration: "12 to 24 Weeks"
  },
  {
    id: "modular-kitchen",
    number: "02",
    title: "Modular Kitchen Design",
    category: "Culinary Atelier & Joinery",
    shortDesc: "Functional and refined kitchens featuring intelligent storage systems, monolithic islands, and premium finishes.",
    fullDesc: "The kitchen is the emotional heart of contemporary homes. We design culinary spaces that blend ergonomics with architectural sculpture. Using European hardware, anti-fingerprint nanotech surfaces, and bookmatched stone slabs, we ensure your culinary theater performs effortlessly.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Ergonomic workflow & appliance zoning", "Concealed motorized pocket systems", "Custom stone fabrication & splashbacks", "German/Austrian precision hardware fittings"],
    duration: "6 to 10 Weeks"
  },
  {
    id: "bedroom",
    number: "03",
    title: "Bedroom Design & Suites",
    category: "Private Sanctuaries",
    shortDesc: "Comfortable and deeply personalized spaces designed for sensory decompression, rest, and acoustic serenity.",
    fullDesc: "We approach master suites and private quarters as restorative wellness cocoons. Incorporating circadian indirect lighting, acoustic fabric wall paneling, walk-in boutique wardrobes, and tailored ensuite transitions, every touchpoint promotes calm and restorative sleep.",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Circadian light sequencing plans", "Acoustic paneling & textile headboards", "Custom wardrobe systems with integrated LED", "Ensuite marble vanity integration"],
    duration: "8 to 14 Weeks"
  },
  {
    id: "living-dining",
    number: "04",
    title: "Living & Dining Spaces",
    category: "Social Architecture",
    shortDesc: "Balanced interiors that combine majestic visual presence, intuitive gathering flow, and everyday comfort.",
    fullDesc: "Public entertaining areas demand visual impact without sacrificing genuine comfort. We design double-height living atriums, conversation lounges, and grand dining rooms with custom monolith tables, statement lighting sculptures, and bespoke rugs that ground the space effortlessly.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Spatial zoning & conversation groupings", "Architectural ceiling & feature wall design", "Custom sculptural dining table commissions", "Curated lighting art fixtures & accessories"],
    duration: "10 to 16 Weeks"
  },
  {
    id: "commercial",
    number: "05",
    title: "Commercial & Studio Interiors",
    category: "Workplace & Hospitality",
    shortDesc: "Professional spaces designed around brand identity, elevated hospitality, and inspiring productivity.",
    fullDesc: "For high-end boutiques, executive headquarters, wellness clinics, and private family offices, we design environments that reflect your brand’s prestige. We merge commercial durability with residential comfort, ensuring clients and collaborators feel elevated from the moment they enter.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Brand immersion & spatial storytelling", "Acoustic privacy & conference ergonomics", "Commercial code compliance & durability specs", "Custom reception monoliths & signage integration"],
    duration: "12 to 20 Weeks"
  },
  {
    id: "consultation",
    number: "06",
    title: "Space Planning & Advisory",
    category: "Strategic Design Guidance",
    shortDesc: "Thoughtful layouts, material palette curation, structural feasibility audits, and expert design guidance.",
    fullDesc: "If you are purchasing a property off-plan or seeking architectural review before commencing structural works, our senior design principals provide comprehensive spatial assessments, daylight studies, structural partition reconfiguration, and tailored finishes dossiers.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop",
    deliverables: ["Architectural partition review & layout optimization", "Comprehensive moodboards & material dossiers", "Lighting concept & MEP layout advisory", "Contractor quotation review & cost guidance"],
    duration: "2 to 4 Weeks"
  }
];

export const MATERIALS: MaterialItem[] = [
  {
    id: "walnut",
    name: "Smoked American Walnut",
    origin: "Appalachian Forests, Certified Sustainable",
    category: "Wood & Joinery",
    description: "Deep, chocolate undertones with undulating grain patterns. Hand-finished with natural hardwax oils to preserve the breathable tactile warmth of natural timber.",
    macroImage: "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?q=80&w=1200&auto=format&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    qualities: ["FSC Certified Timber", "Zero VOC Natural Oil Finish", "Dimensionally Stable Fluting", "Rich Velvet Patina Over Decades"]
  },
  {
    id: "travertine",
    name: "Navona Roman Travertine",
    origin: "Tivoli Quarries, Italy",
    category: "Natural Stone & Marble",
    description: "Quarried from historic Roman strata. Characterized by warm ivory hues and natural tactile cavities that reflect daylight with soft architectural nobility.",
    macroImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1200&auto=format&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1200&auto=format&fit=crop",
    qualities: ["Authentic Cross-Cut Veining", "Honed Matte Satin Touch", "Thermal Inertia & Cool Touch", "Enduring Historic Resilience"]
  },
  {
    id: "limewash",
    name: "Artisanal Mineral Lime Wash",
    origin: "Venetian Mineral Deposits",
    category: "Surface & Wall Plaster",
    description: "Layered by master plasterers using traditional steel trowels. Creates a velvety, breathable surface with subtle clouding that shifts softly through morning and evening light.",
    macroImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1200&auto=format&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
    qualities: ["100% Mineral & Breathable", "Naturally Anti-Microbial", "Soft Non-Reflective Sheen", "Eliminates Flat Drywall Look"]
  },
  {
    id: "boucle",
    name: "Organic Belgian Bouclé & Linen",
    origin: "Flanders Mills, Belgium",
    category: "Textiles & Upholstery",
    description: "Heavyweight looped wool yarn woven with organic long-staple flax. Adds immediate depth and tactile invitation to seating and architectural banquettes.",
    macroImage: "https://images.unsplash.com/photo-1584589167171-541ce45f1eea?q=80&w=1200&auto=format&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=1200&auto=format&fit=crop",
    qualities: ["High Rub Count Durability", "All-Natural Hypoallergenic Fibers", "Sculptural Draping Quality", "Resists Crushing & Flattening"]
  },
  {
    id: "bronze",
    name: "Antiqued Bronze & Raw Brass",
    origin: "Artisan Foundry, Florence",
    category: "Metals & Precision Hardware",
    description: "Unlacquered living metal treated with subtle hand-rubbed patination. Ages with grace, gaining unique character wherever fingertips touch door handles and joinery edges.",
    macroImage: "https://images.unsplash.com/photo-1509114397022-ed747cca3f65?q=80&w=1200&auto=format&fit=crop",
    roomImage: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1200&auto=format&fit=crop",
    qualities: ["Living Organic Patina", "Solid Brass Core - No Plating", "Warm Tactile Weight", "Hand-Chiseled Micro Edges"]
  }
];

export const STORY_STAGES: StoryStage[] = [
  {
    step: "01",
    title: "Concept & Spatial Intent",
    subtitle: "Listening to the Voice of the Site",
    description: "Every commission begins with an intensive lifestyle inquiry. We study natural solar paths, wind patterns, acoustic privacy, and the client's private daily rituals before drawing a single line.",
    quote: "Architecture is not about filling space; it is about creating moments of quiet resonance within it.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
    details: ["In-depth lifestyle audit", "Circadian sun-angle path mapping", "Moodboard visual vocabulary", "Spatial rhythm sketches"]
  },
  {
    step: "02",
    title: "Architectural Planning",
    subtitle: "Precision Layouts & Circulation Harmony",
    description: "We sculpt the floorplan to eliminate wasted corridors and maximize sightlines. Service functions are discreetly tucked away, while living volumes are opened to frame natural landscapes.",
    quote: "Flow dictates emotional ease. When a home has flawless circulation, tension dissolves the moment you step inside.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1400&auto=format&fit=crop",
    details: ["Zoning diagrams & spatial flow", "Civil structural adaptations", "Detailed ceiling & MEP integration", "Sightline & privacy balance"]
  },
  {
    step: "03",
    title: "Material Curation",
    subtitle: "Tactile Harmony & Raw Authenticity",
    description: "We assemble material trays with real stone off-cuts, brushed bronze samples, hand-dyed linens, and aged timbers. We test these swatches on-site at different hours of the day to ensure perfect harmony.",
    quote: "Materials are emotional catalysts. Honest stone, wood, and linen tell a story that fake veneers never can.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1400&auto=format&fit=crop",
    details: ["Quarry stone slab selection", "Custom timber stain developments", "Natural textile light testing", "Finishes compatibility audit"]
  },
  {
    step: "04",
    title: "Photorealistic 3D Design",
    subtitle: "Hyper-Real Spatial Pre-Visualization",
    description: "Clients experience their prospective home through cinematic 3D renders with physically accurate optical lighting. Every shadow-gap reveal, fabric texture, and light reflection is resolved in detail.",
    quote: "No surprises during execution. You witness the exact morning atmosphere of your living room months before handover.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1400&auto=format&fit=crop",
    details: ["Physically accurate light rendering", "Bespoke joinery 1:1 modeling", "Hardware detailing previews", "Virtual walk-through previews"]
  },
  {
    step: "05",
    title: "The Living Space Handover",
    subtitle: "Artisan Execution & Turnkey Reveal",
    description: "Master carpenters, stone masons, and styling specialists bring the vision into physical reality with millimetric tolerances. We curate fragrances, plants, books, and lighting for an unforgettable reveal day.",
    quote: "A space thoughtfully designed is not just looked at—it is lived, felt, and remembered forever.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1400&auto=format&fit=crop",
    details: ["Millimetric fabrication oversight", "White-glove styling & art installation", "Smart home commissioning", "Complete maintenance dossier"]
  }
];

export const DESIGN_PROCESS = [
  {
    number: "01",
    title: "Discover",
    tagline: "Vision & Spatial Audit",
    description: "We conduct an immersive discovery interview to understand your lifestyle, daily habits, functional necessities, and aesthetic aspirations. We measure the space and analyze light patterns.",
    duration: "Week 1 - 2"
  },
  {
    number: "02",
    title: "Concept",
    tagline: "Spatial Flow & Moodboard",
    description: "We develop architectural spatial layouts, flow diagrams, and tactile moodboards. You explore options for furniture groupings, partition restructuring, and overarching design language.",
    duration: "Week 3 - 5"
  },
  {
    number: "03",
    title: "Develop",
    tagline: "3D Visuals & Technical BOQ",
    description: "We build photorealistic renders of each room, produce comprehensive CAD technical drawings for civil, electrical, plumbing, and joinery, and finalize the transparent itemized budget.",
    duration: "Week 6 - 9"
  },
  {
    number: "04",
    title: "Deliver",
    tagline: "Precision Build & Final Reveal",
    description: "Our dedicated site engineers and artisan craftsmen execute the project under daily studio supervision. We perform rigorous quality checks and style the entire home for a turnkey handover.",
    duration: "Week 10 - Handover"
  }
];

export const PHILOSOPHY_POINTS = [
  {
    num: "01",
    title: "Purposeful Planning",
    subtitle: "Form Following Human Ritual",
    desc: "Every layout begins with human functionality, spatial flow, and emotional well-being. We eliminate decorative clutter so that every line, passage, and aperture serves a clear purpose in daily life.",
    image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "Material Harmony",
    subtitle: "Honesty in Textures & Finishes",
    desc: "We curate authentic, enduring materials that age with grace. Smoked timbers, cleft stone, unlacquered bronze, and breathable lime wash create a sensory warmth that synthetic surfaces cannot replicate.",
    image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "Timeless Aesthetics",
    subtitle: "Enduring Beyond Trends",
    desc: "We reject short-lived fads in favor of quiet architectural proportions, balanced daylight, and serene palettes. Our spaces remain deeply relevant, comfortable, and beautiful across generations.",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1000&auto=format&fit=crop"
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: "Bespoke Architectural Vision",
    desc: "No prefabricated cookie-cutter templates. Every residence is an original bespoke commission tailored directly to your lifestyle and architectural envelope."
  },
  {
    title: "Precision Spatial Ergonomics",
    desc: "Millimetric attention to spatial flow, storage concealment, acoustic comfort, and natural ventilation dynamics."
  },
  {
    title: "Authentic Material Sourcing",
    desc: "Direct partnerships with verified Italian marble quarries, sustainable timber mills, and artisanal textile ateliers."
  },
  {
    title: "Rigorous Site Supervision",
    desc: "Daily on-site engineering oversight ensuring zero deviation from architectural blueprints and approved technical tolerances."
  },
  {
    title: "Transparent Financial Clarity",
    desc: "Detailed Bill of Quantities (BOQ) with guaranteed itemized cost breakdowns and milestone-linked payment schedules."
  },
  {
    title: "Turnkey White-Glove Handover",
    desc: "From structural civil works to fine art curation, fragrance styling, and deep cleaning—ready for you to simply step in and live."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "Working with INNOVIST felt like collaborating with a world-class architectural studio. They did not just decorate our penthouse; they restructured how we feel inside our home every single morning. The travertine details and lighting design are sheer poetry.",
    author: "Aditya & Sanjana Rao",
    role: "Private Homeowners",
    residence: "Penthouse No. 9, Marine Drive",
    location: "Mumbai",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "2",
    quote: "INNOVIST’s attention to detail is obsessive in the best way imaginable. Every joint in the walnut cabinetry aligns flawlessly with the floor tiles. Their team respected our timeline and delivered a sanctuary that surpasses our highest expectations.",
    author: "Vikramaditya Singhania",
    role: "Founder & Investor",
    residence: "The Aethel Residence",
    location: "Bengaluru",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300&auto=format&fit=crop"
  },
  {
    id: "3",
    quote: "Our Alibaug villa needed a delicate touch—something modern yet rooted in the landscape. INNOVIST achieved a breathtaking balance of raw textures, natural light, and quiet luxury. It is our family’s favorite place on earth.",
    author: "Meera & Rohan Merchant",
    role: "Architectural Patrons",
    residence: "Komorebi Villa",
    location: "Alibaug",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300&auto=format&fit=crop"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What types of interior design projects do you undertake?",
    answer: "INNOVIST specializes in high-end residential interiors (luxury apartments, penthouses, bespoke villas, and complete home transformations) as well as selective commercial spaces such as boutique executive offices, flagship studios, and private hospitality lounges. We focus on projects where design excellence and material craftsmanship are paramount."
  },
  {
    question: "Do you provide complete turnkey home interior solutions?",
    answer: "Yes, our primary offering is comprehensive turnkey design and build. From initial space planning and structural civil modifications to custom modular kitchens, bespoke joinery, electrical/MEP layout, lighting design, curated furniture procurement, and final white-glove styling, we oversee every detail from concept to move-in day."
  },
  {
    question: "Can I customize the design according to my budget?",
    answer: "Every INNOVIST project is custom-tailored. During the initial Discovery phase, we establish a realistic financial framework based on your property size and material aspirations. We provide a transparent itemized Bill of Quantities (BOQ) with clear options across material tiers, ensuring you make informed decisions without unexpected surprises."
  },
  {
    question: "How does the design process work and what is the typical timeline?",
    answer: "Our process follows four structured phases: Discover (lifestyle audit and spatial survey), Concept (layout planning and moodboard direction), Develop (photorealistic 3D visuals, technical drawings, and BOQ), and Deliver (artisan execution and handover). Typical timelines range from 8–12 weeks for specialized spaces (e.g., kitchens or master suites) to 16–24 weeks for expansive luxury residences."
  },
  {
    question: "Do you provide 3D design visualizations before execution begins?",
    answer: "Absolutely. We believe you should never have to imagine how your space will look. We produce physically accurate, high-resolution 3D renders with true lighting simulations for all key living zones, bedrooms, kitchens, and bathrooms. We only commence fabrication once you have fully reviewed and approved every detail."
  },
  {
    question: "Can I consult with your design team before starting?",
    answer: "Yes! We offer a dedicated 45-minute preliminary consultation at our studio or via video call. During this session, our senior design team reviews your architectural floorplan, discusses your aesthetic preferences and timeline, and outlines our recommended spatial strategy."
  },
  {
    question: "How can I get an accurate project quotation?",
    answer: "You can submit an inquiry through our consultation form on this website or reach out directly via WhatsApp (+91 98765 43210). Please share your floor plan, location, and approximate scope. Our team will arrange an initial discovery call followed by a personalized project proposal."
  }
];

