import  { useContext } from "react";
import { dataContext } from '../Components/DataContext';
import '../hojas-estilo/Product.css';




const CartTotal = () => {
    const { cart} = useContext(dataContext);
    const total = cart.reduce((acc,el)=> acc + el.Price, 0);
  return (
    <div className="cartTotal">
        <h3>Total a Pagar: $ {total} </h3>
        </div>
  )
}

export default CartTotal;