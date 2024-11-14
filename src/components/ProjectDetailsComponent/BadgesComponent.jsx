import React from 'react';
import YearBadges from './YearBadges';
import TechBadges from './TechBadges';
import TagBadges from './TagBadges';

export default function BadgesComponent({ project }) {
  return (
    <div className=' py-1 m-auto d-flex flex-wrap themedBadge-detail'>
      {project?.tech?.length > 0  && <TechBadges project={project} />} 
      {project?.tags?.length > 0 && <TagBadges project={project} />} 
      <YearBadges project={project} /> 
    </div>
  );
}
