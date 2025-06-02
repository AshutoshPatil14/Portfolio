import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Hero id="home" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Education id="education" />
      <Experience id="experience" />
      <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
}

export default App;