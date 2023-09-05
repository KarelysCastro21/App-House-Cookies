import Footer from "./Footer";
import Logo from '../Assets/Logo.png'
import Products from "./Products";
import  { useContext } from "react";
import { dataContext } from '../Components/DataContext';
import BannerBackground from '../Assets/home-banner-background.png';
import CartElement from "./CartElement";
import '../hojas-estilo/Product.css';
import CartTotal from "./CartTotal";
import { Link } from 'react-router-dom';

const ComprarProductos = () => {
  const CarritoCompras = () => {
    return (
      
          <div className="product-card-container">
            <Products />
          </div>
        
    
    );
  };

  const CartContent = () => { 
     const { cart } = useContext(dataContext);
    return cart.length > 0 ? (
      <>
        <CartElement />
        <CartTotal />
      </>
    ) : (
      <h3 style={{textAlign: "right"}}>No has agregado ningún producto</h3>
    );
  };

  return (
    <div className="carrito-container">
      <div className="header">
        <h1 className="primary-heading">Menú</h1>
       
        <Link to="/">
        <div className="carrito-logo-container">
          <img src={Logo} alt="Logo" className="logo-image" />
        </div>
        </Link>
      </div>
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      </div>
      <div className="comprar-productos-container">
      <div className="left-section">

        <CarritoCompras />
        </div>
        <div className="right-section">
        <CartContent />
        </div>
       
        
      </div>
      <div>
        <Footer />
        </div>
    </div>
  );

  }
export default ComprarProductos;