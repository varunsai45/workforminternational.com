export const company = {
  name: "WORKFORM INTERNATIONAL",
  tagline: "FAST-TRACK CORPORATE INTERIORS",
  phone: "+91 99007 16198",
  phoneHref: "tel:+919900716198",
  email: "santhosh@workforminternational.com",
  emailHref: "mailto:santhosh@workforminternational.com",
  whatsapp: "https://wa.me/919900716198",
  office: "No. 19, Workspring, Primrose Road, Ashok Nagar, Off MG Road, Bangalore 560025, India",
  factory: "10A, Sector 2, Phase 1, Bidadi Industrial Area, Bangalore 562109, India",
  manufacturing: "Our 40,000 sq. ft. facility in Bidadi produces every cabinet, wardrobe and modular system in-house, engineered with hardware, veneers and finishes flown in directly from German suppliers."
};

export const services = [
  {
    number: "01",
    title: "Corporate Office Interiors",
    short: "Workplaces planned around the way your teams think, collaborate and perform.",
    description: "From reception areas and executive cabins to boardrooms, workstations and collaboration zones, Workform brings design, manufacturing and execution together for modern corporate environments.",
    image: "/images/service-corporate-office.webp",
    path: "/corporate-office-interiors-bangalore",
    points: ["Reception and visitor areas", "Executive cabins and boardrooms", "Open-plan workspaces", "Meeting and collaboration spaces", "Workplace planning and layouts"]
  },
  {
    number: "02",
    title: "Interior Design & Space Planning",
    short: "Thoughtful layouts, material direction and visualisation for business environments.",
    description: "We translate business requirements into functional interior concepts through space planning, furniture layouts, material selection and design visualisation.",
    image: "/images/service-space-planning.webp",
    path: "/services",
    points: ["Workplace planning", "Space optimisation", "Furniture layouts", "Material and finish selection", "2D layouts and 3D visualisation"]
  },
  {
    number: "03",
    title: "Turnkey Interior Solutions",
    short: "A coordinated route from project brief and design through installation and handover.",
    description: "Workform brings the stages of a commercial interior project together, coordinating design, manufacturing, site execution, installation and final handover.",
    image: "/images/service-turnkey-fitout.webp",
    path: "/turnkey-commercial-interiors",
    points: ["Project planning", "Design development", "Manufacturing coordination", "Site execution", "Installation and handover"]
  },
  {
    number: "04",
    title: "Custom Furniture Manufacturing",
    short: "In-house production of cabinets, wardrobes, modular systems and custom furniture.",
    description: "Our Bidadi facility manufactures cabinets, wardrobes and modular systems in-house, with hardware, veneers and finishes sourced directly from German suppliers.",
    image: "/images/service-custom-furniture.webp",
    path: "/office-furniture-manufacturing",
    points: ["Cabinets and storage", "Wardrobes and modular systems", "Custom office furniture", "Workstations and desks", "Material and finish selection"]
  },
  {
    number: "05",
    title: "Modular Office Workstations",
    short: "Custom workstation and modular furniture solutions for business environments.",
    description: "Workform can develop workstation and modular furniture solutions around project layouts, team requirements, storage needs and selected materials.",
    image: "/images/office-workspace.webp",
    path: "/modular-office-workstations",
    points: ["Custom workstation layouts", "Modular desks and benching", "Integrated storage solutions", "Material and finish selection", "Corporate project requirements"]
  },
  {
    number: "06",
    title: "Commercial Interior Fit-outs",
    short: "Interior fit-out coordination for workplaces and commercial environments.",
    description: "A coordinated approach to commercial interior finishes and fit-outs, with project scope defined around each client's requirements.",
    image: "/images/service-commercial-fitout.webp",
    path: "/services",
    points: ["Interior finishes", "Flooring and ceilings", "Partitions and doors", "Lighting coordination", "Building-services coordination"]
  }
];

export const industries = [
  { title: "Corporate & IT", path: "/industries/corporate-it", image: "/images/industry-corporate.webp", description: "Corporate headquarters, technology offices, boardrooms and collaborative workspaces." },
  { title: "Education", path: "/industries/education", image: "/images/industry-education.webp", description: "Learning environments, libraries, classrooms and institutional spaces." },
  { title: "Hospitality", path: "/industries/hospitality", image: "/images/industry-hospitality.webp", description: "Guest-facing spaces, reception areas, lounges and hospitality environments." },
  { title: "Healthcare", path: "/industries/healthcare", image: "/images/industry-healthcare.webp", description: "Reception, waiting and administrative environments planned around operational needs." },
  { title: "Commercial", path: "/industries/commercial-industrial", image: "/images/industry-commercial.webp", description: "Showrooms, customer-facing spaces and commercial environments." },
  { title: "Industrial", path: "/industries/commercial-industrial", image: "/images/industry-industrial.webp", description: "Administrative offices and employee spaces within industrial settings." }
];

export const processSteps = [
  ["01", "Discover", "Understand your business, space, requirements and priorities."],
  ["02", "Plan", "Develop layouts, space plans and material direction."],
  ["03", "Visualise", "Present design concepts and 3D visualisations."],
  ["04", "Manufacture", "Produce furniture and modular systems in-house."],
  ["05", "Execute", "Coordinate site execution, delivery and installation."],
  ["06", "Handover", "Complete finishing checks and project handover."]
];

export const projectConcepts = [
  { title: "Contemporary Corporate Workspace", category: "Corporate", image: "/images/office-hero.webp", note: "Illustrative concept visualisation" },
  { title: "Executive Meeting Environment", category: "Corporate", image: "/images/office-meeting.webp", note: "Illustrative concept visualisation" },
  { title: "Collaborative Office Lounge", category: "Commercial", image: "/images/office-lounge.webp", note: "Illustrative concept visualisation" },
  { title: "Custom Furniture & Production", category: "Manufacturing", image: "/images/factory-illustrative.webp", note: "Illustrative manufacturing visual" }
];

export const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Services", path: "/services", children: services.slice(0, 5).map(s => ({ label: s.title, path: s.path })) },
  { label: "Industries", path: "/industries", children: industries.slice(0, 5).map(i => ({ label: i.title, path: i.path })) },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" }
];
