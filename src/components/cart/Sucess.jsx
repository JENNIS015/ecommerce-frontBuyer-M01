import { useCartContext } from "../../context/CartContext";
import { useEffect } from "react";
import CartItem from "./CartItem";
import Loading from "../loading/Loading";
import "../cart/css/estilo_sucess.css";
//import { getFirestore } from "../../services/getFirestore";
const Sucess = (props) => {
  const { formatNumber } = useCartContext();
const ordenDetail=props.location.state.data
console.log(ordenDetail);
  //  useEffect(() => {
  // const dbQuery
  // dbQuery
  //   .collection("orders")
  //   .doc(dataOrder.id)
  //   .get()
  //   .then((snapshot) =>guardarDetalle(snapshot.data())
  //   )
  //   .catch((err) => console.log(err));
  // }, [dataOrder,guardarDetalle]);

  return (
    <div className="row">
      {
        <div className="container">
          <div className="col s12">
            <h3 className="orden">Orden: #{ordenDetail._id}</h3>
            <hr />
            <h4>¡Muchas gracias {ordenDetail.name}!</h4>
            <h5>Datos de contacto</h5>

            <p>{ordenDetail.email}</p>
            <p>{ordenDetail.phone}</p>
            <p>{ordenDetail.shippingAddress}</p>
            <br />
            <p className="totalSucess">
              Total: {formatNumber(ordenDetail.total)}
            </p>
          </div>
          <div className="col s12">
            <h4>Detalle de orden</h4>
            <table className="sucess responsive-table">
              <tbody>
                {ordenDetail.items.map((orden) => (
                  <CartItem key={orden.id} prod={orden} checkout={true} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      }
    </div>
  );
};
export default Sucess;
