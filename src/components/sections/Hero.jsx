import React from 'react';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/images/profile.png';
import '../../styles/Hero.css';

export default function Hero() {
  const { personal } = portfolioData;

  return (
    <section id="home" className="hero-section">
      {/* Subtle Background Glow Circles */}
      <div className="hero-decorative-circle circle-purple"></div>
      <div className="hero-decorative-circle circle-blue"></div>
      <div className="hero-decorative-circle circle-center"></div>

      <div className="container hero-container">
        {/* Left Side */}
        <div className="hero-content">
          <h1 className="hero-name">{personal.name}</h1>
          
          <div className="hero-role-wrapper">
            <h2 className="hero-title">{personal.title}</h2>
            <span className="hero-education-badge">{personal.educationTag}</span>
          </div>

          <p className="hero-tagline">"{personal.tagline}"</p>

          {/* Two Action Buttons */}
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary hero-btn">
              View Projects
            </a>
            <a href="#contact" className="btn btn-outline hero-btn">
              Contact Me
            </a>
          </div>
        </div>

        {/* Right Side: Profile Photo Inside Large Circular Frame */}
        <div className="hero-visual">
          <div className="circle-frame-wrapper">
            <div className="circle-glow-halo"></div>
            <div className="circle-photo-frame">
              <img
                src={profileImg}
                alt={personal.name}
                className="circle-profile-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
