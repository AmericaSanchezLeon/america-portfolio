import React from 'react';
import Header from '../ProjectDetailsComponent/Header';
import Links from '../ProjectDetailsComponent/Links';
import Description from '../ProjectDetailsComponent/Description';
import MainImage from '../ProjectDetailsComponent/MainImage';
import BadgesComponent from '../ProjectDetailsComponent/BadgesComponent';
import Embedded from '../ProjectDetailsComponent/Embedded';

export default function ProjectDetailTemplate1({project, onClose}) {
  
  return (
    <>
    <Header project={project} onClose={onClose} />
    <div className="w-75 my-2 my-md-3 m-auto">
    {project?.embedded?.length > 0 ? ( 
          <Embedded project={project} /> 
        ) : (
          <MainImage project={project} className="m-auto" />
        )}
    </div>

    <div className='w-75 m-auto'>
    <Description project={project}/>
    <div className='mt-1 mt-md-3 py-4'>
    <BadgesComponent project={project}/>
    <Links project={project}/>
    </div>
    </div>
   
       
    </>
      
  );
}
