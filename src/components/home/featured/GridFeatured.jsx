import React from "react";
import Slider from "react-slick";
import EmptyView from "../../container/EmpytView/EmptyView";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Item from "../../container/itemListContainer/item/Item";

// import "./grid.css"
function GridFeatured({ product }) {
  const settings = {
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return product ? (
    <Slider {...settings}>
      {product.map((a, i) => (
        <Item key={i} product={a} hide={true} />
      ))}
    </Slider>
  ) : (
    <EmptyView />
  );
}

export default GridFeatured;
