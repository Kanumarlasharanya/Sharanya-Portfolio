import React from 'react';
import '../../styles/ProjectCard.css';

export default function ProjectCard({ project }) {
  return (
    <div className="project-card card">
      <h3 className="project-title">{project.name}</h3>
      <p className="project-description">{project.description}</p>

      <div className="project-tech-section">
        <span className="tech-heading">Technologies Used:</span>
        <div className="project-tech-stack">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="project-tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
