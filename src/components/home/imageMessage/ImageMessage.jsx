import React from "react";
import styles from "./imageMessage.module.css";
import { item } from "./detail.js";

function ImageMessage() {
  return (
    <div
      className={styles.wrapper}
      style={{
        background: `url(${item.image}) repeat fixed 100%`,
      }}
    >
      <div className={styles.content}>
        <span className={styles.text}>{item.top}</span>
        <p className={styles.title}>{item.title}</p>
        <p className={styles.text}>{item.description}</p>
        <a href={item.link} className={styles.button}>
          {item.button}
        </a>
      </div>
    </div>
  );
}

export default ImageMessage;
