import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

export default function Header({ project, onClose }) {
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="projectDetail__titleContainer">
      <h3>{project.name}</h3>
      <button onClick={handleClose} 
      className='btn-themed-icon'>
      <i className="bi bi-x-lg"></i>
      </button> 
    </div>
    
  );
}