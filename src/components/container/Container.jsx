import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import EmptyView from "./EmpytView/EmptyView";

 
const Container=(props)=> {
console.log("-----",props)
  return (
    <div>
      {props.loading !== true ? (
        <ItemListContainer loading={props.loading} categorias={props.categorias} items={props.productos} />
      ) : (
        <EmptyView />
      )}
    </div>
  );
}
export default Container;
