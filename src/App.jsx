import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <a href="#hero" className="nav-logo">Ashank D'Souza</a>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </div>
      </nav>
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Ashank D'Souza. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
