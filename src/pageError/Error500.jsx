import React from 'react'
import styles from "./error.module.css"
function Error500() {
  return (
    <div className={styles.message}>
      <h1 className={styles.title}>500</h1>
      <h3 className={styles.sub}>Server Error</h3>
      <h2 className={styles.subtitle}>No sos vos, soy yo.</h2>

      <button onClick="/">Vuelve a intentarlo</button>
    </div>
  );
}

export default Error500