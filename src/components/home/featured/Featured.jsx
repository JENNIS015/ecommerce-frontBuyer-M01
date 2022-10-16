import styles from "./feature.module.css";
import GridFeatured from "./GridFeatured";
 
function Featured({ title, featured }) {
 
  return (
    <div>
      <h2 className={styles.title}> {title}</h2>
      <GridFeatured product={featured} />
    </div>
  );
}

export default Featured;
