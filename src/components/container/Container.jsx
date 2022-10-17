import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import EmptyView from "./EmpytView/EmptyView";
import { arrayColores, arrayPrecios } from "./functionsFilter";
const Container = (props) => {

 
  return (
    <div>
      {props.productos !== null ? (
        <ItemListContainer
          loading={props.loading}
          categorias={props.categorias}
          items={props.productos}
          coloresBD={arrayColores(props.productos)}
          preciosBD={arrayPrecios(props.productos)}
        />
      ) : (
        <EmptyView />
      )}
    </div>
  );
};
export default Container;
