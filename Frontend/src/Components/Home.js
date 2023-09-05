import React from 'react'

import { Navbar } from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png';
import BannerImage from '../Assets/home-banner-image.png';
import { FiArrowRight } from 'react-icons/fi';
import { Menu } from '@mui/material';
import SaboresSlider from './SaboresSlider';
import Delivery from './Delivery';
import Contacto from './Contacto';
import Footer from './Footer';
import Sucripcioncontainer from './Sucripcioncontainer';

const Home = () => {
  return (
  

    <div className="home-container">
      <Sucripcioncontainer/>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Galletas
            Artesanales

          </h1>
          <p className="primary-text">
            Sabor Dulzura e Intensidad.
            Directo del horno a tu paladar.
            Todos nuestros productos son preparados Artesanalmente
          </p>
          <a href="#Delivery" style={{ textDecoration: 'none' }}>
            <button className="secondary-button"  >
              Ordenar Ahora<FiArrowRight />
            </button>
          </a>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
      <Menu />
      <SaboresSlider />
      <Delivery />
      <Contacto />
      <Footer />
    </div>
  );
};


export default Home;