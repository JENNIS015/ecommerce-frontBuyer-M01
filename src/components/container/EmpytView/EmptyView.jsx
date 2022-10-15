import React from "react";
import styles from "./empty.module.css"
const EmptyView = () => {
  return (
    <div className={styles.emptyViewPort}>
      <p className={styles.notFound}>
        No hay publicaciones que coincidan con tu búsqueda.
      </p>
      
    </div>
  );
};
export default EmptyView;
