import { useContext } from "react";
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { dataContext } from '../Components/DataContext';
import '../hojas-estilo/Product.css';
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";




const CartElement = () => {
    const { cart, setCart} = useContext(dataContext);

    // Función para fusionar productos duplicados en el carrito
  const mergeDuplicateProducts = (cartItems) => {
    const mergedCart = [];
    
    cartItems.forEach((item) => {
      const existingItem = mergedCart.find((mergedItem) => mergedItem.id === item.id);
      
      if (existingItem) {
        existingItem.quantity += 1; // Incrementa la cantidad si ya existe
      } else {
        mergedCart.push({ ...item, quantity: 1 }); // Agrega un nuevo elemento al carrito
      }
    });

    return mergedCart;
  };

  const mergedCart = mergeDuplicateProducts(cart);
  
    const handleDeleteItem = (itemId) => {
      const updatedCart = cart.filter((product) => product.id !== itemId);
      setCart(updatedCart);

    };
    
  
    return (
      <div className="cart-container">
    <Typography variant="h6" gutterBottom style={{ fontWeight: "bold", textAlign: "right" }}>
      Carrito de Compras <ShoppingCartRoundedIcon />
    </Typography>
    {mergedCart.map((product) => (
      <Card key={product.id} className="cartContent" sx={{ display: 'flex' }}>
      
          <CardMedia
            component="img"
            sx={{ width: 151 }}
            image={product.img}
            alt={product.name}
            className="image"
          />
           
          <CardContent sx={{ flex: '1 0 auto' }}>
            
            <Typography className="name">
              {product.name}
            </Typography>
            <Typography color="text.secondary" className="Description">
              {product.Description}
            </Typography>
            <Typography className="Price">
              ${product.Price * product.quantity} {/* Multiplica el precio por la cantidad */}
            </Typography>
            <Typography color="text.secondary">
              Cantidad: {product.quantity}
            </Typography>
            <IconButton
              aria-label="Eliminar"
              color="primary"
              onClick={() => handleDeleteItem(product.id)}
            >
              <DeleteIcon style={{ color: "black" }} />
            </IconButton>
          </CardContent>
      
          
      </Card>
    ))}
  </div>
);
  };
  
  export default CartElement;