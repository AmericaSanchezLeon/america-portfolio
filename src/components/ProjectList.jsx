import React from 'react';
import getRandomColor from '../hooks/getRandomColor';
import TechBadges from './ProjectDetailsComponent/TechBadges';

export default function ProjectList({ filteredProjects, handleProjectSelect }) {
  return (

    <>
      <div className='projects__list col col-10 col-md-8 m-auto'
      >
        {filteredProjects.map((project) => {
          const color = getRandomColor();
          return (
            <div
              className="projects__element col col-md-3 col-sm-4"
              key={project.id}
              style={{
                borderColor: color,
                backgroundImage: `url(src/assets/projects/${project.id}/project-image.jpg)`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                boxShadow:"inset 0 0 0 99999px rgba(231, 227, 220, 0.5)",
              }}
            >
              <div>
                <h4 className='projects__element__title'>{project.name}</h4>
                <div  className='py-1 m-auto d-flex flex-wrap themedBadge-list'>
                  {project?.tech?.length > 0 && <TechBadges project={project} />} 
                </div>

                <button
                  onClick={() => handleProjectSelect(project.id)}
                  className='projects__element__btn btn-themed-tertiary btn btn-link mt-5 '
                  role='button'
                >
                  View Project</button>
              </div>

            </div>
          );
        })}
      </div>
    </>
  )
}