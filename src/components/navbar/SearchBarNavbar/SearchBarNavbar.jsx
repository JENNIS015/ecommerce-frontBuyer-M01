import React, { useState } from "react";
import "./SearchBar.css"
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { frontEnd } from "../../../config/config";

function SearchBarNavbar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = data
      ? data.filter((item) => {
          return (
            item.nombre
              .toLowerCase()
              .search(searchWord.toLowerCase().trim()) !== -1 ||
            item.descripcion
              .toLowerCase()
              .search(searchWord.toLowerCase().trim()) !== -1
          );
        })
      : "";

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon className="icon"/>
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a
                className="dataItem"
                href={frontEnd + "/item/" + value.id}
                target="_blank"
                rel="noreferrer"
              >
                <p>{value.nombre} </p>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default SearchBarNavbar;
