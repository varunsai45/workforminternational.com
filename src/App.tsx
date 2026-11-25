import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link, NavLink, Route, Routes, useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Menu, X, Phone, Mail, MapPin,
  Factory, Layers3, PencilRuler, Building2, Settings2, Check, ChevronDown,
  Instagram, Linkedin, Facebook, MessageCircle, Send, Clock3, ShieldCheck,
  Ruler, PackageCheck, Sparkles, Boxes, Hammer, GraduationCap, Hotel, HeartPulse
} from "lucide-react";
import { company, services, industries, processSteps, projectConcepts, navLinks } from "./data";

function SEO({ title, description }: { title: string; description: string }) {
  const location = useLocation();
  const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined) || "https://www.workforminternational.com";
  const canonical = `${siteUrl}${location.pathname}`;
  return <Helmet>
    <title>{title} | Workform International</title>
    <meta name="description" content={description} />
    <link rel="canonical" href={canonical} />
    <meta property="og:title" content={`${title} | Workform International`} />
    <meta property="og:description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:image" content={`${siteUrl}/images/office-hero.webp`} />
    <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"Organization","name":"Workform International","url":siteUrl,"email":"santhosh@workforminternational.com","telephone":"+91 99007 16198","address":{"@type":"PostalAddress","streetAddress":"No. 19, Workspring, Primrose Road, Ashok Nagar, Off MG Road","addressLocality":"Bangalore","postalCode":"560025","addressCountry":"IN"}})}</script>
  </Helmet>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const location = useLocation();
  useEffect(() => { setOpen(false); setDropdown(null); }, [location.pathname]);
  return <header className="site-header">
    <div className="nav-wrap">
      <Link to="/" className="brand" aria-label="Workform International home">
        <img src="/images/workform-logo.jpeg" alt="Workform International logo" />
        <span className="brand-tag">FAST-TRACK<br />CORPORATE INTERIORS</span>
      </Link>
      <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button>
      <nav className={`main-nav ${open ? "is-open" : ""}`}>
        {navLinks.map(item => <div className="nav-item" key={item.label}
          onMouseEnter={() => item.children && setDropdown(item.label)}
          onMouseLeave={() => setDropdown(null)}>
          <div className="nav-line">
            <NavLink to={item.path} end={item.path === "/"} className={({ isActive }) => isActive ? "active" : ""}>{item.label}</NavLink>
            {item.children && <button className="nav-chevron" onClick={() => setDropdown(dropdown === item.label ? null : item.label)} aria-label={`Open ${item.label} menu`}><ChevronDown size={13}/></button>}
          </div>
          {item.children && dropdown === item.label && <div className="mega-menu">
            <div className="mega-intro"><span className="eyebrow">EXPLORE {item.label.toUpperCase()}</span><strong>{item.label === "Services" ? "One integrated partner." : "Spaces for every business."}</strong><p>Discover how Workform brings design, manufacturing and execution together.</p></div>
            <div className="mega-links">{item.children.map(child => <Link key={child.path + child.label} to={child.path}>{child.label}<ArrowUpRight size={14}/></Link>)}</div>
          </div>}
        </div>)}
      </nav>
      <Link className="nav-quote" to="/get-a-quote">GET A QUOTE <ArrowUpRight size={15}/></Link>
    </div>
  </header>;
}

function Footer() {
  return <footer className="footer">
    <div className="footer-main container">
      <div className="footer-brand">
        <img src="/images/workform-logo.jpeg" alt="Workform International" />
        <p>Fast-track corporate interiors.<br/><strong>We manufacture our own.</strong></p>
        <div className="socials"><span className="social-note">SOCIAL PROFILES TO BE ADDED</span></div>
      </div>
      <div><span className="footer-heading">Explore</span><Link to="/about">About Us</Link><Link to="/services">Services</Link><Link to="/industries">Industries</Link><Link to="/manufacturing">Manufacturing</Link><Link to="/projects">Projects</Link></div>
      <div><span className="footer-heading">Capabilities</span>{services.slice(0,4).map(s=><Link key={s.title} to={s.path}>{s.title}</Link>)}</div>
      <div className="footer-contact"><span className="footer-heading">Get in touch</span><a href={company.phoneHref}><Phone size={15}/> {company.phone}</a><a href={company.emailHref}><Mail size={15}/> {company.email}</a><p><MapPin size={15}/> {company.office}</p><p><Factory size={15}/> {company.factory}</p></div>
    </div>
    <div className="footer-legal container"><Link to="/privacy-policy">Privacy Policy</Link><Link to="/faq">FAQ</Link><Link to="/blogs">Blogs</Link><Link to="/terms">Terms &amp; Conditions</Link></div><div className="footer-bottom container"><span>© {new Date().getFullYear()} Workform International. All rights reserved.</span><div><Link to="/contact">Contact</Link><Link to="/get-a-quote">Request a quote</Link><a href="/sitemap.xml">Sitemap</a></div></div>
  </footer>;
}

function WhatsAppFloat() {
  return <a className="whatsapp-float" href={company.whatsapp} target="_blank" rel="noreferrer" aria-label="Chat with Workform on WhatsApp"><MessageCircle size={21}/><span>WhatsApp</span></a>;
}

function Layout({ children }: { children: ReactNode }) {
  return <><Header/><main>{children}</main><Footer/><WhatsAppFloat/></>;
}

