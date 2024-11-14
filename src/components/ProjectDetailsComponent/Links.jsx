import React from 'react';

export default function Links({project}){

return(
    <div className="projectDetails__links mt-4">
    {project.siteLink && (
      <div className='projectDetail__link'>
        <i class="bi bi-link-45deg"></i>
        <a className="px-2"
          href={project.siteLink}
          target="_blank" 
        >{project.siteLink}</a>
      </div>
    )}
    {project.repo  && (
      <div className='projectDetail__link'>
        <i className="bi bi-github"></i>
        <a className="px-2"
          href={project.repo}
          target="_blank" 
        >{project.repo}</a>
      </div>
    )}
    {project.repo2  && (
      <div className='projectDetail__link'>
        <i className="bi bi-github"></i>
        <a className="px-2"
          href={project.repo2}
          target="_blank" 
        >{project.repo2}</a>
      </div>
    )}
    </div>
)

}