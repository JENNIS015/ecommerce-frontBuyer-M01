import React from "react";
import { useCartContext } from "../../context/CartContext";
import LocalMallTwoToneIcon from "@mui/icons-material/LocalMallTwoTone";
const CartWidget = () => {
  const { itemsCart } = useCartContext();

  return (
    <div>
      <div className="iconCantidad">
        <LocalMallTwoToneIcon />

        <div className={itemsCart() > 0 ? "mostrar" : "ocultar"}>
          <span className="widgetCantidad">{itemsCart()}</span>
        </div>
      </div>
    </div>
  );
};

export default CartWidget;
