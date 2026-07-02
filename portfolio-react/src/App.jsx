import { useState } from 'react'
import profilePhoto from './assets/profile.png'

const projects = [
  {
    id: 'CS-01',
    name: 'Amaz Furniture',
    url: 'https://amaz-furniture.pages.dev/',
    domain: 'amaz-furniture.pages.dev',
    liveDesc: 'A furniture brand showcase site with a clean catalogue layout and product browsing.',
    caseDesc: 'Giving a furniture business a clean, browsable online catalogue to showcase pieces beyond word-of-mouth.',
    tags: ['Catalogue Site', 'Responsive UI'],
    testiProjectDesc: 'An online catalogue site for browsing the full furniture range.',
    quote: '"Agaba understood exactly what we needed. Customers can now browse our pieces online before ever stepping into the showroom."',
    person: 'Amani Mbabazi',
    role: 'Owner, Amaz Furniture',
    initials: 'AM',
  },
  {
    id: 'CS-02',
    name: 'Concrete Estimator',
    url: 'https://concrete-estimator-d7v.pages.dev/',
    domain: 'concrete-estimator-d7v.pages.dev',
    liveDesc: 'A web app that helps contractors and homeowners calculate concrete material needs and project costs.',
    caseDesc: 'Building a fast, easy-to-use calculator so clients can estimate concrete volume and costs before committing to a build.',
    tags: ['Web App', 'Cost Calculator'],
    testiProjectDesc: 'An interactive tool for estimating concrete material quantities and costs.',
    quote: '"The estimator has saved us hours on every quote. It\'s accurate, quick, and easy for clients to understand."',
    person: 'Peter Ssentongo',
    role: 'Site Manager, BuildRight Contractors',
    initials: 'PS',
  },
]

