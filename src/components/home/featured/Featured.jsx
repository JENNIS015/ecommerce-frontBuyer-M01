import { useState, useEffect } from "react";
import BaseService from "../../../services/dataList";
import styles from "./feature.module.css";
import GridFeatured from "./GridFeatured";
import Loading from "../../loading/Loading";
function Featured() {
  const [product, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      return await BaseService.getFeatures().then((res) => {
        res.data ? setProducts(res.data) : setProducts(null);

        setLoading(false);
      });
    };
    getData();
  }, []);

  return (
    <div>
      <h2 className={styles.title}> Productos Destacados</h2>
      {loading === true ? <Loading /> : <GridFeatured product={product} />}
    </div>
  );
}

export default Featured;
