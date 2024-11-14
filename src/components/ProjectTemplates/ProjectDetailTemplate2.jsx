import React from 'react';
import Header from '../ProjectDetailsComponent/Header';
import Links from '../ProjectDetailsComponent/Links';
import Description from '../ProjectDetailsComponent/Description';
import MainImage from '../ProjectDetailsComponent/MainImage';
import BadgesComponent from '../ProjectDetailsComponent/BadgesComponent';
import Gallery from '../ProjectDetailsComponent/Gallery';

export default function ProjectDetailTemplate2({ project, onClose }) {

  return (
    <>

      <Header project={project} onClose={onClose} />
      <div className="template2__wrapper d-block d-md-flex mt-5 justify-content-start">
        <div className="w-100" >
          <Description project={project} />
          <div className='w-100 py-5'>
            <BadgesComponent project={project} />
            <Links project={project} />
          </div>
        </div>
        <div className="mx-auto h-100 w-md-100 w-75">
          <MainImage project={project} />
        </div>

      </div>

      {project?.galleryView?.length > 0 && ( 
        <Gallery project={project} />
      )}
    </>

  );
}
