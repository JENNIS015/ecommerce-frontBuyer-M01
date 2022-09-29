import React from "react";
import Item from "../item/Item";
import "./styles.css";

const List = ({ list }) => {
return (
  <div className="list-wrap">
    {list.map((item) => (
      <Item key={item.id} product={item} />
    ))}
  </div>
);
    }
export default List;
