
import React, { useEffect, useState } from 'react';

export default function useHandleTagSelect(tag) {
  const [filterTags, setFilterTags] = useState([]);

  useEffect( () => {
    const filteredTags = projectsData.filter((project) => project.tags.includes(tag));
    setFilterTags(filteredTags);
  }, [tag])

  
  return(


  )

}