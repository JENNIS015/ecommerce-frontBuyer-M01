import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import EmptyView from "./EmpytView/EmptyView";

const Container = (props) => {

  return (
    <div>
      {props.loading !== true ? (
        <ItemListContainer
          loading={props.loading}
          categorias={props.categorias}
          items={props.productos}
          coloresBD={props.productos
            .map((pValue) => pValue.color)
            .map((nombre, i) => ({ nombre, checked: false, id: i }))}
          preciosBD={props.productos.map((pValue) => pValue.precio)}
        />
      ) : (
        <EmptyView />
      )}
    </div>
  );
};
export default Container;
