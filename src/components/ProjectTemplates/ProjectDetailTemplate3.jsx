import React from 'react';
import Header from '../ProjectDetailsComponent/Header';
import Links from '../ProjectDetailsComponent/Links';
import Description from '../ProjectDetailsComponent/Description';
import MainImage from '../ProjectDetailsComponent/MainImage';
import BadgesComponent from '../ProjectDetailsComponent/BadgesComponent';
import OnProgress from '../OnProgress';

export default function ProjectDetailTemplate3({ project, onClose }) {
  
  return (
    <>
    <Header project={project} onClose={onClose} />
    <OnProgress/>
    {/* <MainImage project={project}/>
    <Description project={project}/>
    <BadgesComponent project={project}/>
    <Links project={project}/>     */}
    </>
      
  );
}
