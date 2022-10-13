import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../../itemDetailContainer/itemDetail/ItemCount";
import { useCartContext } from "../../../../context/CartContext";
import { baseURL } from "../../../../config/config";
import styles from "./item.module.css";
const Item = ({   product, hide }) => {
  const { addItems, formatNumber } = useCartContext();
  const [inputType, setInputType] = useState("input");

  const onAdd = (count) => {
    addItems({ ...product, cantidad: count });
    setInputType("button");
  };
  const precioVigente = product.oferta > 1 ? product.oferta : product.precio;
  const precioRegular = product.oferta ? product.precio : "";
  const descuento = product.oferta ? product.precio / product.oferta : 0;
  const urlImagen = product.foto ? product.foto[0].filename : "default.jpg";
  const productId=product._id?product._id:product.id
  return (
    <div className="col s12 m4 l4">
      <div  className={styles.card}>
        <Link to={`/item/${productId}`}>
          <div>
            <p className={product.stock === 0 ? styles.agotado : ""}>
              {product.stock !== 0 ? "" : "AGOTADO"}
            </p>
            <p className={product.oferta ? styles.ribbon : styles.esconder}>
              <span className={styles.text}>
                {"-" + Math.round(descuento * 100 - 100) + "%"}
              </span>
            </p>

            <img
              alt={product.nombre}
              className={product.stock !== 0 ? styles.image : styles.imageSold}
              src={baseURL + "/uploads/" + urlImagen}
            />
          </div>

          <div className={styles.content}>
            <p className={styles.name}>{`${product.nombre.slice(0, 60)}`}</p>

            <div className={styles.oferta}></div>
            <div className={styles.price}>
              <span className={styles.old}>
                {precioRegular !== "" ? formatNumber(product.precio) : ""}
              </span>
              {formatNumber(precioVigente)}
            </div>
          </div>
        </Link>
        {inputType === "input" ? (
          <ItemCount
            initial={1}
            stock={product.stock}
            onAdd={onAdd}
            hide={hide}
          />
        ) : (
          <Link to="/cart" className={styles.pretext}>
            Ir a Carrito
          </Link>
        )}
      </div>
    </div>
  );
};
export default Item;
