import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles({
  root: {
    "&$checked": {
      color: "#000",
    },
  },

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
            classes={{
              checked: classes.checked,
              root: classes.root,
            }}
            size="small"
            checked={checked}
            onChange={() => changeChecked(id)}
          />
        }
        label={nombre}
      />
    </div>
      
    
  );
}

export default CheckboxProton;
