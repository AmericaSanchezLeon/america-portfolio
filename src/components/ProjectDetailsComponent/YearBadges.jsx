import React from 'react';

export default function YearBadges({project}){
    return(
          <span className='themedBadge'>
            {project.year}
          </span>
        
    )
}