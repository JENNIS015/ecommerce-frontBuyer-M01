import React from "react";
import ImageSlider from "./slider/ImageSlider";
import images from "./images";
import styles from "./homepage.module.css";
import Rectangle from "./rectanglePics/Rectangle";
import Featured from "./featured/Featured";
import ImageMessage from "./imageMessage/ImageMessage";
import ShowIcons from "./icons/ShowIcons";


const Homepage = () => {
  return (
    <div>
      <ImageSlider images={images} />
      <div className={styles.container}>
        <Rectangle />
        <Featured />
      </div>
      <ImageMessage />
      <ShowIcons />
   
    </div>
  );
};

export default Homepage;
