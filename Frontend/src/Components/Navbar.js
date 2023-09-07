import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import  { useState } from 'react';
import Logo from '../Assets/Logo.png'
import { HiOutlineBars3 } from "react-icons/hi2";
import {Box, List, Divider, Drawer,ListItem, ListItemButton, ListItemIcon, ListItemText, }from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import CookieIcon from '@mui/icons-material/Cookie';
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import LocationOnIcon from '@mui/icons-material/LocationOn';

export const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false)


    const tiendaLocation = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/Location`);
        const { url } = response.data;
        window.open(url, '_blank'); // Abre en una nueva pestaña
    } catch (error) {
      
        console.error(error);
      }
    };
   
    const menuOptions = [
      {
        text: "Home",
        icon: <HomeIcon />,
        
      },
      {
        text: "Menú",
        icon: <RestaurantMenuIcon />,
      
      },
      {
        text: "Sabores",
        icon: <CookieIcon />,
        
      },
      {
        text: "Contacto",
        icon: <PhoneRoundedIcon />,
       
      },
      {
        text: "Cart",
        icon: <ShoppingCartRoundedIcon />,
        link: '/carrito',
      },
      {
        text: "Localizar Tienda",
        icon: <LocationOnIcon/>,
        action: tiendaLocation,
      }
    ];

    

  return (
    <nav>
       
      <div className="nav-logo-container">
        <img src={Logo} alt="Logo" className='logo-image' />
        <p className="logo-text">House Cookies Arg</p>
      </div>
      <div className="navbar-links-container">
        <a href="/">Home</a>
        <Link to={'/carrito'}>Menú</Link>
        <a href="#Sabores">Sabores</a>
        <a href="#Delivery">Delivery</a>
        <a href="#Contacto">Contacto</a>
        <Link to={'/carrito'}><ShoppingCartRoundedIcon /></Link>
        
        <button className="primary-button" onClick={tiendaLocation}>Localizar Tienda <LocationOnIcon/></button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} className="menu-icon" />
 
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
