import { NavLink } from "react-router-dom";
import OpcionesMenu from "./OpcionesMenu";

const NavBarBrowser = ({ categorias }) => {
 
  return (
    <>
      <div className="nav-wrapper container">
        <ul id="nav-mobile" className="right hide-on-med-and-down mayuscula">
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/productos">
              Productos
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="nav-content  hide-on-med-and-down ">
        <ul className="tabs tabs-transparent">
          { categorias.map((catMenu) => (
            <OpcionesMenu nombre={catMenu} key={catMenu}/>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavBarBrowser;
