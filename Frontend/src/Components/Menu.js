import React from 'react'
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";



const Menu = () => {
    return (
    <div id= 'Menu' className="Menu-section-container">
    <div className="Menu-background-image-container">
      <img src={AboutBackground} alt="" />
    </div>
    <div className="Menu-section-image-container">
      <img src={AboutBackgroundImage} alt="" />
    </div>
    <div className="Menu-section-text-container">
      <p className="primary-subheading">Menú</p>
      <h1 className="primary-heading">
       ¿ Hora de un Antojito ?
      </h1>
      <p className="primary-text">
        Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
        elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
      </p>
      <p className="primary-text">
        Non tincidunt magna non et elit. Dolor turpis molestie dui magnis
        facilisis at fringilla quam.
      </p>
      <div className="Menu-buttons-container">
        <button className="secondary-button">Ir al Menú</button>
        
       
      </div>
    </div>
  </div>
);
};


export default Menu
