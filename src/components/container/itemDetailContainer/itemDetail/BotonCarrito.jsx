import React from 'react'

export default function BotonCarrito() {
  return (
    <div className="agregarCarrito">

      <button className="addtocart" onClick={() => onAdd(count)}>
        <div className="pretext">
          <i className="material-icons">shopping_cart</i>
          AGREGAR
        </div>

      </button>
    </div>
  )
}
