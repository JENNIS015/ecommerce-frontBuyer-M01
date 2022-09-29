import { React, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../../context/CartContext";
 import { baseURL } from "../../../../config/config";
import ItemCount from "../../itemDetailContainer/itemDetail/ItemCount";
const Item = ({ key,product }) => {
  const { addItems, formatNumber } = useCartContext();
  const [inputType, setInputType] = useState("input");

  const onAdd = (count) => {
    addItems({ ...product, cantidad: count });
    setInputType("button");
  };
 
  const urlImagen = product.foto ? product.foto[0].filename : "default.jpg";
  return (
    <div className="col s12 m6 l4" key={product.id}>
      <div className="card hoverable">
        <Link to={`/item/${product.id}`}>
          <div className="card-image waves-effect waves-block waves-light">
            <img
              alt={product.nombre}
              className="imgDetail"
              src={baseURL + "/uploads/" + urlImagen}
            />
          </div>

          <div className="card-content">
            <span>{`${product.nombre.slice(0, 30) + "..."}`}</span>

            <p className="mayuscula prod-categoria">{`${product.categoria}`}</p>
            <div className="prod-price">{formatNumber(product.precio)}</div>
          </div>
        </Link>
        {inputType === "input" ? (
          <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart" className="pretext comprar">
            Ir a Carrito
          </Link>
        )}
      </div>
    </div>
  );
};
export default Item;
