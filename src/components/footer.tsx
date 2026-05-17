function Footer() {
  return (
    <footer className="footer">
      <h2>Enock Portfolio</h2>
      <p>
        A personal portfolio showing my software development projects, skills,
        education, and growth as a developer.
      </p>

      <div className="footer-links">
        <a href="#home">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="social-links">
        <a href="#" aria-label="GitHub link">GitHub</a>
        <a href="#" aria-label="LinkedIn link">LinkedIn</a>
      </div>

      <p className="copyright">© 2026 Enock Portfolio. All rights reserved.</p>
    </footer>
  );
}

export default Footer;