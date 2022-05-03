import React from "react";
import "./Cart.css"
import { useNavigate } from 'react-router-dom';


const Cart = ({ cartItems, handleRemoveProduct, handleAddProduct, handleCartClearance, onSubmitOrder }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * Math.round(item.idDrink / 1000), 0);

    const navigate = useNavigate();

    console.log('cart items', cartItems.length);
    const ordered = () => {
        if (cartItems.length === 0) {
            alert('please purchase the items')
            return;
        } else {
            onSubmitOrder();
            handleCartClearance()
            navigate('/ordered');
        }
    }

    return (
        <div className="wd-cart-items">
            <h2 className="wd-cart-items-header">Cart Items</h2>

            <div className="wd-clear-cart">
                {cartItems.length >= 1 && (
                    <button className="wd-clear-cart-button" onClick={handleCartClearance}> Clear Cart</button>
                )}
            </div>
            {cartItems.length === 0 && (
                <div className="wd-cart-items-empty"> No items are added. </div>)}

            <div>
                {cartItems.map((item) => (
                    <div key={item.idDrink} className="wd-cart-items-list">
                        <img className="wd-cart-items-image"
                            src={item.strDrinkThumb}
                            alt={item.strDrink}
                        />
                        <div className="wd-cart-items-name"> {item.strDrink}</div>
                        <div className="wd-cart-items-function">
                            <button className="wd-cart-items-add"
                                onClick={() => handleAddProduct(item)}
                            >+</button>
                            <button className="wd-cart-items-remove"
                                onClick={() => handleRemoveProduct(item)}
                            >-</button>
                        </div>
                        <div className="wd-cart-items-price">
                            {item.quantity} * ${Math.round(item.idDrink / 1000)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="wd-cart-items-total-price-name">
                Total price
                <div className="wd-cart-items-total-price">
                    ${totalPrice}
                </div>
                <div className="wd-checkout-cart">
                    <button className="wd-check-out-button" onClick={ordered} > Purchase</button>
                </div>
            </div>



        </div>

    );
};

export default Cart;

