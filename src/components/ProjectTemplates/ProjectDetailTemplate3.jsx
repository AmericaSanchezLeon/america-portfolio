import React from 'react';
import Header from '../ProjectDetailsComponent/Header';
import Links from '../ProjectDetailsComponent/Links';
import Description from '../ProjectDetailsComponent/Description';
import MainImage from '../ProjectDetailsComponent/MainImage';
import BadgesComponent from '../ProjectDetailsComponent/BadgesComponent';
import OnProgress from '../OnProgress';
import Embedded from '../ProjectDetailsComponent/Embedded';
import Section1 from '../ProjectDetailsComponent/ProcessSections/Section1';
import Section2 from '../ProjectDetailsComponent/ProcessSections/Section2';
import Section3 from '../ProjectDetailsComponent/ProcessSections/Section3';
import Section4 from '../ProjectDetailsComponent/ProcessSections/Section4';
import Section5 from '../ProjectDetailsComponent/ProcessSections/Section5';


export default function ProjectDetailTemplate3({ project, onClose }) {
  
  return (
    <section className='template3'>
    <Header project={project} onClose={onClose} />
    {/* <OnProgress/> */}

    {/* <MainImage project={project} className="m-auto" /> */}

    <div className="w-75 my-2 my-md-3 m-auto">
    {project?.embedded?.length > 0 ? ( 
          <Embedded project={project} /> 
        ) : (
          <MainImage project={project} className="m-auto" />
        )}
    </div>
    <Description project={project}/>
    
    {project?.embedded2?.length > 0 &&
        project.embedded2.map((embedded2, name) => (
          <iframe
            key={name}
            width={embedded2.width}
            height={embedded2.height}
            src={embedded2.src}
            allowFullScreen
            className="projectDetail__iframe" 
          />
        ))}

    <div className='mt-1 mt-md-3 py-4'>
    <BadgesComponent project={project}/>
    <Links project={project}/>   
    </div>

    <h3 className="mt-lg-5 mt-5">Design process</h3> 
    <Section1 project={project}/>
    <Section2 project={project}/>
    <Section3 project={project}/>
    <Section4 project={project}/>
    <Section5 project={project}/>


    </section>
      
  );
}
