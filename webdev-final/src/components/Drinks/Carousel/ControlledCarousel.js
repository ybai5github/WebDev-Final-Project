import React from "react";
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {


  return (
      <div style={{ display: 'block', width: 700, padding: 30 }} className="mb-5">
        <h4>React-Bootstrap Carousel Component</h4>
        <Carousel className="wd-move-to-the-left7">
          <Carousel.Item interval={1500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//dztcv51598717861.jpg"
                alt="Image One"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image One</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//vuquyv1468876052.jpg"
                alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for Three slide</h3>
              <p>Sample Text for Image Three</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//stwiva1619704025.jpg"
                alt="Image Three"
            />
            <Carousel.Caption>
              <h3>Label for four slide</h3>
              <p>Sample Text for Image four</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
                className="d-block w-100"
                src="https://www.thecocktaildb.com//images//media//drink//4vobt21643844913.jpg"
                alt="Image Four"
            />
            <Carousel.Caption>
              <h3>Label for first slide</h3>
              <p>Sample Text for Image four</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
  );
}


export default ControlledCarousel;