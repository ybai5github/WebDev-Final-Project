import React from "react";
import { Link } from "react-router-dom"
import './Header.css'

const Header = ({ cartItems }) => {

    console.log('cartitems length', cartItems.length);
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to="/" className="Logo">
                        Drinks Store
                    </Link>
                </h1>
            </div>
            <div className="header-links">
                {/* <ul>
                    <li>
                        <Link to="/">Home</Link>

                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/product">Product</Link>

                    </li>
                </ul> */}
                <ul>
                    <li>
                        <Link to="/search">Search</Link>

                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/history">History</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="cart-length"><i className="fas fa-shopping-cart" /> {cartItems.length === 0 ? "" : cartItems.length}</Link>

                    </li>
                </ul>
            </div>
        </header>

    )
};

export default Header;