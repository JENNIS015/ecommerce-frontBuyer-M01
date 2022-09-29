import { React, useState, useEffect } from "react";
import "../itemListContainer/css/itemListContainer.css";
import List from "./list/List";
import { useParams } from "react-router-dom";
import EmptyView from "../EmpytView/EmptyView";
import Searchbar from "../../filter/SearchBar/SearchBar";
import FilterPanel from "../../filter/FilterPanel/FilterPanel";
import { priceList, checkBox } from "../../filter/constants/constant";

export const ItemListContainer = (item) => {
  const data = item.item;
  const [list, setList] = useState(data);

  const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedPrice, setPrice] = useState([priceList.min, priceList.max]);
  const [inputSearch, setInputSearch] = useState("");
  const [resoultFound, setResultsFound] = useState(false);

  const [color, setcolors] = useState(checkBox);

  const handleSelectCategory = (event, value) => {
    if (!value) {
      return null;
    } else {
      return setSelectedCategory(value);
    }
  };

  const handleChangeChecked = (id) => {
    const colorStateList = color;
    const changeCheckedcolor = colorStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );

    setcolors(changeCheckedcolor);
  };

  const handleChangePrice = (event, value) => setPrice(value);
  const applyFilters = () => {
    let updateList = data;

    //Rating Filter
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
      .map((item) => item.label.toLowerCase());

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
    <div className="home">
      <Searchbar
        value={inputSearch}
        changeInput={(e) => setInputSearch(e.target.value)}
      />
      <div className="home_panelList-wrap">
        <div className="home_penel-wrap">
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            color={color}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
            id={id}
          />
        </div>
        <div className="home_list-wrap">
          {resoultFound ? <List list={list} /> : <EmptyView />}
        </div>
      </div>
    </div>
  );
};
