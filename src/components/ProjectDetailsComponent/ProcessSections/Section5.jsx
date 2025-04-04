import React from 'react';

export default function Section5({ project }) {
  if (!project || !project.section5) {
    return null; // Or return a loading indicator or a message
  }

  return (
    <div className="mt-lg-5 mt-2">
      {project.section5.map((section5, index) => (
        <div key={index}>
    <h4>{section5.subtitle}</h4>
    <p>{section5.description}</p>

            <div className="mt-4">
              {section5.image && (
                <img src={section5.image}
                  alt={section5.imageAria}
                  className=""
                />
              )}
            </div>
        

            <div className="mt-4">
              {section5.siteLink && (
                <div className='projectDetail__link'>
                  <i className="bi bi-link-45deg"></i>
                  <a className="px-2"
                    href={section5.siteLink}
                    target="_blank"
                  >{section5.siteLink}</a>
                </div>
              )}
            </div>


            <div>
              {section5?.embedded?.length > 0 &&
                section5.embedded.map((section5, name) => (
                  <iframe
                    key={name}
                    width={section5.width}
                    height={section5.height}
                    src={section5.src}
                    allowFullScreen
                    className="projectDetail__iframe"
                  />
                ))}
            </div>

            <div className="mt-4">
              {section5.tech && section5.tech.map((tech, techIndex) => (
                <div key={techIndex} className='themedBadgeWrapper'>
                  <span className='themedBadge'>
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              {section5.galleryView && (
                <div className="projectDetail__galleryView m-auto mt-3 row d-flex">
                  {section5.galleryView.map((galleryView, index) => (
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
