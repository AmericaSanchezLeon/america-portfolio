import React from 'react';

export default function TechBadges({project}){
    return(
        <>
          {project.tech && project.tech.map((tech, id) => (
            <span 
            key={id}
            className='themedBadge'
            >
              {tech}
            </span>
          ))}
        </>
    )
}