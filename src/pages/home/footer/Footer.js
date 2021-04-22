import React from "react";
import { Carousel } from "react-bootstrap";
import "./styles.css";

// import image1 from "../images/4.jpg";
// import image2 from "../images/5.jpg";
// import image3 from "../images/6.jpg";

import Source from "./Source";

export default function Footer() {
  return (
    <div className="footer-carousel">
      <Carousel>
        <Carousel.Item interval={200000}>
          {/* <img className="d-block w-100" src={image1} alt="First slide" /> */}
          <Carousel.Caption>
            <Source />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={200000}>
          {/* <img className="d-block w-100" src={image2} alt="Second slide" /> */}
          <Carousel.Caption>
            <Source />
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          {/* <img className="d-block w-100" src={image3} alt="Third slide" /> */}
          <Carousel.Caption>
            <Source className="d-block w-100" />
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
