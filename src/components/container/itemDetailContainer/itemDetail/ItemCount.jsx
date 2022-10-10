import React, { useState } from "react";
import styles from "./item.module.css"
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
    <div className={hide !== true ?styles.addCart:""}>
      {hide !== true ? (
        <div className={styles.quantity}>
          <button className={styles.minu} onClick={disminuyeContador}>
            -
          </button>
          <span className={styles.numberinput}>{count}</span>
          <span className={styles.plus} onClick={aumentarContador}>
            +
          </span>
        </div>
      ) : (
        ""
      )}
      <div className={styles.agregarCarrito}>
        <button className={styles.button} onClick={() => onAdd(count)}>
          AGREGAR AL CARRITO
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
