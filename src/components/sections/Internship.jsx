import React from 'react';
import { Briefcase, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/Internship.css';

export default function Internship() {
  const { internship } = portfolioData;

  return (
    <section id="internship" className="section section-alt internship-section">
      <div className="container">
        <SectionTitle
          title="Internship Experience"
          subtitle="Hands-on software development training and practical application development."
        />

        <div className="internship-container">
          <div className="internship-card card">
            <div className="internship-card-header">
              <div className="internship-icon-badge">
                <Briefcase size={26} />
              </div>
              <div>
                <h3 className="internship-role">{internship.role}</h3>
                <h4 className="internship-org">{internship.organization}</h4>
              </div>
            </div>

            <div className="internship-responsibilities">
              <h5 className="responsibilities-title">Responsibilities & Practical Experience:</h5>
              <ul className="responsibilities-list">
                {internship.responsibilities.map((resp, index) => (
                  <li key={index} className="responsibility-item">
                    <CheckCircle2 size={17} className="resp-icon" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
