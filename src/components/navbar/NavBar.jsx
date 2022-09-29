import { BrowserView, MobileView } from "react-device-detect";
import NavBarBrowser from "./NavBarBrowser";
import NavBarMobile from "./NavBarMobile";
import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseURL } from "../../config/config";

import "./css/navBar.css";

const NavBar = () => {
  const [items, setCategorias] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL + "/categorias")
      .then((response) => {
        setCategorias(response.data.cat);
      })
      .catch((err) => console.log(err))
  }, []);

  return (
    <nav className="nav-extended">
      <div className="nav-wrapper container">
        <NavLink to="/" className="brand-logo">
          <span className="hide-on-small-only">
            <span className="led"> MARKET BA</span>
          </span>
        </NavLink>

        <NavLink to="#" data-target="mobile-demo" className="sidenav-trigger">
          <i className="material-icons">menu</i>
        </NavLink>

        <NavLink to="/cart" className="right">
          <CartWidget />
        </NavLink>

        <BrowserView>
          <NavBarBrowser categorias={items}  />
        </BrowserView>
        <MobileView>
          <NavBarMobile categorias={items} />
        </MobileView>
      </div>
    </nav>
  );
};
export default NavBar;
