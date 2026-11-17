import React from 'react';
import Navbar from './components/common/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Education from './components/sections/Education';
import Internship from './components/sections/Internship';
import Projects from './components/sections/Projects';
import SkillsCertifications from './components/sections/SkillsCertifications';
import Contact from './components/sections/Contact';
import Footer from './components/common/Footer';
import './App.css';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Internship />
        <Projects />
        <SkillsCertifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
