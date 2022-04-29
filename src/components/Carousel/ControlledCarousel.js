import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {

  return (
      <div style={{ display: 'block', padding: 30 }} className="mb-5 w-100" >
        <h4>It's our favorite try it...</h4>
        <Carousel className="img-responsive">
          <Carousel.Item interval={1500}>
            <img
                className="d-block w-100 img-fluid"
                src="https://www.thecocktaildb.com//images//media//drink//dztcv51598717861.jpg"
                alt="one"
            />
            <Carousel.Caption>
              <h3>Smashed Watermelon Margarita</h3>
              <p>Wonderful punch of melons</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100 img-responsive"
                src="https://www.thecocktaildb.com//images//media//drink//vuquyv1468876052.jpg"
                alt="two"
            />
            <Carousel.Caption>
              <h3>Afterglow</h3>
              <p>Get a wonderful glow after one sip</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100 img-responsive"
                src="https://www.thecocktaildb.com//images//media//drink//stwiva1619704025.jpg"
                alt="three"
            />
            <Carousel.Caption>
              <h3>Mountain Bramble</h3>
              <p>Flavors bursting with berries</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100 img-responsive"
                src="https://www.thecocktaildb.com//images//media//drink//4vobt21643844913.jpg"
                alt="four"
            />
            <Carousel.Caption>
              <h3>Cocktail Horse Neck</h3>
              <p>Taste a hint of fresh lemons</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}


export default ControlledCarousel;