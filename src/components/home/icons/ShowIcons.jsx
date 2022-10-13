import styles from "./icons.module.css";
import { data } from "./data";

function ShowIcons() {
  return (
    <div className={styles.contenedor}>
      <div className="row">
        {data.map((item, i) => (
          <div className="col s12 m3 l3" key={i}>
            <div className={styles.box}>
              <img src={item.icons} alt={item.text} className={styles.img} />

              <h3 className={styles.text}>{item.text}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowIcons;
