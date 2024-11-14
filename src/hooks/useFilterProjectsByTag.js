import { useState, useEffect } from 'react';
import projectsData from '../data/projectsData.json';

export default function useFilterProjectsByTag(setSelectedProjectId) {
  const [filteredProjects, setFilteredProjects] = useState(projectsData); 
  const [selectedTag, setSelectedTag] = useState(null); 
  
  
  useEffect(() => {
    if (selectedTag) { 
      const filtered = projectsData.filter((project) =>
        project.tags.includes(selectedTag)
      );
      setFilteredProjects(filtered);
      setSelectedProjectId(null);
    } else { 
      setFilteredProjects(projectsData);
        }
  }, [selectedTag]);

  


  return { filteredProjects, selectedTag, setSelectedTag,  };
}


