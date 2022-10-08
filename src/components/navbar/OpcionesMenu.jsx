import { NavLink } from "react-router-dom";
import styles from "./css/topbar.module.css"
const OpcionesMenu = (props) => {

  const pathnameCat = "/categoria/";

  return (
    <li>
      <NavLink
        key={props.nombre}
        to={pathnameCat + props.nombre}
        className={styles.tabs}
      >
        {props.nombre}
      </NavLink>
    </li>
  );
};

export default OpcionesMenu;
