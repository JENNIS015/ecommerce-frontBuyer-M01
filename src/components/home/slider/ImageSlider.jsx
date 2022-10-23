import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import React from "react";

const ImageSlider = ({ images }) => {
  const settings = {
    infinite: true,
    pauseOnFocus: true,
    slidesToShow: 1,
    arrows: false,
    dots: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <>
      <div className={styles.imgslider}>
        <Slider {...settings}>
          {images.map((item) => (
            <div className={styles.hero} key={item.id}>
              <img
                src={item.src}
                rel="preload"
                as="image"
                className={styles.imgslider}
                alt={item.alt}
              />
              <div className={styles.slideContent}>
                <p className={styles.top}>{item.subtitle}</p>
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.description}>{item.description}</p>
                <a className={styles.button} href={item.link} tabIndex="0">
                  {item.button}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};
export default ImageSlider;
