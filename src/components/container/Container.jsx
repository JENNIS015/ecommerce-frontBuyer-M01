import { React, useState, useEffect } from "react";
import { ItemListContainer } from "./itemListContainer/ItemListContainer";
import EmptyView from "./EmpytView/EmptyView";

import BaseService from "../../services/dataList";
function Container() {
  const [items, setProducts] = useState(null);
 const [loading, setLoading] = useState(true);


  useEffect(() => {
    const getData = async () => {
      return await BaseService.getData().then((res) => {
        setProducts(res.data.product);
        setLoading(false)
      });
    };
    getData();
  }, []);

  return <div>{!loading ? <ItemListContainer item={items} /> : <EmptyView/> }</div>;
 
}
export default Container;
