import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import styles from "./cart.module.css";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const { cartList, deleteAll,  } = useCartContext();
  const history = useHistory();

  return (
    <div className="container">
      {cartList.length ? (
        <>
          <h1 className={styles.tituloPrincipal}>Carrito</h1>

          <CartItem productos={cartList} />

          <div className={styles.buttons}>
            <div className="row">
              <button className={styles.btn} onClick={deleteAll}>
                Vaciar Carrito
              </button>
              <button
                className={styles.btn}
                onClick={() => history.push("/order")}
              >
                Confirmar compra
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <h3>Tu carrito está vacío</h3>
          <h5>¿No sabés qué comprar? ¡Miles de productos te esperan !</h5>
          <Link to={`/productos`} className={styles.btn}>
            Ir a Productos
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
