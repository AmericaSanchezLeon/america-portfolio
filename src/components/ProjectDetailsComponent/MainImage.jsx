import React from 'react';

export default function MainImage({project}){
    
    return(
        <img src={project.mainImage} 
        alt={project.mainImageAria} 
        className='img-fluid mw-100 h-100'
        />
    );
}