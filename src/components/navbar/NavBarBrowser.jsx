import OpcionesMenu from "./OpcionesMenu";
import { NavLink } from "react-router-dom";
import styles from "./css/topbar.module.css";
const NavBarBrowser = (props) => {

  return (
    <>
      <div className="nav-content  hide-on-med-and-down ">
        <ul className="tabs tabs-transparent">
          <li>
            <NavLink to={"/productos"} className={styles.tabshop}>
              Shop
            </NavLink>
          </li>
          {props.categorias
            ? props.categorias.map((item, i) => (
                <OpcionesMenu nombre={item} key={i} />
              ))
            : ""}
        </ul>
      </div>
    </>
  );
};

export default NavBarBrowser;
