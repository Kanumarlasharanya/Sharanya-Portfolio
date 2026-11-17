import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/Education.css';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <SectionTitle
          title="Education"
          subtitle="Academic qualifications and performance milestones."
        />

        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="education-card card">
              <div className="education-card-top">
                <div className="edu-icon-badge">
                  <GraduationCap size={24} />
                </div>
                <span className="edu-year-badge">
                  <Calendar size={14} />
                  {item.period}
                </span>
              </div>

              <h3 className="edu-degree">{item.degree}</h3>
              <h4 className="edu-institution">{item.institution}</h4>
              
              <div className="edu-score-pill">
                <Award size={15} />
                <span>{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
