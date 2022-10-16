import { React, useState, useEffect } from "react";
import "../itemListContainer/css/itemListContainer.css";
import List from "./list/List";
import Loading from "../../loading/Loading";
import { useParams } from "react-router-dom";
import EmptyView from "../EmpytView/EmptyView";
import Searchbar from "../../filter/SearchBar/SearchBar";
import FilterPanel from "../../filter/FilterPanel/FilterPanel";

export const ItemListContainer = (props) => {

  const { id } = useParams();
  const data = props.items;
  const [list, setList] = useState(data);

  const [color, setcolors] = useState(props.coloresBD);
  const [priceMax, setMax] = useState(props.preciosBD);
  const priceList = {
    min: 0,
    max: Math.max(...priceMax),
  };

  useEffect(() => {
    setcolors(props.coloresBD);
    setMax(props.preciosBD);
  }, [data]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const [inputSearch, setInputSearch] = useState("");
  const [resoultFound, setResultsFound] = useState(false);
  const [selectedPrice, setPrice] = useState([0, Math.max(...props.preciosBD)]);

  const handleSelectCategory = (event, value) => {
    if (!value) {
      return null;
    } else {
      setSelectedCategory(value);
    }
  };

  const handleChangeChecked = (id) => {
    const coloresList = props.coloresBD;

    const changeCheckedcolor = coloresList.map((item) =>
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
    if (color) {
      const colorChecked = color
        .filter((item) => item.checked)
        .map((item) => item.nombre);

      if (colorChecked.length) {
        updateList = updateList.filter((item) =>
          colorChecked.includes(item.color)
        );
      }
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
  }, [selectedCategory, color, selectedPrice, inputSearch]); // eslint-disable-line react-hooks/exhaustive-deps

  return props.loading === true ? (
    <Loading />
  ) : (
    <div className="home_panelList-wrap">
      <div className="home_penel-wrap">
        <Searchbar
          value={inputSearch}
          changeInput={(e) => setInputSearch(e.target.value)}
        />
        <FilterPanel
          selectToggle={handleSelectCategory}
          selectedCategory={selectedCategory}
          color={color}
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
