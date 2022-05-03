import React from "react";
import { Link, useNavigate } from "react-router-dom"
import './Header.css'

const Header = ({ cartItems, userName, onRouteChange }) => {

    console.log('cartitems length', cartItems.length);
    const navigate = useNavigate();
    const profile = (e) => {
        e.preventDefault();
        if (userName === '' || userName === undefined) {
            alert('please sign in');
        } else {
            onRouteChange('profile');
            navigate('/profile');
        }
    }
    return (
        <header className="wd-header">
            <div>
                <h1>
                    <Link to="/" className="wd-Logo">
                        Drinks Store
                    </Link>
                </h1>
            </div>
            <div className="wd-header-links">
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
                        <Link to="/profile" onClick={(e) => profile(e)}>Profile</Link>
                    </li>
                </ul>
                <ul>
                    <li>
                        <Link to="/cart" className="wd-cart-length"><i className="fas fa-shopping-cart" /> {cartItems.length === 0 ? "" : cartItems.length}</Link>

                    </li>
                </ul>
            </div>
        </header>

    )
};

export default Header;