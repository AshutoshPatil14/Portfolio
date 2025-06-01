import React, { useState, useEffect } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa'; // Example icons

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  // Initialize theme from localStorage or default to 'light'
  const [currentTheme, setCurrentTheme] = useState(() => localStorage.getItem('theme') || 'light');

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsHeaderScrolled(true);
      } else {
        setIsHeaderScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Apply the current theme to the document and save to localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('theme', currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  // Close mobile menu when a nav link is clicked
  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // Close mobile menu if clicked outside
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.header')) {
        closeMobileMenu();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', closeMobileMenu);
      });
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isHeaderScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button onClick={toggleTheme} className="theme-toggle-btn" aria-label="Toggle theme">
          {currentTheme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </nav>
      <button className="mobile-menu-btn" onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
        {isMobileMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  );
};

export default Header;