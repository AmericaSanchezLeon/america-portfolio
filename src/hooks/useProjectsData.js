import { useState, useEffect } from 'react';

export const useProjectsData = () => {
  const [projectsData, setProjectsData] = useState([]);

  useEffect(() => {
    const importProjects = async () => {
      const { default: projectsIndex } = await import('../data/projectsData.json');

      const imports = projectsIndex.map((project) => import(`../data/${project.src}`));

      const projectData = await Promise.all(imports);
      setProjectsData(projectData.map((data) => data.default[0]));
    };

    importProjects();
  }, []);

  return projectsData;
};
