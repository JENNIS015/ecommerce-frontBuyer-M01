import React from "react";
import OpcionesMenu from "../navbar/OpcionesMenu";
import styles from "./footer.module.css";
export default function Footer(props) {
  return (
    <footer className={styles.contenedor}>
      <div className={styles.boxContenedor}>
        <div className="row">
          <div className="col l4 m4 s12">
            <span className="led"> MARKET BA</span>
            <p className={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida.
            </p>
          </div>
          <div className="col l4 m4 s12">
            <h5 className={styles.area}>Categorias</h5>
            <ul>
              {props.categorias
                ? props.categorias.map((item, i) => (
                    <OpcionesMenu nombre={item} key={i} />
                  ))
                : ""}
            </ul>
          </div>
          <div className="col l4 m4 s12">
            <h5 className={styles.area}>Contacto</h5>
            <p className={styles.text}>11-XXX-XXXX</p>
            <p className={styles.text}>contacto@marketba.ar</p>
            <p className={styles.text}>Av. Cantilo 000 - Buenos Aires</p>
          </div>
        </div>
      </div>

      <div className={styles.copy}>Hecho por Jennifer</div>
    </footer>
  );
}
