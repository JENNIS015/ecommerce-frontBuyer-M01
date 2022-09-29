import React from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import "../cart/css/estilo_cart.css";

import { useHistory } from "react-router-dom";
const Cart = () => {
  const { cartList, deleteAll, formatNumber, precioTotal } = useCartContext();
  const history = useHistory();

  return (
    <div className="container">
      <div className="col s12">
        <div className="row">
          <div className="col s12 l8">
            {cartList.length ? (
              <>
                <h1>Carrito</h1>
                <table className="responsive-table">
                  <tbody>
                    <td></td>
                    {cartList.map((prodCart) => (
                      <CartItem key={prodCart.id} prod={prodCart} />
                    ))}
                  </tbody>
                </table>

                <h5 className="total">Total:{formatNumber(precioTotal())}</h5>
                <div className="col s12">
                  <div className="row">
                    <button className="btn" onClick={deleteAll}>
                      Vaciar Carrito
                    </button>
                    <button
                      className="btn"
                      onClick={() => history.push("/order")}
                    >
                      Confirmar compra
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="container full">
                <h3>Tu carrito está vacío</h3>
                <h5>¿No sabés qué comprar? ¡Miles de productos te esperan !</h5>
                <Link
                  to={`/productos`}
                  className="waves-effect waves-light btn"
                >
                  Ir a Productos
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
