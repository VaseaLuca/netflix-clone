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
        <div className="popup_popularity">Popular: {popularity}%</div>
        <div className="popup_loremipsum">
          <div className="loremipsum_text">
            Morbi tristique senectus et netus. Luctus accumsan tortor posuere
            ac. Quis ipsum suspendisse ultrices gravida dictum fusce ut. Quam
            adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus. Odio
            pellentesque diam volutpat commodo sed. Elementum curabitur vitae
            nunc sed velit dignissim sodales ut eu. Euismod lacinia at quis
            risus. Id ornare arcu odio ut sem nulla pharetra. Commodo viverra
            maecenas accumsan lacus vel facilisis volutpat est velit. Et
            sollicitudin ac orci phasellus. Et magnis dis parturient montes
            nascetur ridiculus mus. Diam sollicitudin tempor id eu. Gravida cum
            sociis natoque penatibus et magnis dis parturient montes. Gravida
            rutrum quisque non tellus orci. Nec sagittis aliquam malesuada
            bibendum arcu vitae elementum curabitur vitae. Vulputate eu
            scelerisque felis imperdiet. Rhoncus dolor purus non enim praesent
            elementum facilisis leo vel. Est pellentesque elit ullamcorper
            dignissim cras tincidunt lobortis feugiat. Leo duis ut diam quam
            nulla porttitor massa.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup
