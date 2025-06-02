import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 0) {
          headerRef.current.classList.add('scrolled');
        } else {
          headerRef.current.classList.remove('scrolled');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <div className="logo">
        <h1>Ashutosh Patil</h1>
      </div>
      
      <button className="mobile-menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>
      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>

        <ul>
          <li><a href="#home" onClick={(e) => handleClick(e, 'home')}>Home</a></li>
          <li><a href="#about" onClick={(e) => handleClick(e, 'about')}>About</a></li>
          <li><a href="#skills" onClick={(e) => handleClick(e, 'skills')}>Skills</a></li>
          <li><a href="#projects" onClick={(e) => handleClick(e, 'projects')}>Projects</a></li>
          <li><a href="#education" onClick={(e) => handleClick(e, 'education')}>Education</a></li>
          <li><a href="#experience" onClick={(e) => handleClick(e, 'experience')}>Experience</a></li>
          <li><a href="#contact" onClick={(e) => handleClick(e, 'contact')}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;