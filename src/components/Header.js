import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <header className="header">
      <div className="logo">
        <h1>Ashutosh Patil</h1>
      </div>
      
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;