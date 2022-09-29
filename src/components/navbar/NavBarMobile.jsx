import { NavLink } from "react-router-dom";
import OpcionesMenu from "./OpcionesMenu";
import M from "materialize-css/dist/js/materialize.min.js";
import { useEffect } from "react";

const NavBarMobile = ({ categorias }) => {
  useEffect(() => {
    var sidenav = document.querySelectorAll(".sidenav");
    M.Sidenav.init(sidenav, {});
  }, []);

  return (
    <ul className='sidenav' id='mobile-demo'>
      <li className='sidenav-header red lighten-2'>
        <div className='row'>
          <div className='col s4'>
            <img
              alt='logo'
              src='https://img.icons8.com/fluency/48/000000/tesla-supercharger-pin.png'
            />
            <span className='white-text text-darken-2'>Bienvenido</span>
          </div>
        </div>
      </li>
      <li>
        <NavLink className="mayuscula" exact to='/'>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className="mayuscula" exact to='/productos'>
          Todos
        </NavLink>
      </li>
      {categorias.map((catMenu) => (
        <OpcionesMenu key={catMenu} nombre={catMenu} />
      ))}
      )
    </ul>
  );
};

export default NavBarMobile;
