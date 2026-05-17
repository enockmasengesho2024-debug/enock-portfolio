import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-content">
            <span className="tag">Welcome to My Portfolio</span>
            <h1>Hi, I am Enock. I build clean and responsive web projects.</h1>
            <p>
              I am a software development student building projects with HTML,
              CSS, JavaScript, TypeScript, React, Bootstrap, and GitHub. This
              portfolio shows my skills, class projects, and development growth.
            </p>
            <div className="hero-buttons">
              <a href="#projects" className="hero-btn">
                View Projects
              </a>
              <a href="#contact" className="hero-btn secondary-btn">
                Contact Me
              </a>
            </div>
          </div>
        </section>
        <section id="about" className="section about-section">
          <div className="section-heading">
            <h2>About Me</h2>
            <p>
              Learn more about my education, goals, and software development
              journey.
            </p>
          </div>
          <div className="about-box">
            <h3>Software Development Student</h3>
            <p>
              I am learning how to design and build websites and applications
              that are useful, organized, and easy to use. My goal is to keep
              improving my coding skills and create projects that solve real
              problems.
            </p>
            <p>
              I enjoy working with front-end design, responsive layouts,
              JavaScript functionality, and React components. I am also learning
              how to use GitHub and live servers to publish my work online.
            </p>
          </div>
        </section>
        <section id="skills" className="section skills-section">
          <div className="section-heading">
            <h2>Skills</h2>
            <p>
              These are the tools and technologies I have practiced in my
              coursework and projects.
            </p>
          </div>

          <div className="skills-grid">
            <div className="skill-card">HTML</div>
            <div className="skill-card">CSS</div>
            <div className="skill-card">JavaScript</div>
            <div className="skill-card">TypeScript</div>
            <div className="skill-card">React</div>
            <div className="skill-card">Bootstrap</div>
            <div className="skill-card">GitHub</div>
            <div className="skill-card">VS Code</div>
            <div className="skill-card">Vue</div>
            <div className="skill-card">Node</div>

            
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <h2>Projects</h2>
            <p>
              These examples show my experience with JavaScript, Bootstrap,
              React, animation, and responsive design.
            </p>
          </div>

          <div className="project-grid">
            <article className="project-card">
              <div className="project-image">React</div>
              <h3>Moli App</h3>
              <p>
                A React + TypeScript application created to support learning,
                planning, resources, and personal growth.
              </p>
              <a href="https://lerningmaterial2026.netlify.app" className="project-link">
                Live Link
              </a>
            </article>

            <article className="project-card">
              <div className="project-image">Bootstrap</div>
              <h3>Bootstrap Website</h3>
              <p>
                A responsive website built with Bootstrap components, cards,
                navigation, and mobile-friendly layout.
              </p>
              <a href="https://thechoicee.netlify.app/" className="project-link">
                Live Link 
              </a>
            </article>

            <article className="project-card">
              <div className="project-image">JS</div>
              <h3>JavaScript Project</h3>
              <p>
                A class project using JavaScript to create interactive features,
                events, DOM updates, and user actions.
              </p>
              <a href="https://booking250.netlify.app/" className="project-link">
                Live Link Coming Soon
              </a>
            </article>

            <article className="project-card">
              <div className="project-image">CSS</div>
              <h3>Animated Website</h3>
              <p>
                A website example that uses hover effects, smooth transitions,
                animations, and polished visual design.
              </p>
              <a href="https://animation0011.netlify.app/" className="project-link">
                Live Link 
              </a>
            </article>
          </div>
        </section>

        <section id="certificates" className="section certificates-section">
          <div className="section-heading">
            <h2>Certificates & Education</h2>
            <p>
              This section can show earned certificates, degrees, or future
              achievements.
            </p>
          </div>

          <div className="certificate-box">
            <h3>Software Development Coursework</h3>
            <p>
              Completed and practiced projects involving web development,
              JavaScript, Bootstrap, React, TypeScript, and responsive design.
            </p>
          </div>

          <div className="certificate-box coming-soon">
            <h3>Certificates Coming Soon</h3>
            <p>
              More certificates and completed achievements will be added as they
              become available.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <h2>Contact Me</h2>
            <p>
              Use the form below to send a message. The form includes basic
              required-field validation.
            </p>
          </div>

          <form className="contact-form">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" required />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Write your message"
              required
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;