import React from "react";
import "./Cart.css"
import { useNavigate } from 'react-router-dom';


const Cart = ({ cartItems, handleRemoveProduct, handleAddProduct, handleCartClearance, onSubmitOrder }) => {

    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * Math.round(item.idDrink / 1000), 0);

    const navigate = useNavigate();

    const ordered = () => {
        onSubmitOrder();
        handleCartClearance()
        navigate('/ordered');
    }

    return (
        <div className="cart-items">
            <h2 className="cart-items-header">Cart Items</h2>

            <div className="clear-cart">
                {cartItems.length >= 1 && (
                    <button className="clear-cart-button" onClick={handleCartClearance}> Clear Cart</button>
                )}
            </div>
            {cartItems.length === 0 && (
                <div className="cart-items-empty"> No items are added. </div>)}

            <div>
                {cartItems.map((item) => (
                    <div key={item.idDrink} className="cart-items-list">
                        <img className="cart-items-image"
                            src={item.strDrinkThumb}
                            alt={item.strDrink}
                        />
                        <div className="cart-items-name"> {item.strDrink}</div>
                        <div className="cart-items-function">
                            <button className="cart-items-add"
                                onClick={() => handleAddProduct(item)}
                            >+</button>
                            <button className="cart-items-remove"
                                onClick={() => handleRemoveProduct(item)}
                            >-</button>
                        </div>
                        <div className="cart-items-price">
                            {item.quantity} * ${Math.round(item.idDrink / 1000)}
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-items-total-price-name">
                Total price
                <div className="cart-items-total-price">
                    ${totalPrice}
                </div>
                <div className="checkout-cart">
                    <button className="check-out-button" onClick={ordered} > Purchase</button>
                </div>
            </div>



        </div>

    );
};

export default Cart;

