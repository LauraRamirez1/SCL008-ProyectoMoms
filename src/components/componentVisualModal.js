/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import './css/componentVisualModal.css';


const ComponentVisualModal = (props) => {
  if (!props.isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="text-container">
          <p className="confirmation">{props.confirmation}</p>
          <h2 className="message">{props.message}</h2>
          <p className="text">{props.text}</p>
          <button className="close-btn" onClick={props.onClose}>Entendido</button>
        </div>
      </div>
    </div>
  );
};


export default ComponentVisualModal;
