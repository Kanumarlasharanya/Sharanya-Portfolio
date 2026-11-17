import React from 'react';
import SectionTitle from '../common/SectionTitle';
import ProjectCard from '../common/ProjectCard';
import { portfolioData } from '../../data/portfolioData';
import '../../styles/Projects.css';

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <SectionTitle
          title="Projects"
          subtitle="A selection of projects showcasing my development skills."
        />

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
