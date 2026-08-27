import { useState } from 'react'
import './App.css'

const projectCards = [
  {
    name: 'Avio',
    description:
      'Avio is an AI-powered smart wallet assistant that lets users issue natural-language instructions to perform automated payments, savings, conditional transfers, or escrow releases.',
    stack: ['Nodejs', 'Express', 'MongoDB'],
    liveUrl: 'https://avioprototype.netlify.app/',
  },
  {
    name: 'Chainchat',
    description:
      'Chainchat is a messaging app built for Web3. It unifies on-chain group messaging with instant direct chats and secure identity tools for communities and teams.',
    stack: ['Express', 'Nodejs', 'React', 'MongoDB'],
    liveUrl: 'https://chainchatprototype.netlify.app/',
  },
  {
    name: 'Iclick',
    description:
      'Iclick is an Injective 1-Click Alpha Gateway that turns a shared link into a pre-filled trade confirmation, combining wallet authentication, market data, and testnet order flows.',
    stack: ['Next.js', 'React', 'Injective SDK', 'Privy', 'Tailwind CSS'],
    repoUrl: 'https://github.com/webhoster45/Iclick',
  },
  {
    name: 'Gbengaayo Catering Services',
    description:
      'A premium Nigerian catering website presenting authentic cuisine, menu specials, event catering, a visual gallery, booking flow, and luxury hospitality storytelling.',
    stack: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Responsive Design'],
    liveUrl: 'https://gcservices.netlify.app/',
  },
  {
    name: 'Starkvault Waitlist',
    description:
      'A pre-launch waitlist landing page designed to collect early user interest for a product under development with a clean UI and launch flow.',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Nodejs', 'Express', 'MongoDB'],
    liveUrl: 'https://starkvaultwaitlist.netlify.app/',
    repoUrl: 'https://github.com/webhoster45/shadowvault-starknet',
  },
  {
    name: 'TaskUp',
    description: 'A full-stack task-management application where users can create accounts, sign in, and manage their personal tasks from a dashboard.',
    stack: ['Node.js', 'Express', 'EJS', 'JWT'],
    repoUrl: 'https://github.com/webhoster45/TaskUp',
  },
  {
    name: 'StudyStream',
    description: 'A lightweight full-stack study tool that turns uploaded academic PDFs into structured revision notes, summaries, key points, and definitions.',
    stack: ['JavaScript', 'Tailwind CSS', 'Vercel', 'pdf-parse'],
    repoUrl: 'https://github.com/webhoster45/studystream',
  },
  {
    name: 'SolarSphere',
    description: 'Sustainability-driven product concept with a polished landing experience and strong visual storytelling.',
    stack: ['UI/UX', 'Landing', 'Brand'],
    repoUrl: 'https://github.com/webhoster45/solarsphere',
  },
  {
    name: 'QuickTest MVP',
    description: 'A quiz-platform backend for UNIPaul Awka students, supporting course discovery, question banks, scoring, attempt history, leaderboards, and uploads.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    liveUrl: 'https://quicktest-mvp.netlify.app/',
    repoUrl: 'https://github.com/webhoster45/QuickTesT-MVP',
  },
  {
    name: 'Jue',
    description: 'A Node.js backend prototype for queueing email jobs, with user authentication, MongoDB job records, and pending, processing, and completed statuses.',
    stack: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    repoUrl: 'https://github.com/webhoster45/Jue',
  },
  {
    name: 'URL Short',
    description: 'An Express URL shortener that creates six-character short codes, stores the original links and click data locally, and redirects visitors to the saved destination.',
    stack: ['Node.js', 'Express', 'JSON Storage'],
    repoUrl: 'https://github.com/webhoster45/url-shortener',
  },
  {
    name: 'ChatMe',
    description: 'A real-time Node.js and Socket.IO chat application with JWT authentication, user registration, private messaging, and locally stored messages.',
    stack: ['Node.js', 'Socket.IO', 'JWT', 'JavaScript'],
    repoUrl: 'https://github.com/webhoster45/Chatme',
  },
  {
    name: 'ImpactBridge',
    description: 'Community-impact platform concept designed for engagement, information flow, and digital storytelling.',
    stack: ['Platform', 'Community', 'UX'],
    repoUrl: 'https://github.com/Georgeozoemena/ImpactBridge',
  },
  {
    name: 'Mini-Cloud',
    description: 'A lightweight Express file-storage app that accepts multi-file uploads, saves file metadata locally, and exposes a route to retrieve uploaded files.',
    stack: ['Node.js', 'Express', 'Multer', 'File Storage'],
    repoUrl: 'https://github.com/webhoster45/mini-cloud',
  },
]

const graphicDesignImages = Object.values(
  import.meta.glob('../public/graphic-design/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    query: '?url',
    import: 'default',
  }),
)

const workImages = import.meta.glob('../work/*.{png,jpg,jpeg,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
})

const workImage = (filename) => workImages[`../work/${filename}`]

