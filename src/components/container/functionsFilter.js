export const arrayColores = (productos) => {
  let colores = Array.from(new Set(productos.map((pValue) => pValue.color)));
  colores.map((nombre, i) => ({ nombre, checked: false, id: i }));
  return colores;
};

export const arrayPrecios = (productos) => {
  return productos.map((pValue) => pValue.precio);
};
