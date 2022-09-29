import React from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import {baseURL} from "../../config/config"

const CartItem = (prod)=> {
  const { formatNumber, deleteItem } = useCartContext();

  const productos= prod.prod
  const urlImagen = productos.foto?productos.foto[0].filename:"default.jpg"
  return (
    <tbody>
      <tr>
        <td>
          <img
            src={baseURL + "/uploads/" + urlImagen}
            className="cart"
            alt={productos.nombre}
          />
        </td>

        <td>
          <Link to={`/item/${productos.id}`}>
            <p>{`${productos.nombre}`}</p>
            <p>x {productos.cantidad}</p>
          </Link>
        </td>
        <td>
          <p>{formatNumber(productos.precio)}</p>
        </td>

        <td>
          <p className="strong">
            {formatNumber(productos.cantidad * productos.precio)}
          </p>
        </td>

        {prod.checkout ? (
          ""
        ) : (
          <td className="borrar">
            <button onClick={() => deleteItem(productos.id)}>
              <i className="tiny material-icons">delete</i>
            </button>
          </td>
        )}
      </tr>
    </tbody>
  );
}
export default CartItem