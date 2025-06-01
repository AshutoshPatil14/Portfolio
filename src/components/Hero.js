import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Ashutosh Patil</span></h1>
        <h2>IT Professional | Full Stack Developer | AI Enthusiast</h2>
        <p>I build intelligent solutions with modern technologies.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary-btn">View My Work</a>
          <a href="#contact" className="btn secondary-btn">Contact Me</a>
        </div>
      </div>
      <div className="hero-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
    </section>
  );
};

export default Hero;