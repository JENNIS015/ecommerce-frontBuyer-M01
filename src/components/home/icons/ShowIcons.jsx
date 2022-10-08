import styles from "./icons.module.css";
import { data } from "./data";

function ShowIcons() {
  return (
    <div className={styles.contenedor}>
      <div className="row">
        {data.map((item) => (
          <div className="col s12 m3 l3">
            <div className={styles.box} key={item.id}>
          
                <img src={item.icons} className={styles.img} />
      
            
                <h3 className={styles.text}>{item.text}</h3>
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowIcons;
