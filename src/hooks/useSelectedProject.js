
import { useState } from 'react';

const useSelectedProject = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
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
