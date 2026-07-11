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
              Frontend Developer with a solid foundation in web technologies and cybersecurity.
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
            Experienced in building web applications, troubleshooting technical issues, and working in teams. Eager to apply my software development and secure coding skills to support innovative digital projects.
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
                <div className={styles.entryOrg}>Bricsky Holdings · Tema, Ghana</div>
                <ul className={styles.entryDesc}>
                  <li>Worked with a team to build and maintain web applications using JavaScript and React.</li>
                  <li>Wrote internal reports and presentations to help improve team communication.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>10/2025 – 11/2025</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Intern</h3>
                <div className={styles.entryOrg}>Serene Insurance Company Limited · Tema, Ghana</div>
                <ul className={styles.entryDesc}>
                  <li>Managed and organized digital records to make data easy to find and use.</li>
                  <li>Data entry and performing of basic office tasks.</li>
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
                <h3 className={styles.entryTitle}>Volunteer/Member</h3>
                <div className={styles.entryOrg}>Mcloi Impact Foundation · Ghana</div>
                <ul className={styles.entryDesc}>
                  <li>Proposed enhancements to digital and operational processes for community initiatives.</li>
                  <li>Sharing ideas and working with group members to solve community challenges.</li>
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
                <div className={styles.entryDate}>01/2025 – Current</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Diploma, Cyber Security</h3>
                <div className={styles.entryOrg}>Ghana Communication Technology University · Tesano, Accra</div>
                <ul className={styles.entryDesc}>
                  <li>Diploma in Cybersecurity. Coursework includes programming, system fundamentals, and secure computing and cybersecurity tools and techniques.</li>
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
                <div className={styles.entryOrg}>Chemu Senior High School · Tema</div>
                <ul className={styles.entryDesc}>
                  <li>Completed secondary education with a focus on Visual Arts, cultivating creativity and structured thinking skills.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* Certificates */}
      <div className={styles.divider}><div className={styles.dividerLine}></div></div>
      <section id="certificates" className={styles.section}>
        <ScrollReveal>
          <h2 className={styles.sectionTitle}>Certificates</h2>
          <p className={styles.sectionSubtitle}>Professional training and certifications.</p>
        </ScrollReveal>
        <div className={styles.timeline}>

          <ScrollReveal>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>May 2026</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>AWS AI Practitioner Challenge</h3>
                <div className={styles.entryOrg}>Udacity</div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>April 2026</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Aspire Leaders Program</h3>
                <div className={styles.entryOrg}>Aspire Institute</div>
                <ul className={styles.entryDesc}>
                  <li>Completed 40 hours of training focused on leadership, critical thinking, and global teamwork.</li>
                </ul>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className={styles.entry}>
              <div className={styles.entryMeta}>
                <div className={styles.entryDate}>October 2025</div>
              </div>
              <div className={styles.entryContent}>
                <h3 className={styles.entryTitle}>Introduction to Cybersecurity</h3>
                <div className={styles.entryOrg}>Cisco</div>
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
              <h3 className={styles.skillGroupTitle}>IT & Tools</h3>
              <div className={styles.skillList}>
                <span className={styles.skillItem}>Software & Hardware Troubleshooting</span>
                <span className={styles.skillItem}>Data Entry</span>
                <span className={styles.skillItem}>Microsoft Office Suite</span>
              </div>
            </div>

            <div className={styles.skillGroup}>
              <h3 className={styles.skillGroupTitle}>Security</h3>
              <div className={styles.skillList}>
                <span className={styles.skillItem}>Threat Analysis</span>
                <span className={styles.skillItem}>Core Security Concepts</span>
                <span className={styles.skillItem}>Secure Coding</span>
                <span className={styles.skillItem}>AWS AI Basics</span>
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
              </div>
              <p className={styles.projectDesc}>Personal portfolio site built with Next.js, showcasing experience, skills, and projects with a clean design.</p>
              <div className={styles.projectTech}>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>CSS Modules</span>
              </div>
              <div className={styles.projectActions}>
                <a href="https://github.com/Darkknoghr/Portfolio" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                  View Code
                </a>
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
              <div className={styles.projectActions}>
                <a href="https://github.com/Darkknoghr" target="_blank" rel="noopener noreferrer" className={styles.projectButton}>
                  View GitHub Profile
                </a>
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
