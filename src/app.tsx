import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <section id="home" className="section hero-section">
          <div className="hero-content">
            <span className="tag">Welcome to Moli</span>
            <h1>Simple tools for learning, planning, and personal growth.</h1>
            <p>
              Moli is a helpful digital app designed to support students and
              individuals with study support, organization, useful resources,
              and confidence-building tools.
            </p>
            <a href="#services" className="hero-btn">
              Explore Features
            </a>
          </div>
        </section>

        <section id="services" className="section">
          <div className="section-heading">
            <h2>Our Services</h2>
            <p>
              Moli provides simple and clear tools that help users stay focused,
              organized, and prepared.
            </p>
          </div>

          <div className="cards">
            <div className="card">
              <h3>Study Support</h3>
              <p>
                Helpful learning tools that make lessons easier to understand
                and review step by step.
              </p>
            </div>

            <div className="card">
              <h3>Task Planning</h3>
              <p>
                Simple planning features help users organize school work,
                personal goals, and daily responsibilities.
              </p>
            </div>

            <div className="card">
              <h3>Confidence Building</h3>
              <p>
                Moli encourages users to practice skills, track progress, and
                build confidence through small wins.
              </p>
            </div>
          </div>
        </section>

        <section id="resources" className="section resources-section">
          <div className="section-heading">
            <h2>Resources</h2>
            <p>
              These resources give users extra support for learning, personal
              growth, and digital organization.
            </p>
          </div>

          <div className="resource-list">
            <div className="resource-item">
              <h3>Learning Guides</h3>
              <p>
                Short guides that explain important topics in a clear and simple
                way.
              </p>
            </div>

            <div className="resource-item">
              <h3>Review Activities</h3>
              <p>
                Practice activities help users prepare for quizzes, assignments,
                and class discussions.
              </p>
            </div>

            <div className="resource-item">
              <h3>Digital Tools</h3>
              <p>
                Online tools support studying, note-taking, time management, and
                goal tracking.
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section about-section">
          <div className="about-box">
            <h2>About Moli</h2>
            <p>
              Moli is an educational and support-focused app created to help
              users improve learning, organization, and self-confidence. The app
              brings important tools into one simple place so users can stay
              motivated and make progress.
            </p>
            <p>
              The goal of Moli is to make support feel simple, friendly, and
              easy to access. It can be used by students, families, or anyone
              who wants help building better habits.
            </p>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="section-heading">
            <h2>Contact Us</h2>
            <p>
              Send us a message if you want to learn more about Moli or ask for
              support.
            </p>
          </div>

          <form className="contact-form">
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Write your message"></textarea>
            <button type="button">Send Message</button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;