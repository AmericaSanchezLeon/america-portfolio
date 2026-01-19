
import React from 'react';

export default function Gallery({ project }) {
  return (
    <div className="projectDetail__galleryView m-auto mt-3 row d-flex">
      {project.galleryView.map((galleryView, index) => ( 
        <img
          tabIndex="0"
          className="projectDetail__galleryImg py-md-3 py-1 d-block img-fluid col col-6 col-md-6"
          key={index} 
          src={galleryView.galleryImgSrc} 
          alt={galleryView.galleryImgAria} 
        />
      ))}
    </div>
  );
}
