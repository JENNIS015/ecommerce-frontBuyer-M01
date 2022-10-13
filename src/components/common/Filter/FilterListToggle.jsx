import React from "react";
 import { makeStyles } from "@mui/styles";
import { ToggleButtonGroup, ToggleButton } from "@mui/material";
 
const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "space-between",
  },
  toggle: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: ".8rem",
    border: "1px solid rgba(0, 0, 0, 0.12)",
    borderRadius: "10px",
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)": {
      borderRadius: "10px",
    },
    "&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)": {
      borderRadius: "10px",
      border: "1px solid rgba(0, 0, 0, 0.12)",
    },
    "&.Mui-selected": {
      borderRadius: "10px",
      background: "#000",
      color: "#fff",
    },
    "&.MuiToggleButton-root": {
      "&:hover": {
        background: "#000",
        color: "#fff",
      },
    },
  },
});
const FilterListToggle = ({ options, value, selectToggle }) => {
  const classes = useStyles();
  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.root}
      exclusive
    >
      {options.map((value) => (
        <ToggleButton className={classes.toggle} key={value} value={value}>
          {value}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};

export default FilterListToggle;
