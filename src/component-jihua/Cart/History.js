import React from "react";
import "./Cart.css"

const History = ({ historyItems, getCartItems }) => {
   /*  const totalPrice = historyItems.reduce((price, item) => price + item.quantity * Math.round(item.idDrink / 1000), 0); */
    return (

          <div className="cart-items">
               <div className="clear-cart">

                    <button className="clear-cart-button" onClick={getCartItems}> History</button>
            </div>
              <div>
                  {historyItems.map((item) => (
                      <div  className="cart-items-list">
                          <img className="cart-items-image"
                              src={item.strDrinkThumb}
                              alt={item.strDrink}
                          />
                          <div className="cart-items-name"> {item.strDrink}</div>
                          <div className="cart-items-function">
  
                          </div>
                          <div className="cart-items-price">
                              {item.quantity} 
                          </div>
                      </div>
                  ))}
              </div>
          {/*     <div className="cart-items-total-price-name">
                  Total price
                  <div className="cart-items-total-price">
                      ${totalPrice}
                  </div>
  
              </div> */}
  
          </div>
    );
};

export default History;
