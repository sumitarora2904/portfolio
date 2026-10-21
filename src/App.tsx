import { useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowDown, ArrowDownRight, ArrowUpRight, AtSign, Check,
  ChevronDown, Command, Download, ExternalLink, Globe2, Laptop, Linkedin,
  Menu, Network, ShieldCheck, Sparkles, Terminal, Wrench, X
} from 'lucide-react'
import Scene from './Scene'

const nav = ['Home', 'About', 'Experience', 'Projects', 'Skills', 'Education', 'Contact']

const roles = [
  {
    role: 'Senior IT Support Executive',
    company: 'Zouma Consulting Services',
    location: 'Mohali',
    dates: 'August 2026 — Present',
    current: true,
    points: [
      'Provide technical support for hardware, software, Windows, Microsoft 365, network, and user-access issues.',
      'Troubleshoot desktop, laptop, printer, peripheral, and connectivity issues.',
      'Support Microsoft 365 applications, Outlook, Teams, account access, and configuration.',
      'Assist with IT onboarding, system setup, software installation, and user account management.',
      'Maintain IT assets, system documentation, and support records.'
    ]
  },
  {
    role: 'IT Administrator',
    company: 'Terrasparq Tech Pvt. Ltd.',
    location: 'Zirakpur',
    dates: 'April 2025 — July 2026',
    points: [
      'Administered Microsoft 365 user accounts, license assignment, mailbox management, and Teams support.',
      'Installed, configured, and maintained desktops, laptops, routers, tablets, and iPads.',
      'Monitored and troubleshot LAN/WAN connectivity and performance.',
      'Handled IT asset management, system upgrades, and service requests through NetSuite.',
      'Maintained IT documentation, policies, and standard operating procedures.'
    ]
  },
  {
    role: 'IT Helpdesk & Website Developer',
    company: 'OverIT Pvt. Ltd.',
    location: 'Jalandhar, Punjab',
    dates: 'July 2022 — April 2025',
    points: [
      'Delivered L1/L2 support for hardware, software, and network issues.',
      'Installed and configured operating systems, printers, and peripherals.',
      'Implemented and managed client ticketing systems and created technical documentation.',
      'Developed responsive websites using HTML, CSS, JavaScript, and WordPress.',
      'Applied SEO strategies to improve website performance.'
    ]
  },
  {
    role: 'IT Coordinator',
    company: 'Fortune Avenue (Member ITC’s Hotel Group)',
    location: 'Jalandhar, Punjab',
    dates: 'September 2021 — November 2022',
    points: [
      'Managed router configurations and network troubleshooting.',
      'Managed Active Directory users, groups, and domain policies.',
      'Maintained CCTV systems, IT infrastructure, and audio systems.',
      'Provided on-site and remote technical support.',
      'Conducted system updates and security patch management.'
    ]
  }
]

const skillGroups = [
  { title: 'Operating systems', icon: Laptop, skills: ['Windows', 'Linux', 'Android', 'iOS'] },
  { title: 'Microsoft 365', icon: Command, skills: ['User management', 'Exchange Online', 'Teams administration', 'SharePoint basics', 'License management', 'Outlook configuration'] },
  { title: 'Server administration', icon: Network, skills: ['Active Directory', 'Windows Server', 'Domain Controller management'] },
  { title: 'Networking', icon: Globe2, skills: ['Router configuration', 'LAN/WAN troubleshooting', 'TCP/IP', 'Basic firewall configuration'] },
  { title: 'IT support', icon: Wrench, skills: ['Hardware & software troubleshooting', 'Remote support', 'System installation', 'IT documentation', 'System updates & patching', 'Basic cybersecurity practices'] },
  { title: 'Tools & web', icon: Terminal, skills: ['NetSuite', 'Screen Connect', 'Datto', 'Support System', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'WordPress'] },
]

const certifications = [
  'Google IT Support Professional Certificate (Coursera)',
  'Microsoft IT Support Specialist Professional Certificate (Coursera)',
  'IBM IT Support Professional Certificate (Coursera)',
  'Microsoft Cybersecurity Analyst (Coursera)',
  'Google Cybersecurity (Coursera)',
]

