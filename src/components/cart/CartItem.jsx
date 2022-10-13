import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import { baseURL } from "../../config/config";
import styles from "./cart.module.css";
import Count from "./Count";

const CartItem = (props) => {
  const productos = props.productos;

  const { formatNumber, deleteItem, precioTotal } = useCartContext();

  return (
    <div className={styles.responsive}>
      <table className={styles.tablecart}>
        <thead>
          <tr>
            <th className={!props.sucess === true ? styles.one : styles.hide}>
              Imagen
            </th>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th className={styles.one}>Precio Unitario</th>
            <th>Subtotal</th>
          </tr>
        </thead>

        <tbody>
          {productos.map((prod, i) => (
             
              <tr key={i}>
                <td
                  className={!props.sucess === true ? styles.one : styles.hide}
                >
                  <img
                    src={
                      baseURL +
                      "/uploads/" +
                      (prod.foto ? prod.foto[0].filename : "default.jpg")
                    }
                    className={styles.imgCart}
                    alt={prod.nombre}
                  />
                </td>

                <td>
                  <Link
                    className={
                      props.checkout || props.sucess !== true
                        ? styles.producto
                        : styles.productoCheckout
                    }
                    to={`/item/${prod.id}`}
                  >
                    <p>{`${prod.nombre}`}</p>
                  </Link>
                </td>

                <Count
                  productos={prod}
                  checkout={props.checkout}
                  sucess={props.sucess}
                />

                {props.checkout || props.sucess === true ? (
                  ""
                ) : (
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(prod.id);
                      }}
                    >
                      <i className="tiny material-icons">delete</i>
                    </button>
                  </td>
                )}
              </tr>
           
          ))}
        </tbody>
      </table>
      {props.checkout || props.sucess !== true ? (
        <h5 className={styles.total}>Total:{formatNumber(precioTotal())}</h5>
      ) : (
        ""
      )}
    </div>
  );
};
export default CartItem;
