
import {  createContext, useState, useEffect } from "react";
import axios from "axios";
import CookiesImage from "../Assets/cookies.jpeg"
import Box500Image from "../Assets/box500.jpeg";
import Alfajores from "../Assets/alfajores.jpg";
import Boxmix from "../Assets/boxmix.jpeg";
import DuoBox from "../Assets/duoboxbrownies.jpeg";



export const dataContext = createContext();


const DataProvider = ({children}) =>{

    const [ data, setData]= useState([]);
    const [ cart, setCart]= useState([]);

    useEffect (()=>{
        axios.get("data.json")
        .then((res)=>{ setData(res.data)
            const productData = res.data.map((product) => ({
                ...product,
                img: getImagePath(product.img),
              }));
      
              setData(productData);
    })
    .catch((error) => {
        console.error("Error al cargar los datos:", error);
      });
    
    },[])
    const getImagePath = (imageName) => {
        switch (imageName) {
          case "cookies.jpeg":
            return CookiesImage;
          case "box500.jpeg":
            return Box500Image;
            case "alfajores.jpg":
                return Alfajores;

                case "boxmix.jpeg":
                    return Boxmix;
                    case "duoboxbrownies.jpeg":
                    return DuoBox;
          default:
            return ""; // Puedes manejar un valor predeterminado o lanzar un error
        }
      };
    return(
        <dataContext.Provider value={{data, cart, setCart}}>
        {children}
    </dataContext.Provider>

    )
};
export default DataProvider;