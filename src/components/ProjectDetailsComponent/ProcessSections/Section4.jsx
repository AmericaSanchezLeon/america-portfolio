import React from 'react';

export default function Section4({ project }) {
  if (!project || !project.section4) {
    return null; // Or return a loading indicator or a message
  }

  return (
    <div className="">
      {project.section4.map((section4, index) => (
        <div key={index}>

          <h4>{section4.subtitle}</h4>

          <div>
            {section4.siteLink && (
              <div className='projectDetail__link'>
                <i className="bi bi-link-45deg"></i>
                <a className="px-2"
                  href={section4.siteLink}
                  target="_blank"
                >{section4.siteLink}</a>
              </div>
            )}
          </div>

          <div>
            {section4?.embedded?.length > 0 &&
              section4.embedded.map((section4, name) => (
                <iframe
                  key={name}
                  width={section4.width}
                  height={section4.height}
                  src={section4.src}
                  allowFullScreen
                  className="projectDetail__iframe"
                />
              ))}
          </div>

        

          <div>
            {section4.image && (
              <img src={section4.image}
                alt={section4.imageAria}
                className=""
              />
            )}
          </div>
          <div className='row'>
            <div className="col-lg-6 col-12">
              <p>{section4.description}</p>
              <div className="mt-4">
            {section4.tech && section4.tech.map((tech, techIndex) => (
              <div key={techIndex} className='themedBadgeWrapper'>
                <span className='themedBadge'>
                  {tech}
                </span>
              </div>
            ))}
          </div>

            </div>
            <div className="col-lg-6 col-12">
              {section4.galleryView && (
                <div className="projectDetail__galleryView m-auto mt-3 row d-flex">
                  {section4.galleryView.map((galleryView, index) => (
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

         


        </div>
      ))}
    </div>
  );
}
