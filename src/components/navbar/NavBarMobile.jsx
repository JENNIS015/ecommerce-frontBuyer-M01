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
    <ul className="sidenav" id="mobile-demo">
      <li className="sidenav-header black lighten-2">
        <NavLink exact to="/" className="logoMobile">
          MARKET BA 
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink exact to="/productos">
          Todos
        </NavLink>
      </li>
      {categorias
        ? categorias.map((catMenu) => (
            <OpcionesMenu key={catMenu} nombre={catMenu} />
          ))
        : ""}
    </ul>
  );
};

export default NavBarMobile;
