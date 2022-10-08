import { React, useState, useEffect } from "react";
import "../itemListContainer/css/itemListContainer.css";
import List from "./list/List";
import { useParams } from "react-router-dom";
import EmptyView from "../EmpytView/EmptyView";
import Searchbar from "../../filter/SearchBar/SearchBar";
import FilterPanel from "../../filter/FilterPanel/FilterPanel";

import BaseService from "../../../services/dataList";
export const ItemListContainer = (props) => {
  const { id } = useParams();
  const data = props.items;
  const [list, setList] = useState(data);
  const [coloresBD, setColoresBD] = useState([]);
  const [color, setcolors] = useState( coloresBD?coloresBD : null);
  const [preciosBD, setPreciosBD] = useState([10000]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      await BaseService.getColors().then((res) => {
 
        setColoresBD(res.data);
      });

      await BaseService.getPrices()
        .then((res) => {
          setPreciosBD(res.data.item);
        })

        .finally(() => setLoading(false));
    };
    getData();
  }, []);
 

  const priceList = {
    min: 0,
    max: Math.max(...preciosBD),
  };

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [inputSearch, setInputSearch] = useState("");
  const [resoultFound, setResultsFound] = useState(false);
  const [selectedPrice, setPrice] = useState([0, Math.max(...preciosBD)]);

  const handleSelectCategory = (event, value) => {
    if (!value) {
      return null;
    } else {
      return setSelectedCategory(value);
    }
  };

const handleChangeChecked = (id) => {
 
  const changeCheckedcolor = coloresBD.map((item) =>
    item.id === id ? { ...item, checked: !item.checked } : item
  );

  setcolors(changeCheckedcolor);
};

  const handleChangePrice = (event, value) => setPrice(value);
  const applyFilters = () => {
    let updateList = data;

    if (id) updateList = updateList.filter((item) => item.categoria === id);

    if (selectedCategory) {
      //Category Filter

      updateList = updateList.filter(
        (item) => item.categoria === selectedCategory
      );
    }

    //color Filter
    const colorChecked = color
      .filter((item) => item.checked)
      .map((item) => item.nombre );

    if (colorChecked.length) {
      updateList = updateList.filter((item) =>
        colorChecked.includes(item.color)
      );
    }
    //Price
    const minPrice = selectedPrice[0];
    const maxPrice = selectedPrice[1];

    updateList = updateList.filter(
      (item) =>
        parseInt(item.precio) >= minPrice && parseInt(item.precio) <= maxPrice
    );

    // //Search
    if (inputSearch) {
      updateList = updateList.filter(
        (item) =>
          item.nombre.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
            -1 ||
          item.descripcion
            .toLowerCase()
            .search(inputSearch.toLowerCase().trim()) !== -1
      );
    }
    setList(updateList);
    updateList.length ? setResultsFound(true) : setResultsFound(false);
  };

  useEffect(() => {
    applyFilters();
  }, [selectedCategory, color, selectedPrice, inputSearch, id]);

  return (
    <div className="home_panelList-wrap">
      <div className="home_penel-wrap">
        <Searchbar
          value={inputSearch}
          changeInput={(e) => setInputSearch(e.target.value)}
        />
        <FilterPanel
          selectToggle={handleSelectCategory}
          selectedCategory={selectedCategory}
          color={coloresBD}
          changeChecked={handleChangeChecked}
          selectedPrice={selectedPrice}
          changePrice={handleChangePrice}
          priceList={priceList}
          id={id}
          categorias={props.categorias}
        />
      </div>
      <div className="home_list-wrap">
        {resoultFound ? <List list={list} /> : <EmptyView />}
      </div>
    </div>
  );
};
