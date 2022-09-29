import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const aumentarContador = () => {
     if (count < stock) {
      setCount(count + 1);
    }
  };

  const disminuyeContador = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  return (
    <div className='count'>
      <div className='quantity-input'>
        <button className='minus' onClick={disminuyeContador}>
          -
        </button>
        <span className='number-input'>{count}</span>
        <span className='plus' onClick={aumentarContador}>
          +
        </span>
      </div>

      <div className='agregarCarrito'>
        <button className='addtocart' onClick={() => onAdd(count)}>
          <div className='pretext'>
            <i className='material-icons'>shopping_cart</i> AGREGAR
          </div>
        </button>
      </div>
    </div>
  );
};
export default ItemCount;
