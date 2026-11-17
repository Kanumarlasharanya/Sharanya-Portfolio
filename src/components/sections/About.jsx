import React from 'react';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/About.css';

export default function About() {
  const { about } = portfolioData;

  return (
    <section id="about" className="section section-alt about-section">
      <div className="container">
        <SectionTitle
          title={about.heading}
          subtitle="A brief introduction to my academic and practical background."
        />

        <div className="about-summary-card card">
          <p className="about-summary-text">{about.summary}</p>
        </div>
      </div>
    </section>
  );
}
