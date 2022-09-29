import React from "react";
import axios from "axios";
import { baseURL } from "../../../config/config";
import { useState, useEffect } from "react";

import { priceList } from "../constants/constant";
import FilterListToggle from "../../common/Filter/FilterListToggle";
import CheckboxProton from "../../common/Filter/CheckBoxProton";
import "./style.css";
import SliderProton from "../../common/Filter/SliderProton";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  color,
  changeChecked,
  selectedPrice,
  changePrice,
  id,
}) => {
  const [categoryList, setCategorias] = useState([]);
  useEffect(() => {
    axios
      .get(baseURL + "/categorias")
      .then((response) => {
        setCategorias(response.data.cat);
      })
      .catch((err) => console.log(err));
  }, []);

  let categoriaNombre;
  !id ? (categoriaNombre = "Categoria") : (categoriaNombre = "");
  return (
    <div>
      {/* Categoria */}

      <div className="input-group">
        <p className="label">{categoriaNombre}</p>
        {!id ? (
          <FilterListToggle
            options={categoryList}
            value={selectedCategory}
            selectToggle={selectToggle}
          />
        ) : (
          ""
        )}
      </div>

      {/**Precio Rango*/}
      <div className="input-group">
        <p className="label-range">Precios</p>
        <SliderProton
          value={selectedPrice}
          changePrice={changePrice}
          priceList={priceList}
        />
      </div>

      {/* Checkbox*/}
      <div className="input-group">
        <p className="label">Color</p>
        {color.map((choise) => (
          <CheckboxProton
            key={choise.id}
            cuisine={choise}
            changeChecked={changeChecked}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterPanel;
