import styles from './page.module.css';
import Greeting from './components/Greeting';
import ScrollReveal from './components/ScrollReveal';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <ScrollReveal>
            <p className={styles.heroEyebrow}><Greeting />. I'm</p>
            <h1 className={styles.heroTitle}>Cyril Nutsugah</h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className={styles.heroSubtitle}>
              Web developer specializing in building modern web applications with React, Next.js, and JavaScript, with a background in IT troubleshooting and securing digital systems.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className={styles.heroCtas}>
              <a href="#experience" className={styles.ctaPrimary}>
                View Experience
                <span className={styles.ctaIcon}></span>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.ctaSecondary}>
                View Resume
                <span className={styles.ctaIcon}></span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>


      {/* About */}
      <div className={styles.divider}><div className={styles.dividerLine}></div></div>
      <section id="about" className={styles.section}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>About</h2>
          <p className={styles.sectionSubtitle}>
            I build clean, high-performance web applications using JavaScript, HTML, CSS, React, and Next.js. With a background that spans IT support and cybersecurity, I focus on writing secure code, diagnosing complex technical issues, and creating intuitive user experiences.
          </p>
        </ScrollReveal>
      </section>

      {/* Experience */}
      <div className={styles.divider}><div className={styles.dividerLine}></div></div>
      <section id="experience" className={styles.section}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Experience</h2>
          <p className={styles.sectionSubtitle}>A summary of my professional work history.</p>
        </ScrollReveal>
        <div className={styles.timeline}>

          <ScrollReveal>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>02/2026 – 03/2026</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Intern</h3>
                <div className={styles.entryOrg}>Bricsky · Tema, Ghana</div>
                <ul className={styles.entryDesc}>
                  <li>Built and maintained different applications as part of a team.</li>
                  <li>Wrote internal reports and created presentations to make team communication easier.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>10/2025 – 10/2025</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Intern, IT & Records</h3>
                <div className={styles.entryOrg}>Serene Insurance Company Limited · Ghana</div>
                <ul className={styles.entryDesc}>
                  <li>Managed digital records and data entry.</li>
                  <li>Fixed computer and software problems to keep systems stable for daily work.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>10/2024 – Present</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Volunteer Member</h3>
                <div className={styles.entryOrg}>Mcloi Impact Foundation · Ghana</div>
                <ul className={styles.entryDesc}>
                  <li>Work with teams to find practical solutions for community challenges.</li>
                  <li>Suggesting ways to improve digital and daily processes for community projects.</li>
                  <li>Sharing ideas during team meetings to help remote and in-person teamwork.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Education */}
      <div className={styles.divider}><div className={styles.dividerLine}></div></div>
      <section id="education" className={styles.section}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Education</h2>
          <p className={styles.sectionSubtitle}>Where I studied.</p>
        </ScrollReveal>
        <div className={styles.timeline}>

          <ScrollReveal>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>2025 – Present</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Diploma, Cybersecurity</h3>
                <div className={styles.entryOrg}>Ghana Communication Technology University (GCTU)</div>
                <ul className={styles.entryDesc}>
                  <li>Studying Computer Science with a focus on Cybersecurity. Coursework includes programming, cybersecurity tools and techniques, and secure computing.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>2021 – 2024</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>WASSCE Certificate, Visual Arts</h3>
                <div className={styles.entryOrg}>Chemu Senior High School</div>
                <ul className={styles.entryDesc}>
                  <li>Completed high school education with a focus on Visual Arts, building creativity and organized thinking skills.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Skills */}
      <div className={styles.divider}><div className={styles.dividerLine}></div></div>
      <section id="skills" className={styles.section}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Skills</h2>
          <p className={styles.sectionSubtitle}>Technologies and competencies I work with.</p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className={styles.skillsGrid}>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Development</h3>
              <div className={styles.skillList}>
                <span className={styles.skillItem}>HTML5</span>
                <span className={styles.skillItem}>CSS</span>
                <span className={styles.skillItem}>JavaScript</span>
                <span className={styles.skillItem}>TypeScript</span>
                <span className={styles.skillItem}>React</span>
                <span className={styles.skillItem}>Next.js</span>
                <span className={styles.skillItem}>Node.js</span>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>IT & Security</h3>
              <div className={styles.skillList}>
                <span className={styles.skillItem}>Cybersecurity</span>
                <span className={styles.skillItem}>Web Development</span>
                <span className={styles.skillItem}>IT Support</span>
                <span className={styles.skillItem}>Data Entry</span>
                <span className={styles.skillItem}>Microsoft Office Suite</span>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Interpersonal</h3>
              <div className={styles.skillList}>
                <span className={styles.skillItem}>Collaboration</span>
                <span className={styles.skillItem}>Problem Solving</span>
                <span className={styles.skillItem}>Communication</span>
                <span className={styles.skillItem}>Analytical Thinking</span>
                <span className={styles.skillItem}>Adaptability</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Projects */}
      <div className={styles.divider}><div className={styles.dividerLine}></div></div>
      <section id="projects" className={styles.section}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Projects</h2>
          <p className={styles.sectionSubtitle}>A selection of things I've built.</p>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className={styles.projectsGrid}>

            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>Portfolio Website</h3>
                <a href="https://github.com/Darkknoghr" target="_blank" rel="noopener noreferrer" className={styles.projectLink} aria-label="View source">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                </a>
              </div>
              <p className={styles.projectDesc}>Personal portfolio site built with Next.js, showcasing experience, skills, and projects with a clean, minimalist design system.</p>
              <div className={styles.projectTech}>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>CSS Modules</span>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>Coming Soon</h3>
              </div>
              <p className={styles.projectDesc}>More projects are on the way. Check back soon or visit my GitHub for the latest work.</p>
              <div className={styles.projectTech}>
                <span>—</span>
              </div>
            </div>

          </div>
        </ScrollReveal>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className={styles.footer}>
        <div className={styles.footerInner}>
          <ScrollReveal>
            <h2 className={styles.footerHeading}>Get in touch.</h2>
            <p className={styles.footerSubtext}>
              I'm open to discussing new projects, creative ideas, or opportunities.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <div className={styles.footerLinks}>
              <a href="mailto:cyrilnutsugah@gmail.com" className={styles.footerLink} aria-label="Email">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
              <a href="https://linkedin.com/in/cyril-nutsugah" target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="LinkedIn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a href="https://github.com/Darkknoghr" target="_blank" rel="noopener noreferrer" className={styles.footerLink} aria-label="GitHub">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="tel:+233257617950" className={styles.footerLink} aria-label="Phone">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </ScrollReveal>
          <div className={styles.copyright}>
            Copyright &copy; {new Date().getFullYear()} Cyril Nutsugah. All rights reserved.
          </div>
        </div>
      </footer>

    </main>
  );
}
