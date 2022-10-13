import React from "react";
import Item from "../item/Item";
import "./styles.css";

const List = ({ list }) => {
  return (
    <div className="row">
      {list.map((item, i) => (
        <Item key={i} product={item} hide={true} />
      ))}
    </div>
  );
};
export default List;
