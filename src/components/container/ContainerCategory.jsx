import { useEffect, useState } from "react";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import EmptyView from "./EmpytView/EmptyView";
import { useParams } from "react-router-dom";
 
import {arrayColores, arrayPrecios} from "./functionsFilter";

const ContainerCategory = (props) => {

  const { id } = useParams();

  const productos = props.productos;
  const [productosCat, setProductosCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductosCat(productos.filter((item) => item.categoria === id));
    setLoading(false);
  }, [id, productos]);
  

  return (
    <div>
      {loading !== true ? (
        <ItemListContainer
          loading={loading}
          categorias={props.categorias}
          items={productosCat}
          coloresBD={arrayColores(productosCat)}
          preciosBD={arrayPrecios(productosCat)}
        />
      ) : (
        <EmptyView />
      )}
    </div>
  );
};
export default ContainerCategory;
