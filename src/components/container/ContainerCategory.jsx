import { useEffect, useState } from "react";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import EmptyView from "./EmpytView/EmptyView";
import { useParams } from "react-router-dom";

const ContainerCategory = (props) => {
  const { id } = useParams();

  const [productosCat, setProductosCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProductosCat(props.productos.filter((item) => item.categoria === id));
    setLoading(false);
  }, [id]);

  return (
    <div>
      {loading !== true ? (
        <ItemListContainer
          loading={loading}
          categorias={props.categorias}
          items={productosCat}
          
          coloresBD={Array.from(
            new Set(productosCat.map((pValue) => pValue.color))
          ).map((nombre, i) => ({ nombre, checked: false, id: i }))}
          
          preciosBD={productosCat.map((pValue) => pValue.precio)}
        />
      ) : (
        <EmptyView />
      )}
    </div>
  );
};
export default ContainerCategory;
