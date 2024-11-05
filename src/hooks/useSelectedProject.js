import { useState } from 'react';

export default function useSelectedProject() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectSelect = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const handleProjectClose = () => {
    setSelectedProjectId(null);
  };

  return { selectedProjectId, handleProjectSelect, handleProjectClose };
}
