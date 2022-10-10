import { useCartContext } from "../../context/CartContext";

import CartItem from "./CartItem";
import styles from "./sucess.module.css";

const Sucess = (props) => {
  const { formatNumber } = useCartContext();
  const ordenDetail = props.location.state.data;

  return (
    <>
      <h1 className={styles.tituloPrincipal}>Orden #{ordenDetail._id}</h1>
      <div className="row">
        {
          <div className="container">
            <p className={styles.textoGracias}>
              ¡Muchas gracias por su compra, {ordenDetail.name}!
            </p>
            <div className={styles.espacio}></div>
            <div className="col l6 s12">
              <h5 className={styles.tituloSecundario}>Datos de contacto</h5>

              <p>{ordenDetail.email}</p>
              <p>{ordenDetail.phone}</p>
              <p>{ordenDetail.shippingAddress}</p>
              <br />
              <p className={styles.totalOrden}>
                Total: {formatNumber(ordenDetail.total)}
              </p>
            </div>
            <div className="col l6 s12">
              <h5 className={styles.tituloSecundario}>Detalle de orden</h5>

              <CartItem productos={ordenDetail.items} sucess={true} />
            </div>
          </div>
        }
      </div>
    </>
  );
};
export default Sucess;
