import React from 'react';
import { Span } from 'storybook/internal/components';

export default function Section1({ project }) {
  if (!project || !project.section1) {
    return null; // Or return a loading indicator or a message
  }

  return (
    <div className="">
      {project.section1.map((section1, index) => (
        <div key={index}>
          
          <h4>{section1.subtitle}</h4>
          <p>{section1.description}</p>

          <div className="mt-4">
            {section1.siteLink && (
              <div className='projectDetail__link'>
                <i className="bi bi-link-45deg"></i>
                <a className="px-2"
                  href={section1.siteLink}
                  target="_blank"
                >{section1.siteLink}</a>
              </div>
            )}
          </div>


          <div>
            {section1?.embedded?.length > 0 &&
              section1.embedded.map((section1, name) => (
                <iframe
                  key={name}
                  width={section1.width}
                  height={section1.height}
                  src={section1.src}
                  allowFullScreen
                  className="projectDetail__iframe"
                />
              ))}
          </div>

          <div className="mt-4">
  {section1.tech && section1.tech.map((tech, techIndex) => (
    <div key={techIndex} className='themedBadgeWrapper'>
      <span className='themedBadge'>
        {tech}
      </span>
    </div>
  ))}
</div>


          <div className="mt-4">
            {section1.image && (
             <img src={section1.image}
             alt={section1.imageAria}
             className=""
           />
            )}
          </div>

          
          <div className="mt-4">
            {section1.galleryView && (
           <div className="projectDetail__galleryView m-auto mt-3 row d-flex">
           {section1.galleryView.map((galleryView, index) => (
             <img
               tabIndex="0"
               className="projectDetail__galleryImg py-md-3 py-1 d-block img-fluid col col-6 col-md-3 mw-100"
               key={index}
               src={galleryView.galleryImgSrc}
               alt={galleryView.galleryImgAria}
             />
           ))}
         </div>
            )}
          </div>

          


          



        </div>
      ))}
    </div>
  );
}
