import React from 'react';
import '../../styles/SectionTitle.css';

export default function SectionTitle({ badge, title, subtitle, center = true }) {
  return (
    <div className={`section-header ${center ? 'text-center' : ''}`}>
      {badge && <span className="section-badge">{badge}</span>}
      <h2 className="section-heading">{title}</h2>
      {subtitle && <p className="section-subheading">{subtitle}</p>}
      <div className="section-accent-line"></div>
    </div>
  );
}
