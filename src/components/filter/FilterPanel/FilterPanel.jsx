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
  priceList,
  id,
  categorias,
  clean,
}) => {
  let categoriaNombre;
  !id ? (categoriaNombre = "Categoria") : (categoriaNombre = "");
  return (
    <div>
      {/* Categoria */}

      <div className="input-group">
        <p className="label">{categoriaNombre}</p>
        {!id ? (
          <FilterListToggle
            options={categorias}
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
            color={choise}
            changeChecked={changeChecked}
          />
        ))}
      </div>
      <div className="input-group">
        <button className="btn-black" onClick={()=>clean()}>
          Limpiar Filtros
        </button>
      </div>
    </div>
  );
};

export default FilterPanel;
