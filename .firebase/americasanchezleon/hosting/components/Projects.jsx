import React, { useState } from 'react';
import projectsData from '../data/projectsData.json';
import useSelectedProject from '../../src/hooks/useSelectedProject'; // Import the hook
import ProjectDetail from './ProjectDetail';
import getRandomColor from '../../src/hooks/getRandomColor';
import useFilterProjectsByTag from '../../src/hooks/useFilterProjectsByTag';

export default function Projects() {
  const { selectedProjectId, handleProjectSelect, handleProjectClose } = useSelectedProject();
  const { filteredProjects, selectedTag, setSelectedTag } = useFilterProjectsByTag(); 

  const tags = new Set();
  projectsData.forEach((project) => {
    project.tags.forEach((tag) => tags.add(tag));
  });

  
  return (
    <section id="projects" className="py-2">
      <h2>Projects</h2>
      <div className='projects__wrapper row'>
        <aside className='projects__sidebar col col-md-2 col-sm-4'>
          <ul>
            {[...tags].map((tag) => (
              <button key={tag}
              className={`filter-tag ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => setSelectedTag(selectedTag === tag ? null : tag)} 
                       >
                {tag}
              </button>
            ))}
          </ul>
        </aside>
        <div className='col col-md-9 col-sm-12'>
        <div className='projects__list row' >
          {filteredProjects.map((project) => {
            const color = getRandomColor();
            return (
              <div
                className="projects__element col col-md-3 col-sm-6"
                style={{ borderColor: color }}
                key={project.id}
              >
                <h4>{project.name}</h4>
                <p>{project.description}</p>
                <a onClick={() => handleProjectSelect(project.id)}
                >View Project</a>
              </div>
            );
          })}
        </div>
        </div>
      
      </div>

      {selectedProjectId && (
        <ProjectDetail 
          projectId={selectedProjectId} 
          onClose={handleProjectClose}
        />
      )}
    </section>
  );
}
