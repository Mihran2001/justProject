import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./styles.css";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";

{
  /* <div className="login">
  <Button variant="light">Login</Button>
</div> */
}

export default function Header() {
  return (
    <div className="carusel-wrapper">
      <Carousel fade={true} pause={false}>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image2} alt="Third slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img className="d-block w-100" src={image3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
