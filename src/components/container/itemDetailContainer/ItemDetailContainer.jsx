import { React, useState, useEffect } from "react";
import axios from "axios";
import { baseURL } from "../../../config/config";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./itemDetail/ItemDetail";
import Loading from "../../loading/Loading";

const ItemDetailContainer = () => {
  const [productIndiv, setProdIndiv] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(baseURL + "/api/productos/" + id)
      .then((response) => {
        setProdIndiv(response.data);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [id]);
 
  return loading ? (
    <Loading />
  ) : (
    <div className="full">
      <div className="container">
        <div className="row">
          <ItemDetail prod={productIndiv} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
