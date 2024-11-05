import { useState, useEffect } from 'react';
import projectsData from '../data/projectsData.json';

export default function useFilterProjectsByTag() {
  const [filteredProjects, setFilteredProjects] = useState(projectsData); // Initially show all projects
  const [selectedTag, setSelectedTag] = useState(null); // Store the selected tag

  useEffect(() => {
    if (selectedTag) { // If a tag is selected
      const filtered = projectsData.filter((project) =>
        project.tags.includes(selectedTag)
      );
      setFilteredProjects(filtered);
    } else { // If no tag is selected, show all projects
      setFilteredProjects(projectsData);
    }
  }, [selectedTag]);

  return { filteredProjects, selectedTag, setSelectedTag };
}
