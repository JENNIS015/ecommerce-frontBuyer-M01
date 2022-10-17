export const arrayColores = (productos) => {
  const colores = Array.from(new Set(productos.map((pValue) => pValue.color)));
  return colores.map((nombre, i) => ({
    nombre,
    checked: false,
    id: i,
  }));
 
};

export const arrayPrecios = (productos) => {
  return productos.map((pValue) => pValue.precio);
};
