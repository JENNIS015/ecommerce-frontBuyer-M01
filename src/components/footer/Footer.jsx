import React from "react";

export default function Footer() {
  return (
    <footer className='page-footer grey'>
      <div className='container'>
        <div className='row'>
          <div className='col l6 s12'>
            <h5 className='white-text'>MARKET BA</h5>
            <p className='grey-text text-lighten-4'>
              Somos un equipo de estudiantes que trabajan en este
              proyecto como si fuera nuestro trabajo de tiempo completo.
            </p>
          </div>
          
          <div className='col l6 s12'>
            <h5 className='white-text'>CONTACTO</h5>
            <p><i className="tiny material-icons">local_phone</i> 11-XXX-XXXX</p>
            <p><i className="tiny material-icons">email</i> contacto@marketba.ar</p>
            <p><i className="tiny material-icons">place</i> Av. Cantilo 000 - Buenos Aires </p>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        <div className='container'>
          Hecho por <span className='blue-text text-lighten-3'>Jennifer</span>
        </div>
      </div>
    </footer>
  );
}
