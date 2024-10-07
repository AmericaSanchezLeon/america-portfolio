import projectsData from '../data/projectsData.json';

function getRandomColor() {
  const colors = ['#ff23c8','#0040ff','#00FFF0','#FF2380','#A762FF','#89f900', '#ffd500', '#d000ff', '#c3ff00', '#00ff99', '#ff5500'];
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className="projects__wrapper">
        {projectsData.map((project) => {
          const color = getRandomColor();
          return (
            <div 
            className="projects__element p-4" 

            style={{ borderColor: color }} 
            key={project.id}
              > 
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link}>View Project</a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
