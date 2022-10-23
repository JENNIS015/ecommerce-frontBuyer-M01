import { useState } from "react";
import "./carrousel.css";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCartContext } from "../../../../context/CartContext";
import { cloudinary } from "../../../../config/config";
import styles from "./item.module.css";

export const ItemDetail = ({ prod }) => {
  const { message, addItems, formatNumber } = useCartContext();
  const [inputType, setInputType] = useState("input");
  const product = prod.producto;
  const precioVigente = product.oferta > 1 ? product.oferta : product.precio;
  const precioRegular = product.oferta ? product.precio : "";
  const descuento = product.oferta ? product.precio / product.oferta : 0;

  const onAdd = (count) => {
    addItems({ ...product, cantidad: count });
    setInputType("button");
  };

  return (
    <div>
      <div className="col s12 m12 l12">
        <div className="col s12 m6 l6">
          <div>
            <Carousel>
              {product.foto.map((item, i) => (
                <img
                  src={`https://res.cloudinary.com/${
                    cloudinary.id
                  }/image/upload/${cloudinary.album}/${
                    item ? item : "images_boqfzf"
                  }.jpg`}
                  className={styles.imgslider}
                  alt={item.alt}
                  key={i}
                />
              ))}
            </Carousel>
          </div>
        </div>
        <div className="col s12 m5 l5">
          <h5 className="producto">{product.nombre}</h5>
          <div className={styles.oferta}></div>

          <p className={product.stock !== 0 ? styles.hide : styles.agotado}>
            {product.stock === 0 ? "" : "AGOTADO"}
          </p>
          <div className={product.stock !== 0 ? styles.show : styles.hide}>
            <span className={styles.precio}>{formatNumber(precioVigente)}</span>
            <div className={product.oferta ? styles.desc : styles.hide}>
              <span className={styles.descuento}>
                {"-" + Math.round(descuento * 100 - 100) + "% "}
              </span>
              <span className={styles.precioRegular}>
                {precioRegular !== "" ? formatNumber(product.precio) : ""}
              </span>{" "}
            </div>
          </div>
          <p className="producto">
            {product.color ? `Color: ${product.color}` : ""}
          </p>
          <div className={styles.space}></div>
          <div className={product.stock !== 0 ? styles.show : styles.hide}>
            {inputType === "input" ? (
              <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
            ) : (
              <Link to="/cart" className={styles.pretext}>
                Ir a Carrito
              </Link>
            )}
            <p className={styles.stockDisponible}>
              Stock Disponible: {product.stock}
            </p>
          </div>
          <p className={styles.error}>{message}</p>
          <div className={styles.space}></div>
          <h5 className={styles.title}>Descripción</h5>
          <p>{product.descripcion}</p>
        </div>
      </div>
    </div>
  );
};
