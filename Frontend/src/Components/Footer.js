import React from "react";
import Logo from "../Assets/Logo.png";
import { FaFacebookF } from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";
import {IoLogoWhatsapp} from "react-icons/io";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <img src={Logo} alt="" href="#Navbar" />
        </div>
        <div className="footer-icons">
  <a href="https://www.instagram.com/house.cookies.arg/?hl=es-la" target="_blank" rel="noopener noreferrer">
    <AiFillInstagram />
  </a>
  <a href="https://www.facebook.com/House.Cookies.Arg/" target="_blank" rel="noopener noreferrer">
    <FaFacebookF />
  </a>
  <a href="https://api.whatsapp.com/message/FBBHVTATKQ63O1?autoload=1&app_absent=0" target="_blank" rel="noopener noreferrer">
    <IoLogoWhatsapp/>
  </a>
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span  href="#Delivery">Delivery</span>
          <span  href="/">Localizar Tienda</span>
          <Link to="/Carrito"> <span  href="/Menu">Menú</span> </Link>
          <span  href="#SaboresSlider">Sabores</span>
          <span  href="#Contacto">Contacto</span>
        </div>
       
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;