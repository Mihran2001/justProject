import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css";
import Info from "./Info";

import Source from "./Source";

export default function Footer() {
  return (
    <div className="footer-carousel">
      <Carousel>
        <Carousel.Item interval={200000}>
          {/* <img className="d-block w-100" src={image1} alt="First slide" /> */}
          <Source />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={200000}>
          {/* <img className="d-block w-100" src={image2} alt="Second slide" /> */}
          <Source />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img className="d-block w-100" src={image3} alt="Third slide" /> */}
          <Source />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Info />
    </div>
  );
}
