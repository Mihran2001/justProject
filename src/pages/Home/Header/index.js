import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./styles.css";

import image1 from "../images/1.jpg";
import image2 from "../images/2.jpg";
import image3 from "../images/3.jpg";
import { Redirect } from "react-router";

export default function Header() {
  const history = useHistory();

  const routeChange = () => {
    let path = "/auth/login";
    history.push(path);
  };
  return (
    <div>
      <div className="fixed-build-resume">
        <Button variant="secondary">Build a resume</Button>
      </div>
      <div className="login">
        <Button variant="light" onClick={routeChange}>
          Login
        </Button>
      </div>
      <div className="carousel-wrapper">
        <Carousel fade={true} pause={false}>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={image1} alt="First slide" />

            <Carousel.Caption>
              <h3>Your resume is available at a click</h3>
              <p>Easy Tool to get started with</p>
              <div class="bulid-resume">
                <Button variant="warning">BUILD A RESUME</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={image2} alt="Third slide" />

            <Carousel.Caption>
              <h3>Your resume is available at a click</h3>
              <p>Easy Tool to get started with</p>
              <div class="bulid-resume">
                <Button variant="warning">BUILD A RESUME</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img className="d-block w-100" src={image3} alt="Third slide" />
            <Carousel.Caption>
              <h3>Your resume is available at a click</h3>
              <p>Easy Tool to get started with</p>
              <div class="bulid-resume">
                <Button variant="warning">BUILD A RESUME</Button>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
