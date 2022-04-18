import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledWishlistCharlie() {


  return (
      <div style={{ display: 'block', width: 700, padding: 30 }} className="mb-5">
        <h4>Don't Forget to Order</h4>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//tyb4a41515793339.jpg"
                alt="Image One"
            />
            <Carousel.Caption>
              <h3>Bahama Mama</h3>
              <p>Feel like you are at the Bahama's</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//iloasq1587661955.jpg"
                alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Aperol Spritz</h3>
              <p>A Citrus spritz</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}


export default ControlledWishlistCharlie;