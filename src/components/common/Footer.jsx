import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './SocialIcons';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/Footer.css';

export default function Footer() {
  const { personal, contact } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <span className="footer-logo">
              Sharanya Kanumarla
              <span className="logo-dot">.</span>
            </span>
            <p className="footer-tagline">{personal.title} • {personal.educationTag}</p>
          </div>

          <div className="footer-social-icons">
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="footer-icon-btn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="footer-icon-btn"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={`mailto:${contact.email}`}
              aria-label="Email Sharanya"
              className="footer-icon-btn"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sharanya Kanumarla. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
