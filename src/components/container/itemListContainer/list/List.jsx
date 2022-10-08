import React from "react";
import Item from "../item/Item";
import "./styles.css";

const List = ({ list }) => {

return (
  <div class="row">
    {list.map((item) => (
      <div className="col s12 m4 l4">
        <Item key={item.id} product={item} hide={true} />
      </div>
    ))}
  </div>
);
    }
export default List;
