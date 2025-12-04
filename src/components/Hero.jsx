import React from 'react';
import asuStarting from '../assets/asu_starting.jpeg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-background" style={{ backgroundImage: `url(${asuStarting})` }}>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-name">Ashank D'Souza</h1>
        <p className="hero-headline">Software Engineer | Full Stack Developer</p>
        <a href="#about" className="hero-cta">View My Work</a>
      </div>
    </section>
  );
};

export default Hero;
