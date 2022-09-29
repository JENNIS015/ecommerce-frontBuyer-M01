import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { itemsCart } = useCartContext();

  return (
    <div>
      <div className='iconCantidad'>
        <div className={itemsCart()> 0 ? "mostrar" : "ocultar"}>
          <span className='widgetCantidad'>{itemsCart()}</span>
        </div>
        <i className='large material-icons'>shopping_cart</i>
      </div>
    </div>
  );
};

export default CartWidget