function Nav() {
  const [isHireMenuOpen, setIsHireMenuOpen] = useState(false)

  return (
    <nav>
      <div className="wrap">
        <div className="brand">agaba<span>.</span>kelly<span>()</span></div>
        <div className="navlinks">
          <a href="#work">live work</a>
          <a href="#cases">case studies</a>
          <a href="#testimonials">testimonials</a>
          <a href="#contact">contact</a>
        </div>
        <div className="nav-actions">
          <div className="hire-menu-wrap">
            <button
              type="button"
              className="btn btn-ghost"
              style={{ padding: '9px 18px', fontSize: '13px', color: '#ff4d4f' }}
              onClick={() => setIsHireMenuOpen((value) => !value)}
              aria-expanded={isHireMenuOpen}
            >
              Hire me
            </button>
            {isHireMenuOpen && (
              <div className="hire-menu">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=agabakelly6@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hire-option"
                  onClick={() => setIsHireMenuOpen(false)}
                >
                  Email me
                </a>
                <a
                  href="https://wa.me/256702587863"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hire-option"
                  onClick={() => setIsHireMenuOpen(false)}
                >
                  WhatsApp me
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header className="hero">
      <div className="wrap">
        <div>
          <div className="eyebrow">
            <span className="dot"></span>AVAILABLE FOR FREELANCE WORK
          </div>
          <h1>
            I turn bold ideas into
            <br />
            <span className="accent">high-performing websites</span>
            <br />
            for brands, startups, and creators.
          </h1>
          <div className="hero-badge">Young & driven • Web developer and designer from Uganda</div>
          <p className="lead">
            I’m Agaba Kelly, creating fast, modern, and conversion-focused digital experiences for ambitious people and organisations.
          </p>
          <div className="hero-ctas">
            <a href="#cases" className="btn btn-primary">
              View case studies →
            </a>
            <a href="#contact" className="btn btn-ghost">
              Get in touch
            </a>
          </div>
          <div className="stack-row">
            <span>HTML / CSS</span>
            <span>React</span>
            <span>Tailwind CSS</span>
          </div>
        </div>

        <div className="photo-card">
          <img src={profilePhoto} alt="Portrait of Agaba Kelly" />
          <div className="photo-fallback">AK</div>
          <div className="photo-tag">
            <div>
              <b>Agaba Kelly</b>Web Developer & Designer
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

function LiveWork() {
  return (
    <section id="work">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="tag">// LIVE PROJECTS</span>
            <h2>See the work running live</h2>
          </div>
          <p>Click through to the actual deployed sites — no screenshots, just the real thing in your browser.</p>
        </div>

        <div className="review-grid">
          {projects.map((p) => (
            <div className="review-card" key={p.id}>
              <div className="browser-bar">
                <div className="dots">
                  <i></i>
                  <i></i>
                  <i></i>
                </div>
                <div className="url">{p.domain}</div>
              </div>
              <div className="review-body">
                <div className="review-status">
                  <span className="pulse"></span>LIVE
                </div>
                <h3>{p.name}</h3>
                <p>{p.liveDesc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="review-link">
                  Visit live site →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CaseStudies() {
  return (
    <section id="cases">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="tag">// CASE STUDIES</span>
            <h2>How each project came together</h2>
          </div>
          <p>The brief, the build, and the result — a closer look behind recent projects.</p>
        </div>

        <div className="case-list">
          {projects.map((p) => (
            <div className="case-row" key={p.id}>
              <div className="cid">{p.id}</div>
              <div>
                <h3>{p.name}</h3>
                <div className="desc">{p.caseDesc}</div>
              </div>
              <div className="case-tags">
                {p.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a href={p.url} target="_blank" rel="noopener noreferrer" className="view">
                View live site
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section id="testimonials">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="tag">// CLIENT TESTIMONIALS</span>
            <h2>What clients say, next to what was built</h2>
          </div>
        </div>

        <div className="testi-grid">
          {projects.map((p) => (
            <div className="testi-row" key={p.id}>
              <div className="testi-project">
                <div className="ptag">PROJECT</div>
                <h3>{p.name}</h3>
                <p>{p.testiProjectDesc}</p>
              </div>
              <div className="testi-quote">
                <p>{p.quote}</p>
                <div className="quote-person">
                  <div className="avatar-dot">{p.initials}</div>
                  <div className="who">
                    <b>{p.person}</b>
                    <span>{p.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills">
      <div className="wrap">
        <div className="section-head">
          <div>
            <span className="tag">// TOOLKIT</span>
            <h2>What I work with</h2>
          </div>
        </div>
        <div className="skills-strip">
          <div className="skill-pill">
            <i></i>HTML &amp; CSS
          </div>
          <div className="skill-pill">
            <i></i>React
          </div>
          <div className="skill-pill">
            <i></i>Tailwind CSS
          </div>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact">
      <div className="wrap contact-grid">
        <div>
          <span className="tag">// GET IN TOUCH</span>
          <h2>Let's build your next site.</h2>
          <p>
            Open to freelance projects, contract work, and long-term collaborations with local
            businesses and teams.
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agabakelly6@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Email me
          </a>
        </div>

        <div className="contact-list">
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=agabakelly6@gmail.com" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div>
              <div className="label">EMAIL</div>
              <div className="value">agabakelly6@gmail.com</div>
            </div>
            <span className="arrow">→</span>
          </a>
          <a href="https://wa.me/256702587863" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div>
              <div className="label">WHATSAPP</div>
              <div className="value">0702 587 863</div>
            </div>
            <span className="arrow">→</span>
          </a>
          <a href="https://github.com/agabakelly6" target="_blank" rel="noopener noreferrer" className="contact-item">
            <div>
              <div className="label">GITHUB</div>
              <div className="value">github.com/agabakelly6</div>
            </div>
            <span className="arrow">→</span>
          </a>
          <div className="contact-item">
            <div>
              <div className="label">LOCATION</div>
              <div className="value">Kampala, Uganda</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>© 2026 Agaba Kelly. Built from scratch, line by line.</div>
        <div className="status">
          <span className="pulse"></span>Currently accepting new projects
        </div>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <LiveWork />
      <CaseStudies />
      <Testimonials />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
