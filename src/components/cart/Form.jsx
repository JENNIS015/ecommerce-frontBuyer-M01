import { useState, React } from "react";
import { useCartContext } from "../../context/CartContext";
import CartItem from "./CartItem";
const style = {
  message: { color: "red" },
  tituloPrincipal: {
    backgroundColor: "#f1f1f1",
    fontWeight: "700",
    textAlign: "center",
    width: "100%",
    display: "inline-block",
    fontSize: "18px",
    position: "relative",
    padding: "15px",
  },
  btnBlack: {
    backgroundColor: "black",
  },
};
const Form = ({ formData, setFormData, envio, precio, setPrecio }) => {
  const { cartList, precioTotal, formatNumber } = useCartContext();
  const [discount, setDiscount] = useState({ code: "" });

  const [code, setCode] = useState(false);
  const [message, setMessage] = useState("");

  const checkCode = () => {
    const codeList = [{ nombre: "ARS100", descuento: 0.1, mensaje: "10%" }];
    const check = codeList.filter((a) => a.nombre === discount.code);

    if (check.length) {
      setCode(true);
      setPrecio((1 - check[0].descuento) * precioTotal());
      setMessage(`Descuento aplicado ${check[0].mensaje}`);
    } else {
      setCode(false);
      setMessage("Codigo no vigente");
    }
  };
  return (
    <div className="container">
      <h1 style={style.tituloPrincipal}>Checkout</h1>
      <div className="row">
        <div className="col s12 m12 l7">
          <h5>Datos de facturación</h5>
          <form onSubmit={envio}>
            <div className="col s12 m6 l6">
              <label for="nombre">Nombre</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    nombre: e.target.value,
                  });
                }}
                value={formData.nombre}
                required
              />
            </div>
            <div className="col s12 m6 l6">
              <label for="apellido">Apellido</label>
              <input
                type="text"
                className="form-control"
                id="apellido"
                placeholder=""
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    apellido: e.target.value,
                  });
                }}
                value={formData.apellido}
                required
              />
            </div>

            <div className="col s12 m12 l6">
              <label for="email">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="you@example.com"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    email: e.target.value,
                  });
                }}
                value={formData.email}
              />
            </div>
            <div className="col s12 m12 l6">
              <label for="telefono">Telefono</label>
              <input
                type="text"
                className="form-control"
                id="telefono"
                placeholder="+54110000000"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    telefono: e.target.value,
                  });
                }}
                value={formData.telefono}
              />
            </div>
            <div className="col s12 m12 l12">
              <label for="direccion">Dirección</label>
              <input
                type="text"
                className="form-control"
                id="direccion"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    direccion: e.target.value,
                  });
                }}
                value={formData.direccion}
                required
              />
            </div>
            <div className="col s12 m12 l4">
              <label for="opcional">Opcional</label>
              <input
                type="text"
                className="form-control"
                id="opcional"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    opcional: e.target.value,
                  });
                }}
                value={formData.opcional}
                placeholder="Departamento o piso"
              />
            </div>

            <div className="col s12 m12 l4">
              <label for="provincia">Provincia</label>
              <input
                type="text"
                className="form-control"
                id="provincia"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    provincia: e.target.value,
                  });
                }}
                value={formData.provincia}
                placeholder="Provincia"
              />
            </div>
            <div className="col s12 m12 l4">
              <label for="zip">Codigo Postal</label>
              <input
                type="text"
                className="form-control"
                id="zip"
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    zip: e.target.value,
                  });
                }}
                value={formData.zip}
                required
              />
            </div>

            <button
              className="btn waves-effect waves-light"
              style={style.btnBlack}
              disabled={
                formData.nombre === "" ||
                formData.apellido === "" ||
                formData.email === "" ||
                formData.direccion === "" ||
                formData.zip === "" ||
                formData.provincia === ""
              }
            >
              Confirmar
            </button>
          </form>
        </div>

        <div className="col s12 m12 l5">
          <CartItem productos={cartList} checkout={true} />

          <h5>
            Total <strong>{formatNumber(precio)}</strong>
          </h5>
          <span style={style.message}> {message}</span>
          <form>
            <div className="input-group">
              <div className="span">¿Tienes un codigo de descuento?</div>

              <input
                type="text"
                className="form-control"
                placeholder="Codigo Promoción"
                value={discount.code}
                onChange={(e) => {
                  setDiscount({
                    code: e.target.value,
                  });
                }}
              />

              <button
                type="button"
                className="btn"
                style={style.btnBlack}
                onClick={checkCode}
              >
                Aplicar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
