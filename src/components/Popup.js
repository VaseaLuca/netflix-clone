import React from 'react'

import './Popup.css';

function Popup({description,img_src, close, title, popularity}) {
  return (
    <div className="popup">
      <div className="popup_inner">
        <div className="popup-img">
          <img className="popup-img" src={img_src} alt="" />
          <i className="close icon " onClick={close} />
        </div>
        <div className="popup_description">
          <div className="popup_title">{title}</div>
          <div className="popup_about">{description}</div>
        </div>
        <div className='popup_popularity'>Popular: {popularity}%</div>
      </div>
    </div>
  );
}

export default Popup