function Eyebrow({ children }: { children: ReactNode }) { return <div className="eyebrow">{children}</div>; }
function SectionTitle({ eyebrow, title, text, dark=false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return <div className={`section-title ${dark ? "light-text" : ""}`}><Eyebrow>{eyebrow}</Eyebrow><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}
function CTA({ title="Let's build your next workspace.", text="Tell us what you are planning. Our team will be happy to discuss your requirements.", dark=false }: { title?: string; text?: string; dark?: boolean }) {
  return <section className={`cta-band ${dark ? "cta-dark" : ""}`}><div className="container cta-inner"><div><Eyebrow>START A CONVERSATION</Eyebrow><h2>{title}</h2><p>{text}</p></div><div className="cta-actions"><Link className="btn btn-light" to="/get-a-quote">DISCUSS YOUR PROJECT <ArrowUpRight size={16}/></Link><Link className="text-link" to="/contact">CONTACT WORKFORM <ArrowRight size={15}/></Link></div></div></section>;
}
function PageHero({ eyebrow, title, text, image, compact=false }: { eyebrow: string; title: string; text: string; image: string; compact?: boolean }) {
  return <section className={`page-hero ${compact ? "page-hero-compact" : ""}`} style={{backgroundImage:`linear-gradient(90deg,rgba(12,12,12,.82),rgba(12,12,12,.2)),url(${image})`}}>
    <div className="container page-hero-content"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p>{text}</p><div className="hero-actions"><Link className="btn btn-light" to="/get-a-quote">START YOUR PROJECT <ArrowUpRight size={16}/></Link><Link className="btn btn-outline-light" to="/services">EXPLORE SERVICES <ArrowRight size={16}/></Link></div></div>
  </section>;
}
function Breadcrumb({ current }: { current: string }) { return <div className="container breadcrumb"><Link to="/">Home</Link><span>/</span><span>{current}</span></div>; }

function Home() {
  return <>
    <SEO title="Corporate Interior Design & Turnkey Solutions in Bangalore" description="Workform International delivers corporate interior design, in-house furniture manufacturing and turnkey commercial interior solutions in Bangalore."/>
    <section className="home-hero" style={{backgroundImage:"linear-gradient(90deg,rgba(10,10,10,.86) 0%,rgba(10,10,10,.56) 42%,rgba(10,10,10,.08) 100%),url('/images/office-hero.webp')"}}>
      <div className="container hero-content"><Eyebrow>DESIGN · MANUFACTURE · EXECUTE</Eyebrow><h1>WE DON'T JUST DESIGN WORKSPACES.<br/><em>WE BUILD THEM.</em></h1><p>Complete corporate interior solutions, backed by in-house manufacturing, German-sourced materials and integrated turnkey execution.</p><div className="hero-actions"><Link className="btn btn-light" to="/get-a-quote">START YOUR PROJECT <ArrowUpRight size={16}/></Link><Link className="btn btn-outline-light" to="/manufacturing">EXPLORE OUR CAPABILITIES <ArrowRight size={16}/></Link></div><div className="hero-note"><span className="hero-dot"/> BENGALURU · INDIA <span className="hero-separator"/> FAST-TRACK CORPORATE INTERIORS</div></div>
      
    </section>
    <section className="capability-strip"><div className="container capability-grid">
      {[{icon:<PencilRuler/>,title:"Design",text:"Space planning & interior design"},{icon:<Settings2/>,title:"Manufacture",text:"In-house production & custom solutions"},{icon:<Layers3/>,title:"Execute",text:"Turnkey project delivery"},{icon:<ShieldCheck/>,title:"Support",text:"From concept to project completion"}].map(x=><div className="capability" key={x.title}><span className="cap-icon">{x.icon}</span><div><strong>{x.title}</strong><p>{x.text}</p></div></div>)}
    </div></section>
    <section className="manufacturing-feature">
      <div className="manufacturing-image"><img src="/images/factory-illustrative.webp" alt="Illustrative furniture manufacturing facility visual" /><span className="image-caption">MANUFACTURING VISUAL — REPLACE WITH ACTUAL FACTORY PHOTOGRAPHY</span></div>
      <div className="manufacturing-copy"><Eyebrow>OUR MANUFACTURING ADVANTAGE</Eyebrow><h2>WE MANUFACTURE<br/><em>OUR OWN.</em></h2><p>{company.manufacturing}</p><div className="manufacturing-facts"><div><Factory/><strong>40,000 sq. ft.</strong><span>Facility in Bidadi</span></div><div><Settings2/><strong>In-house</strong><span>Manufacturing</span></div><div><Boxes/><strong>Modular</strong><span>Systems</span></div></div><Link className="btn btn-dark" to="/manufacturing">EXPLORE MANUFACTURING <ArrowUpRight size={16}/></Link></div>
    </section>
    <section className="section container"><div className="section-heading-row"><SectionTitle eyebrow="WHAT WE DO" title="COMPLETE INTERIOR SOLUTIONS. ONE INTEGRATED PARTNER." text="From the first space plan to final installation, bring the moving parts of your commercial interior project together."/><Link className="text-link" to="/services">VIEW ALL SERVICES <ArrowUpRight size={15}/></Link></div>
      <div className="service-grid">{services.map((s,i)=><Link className="service-card" to={s.path} key={s.title}><div className="service-image"><img src={s.image} alt={s.title}/><span>{s.number}</span></div><div className="service-card-copy"><h3>{s.title}</h3><p>{s.short}</p><span className="card-arrow"><ArrowUpRight size={18}/></span></div></Link>)}</div>
    </section>
    <section className="process-section"><div className="container"><SectionTitle eyebrow="HOW WE WORK" title="A SEAMLESS DESIGN–BUILD–EXECUTE JOURNEY." text="A coordinated project path, with each stage connected to the next."/><div className="process-grid">{processSteps.map(([n,t,d])=><div className="process-step" key={n}><span className="process-number">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></div></section>
    <section className="section container"><div className="section-heading-row"><SectionTitle eyebrow="INDUSTRIES WE SERVE" title="SPACES FOR EVERY BUSINESS ENVIRONMENT." text="Interior solutions shaped around the people, purpose and operations of each environment."/><Link className="text-link" to="/industries">EXPLORE INDUSTRIES <ArrowUpRight size={15}/></Link></div><div className="industry-grid">{industries.map((i,n)=><Link className="industry-card" to={i.path} key={i.title}><img src={i.image} alt={i.title}/><div className="industry-overlay"><span>0{n+1}</span><h3>{i.title}</h3><ArrowUpRight size={18}/></div></Link>)}</div></section>
    <section className="project-feature"><div className="container project-feature-inner"><div><Eyebrow>PROJECT THINKING</Eyebrow><h2>FUNCTIONAL SPACES.<br/><em>CONSIDERED DETAILS.</em></h2><p>Explore illustrative interior concepts and, as the portfolio grows, verified Workform project stories.</p><Link className="btn btn-light" to="/projects">EXPLORE PROJECTS <ArrowUpRight size={16}/></Link></div><img src="/images/office-meeting.webp" alt="Contemporary meeting room concept"/></div></section>
    <CTA/>
  </>;
}

function About() {
  return <><SEO title="About Workform International" description="Discover Workform International's integrated approach to corporate interior design, in-house manufacturing and turnkey execution."/><PageHero eyebrow="ABOUT WORKFORM" title="BUILDING SPACES THAT WORK." text="A corporate interior partner bringing design, manufacturing and project execution together." image="/images/office-lounge.webp"/><Breadcrumb current="About Us"/>
    <section className="section container two-col"><div><Eyebrow>WHO WE ARE</Eyebrow><h2>ONE CONNECTED APPROACH TO COMMERCIAL INTERIORS.</h2></div><div className="body-copy"><p>Workform International delivers integrated corporate interior solutions for businesses and institutions. Our approach connects space planning, interior design, in-house manufacturing and turnkey project execution.</p><p>With our own manufacturing facility in Bidadi, we bring furniture and modular system production into the project journey, supported by hardware, veneers and finishes sourced directly from German suppliers.</p><p>Our focus is on creating functional, considered environments that support the way people work, learn, meet and welcome customers.</p></div></section>
    <section className="dark-band"><div className="container dark-band-grid"><div><Eyebrow>OUR APPROACH</Eyebrow><h2>DESIGN WITH PURPOSE.<br/><em>MAKE WITH CONTROL.</em></h2></div><p>We bring the key stages of a commercial interior project into one connected process: understanding the brief, planning the space, visualising the design, manufacturing furniture, coordinating execution and completing installation.</p></div></section>
    <section className="section container"><SectionTitle eyebrow="WHAT GUIDES US" title="A PRACTICAL APPROACH TO BETTER WORKSPACES."/><div className="value-grid">{[{icon:<Ruler/>,t:"Thoughtful planning",d:"Begin with the business, the people using the space and the practical requirements."},{icon:<Factory/>,t:"In-house manufacturing",d:"Produce cabinets, wardrobes and modular systems at our Bidadi facility."},{icon:<PackageCheck/>,t:"Connected execution",d:"Coordinate design, manufacturing, site work and installation as one project journey."}].map(v=><div className="value-card" key={v.t}><span>{v.icon}</span><h3>{v.t}</h3><p>{v.d}</p></div>)}</div></section><CTA title="Let's talk about the space you're planning."/>
  </>;
}

function Services() {
  return <><SEO title="Corporate Interior Services" description="Explore Workform's corporate office interiors, space planning, turnkey solutions, furniture manufacturing and commercial fit-out services."/><PageHero eyebrow="OUR SERVICES" title="COMPLETE INTERIOR SOLUTIONS. ONE INTEGRATED PARTNER." text="From workplace planning and design to in-house manufacturing and turnkey execution." image="/images/office-hero.webp"/><Breadcrumb current="Services"/><section className="section container"><div className="service-list">{services.map((s,i)=><article className={`service-row ${i%2 ? "reverse":""}`} key={s.title}><div className="service-row-image"><img src={s.image} alt={s.title}/></div><div className="service-row-copy"><Eyebrow>SERVICE {s.number}</Eyebrow><h2>{s.title}</h2><p>{s.description}</p><ul>{s.points.map(p=><li key={p}><Check size={15}/>{p}</li>)}</ul><Link className="text-link" to={s.path}>EXPLORE SERVICE <ArrowUpRight size={15}/></Link></div></article>)}</div></section><CTA/></>;
}

function ServiceDetail({ kind }: { kind: string }) {
  const s = services.find(x => x.path === kind) || services[0];
  return <><SEO title={s.title} description={s.description}/><PageHero eyebrow="WORKFORM SERVICES" title={s.title.toUpperCase()} text={s.short} image={s.image}/><Breadcrumb current={s.title}/><section className="section container two-col"><div><Eyebrow>OUR SOLUTION</Eyebrow><h2>PLANNED AROUND YOUR PROJECT REQUIREMENTS.</h2></div><div className="body-copy"><p>{s.description}</p><p>We work with clients to understand the project brief, intended use, space, materials and delivery requirements before defining the appropriate scope.</p><Link className="btn btn-dark" to="/get-a-quote">DISCUSS YOUR REQUIREMENTS <ArrowUpRight size={16}/></Link></div></section><section className="section section-soft"><div className="container"><SectionTitle eyebrow="SCOPE OF WORK" title="WHAT THIS SERVICE CAN INCLUDE."/><div className="feature-list">{s.points.map((p,i)=><div className="feature-item" key={p}><span>0{i+1}</span><strong>{p}</strong><ArrowUpRight size={17}/></div>)}</div></div></section><section className="section container"><SectionTitle eyebrow="RELATED CAPABILITIES" title="CONNECTED SERVICES."/><div className="related-grid">{services.filter(x=>x.title!==s.title).slice(0,3).map(x=><Link to={x.path} className="related-card" key={x.title}><img src={x.image} alt={x.title}/><h3>{x.title}</h3><span>EXPLORE <ArrowUpRight size={14}/></span></Link>)}</div></section><CTA title="Have a project in mind?" text="Share your requirements and start a conversation with Workform International."/></>;
}

function Industries() {
  return <><SEO title="Industries We Serve" description="Workform International's commercial interior solutions for corporate, IT, education, hospitality, healthcare and industrial environments."/><PageHero eyebrow="INDUSTRIES" title="SPACES FOR EVERY BUSINESS ENVIRONMENT." text="Interior solutions shaped around the requirements of different sectors." image="/images/office-lounge.webp"/><Breadcrumb current="Industries"/><section className="section container"><div className="industry-grid industry-grid-large">{industries.map((i,n)=><Link to={i.path} className="industry-card" key={i.title}><img src={i.image} alt={i.title}/><div className="industry-overlay"><span>0{n+1}</span><h3>{i.title}</h3><ArrowUpRight size={18}/></div><p className="industry-card-desc">{i.description}</p></Link>)}</div></section><CTA/></>;
}

const industryDetails: Record<string,{title:string;eyebrow:string;description:string;solutions:string[];image:string}> = {
  corporate: {title:"Corporate & IT Interiors",eyebrow:"CORPORATE & TECHNOLOGY",description:"Work environments for businesses that need considered planning, practical furniture solutions and spaces for focused work, meetings and collaboration.",solutions:["Corporate headquarters and offices","Executive cabins and boardrooms","Open-plan workstations","Meeting and collaboration spaces","Reception and visitor areas"],image:"/images/industry-corporate.webp"},
  education: {title:"Education Interiors",eyebrow:"EDUCATION & INSTITUTIONS",description:"Functional learning and administrative environments designed around the needs of students, educators and institutional teams.",solutions:["Classrooms and learning spaces","Libraries and study areas","Administrative offices","Staff rooms and meeting spaces","Institutional furniture solutions"],image:"/images/industry-education.webp"},
  hospitality: {title:"Hospitality Interiors",eyebrow:"HOSPITALITY",description:"Welcoming, well-considered environments for guest-facing and operational areas across hospitality settings.",solutions:["Reception and lobby areas","Guest lounges and common spaces","Restaurants and dining environments","Administrative and back-office spaces","Custom furniture and storage"],image:"/images/industry-hospitality.webp"},
  healthcare: {title:"Healthcare Interiors",eyebrow:"HEALTHCARE",description:"Practical interior environments for healthcare facilities, with attention to circulation, operations, durability and user experience.",solutions:["Reception and registration areas","Waiting and visitor spaces","Administrative offices","Staff and meeting areas","Storage and modular furniture"],image:"/images/industry-healthcare.webp"},
  commercial: {title:"Commercial & Industrial Interiors",eyebrow:"COMMERCIAL & INDUSTRIAL",description:"Interior solutions for commercial businesses, showrooms and industrial organisations, shaped around the needs of each space.",solutions:["Commercial offices","Showrooms and customer areas","Industrial administrative offices","Meeting and collaboration spaces","Custom furniture and storage"],image:"/images/industry-commercial.webp"}
};

function IndustryDetail({ type }: { type: string }) {
  const d = industryDetails[type] || industryDetails.corporate;
  return <><SEO title={d.title} description={d.description}/><PageHero eyebrow={d.eyebrow} title={d.title.toUpperCase()} text={d.description} image={d.image}/><Breadcrumb current={d.title}/><section className="section container two-col"><div><Eyebrow>SECTOR SOLUTIONS</Eyebrow><h2>INTERIORS THAT SUPPORT THE WAY YOUR BUSINESS WORKS.</h2></div><div className="body-copy"><p>{d.description}</p><p>Workform brings planning, design, manufacturing and project execution together to respond to the requirements of each environment.</p><Link className="btn btn-dark" to="/get-a-quote">DISCUSS AN INDUSTRY PROJECT <ArrowUpRight size={16}/></Link></div></section><section className="section section-soft"><div className="container"><SectionTitle eyebrow="POSSIBLE PROJECT SCOPE" title="SPACES WE CAN HELP CREATE."/><div className="feature-list">{d.solutions.map((x,i)=><div className="feature-item" key={x}><span>0{i+1}</span><strong>{x}</strong><ArrowUpRight size={17}/></div>)}</div></div></section><CTA/></>;
}

function Manufacturing() {
  return <><SEO title="In-house Furniture Manufacturing in Bidadi" description="Explore Workform International's 40,000 sq. ft. Bidadi manufacturing facility for cabinets, wardrobes and modular systems."/><PageHero eyebrow="IN-HOUSE MANUFACTURING" title="MADE IN-HOUSE. BUILT FOR PERFORMANCE." text="Our manufacturing capability is central to the way we deliver integrated corporate interior solutions." image="/images/factory-illustrative.webp"/><Breadcrumb current="Manufacturing"/><section className="section container two-col"><div><Eyebrow>OUR FACILITY</Eyebrow><h2>40,000 SQ. FT. IN BIDADI.</h2></div><div className="body-copy"><p>{company.manufacturing}</p><p>Our manufacturing page presents the capabilities and process behind our in-house production. Specific machinery, certifications and supplier names can be added once verified company information is available.</p></div></section><section className="manufacturing-dark"><div className="container"><SectionTitle eyebrow="MANUFACTURING JOURNEY" title="FROM MATERIAL TO FINISHED SYSTEM." dark/><div className="factory-steps">{[["01","Material sourcing","Hardware, veneers and finishes sourced from German suppliers."],["02","Preparation","Materials prepared for the required furniture and modular system."],["03","Production","Cabinets, wardrobes and modular systems produced in-house."],["04","Assembly","Components assembled according to the project requirements."],["05","Finishing","Finishes and details completed for the intended application."],["06","Inspection & dispatch","Completed items checked and prepared for project delivery."]].map(x=><div className="factory-step" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></div>)}</div><p className="visual-disclaimer">Process descriptions are indicative; final production procedures should be confirmed with the manufacturing team.</p></div></section><section className="section container"><div className="manufacturing-gallery"><img src="/images/factory-illustrative.webp" alt="Illustrative furniture manufacturing visual"/><div><img src="/images/office-detail.webp" alt="Furniture and finish detail"/><img src="/images/office-workspace.webp" alt="Office furniture application"/></div></div><p className="image-note">Illustrative visuals. Replace with actual Workform factory, product and production photographs before publication.</p></section><CTA title="Discuss your furniture manufacturing requirements."/></>;
}

function Projects() {
  const [filter,setFilter] = useState("All");
  const categories = ["All","Corporate","Commercial","Manufacturing"];
  const filtered = filter==="All" ? projectConcepts : projectConcepts.filter(p=>p.category===filter);
  return <><SEO title="Projects & Interior Concepts" description="Explore Workform International's interior design concepts and project portfolio."/><PageHero eyebrow="OUR PROJECTS" title="SPACES THAT INSPIRE PERFORMANCE." text="A portfolio space for considered corporate interiors, furniture solutions and manufacturing applications." image="/images/office-meeting.webp"/><Breadcrumb current="Projects"/><section className="section container"><div className="filter-row">{categories.map(c=><button key={c} className={filter===c?"filter active":"filter"} onClick={()=>setFilter(c)}>{c}</button>)}</div><div className="project-grid">{filtered.map((p,i)=><Link className="project-card" key={p.title} to={`/projects/${p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}`}><img src={p.image} alt={p.title}/><div><span className="eyebrow">{p.category}</span><h3>{p.title}</h3><p>{p.note}</p><span className="text-link">VIEW CONCEPT <ArrowUpRight size={14}/></span></div></Link>)}</div><p className="image-note">The images and concepts on this page are illustrative visual references, not claims of completed Workform projects. Replace them with approved project photography and details.</p></section><CTA title="Have a project to add to the conversation?"/></>;
}

function Contact() {
  return <><SEO title="Contact Workform International" description="Contact Workform International in Bangalore for corporate interior design, manufacturing and turnkey project enquiries."/><PageHero eyebrow="CONTACT" title="LET'S DISCUSS YOUR NEXT PROJECT." text="Talk to our team about your corporate interior, furniture manufacturing or turnkey project requirements." image="/images/office-lounge.webp"/><Breadcrumb current="Contact"/><section className="section container contact-layout"><div className="contact-info"><Eyebrow>GET IN TOUCH</Eyebrow><h2>START A CONVERSATION.</h2><a className="contact-line" href={company.phoneHref}><Phone/> <span><small>CALL US</small>{company.phone}</span></a><a className="contact-line" href={company.emailHref}><Mail/> <span><small>EMAIL</small>{company.email}</span></a><a className="contact-line" href={company.whatsapp} target="_blank" rel="noreferrer"><MessageCircle/> <span><small>WHATSAPP</small>Chat with Workform</span></a></div><div className="address-cards"><article className="address-card"><span className="address-icon"><Building2/></span><Eyebrow>OFFICE</Eyebrow><h3>Bengaluru Office</h3><p>{company.office}</p><a className="text-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=No.+19+Workspring+Primrose+Road+Ashok+Nagar+Bangalore+560025">OPEN IN MAPS <ArrowUpRight size={14}/></a></article><article className="address-card"><span className="address-icon"><Factory/></span><Eyebrow>PRODUCTION PLANT</Eyebrow><h3>Bidadi Facility</h3><p>{company.factory}</p><a className="text-link" target="_blank" rel="noreferrer" href="https://www.google.com/maps/search/?api=1&query=10A+Sector+2+Phase+1+Bidadi+Industrial+Area+Bangalore+562109">OPEN IN MAPS <ArrowUpRight size={14}/></a></article></div></section><section className="section section-soft"><div className="container contact-form-layout"><div><Eyebrow>PROJECT ENQUIRY</Eyebrow><h2>WHAT ARE YOU PLANNING?</h2><p>Share a few details and our team can follow up about your requirements.</p></div><EnquiryForm compact/></div></section></>;
}

function EnquiryForm({ compact=false }: { compact?: boolean }) {
  const [status,setStatus] = useState("");
  const [whatsappUrl,setWhatsappUrl] = useState("");
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("");
    const formElement = e.currentTarget;
    const form = new FormData(formElement);
    const payload = Object.fromEntries(form.entries());
    const labels: Record<string,string> = {
      full_name:"Customer name", company_name:"Company / organisation", email:"Email",
      phone:"Phone", industry:"Industry", project_type:"Project type",
      project_location:"Project location", project_area:"Approximate area",
      budget_range:"Approximate budget", expected_start_date:"Expected project start",
      requirements:"Project requirements"
    };
    const lines = Object.entries(payload)
      .filter(([key,value]) => key in labels && String(value).trim())
      .map(([key,value]) => `*${labels[key]}:* ${String(value).trim()}`);
    const message = [
      "*NEW WEBSITE ENQUIRY — WORKFORM INTERNATIONAL*",
      "----------------------------------------",
      ...lines,
      "----------------------------------------",
      "Source: Workform International website"
    ].join("\n");
    const url = `${company.whatsapp}?text=${encodeURIComponent(message)}`;
    setWhatsappUrl(url);
    const opened = window.open(url, "_blank", "noopener,noreferrer");
    setStatus(opened
      ? "Your enquiry has been prepared in WhatsApp. Please review the details and press Send to share it with Workform."
      : "Your enquiry is ready. Use the button below to open WhatsApp, review the details and press Send.");
  }
  return <form className={`enquiry-form ${compact?"compact":""}`} onSubmit={submit}>
    <div className="form-grid">
      <label>Full name *<input name="full_name" required placeholder="Your name"/></label>
      <label>Company name<input name="company_name" placeholder="Company / organisation"/></label>
      <label>Work email *<input name="email" type="email" required placeholder="name@company.com"/></label>
      <label>Phone number *<input name="phone" type="tel" required placeholder="+91"/></label>
      <label>Industry<select name="industry" defaultValue="" required><option value="" disabled>Select industry</option>{["Corporate & IT","Education","Hospitality","Healthcare","Commercial","Industrial","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
      <label>Project type<select name="project_type" defaultValue="" required><option value="" disabled>Select project type</option>{["Corporate office interiors","Complete turnkey interiors","Furniture manufacturing","Modular workstations","Education interiors","Hospitality interiors","Healthcare interiors","Commercial fit-out","Other"].map(x=><option key={x}>{x}</option>)}</select></label>
      {!compact && <><label>Project location<input name="project_location" placeholder="City / area"/></label><label>Approximate area<input name="project_area" placeholder="e.g. 10,000 sq. ft."/></label><label>Approximate budget<select name="budget_range" defaultValue=""><option value="">Select if known</option><option>Below ₹10 lakh</option><option>₹10–25 lakh</option><option>₹25–50 lakh</option><option>₹50 lakh–₹1 crore</option><option>Above ₹1 crore</option><option>To be discussed</option></select></label><label>Expected project start<input name="expected_start_date" type="date"/></label></>}
    </div>
    <label>Tell us about your project<textarea name="requirements" rows={compact?3:5} placeholder="Share your requirements, timeline or questions..."/></label>
    <label className="consent"><input type="checkbox" required/> <span>I agree that Workform International may use these details to respond to my enquiry. Read our <Link to="/privacy-policy">Privacy Policy</Link>.</span></label>
    <button className="btn btn-dark form-submit">CONTINUE TO WHATSAPP <MessageCircle size={16}/></button>
    {status && <div className="form-status" role="status">{status}{whatsappUrl && <a className="btn btn-dark whatsapp-form-link" href={whatsappUrl} target="_blank" rel="noreferrer"><MessageCircle size={15}/> OPEN WHATSAPP &amp; SEND</a>}</div>}
    <p className="form-privacy">Your form details are placed into a WhatsApp message addressed to Workform. The message is shared only when you press Send in WhatsApp. Do not submit sensitive personal information.</p>
  </form>;
}

function Quote() {
  return <><SEO title="Request a Corporate Interior Project Quote" description="Share your corporate interior, turnkey execution or furniture manufacturing requirements with Workform International."/><PageHero eyebrow="PROJECT ENQUIRY" title="LET'S DISCUSS YOUR PROJECT." text="Tell us what you are planning. Share your requirements and start a conversation with Workform International." image="/images/office-hero.webp"/><Breadcrumb current="Get a Quote"/><section className="section container quote-layout"><div className="quote-aside"><Eyebrow>START HERE</Eyebrow><h2>YOUR NEXT WORKSPACE STARTS WITH A CONVERSATION.</h2><p>Share the basic project details. Our team can follow up to understand the scope and next steps.</p><div className="quote-assurance"><span><Check/> Corporate interior enquiries</span><span><Check/> Manufacturing requirements</span><span><Check/> Turnkey project discussions</span></div><a href={company.phoneHref} className="text-link"><Phone size={15}/> {company.phone}</a></div><div className="quote-form-panel"><EnquiryForm/></div></section></>;
}



const faqItems = [
  ["What does Workform International do?", "Workform International provides corporate and commercial interior solutions, including design and space planning, turnkey project coordination, custom furniture manufacturing, modular workstations, installation and handover."],
  ["Which industries do you work with?", "The website covers corporate and IT offices, education, hospitality, healthcare, commercial spaces and industrial workplaces. Share your project details so the team can confirm the relevant scope."],
  ["Do you provide complete turnkey projects?", "Yes. Workform can coordinate the project journey from design and planning through manufacturing, site execution, installation and handover. The exact scope is agreed for each project."],
  ["Do you manufacture your own furniture?", "Workform states that it manufactures its own furniture and modular systems at its Bidadi facility. The stated facility area is 40,000 sq. ft."],
  ["Where is the manufacturing facility?", "The production facility is at 10A, Sector 2, Phase 1, Bidadi Industrial Area, Bangalore 562109, India."],
  ["Are materials sourced from Germany?", "Workform states that hardware, veneers and finishes are sourced directly from German suppliers. Material specifications and availability can be discussed during project planning."],
  ["How can I request a project quotation?", "Complete the enquiry form on the website. Your details will be formatted into a WhatsApp message to Workform. Review the message and press Send in WhatsApp to submit your enquiry."],
  ["What information should I provide?", "Share your name, company, contact details, industry, project type, location, approximate area, budget range if known, expected start date and a short description of your requirements."],
  ["Can I visit the office or factory?", "Please contact Workform first to arrange a visit. Office: No. 19, Workspring, Primrose Road, Ashok Nagar, Off MG Road, Bangalore 560025. Factory visits should be arranged in advance."],
  ["How do I contact Workform?", "Call or WhatsApp +91 99007 16198, or email santhosh@workforminternational.com."]
];

const blogPosts = [
  { slug:"planning-a-corporate-office-fit-out", category:"WORKPLACE PLANNING", title:"Planning a Corporate Office Fit-out: What Businesses Should Consider", excerpt:"A practical starting point for planning a workplace around people, teams, operations and future needs.", body:["A successful corporate office begins with understanding how the organisation works. Before choosing finishes or furniture, define the teams using the space, the activities they perform and the way they need to collaborate.","Start with a clear brief. Record the approximate area, headcount, meeting-room needs, visitor flow, storage requirements, technology needs and any operational constraints. This information helps shape a realistic space plan.","Next, coordinate design, furniture, services and execution. Decisions about partitions, lighting, power, data, acoustics and furniture affect one another. An integrated project approach can help teams resolve these dependencies earlier.","Finally, agree on scope, responsibilities, programme assumptions and handover requirements before work begins. Each project is different, so site conditions and detailed specifications should be reviewed by the project team."] },
  { slug:"why-in-house-furniture-manufacturing-matters", category:"MANUFACTURING", title:"Why In-house Furniture Manufacturing Matters in Commercial Interiors", excerpt:"How an integrated design and manufacturing approach can support coordination, customisation and project delivery.", body:["Commercial interiors often require furniture that fits specific layouts, dimensions, workflows and finish schedules. In-house manufacturing can create a closer connection between design decisions and production planning.","When the design and manufacturing teams coordinate, they can review drawings, material choices, hardware and installation requirements together. This can help identify practical issues before products reach the site.","Workform International states that its 40,000 sq. ft. Bidadi facility produces cabinets, wardrobes and modular systems in-house. The company also states that selected hardware, veneers and finishes are sourced directly from German suppliers.","For any project, confirm the approved drawings, material samples, hardware specifications, production schedule and installation sequence before manufacturing begins."] },
  { slug:"turnkey-interiors-from-design-to-handover", category:"PROJECT DELIVERY", title:"Turnkey Commercial Interiors: From Design to Handover", excerpt:"A simple overview of the stages involved in coordinating a commercial interior project.", body:["Turnkey interior work brings multiple project activities into one coordinated programme. The scope may include briefing, space planning, design development, material selection, manufacturing, site execution, installation and handover.","The first step is to define the project brief and site conditions. The next is to develop layouts and design details that can be reviewed and approved by the client and relevant consultants.","Once the scope and specifications are approved, procurement and manufacturing can be planned alongside site readiness. Clear coordination helps align deliveries, installation activities and other trades.","Before handover, review the agreed scope, inspect completed work, record outstanding items and share relevant care or maintenance information. The exact stages and responsibilities should be set out in the project agreement."] }
];

function LegalPage({ type }: { type:"privacy"|"terms" }) {
  const privacy = type === "privacy";
  const title = privacy ? "PRIVACY POLICY" : "TERMS & CONDITIONS";
  return <><SEO title={privacy?"Privacy Policy":"Terms & Conditions"} description={privacy?"How Workform International handles information submitted through its website and enquiry forms.":"Website use and enquiry terms for Workform International."}/><PageHero eyebrow="WORKFORM INTERNATIONAL / INFORMATION" title={title} text={privacy?"A clear explanation of how information shared through this website is used.":"The basic terms that apply when you access and use the Workform International website."} image="/images/office-detail.webp" compact/><Breadcrumb current={privacy?"Privacy Policy":"Terms & Conditions"}/><section className="section container legal-layout"><aside className="legal-aside"><Eyebrow>IMPORTANT INFORMATION</Eyebrow><h2>{privacy?"YOUR INFORMATION, HANDLED WITH CARE.":"CLEAR EXPECTATIONS. BETTER PROJECT CONVERSATIONS."}</h2><p>Workform International</p><p>Questions? Contact <a href={company.emailHref}>{company.email}</a>.</p></aside><article className="legal-content"><p className="legal-updated">Last updated: 25 November 2026</p>{privacy?<>
    <h2>1. About this policy</h2><p>This Privacy Policy explains how Workform International (“Workform”, “we”, “us” or “our”) handles information you choose to provide through this website. It applies to website enquiries, quote requests and contact messages.</p>
    <h2>2. Information you may provide</h2><p>Depending on the form, you may provide your name, company or organisation, work email, phone number, industry, project type, project location, approximate area, budget range, expected start date and project requirements.</p>
    <h2>3. How we use your information</h2><p>We use the information you provide to understand and respond to your enquiry, discuss project requirements, prepare or follow up on a quotation, communicate about a potential project and maintain relevant business correspondence.</p>
    <h2>4. WhatsApp enquiry submission</h2><p>When you submit an enquiry form, the website prepares a message containing the details you entered and opens WhatsApp using Workform’s published business number. You must review and press Send in WhatsApp. Your message is not sent automatically by this website. WhatsApp is operated by a third party and its own terms and privacy policy apply to your use of that service.</p>
    <h2>5. Sharing and service providers</h2><p>Your enquiry details may be visible to the Workform personnel who handle business enquiries. If third-party communication, hosting or website services are used to operate the website, information may be processed by those providers as needed to provide their services. We do not offer your enquiry information for sale.</p>
    <h2>6. Retention and security</h2><p>We retain business correspondence for as long as reasonably needed to respond to enquiries, manage business relationships, meet applicable legal requirements and resolve disputes. We take reasonable steps to protect information, but no internet transmission or electronic storage method can be guaranteed to be completely secure.</p>
    <h2>7. Your choices</h2><p>You may choose not to provide optional information. If you want to ask about, correct or request deletion of information you have shared with Workform, contact us using the details below. We may need to retain certain records where required for legitimate business or legal purposes.</p>
    <h2>8. Third-party websites</h2><p>This website may link to third-party websites or services. We are not responsible for their content, security or privacy practices. Please review their policies before sharing information with them.</p>
    <h2>9. Contact</h2><p>Workform International<br/>Email: <a href={company.emailHref}>{company.email}</a><br/>Phone / WhatsApp: <a href={company.whatsapp} target="_blank" rel="noreferrer">{company.phone}</a><br/>Office: {company.office}</p>
  </>:<>
    <h2>1. Website information</h2><p>This website provides general information about Workform International, its stated services, manufacturing capabilities and project enquiry process. Website content is for general information and does not by itself create a contract or guarantee project availability, pricing, specifications or delivery dates.</p>
    <h2>2. Enquiries and quotations</h2><p>Submitting an enquiry does not constitute acceptance of a project or a binding quotation. Any proposal, quotation, scope, price, schedule, payment terms and deliverables will be confirmed separately in writing by Workform.</p>
    <h2>3. Project scope and specifications</h2><p>Project requirements, site conditions, drawings, dimensions, material selections, finishes, hardware, services, approvals and installation responsibilities must be reviewed and agreed for each project. Images and visualisations on this website may be illustrative and should not be treated as final technical specifications.</p>
    <h2>4. Manufacturing and sourcing statements</h2><p>Information about Workform’s manufacturing facility and sourced materials describes the company’s stated capabilities. Product availability, material specifications, sourcing and suitability are subject to confirmation for the particular project.</p>
    <h2>5. Intellectual property</h2><p>Unless stated otherwise, website text, branding, graphics, design and other content are owned by or used with permission by Workform International. You may not reproduce, republish or commercially exploit website content without prior written permission.</p>
    <h2>6. Acceptable use</h2><p>You agree not to misuse this website, attempt unauthorised access, interfere with its operation, submit unlawful or misleading information, or use website content in a way that infringes another person’s rights.</p>
    <h2>7. Third-party links</h2><p>Links to external websites are provided for convenience. Workform does not control and is not responsible for third-party content, services or policies.</p>
    <h2>8. Liability and changes</h2><p>We aim to keep website information accurate and current but do not warrant that every page is complete, error-free or continuously available. To the extent permitted by applicable law, Workform is not liable for loss arising solely from reliance on general website information. We may update website content and these terms from time to time.</p>
    <h2>9. Governing law and contact</h2><p>These website terms are intended to be governed by the laws of India, subject to applicable law. Any project-specific agreement may contain its own terms. For questions, contact <a href={company.emailHref}>{company.email}</a> or {company.phone}.</p>
  </>}</article></section><CTA title="Have a question about our work?" text="Contact the Workform team to discuss your project or these website terms."/></>;
}

function FAQ() {
  return <><SEO title="Frequently Asked Questions" description="Answers about Workform corporate interiors, turnkey projects, in-house furniture manufacturing and project enquiries."/><PageHero eyebrow="HELP & INFORMATION" title="FREQUENTLY ASKED QUESTIONS." text="Straightforward answers about our services, manufacturing capabilities and project enquiry process." image="/images/office-meeting.webp" compact/><Breadcrumb current="FAQ"/><section className="section container faq-layout"><div className="faq-intro"><Eyebrow>GOOD TO KNOW</Eyebrow><h2>LET'S MAKE THE NEXT STEP CLEAR.</h2><p>Can't find the answer you need? Send your project question to our team.</p><Link className="btn btn-dark" to="/get-a-quote">ASK ABOUT YOUR PROJECT <ArrowUpRight size={15}/></Link></div><div className="faq-list">{faqItems.map(([q,a],i)=><details className="faq-item" key={q}><summary><span>{String(i+1).padStart(2,"0")}</span>{q}<ChevronDown size={17}/></summary><p>{a}</p></details>)}</div></section><CTA/></>;
}

function Blogs() {
  return <><SEO title="Insights & Blogs" description="Practical insights on corporate office planning, commercial interiors, in-house furniture manufacturing and turnkey project delivery."/><PageHero eyebrow="IDEAS / PLANNING / DELIVERY" title="INSIGHTS FOR BETTER WORKSPACES." text="Practical perspectives on planning, manufacturing and delivering commercial interiors." image="/images/office-lounge.webp" compact/><Breadcrumb current="Blogs"/><section className="section container"><div className="section-title"><Eyebrow>FROM THE WORKFORM TEAM</Eyebrow><h2>IDEAS THAT MOVE PROJECTS FORWARD.</h2><p>Guides to help businesses ask better questions and plan their next workspace.</p></div><div className="blog-grid">{blogPosts.map((post,i)=><article className="blog-card" key={post.slug}><div className="blog-card-image"><img src={["/images/service-space-planning.webp","/images/factory-production.webp","/images/service-turnkey-fitout.webp"][i]} alt=""/></div><div className="blog-card-copy"><span className="eyebrow">{post.category}</span><h3>{post.title}</h3><p>{post.excerpt}</p><Link className="text-link" to={`/blogs/${post.slug}`}>READ ARTICLE <ArrowUpRight size={14}/></Link></div></article>)}</div></section><CTA title="Planning a commercial interior project?" text="Talk to Workform about your space, manufacturing and turnkey requirements."/></>;
}

function BlogArticle() {
  const { slug } = useParams();
  const post = blogPosts.find(p=>p.slug===slug);
  if(!post) return <NotFound/>;
  return <><SEO title={post.title} description={post.excerpt}/><PageHero eyebrow={`WORKFORM INSIGHTS / ${post.category}`} title={post.title.toUpperCase()} text={post.excerpt} image="/images/office-detail.webp" compact/><Breadcrumb current={post.title}/><article className="section container blog-article"><div className="blog-article-body"><span className="eyebrow">{post.category}</span>{post.body.map((paragraph,i)=><p key={i}>{paragraph}</p>)}<Link className="text-link" to="/blogs">← BACK TO ALL INSIGHTS</Link></div><aside className="blog-article-aside"><Eyebrow>NEED PROJECT INPUT?</Eyebrow><h3>LET'S TALK ABOUT YOUR WORKSPACE.</h3><p>Share your brief with our team and discuss the next steps.</p><Link className="btn btn-dark" to="/get-a-quote">REQUEST A QUOTE <ArrowUpRight size={15}/></Link></aside></article><CTA/></>;
}

function ProjectDetail() {
  const { slug } = useParams();
  const project = projectConcepts.find((p) => p.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") === slug);
  if (!project) return <NotFound />;
  return <><SEO title={project.title} description={`${project.title} — illustrative interior concept by Workform International.`}/><PageHero eyebrow={`PROJECT CONCEPT / ${project.category.toUpperCase()}`} title={project.title.toUpperCase()} text="An illustrative visual direction for commercial interior environments. This is not represented as a completed Workform client project." image={project.image}/><Breadcrumb current={project.title}/><section className="section container two-col"><div><Eyebrow>CONCEPT OVERVIEW</Eyebrow><h2>CONSIDERED SPACES. PRACTICAL DETAILS.</h2></div><div className="body-copy"><p>This page is a sample portfolio detail layout. Replace the concept image and text with an approved Workform project, verified location, project scope and real photography before presenting it as completed work.</p><p>Workform's integrated approach connects planning, design, in-house manufacturing and project execution.</p><Link className="btn btn-dark" to="/get-a-quote">DISCUSS A SIMILAR PROJECT <ArrowUpRight size={16}/></Link></div></section><section className="section section-soft"><div className="container"><img className="project-detail-image" src={project.image} alt={project.title}/><p className="image-note">Illustrative concept visualisation — not a verified completed project.</p></div></section><CTA/></>;
}

function NotFound() {
  return <section className="not-found container"><Eyebrow>404 / PAGE NOT FOUND</Eyebrow><h1>THIS SPACE ISN'T HERE.</h1><p>The page may have moved or the link may be incorrect.</p><Link className="btn btn-dark" to="/">RETURN HOME <ArrowUpRight size={16}/></Link></section>;
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({top:0,behavior:"auto"}); }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  return <><ScrollToTop/><Layout><AnimatePresence mode="wait"><motion.div key={location.pathname} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-5}} transition={{duration:.22}}>
    <Routes location={location}>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/corporate-office-interiors-bangalore" element={<ServiceDetail kind="/corporate-office-interiors-bangalore"/>}/>
      <Route path="/turnkey-commercial-interiors" element={<ServiceDetail kind="/turnkey-commercial-interiors"/>}/>
      <Route path="/office-furniture-manufacturing" element={<ServiceDetail kind="/office-furniture-manufacturing"/>}/>
      <Route path="/modular-office-workstations" element={<ServiceDetail kind="/modular-office-workstations"/>}/>
      <Route path="/industries" element={<Industries/>}/>
      <Route path="/industries/corporate-it" element={<IndustryDetail type="corporate"/>}/>
      <Route path="/industries/education" element={<IndustryDetail type="education"/>}/>
      <Route path="/industries/hospitality" element={<IndustryDetail type="hospitality"/>}/>
      <Route path="/industries/healthcare" element={<IndustryDetail type="healthcare"/>}/>
      <Route path="/industries/commercial-industrial" element={<IndustryDetail type="commercial"/>}/>
      <Route path="/manufacturing" element={<Manufacturing/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/projects/:slug" element={<ProjectDetail/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/get-a-quote" element={<Quote/>}/>
      <Route path="/privacy-policy" element={<LegalPage type="privacy"/>}/>
      <Route path="/terms" element={<LegalPage type="terms"/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      <Route path="/blogs" element={<Blogs/>}/>
      <Route path="/blogs/:slug" element={<BlogArticle/>}/>
      <Route path="*" element={<NotFound/>}/>
    </Routes>
  </motion.div></AnimatePresence></Layout></>;
}
