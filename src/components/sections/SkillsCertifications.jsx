import React, { useState } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Cpu, 
  Wrench, 
  Cloud, 
  Award, 
  ExternalLink,
  X
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/SkillsCertifications.css';

export default function SkillsCertifications() {
  const { skills, certifications } = portfolioData;
  const [modalCert, setModalCert] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Programming Languages':
        return <Code2 size={22} />;
      case 'Databases':
        return <Database size={22} />;
      case 'Web Development':
        return <Layout size={22} />;
      case 'Core Concepts':
        return <Cpu size={22} />;
      case 'Tools & Technologies':
        return <Wrench size={22} />;
      case 'Cloud':
        return <Cloud size={22} />;
      default:
        return <Code2 size={22} />;
    }
  };

  const handleViewCertificate = (cert) => {
    if (cert.certificateUrl && cert.certificateUrl.trim() !== '') {
      window.open(cert.certificateUrl, '_blank', 'noopener,noreferrer');
    } else {
      setModalCert(cert);
    }
  };

  return (
    <section id="skills-certifications" className="section section-alt skills-cert-section">
      <div className="container">
        <SectionTitle
          title="Skills & Certifications"
          subtitle="Core technical capabilities, database systems, web development, and certified competencies."
        />

        {/* Sub-section 1: Technical Skills */}
        <div className="skills-subgroup">
          <h3 className="subgroup-title">Technical Skills</h3>
          <div className="skills-cards-grid">
            {skills.map((group, idx) => (
              <div key={idx} className="skill-cat-card card">
                <div className="skill-cat-header">
                  <div className="skill-cat-icon">
                    {getCategoryIcon(group.category)}
                  </div>
                  <h4 className="skill-cat-name">{group.category}</h4>
                </div>

                <div className="skill-pills-list">
                  {group.items.map((item, itemIdx) => (
                    <span key={itemIdx} className="skill-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sub-section 2: Certifications */}
        <div className="certifications-subgroup">
          <h3 className="subgroup-title">Certifications</h3>
          <div className="certifications-grid">
            {certifications.map((cert, index) => (
              <div key={index} className="cert-card card">
                <div className="cert-card-top">
                  <div className="cert-icon-wrapper">
                    <Award size={24} />
                  </div>
                  {cert.certificateUrl ? (
                    <a
                      href={cert.certificateUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-cert-btn"
                      aria-label={`View certificate for ${cert.name}`}
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </a>
                  ) : (
                    <button
                      onClick={() => handleViewCertificate(cert)}
                      className="view-cert-btn"
                      aria-label={`View certificate for ${cert.name}`}
                    >
                      <span>View Certificate</span>
                      <ExternalLink size={14} />
                    </button>
                  )}
                </div>

                <h4 className="cert-title">{cert.name}</h4>
                <p className="cert-org">{cert.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Modal for certificate view when file is being provided */}
        {modalCert && (
          <div className="cert-modal-backdrop" onClick={() => setModalCert(null)}>
            <div className="cert-modal-box card" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <div className="modal-title-row">
                  <Award size={22} className="modal-icon" />
                  <h4>{modalCert.name}</h4>
                </div>
                <button
                  className="modal-close-btn"
                  onClick={() => setModalCert(null)}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                <p className="modal-org">Issued by: <strong>{modalCert.organization}</strong></p>
                <div className="modal-notice">
                  <p>Certificate verified and completed.</p>
                  <span className="notice-sub">
                    To link the original image file, add the certificate file into <code>public/certificates/</code> and update its path in <code>portfolioData.js</code>.
                  </span>
                </div>
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                  onClick={() => setModalCert(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
