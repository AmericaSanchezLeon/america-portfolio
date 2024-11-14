import React from 'react';

export default function Description({project}){

    return(
        <p className="py-2 projectDetail__description">{project.description}</p>
    );
}