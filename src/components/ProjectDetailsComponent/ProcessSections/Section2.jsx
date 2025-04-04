import React from 'react';

export default function Section2({ project }) {
  if (!project || !project.section2) {
    return null; // Or return a loading indicator or a message
  }

  return (
    <div className="">
      {project.section2.map((section2, index) => (
        <div key={index}>
          
          <h4>{section2.subtitle}</h4>


          <div className='row'>
            <div className="col-lg-6 col-12">
            <p>{section2.description}</p>

            </div>
            
            <div className="col-lg-6 col-12">

            
            {section2.galleryView && (
           <div className="projectDetail__galleryView m-auto mt-3 row d-flex">
           {section2.galleryView.map((galleryView, index) => (
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
            <div className="mt-4">
  {section2.tech && section2.tech.map((tech, techIndex) => (
    <div key={techIndex} className='themedBadgeWrapper'>
      <span className='themedBadge'>
        {tech}
      </span>
    </div>
  ))}
</div><div>
            </div>
          <div className="mt-4">
            {section2.siteLink && (
              <div className='projectDetail__link'>
                <i className="bi bi-link-45deg"></i>
                <a className="px-2"
                  href={section2.siteLink}
                  target="_blank"
                >{section2.siteLink}</a>
              </div>
            )}
          </div>


          <div>
            {section2?.embedded?.length > 0 &&
              section2.embedded.map((section2, name) => (
                <iframe
                  key={name}
                  width={section2.width}
                  height={section2.height}
                  src={section2.src}
                  allowFullScreen
                  className="projectDetail__iframe"
                />
              ))}
          </div>

          

          <div className="mt-4">
            {section2.image && (
             <img src={section2.image}
             alt={section2.imageAria}
             className=""
           />
            )}
          </div>

          
        
        </div>
      ))}
    </div>
  );
}
