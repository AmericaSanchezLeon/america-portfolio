import React from 'react';
import projectsData from '../data/projectsData.json';
import CloseButton from 'react-bootstrap/CloseButton';

export default function ProjectDetail({ projectId }) {
  const project = projectsData.find((project) => project.id === projectId);

  return (
    <section>
      <div className='project-detail__container py-md-5 py-3'>
      <h2>{project.name}</h2>
      <CloseButton />
      </div>
      <div className="project-detail__wrapper">
      <p>{project.year}</p>
      <p>{project.description}</p>

      <p>{project.link}</p>
      <p><i className="bi bi-github"></i>{project.repo}</p>

      <div>
          {project.tech && project.tech.map((tech, index) => (
            <span key={index} className="projectDetail__badge"> 
              {tech}
            </span>
          ))}
        </div>      <p>{project.image}</p>

      </div>
    </section>
  );
}
