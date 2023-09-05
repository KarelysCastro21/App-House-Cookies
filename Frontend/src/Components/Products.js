import { useContext } from "react";
import { dataContext } from '../Components/DataContext';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from "@mui/material";
import '../hojas-estilo/Product.css'


const Products = () => {
  const { data, cart, setCart } = useContext(dataContext);

  const agregarProductos = (product) => {
    console.log(product)
    setCart([...cart, product])
  };

  return (

    <Grid container spacing={2}>
      {data.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={6} lg={6}>
          <Card >
            <CardMedia
              component="img"
             
              alt={product.name}
              src={product.img} 
              style={{ maxWidth: "100%", height:"200px" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.Description}
              </Typography>
              <Typography variant="h6" color="text.primary">
                {product.Price}$
              </Typography>
            </CardContent>
            <Button  onClick={()=>agregarProductos (product)} variant="contained" style={{ backgroundColor: "#fe9e0d", color: "white" }} className="add-button">
              Agregar
            </Button>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;