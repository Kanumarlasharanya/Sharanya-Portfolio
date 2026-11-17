import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../common/SocialIcons';
import SectionTitle from '../common/SectionTitle';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/Contact.css';

export default function Contact() {
  const { contact } = portfolioData;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <SectionTitle
          title="Contact Me"
          subtitle="Interested in hiring or discussing software developer opportunities? Let's connect."
        />

        <div className="contact-layout-grid">
          {/* Left Column: Direct Clickable Contact Cards */}
          <div className="contact-info-panel">
            <h3 className="contact-panel-title">Get in Touch</h3>
            <p className="contact-panel-desc">
              I am open to entry-level Software Developer and Java Full Stack Developer roles. Feel free to reach out directly through any of the channels below.
            </p>

            <div className="contact-cards-stack">
              {/* Email */}
              <a href={`mailto:${contact.email}`} className="contact-method-card">
                <div className="contact-method-icon">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="contact-method-label">Email</span>
                  <span className="contact-method-val">{contact.email}</span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <span className="contact-method-label">LinkedIn</span>
                  <span className="contact-method-val">{contact.linkedin.replace('https://', '')}</span>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-method-card"
              >
                <div className="contact-method-icon">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <span className="contact-method-label">GitHub</span>
                  <span className="contact-method-val">{contact.github.replace('https://', '')}</span>
                </div>
              </a>

              {/* Location */}
              <div className="contact-method-card">
                <div className="contact-method-icon">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="contact-method-label">Location</span>
                  <span className="contact-method-val">{contact.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Message Form */}
          <div className="contact-form-panel card">
            <h4 className="form-card-title">Send a Message</h4>

            {submitted ? (
              <div className="form-success-box animate-fade-in">
                <CheckCircle2 size={44} className="success-icon" />
                <h4 className="success-title">Message Sent!</h4>
                <p className="success-desc">
                  Thank you for reaching out. I will respond to your message promptly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Your Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Hiring Manager"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Your Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. recruiter@company.com"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject" className="form-label">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. Java Developer Opportunity"
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Write your message here..."
                    required
                    className="form-input form-textarea"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-submit">
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
