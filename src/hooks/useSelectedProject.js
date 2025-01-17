
import { useState } from 'react';

const useSelectedProject = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
    setTimeout(() => {
      const projectDetailElement = document.querySelector('.projectDetail__container');
      if (projectDetailElement) {
        projectDetailElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }, 100); 
  };

  const handleProjectClose = () => {
    setSelectedProjectId(null);
  };

  return {
    selectedProjectId,
    handleProjectSelect,
    handleProjectClose
  };
};

export default useSelectedProject;
