import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledWishlistBob() {


  return (
      <div style={{ display: 'block', width: 700, padding: 30 }} className="mb-5">
        <h4>Don't Forget to Order</h4>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//ojsezf1582477277.jpg"
                alt="Image One"
            />
            <Carousel.Caption>
              <h3>Brooklyn</h3>
              <p>Welcome to brooklyn</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//g5upn41513706732.jpg"
                alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Greyhound</h3>
              <p>A Howling effect after</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}


export default ControlledWishlistBob;