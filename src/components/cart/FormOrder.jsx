import { useCartContext } from "../../context/CartContext";
import Form from "./Form";
import { Redirect } from "react-router";
import { useState,  } from "react";
import BaseService from "../../services/dataList";

const FormOrder = () => {
  const { cartList, deleteAll, precioTotal } = useCartContext();
  const [loading, setLoading] = useState(true);
  const [order, setOrder] = useState({});
  const [precio, setPrecio] = useState(precioTotal());
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    direccion: "",
    zip: "",
    opcional: "",
    provincia: "",
    telefono: "",
  });

  let orden = {};

  const generarOrden = async (e) => {
    e.preventDefault();
    orden.buyerID = formData.email;
    orden.shippingAddress =
      formData.direccion +
      " - " +
      formData.provincia +
      " - " +
      formData.opcional;
    orden.phone = formData.telefono;
    orden.name = formData.nombre;
    orden.status = "pendiente";
    orden.total = precio;
    orden.items = cartList.map((cartItem) => {
      const id = cartItem.id;
      const nombre = cartItem.nombre;
      const cantidad = cartItem.cantidad;
      const urlImagen = cartItem.urlImagen;
      const precio = cartItem.precio;
      const subtotal = cartItem.precio * cartItem.cantidad;
      return { id, nombre, precio, subtotal, cantidad, urlImagen };
    });

    const doc = await BaseService.postOrden(orden);
    if (doc) {
      setOrder(doc.data.data);

      setLoading(false);
      setFormData({
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        zip: "",
        opcional: "",
        provincia: "",
        telefono: "",
      });

      deleteAll();
    }
  };

  return (
    <div>
      {cartList.length === 0 && order ? (
        <Redirect to={{ pathname: "/sucess", state: { data: order } }} />
      ) : cartList.length > 0 ? (
        <Form
          formData={formData}
          setFormData={setFormData}
          envio={generarOrden}
          precio={precio}
          setPrecio={setPrecio}
        />
      ) : (
        ""
      )}
    </div>
  );
};
export default FormOrder;
