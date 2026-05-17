import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="navbar">
      <a href="#home" className="logo" onClick={closeMenu}>
        Enock Portfolio
      </a>

      <nav className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#certificates">Certificates</a>
        <a href="#contact">Contact</a>
      </nav>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(true)}
        aria-label="Open navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={menuOpen ? "mobile-menu open" : "mobile-menu"}>
        <button
          className="close-menu"
          onClick={closeMenu}
          aria-label="Close navigation menu"
        >
          ×
        </button>

        <nav className="mobile-menu-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certificates" onClick={closeMenu}>Certificates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;