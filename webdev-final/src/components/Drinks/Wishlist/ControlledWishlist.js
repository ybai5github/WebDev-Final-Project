import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledWishlist() {


  return (
      <div style={{ display: 'block', width: 700, padding: 30 }} className="mb-5">
        <h4>Don't Forget to Order</h4>
        <Carousel>
          <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//srpxxp1441209622.jpg"
                alt="Image One"
            />
            <Carousel.Caption>
              <h3>Whitecap Margarita</h3>
              <p>Try a whitecap before bed</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//5noda61589575158.jpg"
                alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Margarita</h3>
              <p>When you wanna relax</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}


export default ControlledWishlist;