import React, { useState } from "react";

const StarRating3 = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
      <div className="star-rating">
        {[...Array(3)].map((star, index) => {
          index += 1;
          return (
              <button
                  type="button"
                  key={index}
                  className={index <= (hover || rating) ? "on" : "on"}
                  onClick={() => setRating(index)}
                  onMouseEnter={() => setHover(index)}
                  onMouseLeave={() => setHover(rating)}
              >
                <span className="star">&#9733;</span>
              </button>
          );
        })}
      </div>
  );
};

export default StarRating3;