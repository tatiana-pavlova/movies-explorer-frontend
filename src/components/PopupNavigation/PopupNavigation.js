import React from "react";
import './PopupNavigation.css';
import closePopupPath from '../../images/close-popup.svg';
import Navigation from "../Navigation/Navigation";

function PopupNavigation(props) {
  return (
    <div className={`popup ${props.isOpen ? '' : 'popup_closed'}`}>
      <div className="popup__container">
        <button className="popup__close"><img src={closePopupPath} onClick={props.onClose} className="popup__close-icon" alt="крестик" /></button>
        <Navigation isOpen={props.isOpen} onClose={props.onClose}/>
      </div>
    </div>
  )
}

export default PopupNavigation;
