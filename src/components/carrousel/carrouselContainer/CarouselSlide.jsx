import React from "react";
import { Card, makeStyles } from "@material-ui/core";

export default function CarouselSlide(props) {
  const { backgroundColor, title } = props.content;

  const useStyles = makeStyles(() => ({
    card: {
      backgroundColor,
      borderRadius: 5,
      padding: "75px 50px",
      margin: "0px 25px",
      width: "100%",
      display: "flex",
      justifyContent: "center",
    },
  }));

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <h1>{title}</h1>
    </Card>
  );
}
