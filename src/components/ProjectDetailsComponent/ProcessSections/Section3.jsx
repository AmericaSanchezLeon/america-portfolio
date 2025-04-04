import React from 'react';

export default function Section3({ project }) {
  if (!project || !project.section3) {
    return null; // Or return a loading indicator or a message
  }

  return (
    <div className="mt-lg-5 mt-2">
      {project.section3.map((section3, index) => (
        <div key={index}>


          <div className='row'>
            <div className="col-lg-5 col-12">
              <div className="mt-4">
                {section3.galleryView && (
                  <div className="projectDetail__galleryView m-auto mt-3 row d-flex">
                    {section3.galleryView.map((galleryView, index) => (
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

            <div className="col-lg-7 col-12">
            <h4>{section3.subtitle}</h4>

              <p>{section3.description}</p>
              <div className="mt-4">
                {section3.tech && section3.tech.map((tech, techIndex) => (
                  <div key={techIndex} className='themedBadgeWrapper'>
                    <span className='themedBadge'>
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="mt-4">
            {section3.siteLink && (
              <div className='projectDetail__link'>
                <i className="bi bi-link-45deg"></i>
                <a className="px-2"
                  href={section3.siteLink}
                  target="_blank"
                >{section3.siteLink}</a>
              </div>
            )}
          </div>


          <div>
            {section3?.embedded?.length > 0 &&
              section3.embedded.map((section3, name) => (
                <iframe
                  key={name}
                  width={section3.width}
                  height={section3.height}
                  src={section3.src}
                  allowFullScreen
                  className="projectDetail__iframe"
                />
              ))}
          </div>



          <div className="mt-4">
            {section3.image && (
              <img src={section3.image}
                alt={section3.imageAria}
                className=""
              />
            )}
          </div>





        </div>
      ))}
    </div>
  );
}