const workHighlights = [
  {
    title: 'Founder & Facilitator — Upgrade Lab',
    period: '2026 — Present',
    className: 'upgrade-lab-highlight',
    description:
      'I established Upgrade Lab, a weekly 45-minute meetup where techies and aspiring tech professionals learn, share knowledge, and explore practical skills such as web development and graphic design.',
    images: [
      ['working in upgrade lab.jpeg', 'Facilitating an Upgrade Lab session'],
      ['second picture of working in upgrade lab.jpeg', 'Working during an Upgrade Lab session'],
      ['Upgrade last meetup with everyone snapping together.jpeg', 'Upgrade Lab community at a meetup'],
    ],
  },
  {
    title: 'Creative & Live-Score Designer — Football Tournament',
    period: '2026',
    description:
      'Created promotional flyers and updated live-score flyer templates from the pitch throughout the football tournament.',
    images: [
      ['updating live score in football competition on laptop.jpeg', 'Updating live scores during a football competition'],
    ],
  },
  {
    title: 'Media Team — Student Week',
    period: '2026',
    description:
      'Supported Student Week as part of the media team, capturing moments and producing event photography.',
    images: [
      ['working with video camera.jpeg', 'Working with a video camera during an event'],
    ],
  },
  {
    title: 'Event Photographer — Axis Media / ADWOC',
    period: '2026',
    description:
      'Joined Axis Media to photograph ADWOC, a church programme, documenting key moments from the event.',
    images: [
      ['snapping with camera in adwoc ( church program ).jpeg', 'Photographing ADWOC church programme'],
      ['second image of snapping with camera in adwoc ( church program ).jpeg', 'Photographing ADWOC church programme'],
    ],
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <header className="topbar">
        <div className="container nav-wrap">
          <a href="#home" className="brand" aria-label="Go home">
            WALEX
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen((isOpen) => !isOpen)}
          >
            Menu
          </button>
          <nav id="main-navigation" className={`nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </nav>
        </div>
      </header>

      <main id="home" className="container page-shell">
        <section className="hero">
          <div className="hero-copy">
            <p className="kicker">Hey, I’m Olawale.</p>
            <h1>Website Developer / Graphic Designer</h1>
            <p className="lede">Creating innovative solutions and captivating designs.</p>

            <div className="cta-row">
              <a className="btn btn-dark" href="#contact">
                Hire Me!
              </a>
              <a className="btn btn-light" href="https://iam-walex.netlify.app/resume/Gbengaayo-olawale-resume.pdf" target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>

            <div className="availability">Available for new projects</div>
          </div>

          <div className="hero-visual">
            <div className="portrait-wrap">
              <img src="/myownimage.png" alt="Gbengaayo Olawale portrait" />
            </div>
          </div>
        </section>

        <section id="about" className="info-section">
          <div className="section-title-wrap">
            <p className="section-label">What I do</p>
          </div>
          <div className="section-body">
            <p>
              I build thoughtful websites, robust web backends, and eye-catching designs that help bring ideas to life.
            </p>
            <div className="chip-list">
              <span>HTML5</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>React</span>
              <span>Node.js</span>
              <span>Python</span>
              <span>MongoDB</span>
              <span>Photoshop</span>
            </div>
          </div>
        </section>

        <section id="about-extra" className="info-section split-layout">
          <div className="section-title-wrap">
            <p className="section-label">About</p>
          </div>
          <div className="section-body">
            <p>
              I’m Gbengaayo Olawale, also known as WALEX—a self-taught developer and graphic designer who enjoys turning ideas into useful, user-focused digital products.
            </p>
            <p>
              I work across frontend and backend development, from building responsive interfaces to creating APIs, databases, and practical product workflows. Design is also a big part of my process: I create clear visual identities, event flyers, and polished experiences that make projects easier to understand and use.
            </p>
            <p>
              In 2026, I founded <strong>Upgrade Lab</strong>, a weekly 45-minute meetup where techies and aspiring professionals come together to learn, share knowledge, and explore skills such as web development and graphic design.
            </p>
            <p>
              Beyond product work, I have created live-score and promotional designs for a football tournament, supported Student Week as part of the media team, and worked with <strong>Axis Media</strong> to photograph the ADWOC church programme.
            </p>
            <p><strong>Areas of expertise:</strong> Web development, backend development, graphic design, event media, and tech community building.</p>
          </div>
        </section>

        <section id="work" className="info-section">
          <div className="section-title-wrap">
            <p className="section-label">Here’s What I’ve Been Up To</p>
          </div>
          <div className="section-body projects-stack">
            {projectCards.map((project) => (
              <article className="project-showcase" key={project.name}>
                <div className="showcase-image">
                  <div className="project-preview">
                    <span>Featured project</span>
                    <strong>{project.name}</strong>
                    {/* <span>{project.liveUrl ? 'Live preview' : 'Repository preview'}</span> */}
                  </div>
                </div>
                <div className="showcase-copy">
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <div className="tech-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {project.liveUrl ? (
                      <a className="project-link" href={project.liveUrl} target="_blank" rel="noreferrer">
                        Open live ↗
                      </a>
                    ) : (
                      <span className="project-link project-action-unavailable">Open live — unavailable</span>
                    )}
                    {(project.repoUrl || project.url) ? (
                      <a className="project-link" href={project.repoUrl || project.url} target="_blank" rel="noreferrer">
                        View repository ↗
                      </a>
                    ) : (
                      <span className="project-link project-action-unavailable">View repository — unavailable</span>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="info-section split-layout">
          <div className="section-title-wrap">
            <p className="section-label">Graphic Design</p>
          </div>
          <div className="section-body">
            <p>A showcase of my creative Photoshop projects, from brand mockups to posters.</p>
            <div className="gallery-grid" aria-live="polite">
              {graphicDesignImages.length > 0 ? (
                graphicDesignImages.map((src, index) => (
                  <figure className="gallery-item" key={`${src}-${index}`}>
                    <img src={src} alt={`Graphic design work ${index + 1}`} loading="lazy" decoding="async" />
                  </figure>
                ))
              ) : (
                <p className="empty-state">Add images to the graphic-design folder to populate this gallery.</p>
              )}
            </div>
            <div className="tech-row graphic-meta">
              <span>Photoshop</span>
              <span>Illustrator</span>
              <span>Creative Concepts</span>
            </div>
          </div>
        </section>

        <section className="info-section split-layout">
          <div className="section-title-wrap">
            <p className="section-label">Work Experience</p>
          </div>
          <div className="section-body experience-list">
            {workHighlights.map((highlight) => (
              <article className={`work-highlight ${highlight.className ?? ''}`} key={highlight.title}>
                <div className="work-highlight-copy">
                  <h3>{highlight.title}</h3>
                  <p className="meta">{highlight.period}</p>
                  <p>{highlight.description}</p>
                </div>
                <div className={`work-image-grid work-image-grid-${highlight.images.length}`}>
                  {highlight.images.map(([filename, alt]) => (
                    <figure key={filename}>
                      <img src={workImage(filename)} alt={alt} loading="lazy" decoding="async" />
                    </figure>
                  ))}
                </div>
              </article>
            ))}

            <div className="experience-item">
              <h3>Secretary — NACOS UNIPaul Chapter</h3>
              <p className="meta">2026 — Present</p>
              <p>Supporting communication, record-keeping, and coordination within the Nigeria Association of Computing Students (NACOS) UNIPaul Chapter.</p>
            </div>

            <div className="experience-item">
              <h3>IT student</h3>
              <p className="meta">2025 • Nasadra</p>
              <p>Hands-on experience working on servers and network mediums.</p>
            </div>

            <div className="experience-item">
              <h3>Graphic Designer</h3>
              <p className="meta">2023 — 2024 • MILAP</p>
              <p>Focused on making eye-catching designs that leaves a subtle feel.</p>
            </div>

            <div className="experience-item">
              <h3>Co-founder & Backend engineer</h3>
              <p className="meta">2025 — present • Avio</p>
              <p>API design, databases, and integrations.</p>
            </div>

            <div className="experience-item">
              <h3>Co-founder & Full-stack developer</h3>
              <p className="meta">2025 — present • Chainchat team</p>
              <p>Worked on smart contract integration and currently handling the frontend.</p>
            </div>
          </div>
        </section>

      </main>

      <footer id="contact" className="site-footer">
        <div className="container footer-wrap">
          <div>
            <p className="section-label footer-label">How Can I Help?</p>
            <h2>Let’s turn your vision into something amazing. Send a message or book a call.</h2>
          </div>
          <form className="contact-form" action="mailto:gbengaayoolawale@gmail.com" method="post" encType="text/plain">
            <input type="text" name="name" placeholder="Name" aria-label="Name" />
            <input type="email" name="email" placeholder="Email" aria-label="Email" />
            <textarea name="message" rows="4" placeholder="Message" aria-label="Message" />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="container footer-meta">
          <div>
            <p><strong>Other ways to reach me</strong></p>
            <p>Email: <a href="mailto:gbengaayoolawale@gmail.com">gbengaayoolawale@gmail.com</a></p>
            <p>Phone (WhatsApp): <a href="tel:+23480886997023">+234 808 8699 7023</a></p>
          </div>

          <div className="social-list">
            <a href="https://x.com/gbengaayo_?s=09" target="_blank" rel="noreferrer">• Twitter</a>
            <a href="https://github.com/webhoster45" target="_blank" rel="noreferrer">• GitHub</a>
            <a href="https://www.linkedin.com/in/gbengaayo" target="_blank" rel="noreferrer">• LinkedIn</a>
            <a href="https://www.facebook.com/gbengaayo.olawale" target="_blank" rel="noreferrer">• Facebook</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <p>© 2026 Gbengaayo olawale. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
