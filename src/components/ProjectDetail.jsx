import projectsData from '../data/projectsData.json';
import ProjectDetailTemplate1 from "./ProjectTemplates/ProjectDetailTemplate1"
import ProjectDetailTemplate2 from "./ProjectTemplates/ProjectDetailTemplate2"
import ProjectDetailTemplate3 from "./ProjectTemplates/ProjectDetailTemplate3"
import getRandomColor from '../hooks/getRandomColor';
import Error from './Error';

export default function ProjectDetail({ projectId, onClose }) {
  const project = projectsData.find((project) => project.id === projectId);

  const template = project ? project.template : null;

  const templateComponents = {
    template1: ProjectDetailTemplate1,
    template2: ProjectDetailTemplate2,
    template3: ProjectDetailTemplate3,
  };
  const ProjectComponent = templateComponents[template] || (() => <Error/>);

  return (
    <section
      className='projectDetail__container p-md-5 p-1 col col-md-9 col-10 m-auto'
      key={project.id}
      style={{ border: `0.5rem solid ${getRandomColor()}` }}
    >
      <ProjectComponent project={project} onClose={onClose} />
    </section>

  );
}