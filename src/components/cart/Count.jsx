import { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import styles from "./cart.module.css";

function Count({ productos, checkout, sucess }) {
  const [count, setCount] = useState(productos.cantidad);
  const { formatNumber, addItems, discountItems } = useCartContext();
  const precioFinal =
    productos.oferta > 0 ? productos.oferta : productos.precio;
  const aumentarContador = () => {
    if (count < productos.stock) {
      setCount(count + 1);
    }
    addItems({ ...productos, cantidad: 1 });
  };

  const disminuyeContador = () => {
    if (count > 1) {
      setCount(count - 1);
    }
    discountItems({ ...productos, cantidad: 1 });
  };

  return (
    <>
      <td>
        {checkout || sucess !== true ? (
          <div className={styles.quantity}>
            <span className={styles.numberinput}>
              {
                <div className={styles.quantity}>
                  <button className={styles.minu} onClick={disminuyeContador}>
                    -
                  </button>
                  <span className={styles.numberinput}>{count}</span>
                  <span className={styles.plus} onClick={aumentarContador}>
                    +
                  </span>
                </div>
              }
            </span>
          </div>
        ) : (
          count
        )}
      </td>
      <td className={styles.one}>
        <p>{formatNumber(precioFinal)}</p>
      </td>
      <td>
        <p>{formatNumber(precioFinal * count)}</p>
      </td>
    </>
  );
}

export default Count;
