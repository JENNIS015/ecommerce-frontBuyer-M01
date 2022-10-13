import React from "react";
import { data } from "./data";
import styles from "./rectangle.module.css";
import { Link } from "react-router-dom";

function Rectangle() {
  return (
    <div>
      <div className="row">
        <div className={styles.box}>
          {data.map((item, i) => (
            <div className={styles.rectangle} key={i}>
              <div className="col s12 m12 l6">
                <div className={styles.card}>
                  <img
                    alt={item.nombre}
                    className={styles.image}
                    src={item.image}
                  />
                </div>

                <div className={styles.content}>
                  <span>{item.top}</span>
                  <p className={styles.title}>{item.title}</p>
                  <Link to={item.link} className={styles.button}>
                    {item.button}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Rectangle;
