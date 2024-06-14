import React from 'react';
import './ContactModal.css';

function ContactModal ({ isVisible, onClose }) {
  if (!isVisible) return null;

  return (
    <div id="contactModal" className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <span className="close" onClick={onClose}>&times;</span>
        </div>
        <div className="modal-body">
          <p>Message sent!!</p>
          <h4>Thank you for contacting me!</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
