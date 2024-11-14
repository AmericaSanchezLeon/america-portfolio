
export default function Embedded({ project }) {
  return (
    <>
      {project?.embedded?.length > 0 &&
        project.embedded.map((embedded, name) => (
          <iframe
            key={name}
            //style={embedded.style}
            width={embedded.width}
            height={embedded.height}
            src={embedded.src}
            allowFullScreen 
          />
        ))}
    </>
  );
}
