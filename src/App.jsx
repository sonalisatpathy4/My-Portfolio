import { useEffect, useState } from "react";
import "./App.css";
import './App.css'

const skills = [
  { category: 'Frontend', items: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Bootstrap'] },
  { category: 'Backend', items: ['PHP', 'Node.js', 'Express.js', 'REST APIs'] },
  { category: 'Database', items: ['MySQL', 'CRUD Operations', 'Database Integration'] },
  { category: 'CMS & Tools', items: ['WordPress', 'Custom Plugins', 'Git', 'GitHub', 'Postman', 'XAMPP'] },
]

const projects = [
  {
    number: '01',
    title: 'Registration Form',
    description:
      'A full-stack registration system with form validation, database integration, user authentication and CRUD functionality.',
    tech: ['Node.js', 'Express', 'MySQL', 'JavaScript'],
    link: 'https://registration-form-j5yw.onrender.com/',
    linkText: 'Live Project',
  },
  {
    number: '02',
    title: 'WordPress Development',
    description:
      'WordPress customization, custom plugin development, theme work and CMS features for practical website needs.',
    tech: ['WordPress', 'PHP', 'CSS'],
    link: '',
    linkText: 'Project Details',
  },
  {
    number: '03',
    title: 'Bookkeeping Website',
    description:
      'A financial record management application supporting adding, viewing, updating and deleting records.',
    tech: ['PHP', 'MySQL', 'JavaScript'],
    link: '',
    linkText: 'Project Details',
  },
  {
    number: '04',
    title: 'Trawhiz — Trip Planning',
    description:
      'Contributed to a live website by developing trip-planning content with Next.js, Node.js, MDX and REST APIs.',
    tech: ['Next.js', 'Node.js', 'MDX', 'REST APIs'],
    link: 'https://www.trawhiz.com/',
    linkText: 'Visit Website',
  },
  {
    number: '05',
    title: 'Sohrai Labs Landing Page',
    description:
      'A frontend project focused on building a responsive agency landing page using React and Vite.',
    tech: ['React', 'Vite', 'CSS'],
    link: 'https://github.com/sohrailabs-agency/sohrai-landing',
    linkText: 'GitHub Repository',
  },
]

function App() {



  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo">
          Sonali Satpathy
        </a>

        <nav className="nav-links" aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </nav>

        <a
          href="/Sonali_Satpathy_Resume.pdf"
          download
          className="resume-btn"
        >
          Download Resume ↗
        </a>
      </header>

      <main>
        <section className="hero section-container" id="home">
          <div className="hero-content">
            <p className="eyebrow">HELLO, I'M SONALI SATPATHY</p>

            <h1 className='hero-h1'>
              Full Stack Web
              <span> Developer.</span>
            </h1>

            <p className="intro">
              I build responsive websites and practical web applications
              using modern frontend and backend technologies. I enjoy
              turning ideas into clean, functional digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="social-links">
              <a
                href="https://github.com/sonalisatpathy4"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="mailto:ssatpathy@gmail.com">Email ↗</a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-glow" />

            <img src="/My-Portfolio/sonalisatpathy.jpeg" alt="Sonali Satpathy" />

            <div className="hero-tag">Building. Learning. Improving.</div>
          </div>
        </section>

        <section className="section-container section-block" id="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Turning Ideas Into Digital Experiences</h2>

          <p className="section-description">
            I'm an aspiring Full Stack Web Developer with hands-on
            experience in responsive websites, WordPress customization
            and web application development. I enjoy solving problems,
            learning new technologies and building useful digital products.
          </p>

          <div className="about-highlights">
            <article className="info-card">
              <span className="card-number">01</span>
              <h3>Frontend Development</h3>
              <p>Responsive layouts and user-friendly interfaces.</p>
            </article>

            <article className="info-card">
              <span className="card-number">02</span>
              <h3>Backend Development</h3>
              <p>Server-side logic, APIs and database integration.</p>
            </article>

            <article className="info-card">
              <span className="card-number">03</span>
              <h3>WordPress</h3>
              <p>CMS customization and custom plugin development.</p>
            </article>
          </div>
        </section>

        <section className="section-block skills-section" id="skills">
          <div className="section-container">
            <p className="eyebrow">TECHNICAL EXPERTISE</p>
            <h2>Skills & Technologies</h2>
            <p className="section-description">
              Technologies and tools I use to develop web experiences.
            </p>

            <div className="skills-grid">
              {skills.map((group) => (
                <article className="skill-card" key={group.category}>
                  <h3>{group.category}</h3>
                  <div className="skill-tags">
                    {group.items.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section-container section-block" id="projects">
          <p className="eyebrow">SELECTED WORK</p>
          <h2>Featured Projects</h2>
          <p className="section-description">
            A selection of projects that demonstrate my development
            skills and practical experience.
          </p>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-number">{project.number}</span>
                  <span className="project-symbol">↗</span>
                </div>

                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tags">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {project.link ? (
                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {project.linkText} ↗
                  </a>
                ) : (
                  <span className="project-link unavailable-link">
                    Details available on request
                  </span>
                )}
              </article>
            ))}
          </div>
        </section>

        <section
          className="section-container section-block"
          id="experience"
        >
          <p className="eyebrow">MY JOURNEY</p>
          <h2>Experience & Education</h2>

          <div className="timeline">
            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-label">OCTOBER 2026 — PRESENT</p>
                <h3>Web Developer & Social Media Manager · Sohrai Labs</h3>
                <p>
                  Working on frontend development using React and modern web
                  technologies, while contributing to social media content
                  and digital brand presence.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-label">AUGUST 2026 — OCTOBER 2026</p>
                <h3>Freelance Web Developer · Trawhiz</h3>
                <p>
                  Worked on trip-planning features, structured MDX content,
                  REST API integration and version control using GitHub.
                </p>
              </div>
            </article>

            <article className="timeline-item">
              <span className="timeline-dot" />
              <div>
                <p className="timeline-label">2024 — 2026</p>
                <h3>Senior Secondary · Marwari +2 High School</h3>
                <p>
                  Completed Senior Secondary education in Jharkhand.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section className="section-container section-block" id="achievements">
          <p className="eyebrow">RECOGNITION</p>
          <h2>Achievements & Contributions</h2>

          <div className="achievement-list">
            <p>WordPress Plugin Developer Badge</p>
            <p>WordPress Polyglots Contributor</p>
            <p>Skill India Web Development Certification</p>
            <p>Web Development Badges</p>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div>
            <p className="eyebrow">LET'S CONNECT</p>
            <h2>Let's Build Something Useful.</h2>
            <p>
              Interested in working together or discussing an opportunity?
              Feel free to get in touch.
            </p>
          </div>

          <a href="mailto:ssatpathy@gmail.com" className="primary-btn">
            ssatpathy@gmail.com ↗
          </a>
        </section>
      </main>


      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              Sonali Satpathy
            </a>
            <p>
              Web Developer & Social Media Manager
            </p>
            <p className="footer-tagline">
              Building ideas into meaningful digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>
            <a
              href="https://github.com/sonalisatpathy4"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a href="mailto:ssatpathy@gmail.com">
              Email ↗
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sonali Satpathy. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>

    </div>
  )
}

export default App
