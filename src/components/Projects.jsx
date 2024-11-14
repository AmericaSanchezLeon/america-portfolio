import React, { useState } from 'react';
import useSelectedProject from '../hooks/useSelectedProject';
import useFilterProjectsByTag from '../hooks/useFilterProjectsByTag';

import ProjectList from './ProjectList';
import ProjectTags from './ProjectTags';
import ProjectDetail from './ProjectDetail'

export default function Projects() {

  const { selectedProjectId, handleProjectSelect, handleProjectClose } = useSelectedProject();
  const { filteredProjects, selectedTag, setSelectedTag } = useFilterProjectsByTag(handleProjectClose, selectedProjectId);

  return (
    <section
      id="projects"
      className="py-2"
    >
      <h2>Projects</h2>
      <div className='projects__wrapper row pt-2 pt-md-5'>
        <ProjectTags selectedTag={selectedTag} setSelectedTag={setSelectedTag} className="projects__sidebar col col-12 col-md-3" />
          
        {selectedProjectId ? ( 
        <ProjectDetail projectId={selectedProjectId} onClose={handleProjectClose} /> 
    
        ) : (
          <ProjectList filteredProjects={filteredProjects} handleProjectSelect={handleProjectSelect} />
        )}
      </div>
    
    </section>
  );
}