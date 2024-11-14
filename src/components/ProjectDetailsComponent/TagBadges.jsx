import React from 'react';

export default function TagBadges({project}){
    return(
        <>
          {project.tags  && project.tags.map((tag, id) => (
            <span key={id} className='themedBadge'>
              {tag}
            </span>
          ))}
        </>
    )
}