const capabilities = [
  {
    number: '01',
    icon: Command,
    title: 'Microsoft 365 administration',
    text: 'User accounts, license assignment, mailbox management, Outlook configuration, and Teams support.',
    tags: ['Microsoft 365', 'Exchange Online', 'Teams'],
  },
  {
    number: '02',
    icon: Network,
    title: 'Infrastructure & network support',
    text: 'Device setup, LAN/WAN troubleshooting, router configuration, Active Directory, and ongoing system maintenance.',
    tags: ['Networking', 'Active Directory', 'Windows'],
  },
  {
    number: '03',
    icon: Globe2,
    title: 'Web development & SEO',
    text: 'Responsive website development with HTML, CSS, JavaScript, and WordPress, plus practical SEO work.',
    tags: ['HTML / CSS', 'JavaScript', 'WordPress'],
  },
]

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: reduced ? 0 : 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}


function SectionHeading({
  index,
  eyebrow,
  title,
  copy,
}: {
  index: string
  eyebrow: string
  title: ReactNode
  copy?: string
}) {
  return (
    <div className="section-heading">
      <div className="eyebrow">
        <span>{index}</span>
        <i />
        {eyebrow}
      </div>
      <h2>{title}</h2>
      {copy && <p>{copy}</p>}
    </div>
  )
}


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')
  const [expandedRole, setExpandedRole] = useState<number | null>(0)
  const reduced = useReducedMotion()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const name = entry.target.getAttribute('data-nav')
          if (name) setActive(name)
        }
      })
    }, { rootMargin: '-35% 0px -55% 0px' })
    document.querySelectorAll('[data-nav]').forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const goTo = (item: string) => {
    setMenuOpen(false)
    document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <div className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('Home') }} aria-label="Sumit Arora home">
          <span className="brand-mark">SA<span>.</span></span>
          <span className="brand-label">SUMIT ARORA<small>IT ADMINISTRATION</small></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
          {nav.map((item) => (
            <button key={item} className={active === item ? 'nav-link active' : 'nav-link'} onClick={() => goTo(item)}>{item}</button>
          ))}
          <a className="nav-contact" href="mailto:arorasumit578@gmail.com">Let’s talk <ArrowUpRight size={14} /></a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <main>
        <section id="home" data-nav="Home" className="hero section-wrap">
          <div className="hero-copy">
            <motion.div className="availability" initial={reduced ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="status-dot" /> IT INFRASTRUCTURE · TECHNICAL SUPPORT
            </motion.div>
            <motion.h1 initial={reduced ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.28 }}>
              Technology<br />that <span className="gradient-text">just works.</span>
            </motion.h1>
            <motion.p className="hero-description" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.7 }}>
              I’m Sumit Arora — an IT professional focused on infrastructure management, Microsoft 365, network administration, and dependable technical support.
            </motion.p>
            <motion.div className="hero-actions" initial={reduced ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.75 }}>
              <button className="button button-primary" onClick={() => goTo('Projects')}>Explore my work <ArrowDownRight size={17} /></button>
              <a className="button button-quiet" href="/assets/Sumit_Arora.pdf" download><Download size={16} /> Download resume</a>
            </motion.div>
            <motion.div className="hero-meta" initial={reduced ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
              <span><b>5+</b> years of experience*</span><span className="meta-divider" /><span>Jalandhar · Punjab region</span>
            </motion.div>
          </div>

          <motion.div className="hero-visual" initial={reduced ? false : { opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.1, delay: 0.25 }}>
            <div className="visual-grid" />
            <div className="visual-glow" />
            <Scene />
            <div className="portrait-frame">
              <img src="/assets/sumit-arora.jpg" alt="Professional portrait of Sumit Arora" fetchPriority="high" />
              <div className="portrait-shade" />
              <div className="portrait-caption"><span className="caption-kicker">THE PERSON BEHIND THE SYSTEMS</span><strong>Sumit Arora</strong><span>IT Administrator · Technical Support</span></div>
            </div>
            <div className="orbit-label orbit-top"><span className="orbit-dot" /> SYSTEMS ONLINE</div>
            <div className="orbit-label orbit-bottom"><Sparkles size={13} /> BUILT ON RELIABILITY</div>
            <div className="visual-index">01 <span>/</span> 07</div>
          </motion.div>
          <button className="scroll-cue" onClick={() => goTo('About')}><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></button>
        </section>

        <section id="about" data-nav="About" className="section-wrap section-block about-section">
          <SectionHeading index="01" eyebrow="A little about me" title={<>Good technology is<br /><span className="muted-title">quietly dependable.</span></>} copy="My work sits where people, systems, and infrastructure meet — keeping everyday technology reliable, secure, and useful." />
          <div className="about-grid">
            <Reveal className="about-note">
              <span className="card-overline">MY APPROACH</span>
              <p>From resolving day-to-day user issues to administering Microsoft 365 and maintaining networks, I focus on practical solutions that keep teams moving.</p>
              <p>My experience also includes building responsive websites — a complementary skill set that helps me see technology from both the infrastructure and user-facing sides.</p>
              <a className="text-link" href="https://www.linkedin.com/in/sumit-arora2904/" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
            </Reveal>
            <div className="about-stats">
              <Reveal className="stat-card" delay={0.05}><span className="stat-icon"><ShieldCheck size={18} /></span><strong>Reliable</strong><span>System support & upkeep</span></Reveal>
              <Reveal className="stat-card" delay={0.12}><span className="stat-icon"><Network size={18} /></span><strong>Connected</strong><span>Networks & user access</span></Reveal>
              <Reveal className="stat-card" delay={0.19}><span className="stat-icon"><Terminal size={18} /></span><strong>Hands-on</strong><span>Support & web technologies</span></Reveal>
              <Reveal className="stat-card" delay={0.26}><span className="stat-icon"><Wrench size={18} /></span><strong>Practical</strong><span>Troubleshooting mindset</span></Reveal>
            </div>
          </div>
          <p className="fine-print">*Experience duration is stated as in the supplied resume; role dates are reproduced from the source document.</p>
        </section>

        <section id="experience" data-nav="Experience" className="section-wrap section-block experience-section">
          <SectionHeading index="02" eyebrow="Career timeline" title={<>Experience built<br /><span className="muted-title">one system at a time.</span></>} copy="A hands-on path across IT coordination, helpdesk support, website development, and infrastructure administration." />
          <div className="timeline">
            {roles.map((role, index) => (
              <Reveal key={role.company} className={`timeline-item ${role.current ? 'current-role' : ''}`} delay={index * 0.04}>
                <div className="timeline-marker"><span /></div>
                <button className="timeline-card" onClick={() => setExpandedRole(expandedRole === index ? null : index)} aria-expanded={expandedRole === index}>
                  <div className="timeline-topline"><span className="role-dates">{role.dates}</span>{role.current && <span className="current-badge"><i /> CURRENT ROLE</span>}<ChevronDown className={expandedRole === index ? 'chevron turned' : 'chevron'} size={17} /></div>
                  <h3>{role.role}</h3>
                  <div className="company-line">{role.company}<span>·</span><span>{role.location}</span></div>
                  {expandedRole === index && (
                    <motion.ul className="responsibility-list" initial={reduced ? false : { opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} transition={{ duration: reduced ? 0 : 0.25 }}>
                      {role.points.map((point) => <li key={point}>{point}</li>)}
                    </motion.ul>
                  )}
                  <div className="timeline-foot">{expandedRole === index ? 'SHOW LESS' : 'VIEW RESPONSIBILITIES'} <ArrowDownRight size={14} /></div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" data-nav="Projects" className="section-wrap section-block projects-section">
          <SectionHeading index="03" eyebrow="Selected work areas" title={<>The work behind<br /><span className="muted-title">the uptime.</span></>} copy="Your resume doesn't list standalone named projects, so this showcase highlights documented areas of responsibility rather than inventing project case studies." />
          <div className="capability-grid">
            {capabilities.map((item, index) => {
              const Icon = item.icon
              return <Reveal key={item.number} className="capability-card" delay={index * 0.08}>
                <div className="capability-top"><span className="capability-number">{item.number} / 03</span><span className="capability-icon"><Icon size={20} /></span></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="tag-row">{item.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                <div className="capability-bottom"><span>DOCUMENTED EXPERIENCE</span><ArrowUpRight size={16} /></div>
              </Reveal>
            })}
          </div>
        </section>

        <section id="skills" data-nav="Skills" className="section-wrap section-block skills-section">
          <SectionHeading index="04" eyebrow="Technical toolkit" title={<>A practical, <span className="muted-title">wide-ranging toolkit.</span></>} copy="Grouped from the skills and technologies listed in the resume. No proficiency scores or invented rankings." />
          <div className="skills-grid">
            {skillGroups.map((group, index) => {
              const Icon = group.icon
              return <Reveal key={group.title} className="skill-card" delay={(index % 3) * 0.06}>
                <div className="skill-heading"><span className="skill-icon"><Icon size={17} /></span><h3>{group.title}</h3><span className="skill-count">{String(group.skills.length).padStart(2, '0')}</span></div>
                <div className="skill-tags">{group.skills.map(skill => <span key={skill}>{skill}</span>)}</div>
              </Reveal>
            })}
          </div>
        </section>

        <section id="education" data-nav="Education" className="section-wrap section-block education-section">
          <SectionHeading index="05" eyebrow="Education & credentials" title={<>Built on a foundation<br /><span className="muted-title">of learning.</span></>} />
          <div className="education-grid">
            <Reveal className="education-card">
              <span className="card-overline">EDUCATION · 2021</span>
              <div className="education-emblem"><Command size={22} /></div>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Doaba College</p><span className="education-place">Jalandhar, Punjab</span>
              <div className="education-bottom"><span>GRADUATED</span><strong>May 2021</strong></div>
            </Reveal>
            <Reveal className="certifications-card" delay={0.1}>
              <div className="cert-header"><span className="skill-icon"><ShieldCheck size={17} /></span><div><span className="card-overline">PROFESSIONAL DEVELOPMENT</span><h3>Certifications</h3></div><span className="cert-total">05</span></div>
              <ul className="cert-list">{certifications.map(cert => <li key={cert}><span className="cert-check"><Check size={13} /></span>{cert}</li>)}</ul>
            </Reveal>
          </div>
          <Reveal className="languages-strip">
            <span className="card-overline">LANGUAGES</span><div><span>English <i>Fluent</i></span><span>Hindi <i>Fluent</i></span><span>Punjabi <i>Fluent</i></span></div>
          </Reveal>
        </section>

        <section id="contact" data-nav="Contact" className="section-wrap section-block contact-section">
          <div className="contact-panel">
            <div className="contact-orb" />
            <Reveal className="contact-content">
              <div className="eyebrow"><span>06</span><i /> GET IN TOUCH</div>
              <h2>Let’s build something<br /><span className="gradient-text">meaningful.</span></h2>
              <p>For professional opportunities, technical conversations, or collaboration, feel free to reach out.</p>
              <a className="button button-primary" href="mailto:arorasumit578@gmail.com">Start a conversation <ArrowUpRight size={17} /></a>
            </Reveal>
            <div className="contact-links">
              <a href="mailto:arorasumit578@gmail.com"><span className="contact-link-icon"><AtSign size={17} /></span><span><small>EMAIL</small><strong>arorasumit578@gmail.com</strong></span><ArrowUpRight size={15} /></a>
              <a href="tel:+919653484711"><span className="contact-link-icon"><Command size={17} /></span><span><small>PHONE</small><strong>+91 96534 84711</strong></span><ArrowUpRight size={15} /></a>
              <a href="https://www.linkedin.com/in/sumit-arora2904/" target="_blank" rel="noreferrer"><span className="contact-link-icon"><Linkedin size={17} /></span><span><small>LINKEDIN</small><strong>sumit-arora2904</strong></span><ExternalLink size={15} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand footer-brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('Home') }}><span className="brand-mark">SA<span>.</span></span></a>
        <span>© {new Date().getFullYear()} Sumit Arora</span>
        <span className="footer-note"><span className="status-dot" /> BUILT WITH CARE</span>
        <a href="#home" onClick={(e) => { e.preventDefault(); goTo('Home') }} className="back-top">BACK TO TOP <ArrowUpRight size={14} /></a>
      </footer>
    </div>
  )
}
