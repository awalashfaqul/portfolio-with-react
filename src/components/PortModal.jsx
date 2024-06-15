import React from 'react';
import './PortModal.css';

function PortModal ({ show, onClose, project }) {
  if (!show || !project) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          {project && (
            <>
              <h4>{project.title}</h4>
              <img src={project.src} alt={project.title} className="modal-image" />
              <p>{project.description || "No description available."}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PortModal;
