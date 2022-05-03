import React from "react";
import "./Cart.css"

const History = ({ historyItems, getCartItems }) => {
   /*  const totalPrice = historyItems.reduce((price, item) => price + item.quantity * Math.round(item.idDrink / 1000), 0); */
  /*  console.log(Math.random() / historyItems[1].idDrink + 1005 / Math.random()) */
   return (

          <div className="wd-cart-items">
               <div className="wd-clear-cart">

                    <button className="wd-clear-cart-button" onClick={getCartItems}> History</button>
            </div>
              <div>
                  {historyItems.map((item) => (
                      
                      <div   className="wd-cart-items-list">
                          <img className="wd-cart-items-image"
                              src={item.strDrinkThumb}
                              alt={item.strDrink}
                          />
                          <div className="wd-cart-items-name"> {item.strDrink}</div>
                          <div className="wd-cart-items-function">
  
                          </div>
                          <div className="wd-cart-items-price">
                              {item.quantity} 
                          </div>
                      </div>
                  ))}
              </div>
          </div>
    );
};

export default History;
