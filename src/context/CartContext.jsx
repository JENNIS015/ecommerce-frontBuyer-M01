import React, { createContext, useState, useContext } from "react";
const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({ children }) => {
  const [cantidadUnidades, setCantidades] = useState([0]);
  const [message, setMessage] = useState("");
  const [cartList, setCartList] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  const deleteItem = (itemId) => {
    let cartDelete = cartList.filter((item) => item.id !== itemId);

    setCartList(cartDelete);

    let cartString = JSON.stringify(cartDelete);
    localStorage.setItem("cart", cartString);
  };

  const deleteAll = () => {
    setCartList([]);
    localStorage.removeItem("cart");
  };

  const addItems = (items) => {
    const checkExist = cartList.find((item) => item.id === items.id);

    if (checkExist) {
      let cantidadNueva = checkExist.cantidad + items.cantidad;

      if (items.stock > cantidadNueva) {
        setCantidades((checkExist.cantidad = cantidadNueva));
        setCartList(cartList);

        let stringCart = JSON.stringify(cartList);
        localStorage.setItem("cart", stringCart);
      } else {
        setMessage(
          "No se ha podido agregar al carrito. Cantidades disponibles en stock: " +
            items.stock
        );

        setTimeout(() => {
          setMessage("");
        }, 8000);
      }
    } else {
      let newCart = [...cartList, items];
      setCartList(newCart);

      let stringCart = JSON.stringify(newCart);
      localStorage.setItem("cart", stringCart);
    }
  };

  const discountItems = (items) => {
    const checkExist = cartList.find((item) => item.id === items.id);

    if (checkExist) {
      let cantidadDescuento = checkExist.cantidad - 1;
 
      setCantidades((checkExist.cantidad = cantidadDescuento));
      setCartList(cartList);

      let stringCart = JSON.stringify(cartList);
      localStorage.setItem("cart", stringCart);
    }
  };
  const itemsCart = () => {
    return cartList.reduce((prev, next) => prev + next.cantidad, 0);
  };

  const formatNumber = (number) => {
    return (
      <span>
        {new Intl.NumberFormat("ES-AR", {
          style: "currency",
          currency: "ARS",
        }).format(number)}
      </span>
    );
  };
  const precioTotal = () => {
    return cartList.reduce(
      (prev, next) => prev +( next.oferta>0? next.cantidad * next.oferta :next.cantidad * next.precio),
      0
    );
  };
  // const [inputType, setInputType] = useState("input");

  const [detalleOrden, guardarDetalle] = useState();
  return (
    <CartContext.Provider
      value={{
        cartList,
        cantidadUnidades,
        detalleOrden,
        message,
        setMessage,
        itemsCart,
        guardarDetalle,
        addItems,
        deleteItem,
        precioTotal,
        discountItems,
        deleteAll,
        formatNumber,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
