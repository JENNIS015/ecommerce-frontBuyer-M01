import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
 
import { useCartContext } from "../../../../context/CartContext";
import "./css/itemDetail-style.css";

export const ItemDetail = ({ prod }) => {
  const { message, addItems, formatNumber } = useCartContext();
  const [inputType, setInputType] = useState("input");
  const product = prod.producto;
  const onAdd = (count) => {
    addItems({ ...product, cantidad: count });
    setInputType("button");
  };

 
  return (
    <div className="col s12 m12 l12 flex" key={product.id}>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <div className="col s12 m6 l6">
            <div>
              <img
                alt={product.nombre}
                className="imgDetail"
                src={
                  product.foto
                    ? product.foto
                    : "/assets/image/default-placeholder.png"
                }
              />
            </div>
          </div>
          <div className="col s12 m5 l5 detalleProducto">
            <h5 className="producto">{product.nombre}</h5>
            <span className="price">{formatNumber(product.precio)}</span>

            {inputType === "input" ? (
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart" className="pretext comprar">
                Ir a Carrito
              </Link>
            )}
            <span className="stockDisponible">
              Stock Disponible: {product.stock}
            </span>
            <p className="error">{message}</p>
          </div>
        </div>
        <div className="m-20">
          <h5>Descripción</h5>
          {product.descripcion}
        </div>
      </div>
    </div>
  );
};
