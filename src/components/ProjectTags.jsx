import React from 'react';
import projectsData from '../data/projectsData.json';

export default function ProjectTags({ selectedTag, setSelectedTag }) {

    const tags = new Set();
    projectsData.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });

    return (
        <aside className="projects__sidebar col col-12 col-md-3">
          {[...tags].map((tag) => (
            <button
              key={tag}
              className={`projects__filter-tag ${selectedTag === tag ? 'active' : ''} btn-themed-tertiary`}
              onClick={() => {
                setSelectedTag(selectedTag === tag ? null : tag);
              }}
             >
              {tag}
            </button>
          ))}
        </aside>
      );
    }

