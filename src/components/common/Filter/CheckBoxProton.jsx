import React from "react";
import { makeStyles } from "@mui/styles";
import { FormControlLabel, Checkbox } from "@mui/material";
 
const useStyles = makeStyles({

  wrap: {
    width: "100%",
    display: "flex",
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 0,
  },
  label: {
    fontSize: ".8rem",
 
  },
});
function CheckboxProton({ color, changeChecked }) {
  const classes = useStyles();
  const { checked, nombre, id } = color;

  return (
    <div>
      <FormControlLabel
        classes={{
          label: classes.label,
          root: classes.wrap,
        }}
        control={
          <Checkbox
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
            sx={{ "& .MuiSvgIcon-root": { fontSize: 15, color:"#000" } }}
          />
        }
        label={nombre}
      />
    </div>
  );
}

export default CheckboxProton;
