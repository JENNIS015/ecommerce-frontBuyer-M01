import ImageSlider from "./slider/ImageSlider";
import images from "./images";
import styles from "./homepage.module.css";
import Rectangle from "./rectanglePics/Rectangle";
import Featured from "./featured/Featured";
import ImageMessage from "./imageMessage/ImageMessage";
import ShowIcons from "./icons/ShowIcons";
import Loading from "../loading/Loading";

const Homepage = ({ loading, productos }) => {
  return loading === false ? (
    <div>
      <ImageSlider images={images} />
      <div className={styles.container}>
        <Rectangle />
        <Featured
          title="Productos Destacados"
          featured={productos.filter((obj) => obj.destacado === true)}
        />
      </div>
      <ImageMessage />
      <ShowIcons />
      <Featured
        title="Ofertas"
        featured={productos.filter((obj) => obj.oferta > 0)}
      />
    </div>
  ) : (
    <Loading />
  );
};

export default Homepage;
