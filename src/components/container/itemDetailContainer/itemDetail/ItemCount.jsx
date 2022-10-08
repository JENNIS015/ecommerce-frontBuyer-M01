import React, { useState } from "react";
import styles from "./addcart.module.css"
const ItemCount = ({ initial, stock, onAdd,hide }) => {
  const [count, setCount] = useState(initial);
 
  const aumentarContador = () => {
     if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuyeContador = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className="count">
      {hide !== true ? (
        <div className="quantity-input">
          <button className="minus" onClick={disminuyeContador}>
            -
          </button>
          <span className="number-input">{count}</span>
          <span className="plus" onClick={aumentarContador}>
            +
          </span>
        </div>
      ) : (
        ""
      )}
      <div className="agregarCarrito">
        <button className={styles.button} onClick={() => onAdd(count)}>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
