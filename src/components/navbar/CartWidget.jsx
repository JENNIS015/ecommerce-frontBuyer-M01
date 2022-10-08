import React from "react";
import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { itemsCart } = useCartContext();

  return (
    <div>
      <div className="iconCantidad">
        <i className="large material-icons">shopping_cart</i>

        <div className={itemsCart() > 0 ? "mostrar" : "ocultar"}>
 
          <span className="widgetCantidad">{itemsCart()}</span>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
