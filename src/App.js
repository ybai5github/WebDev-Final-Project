import './App.css';
import '../src/vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css';
import '../src/vendors/fontawesome/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailScreen from "./components/detail-screen";
import reviewsReducer from "./reducer/reviews-reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SearchScreen from "./component-jihua/SeachPage/SearchScreen";
import React, { useState, useEffect } from 'react';
import Cart from './component-jihua/Cart/Cart';
import History from './component-jihua/Cart/History';
import Ordered from './component-jihua/Cart/Ordered';
import Header from './component-jihua/Header/Header';

import axios from 'axios';

const store = createStore(reviewsReducer);

function App() {

    const storedCart = localStorage.getItem('item');
    const myarray = JSON.parse(storedCart);
    console.log('stored cart', storedCart);
    console.log('parsed cart', myarray);

    const [cartItems, setCartItems] = useState(myarray);
    const [orderedItems, setOrderedItems] = useState([]);
    const [historyItems, setHistoryItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(cartItems));
    }, [cartItems]);

    console.log('cart items', cartItems)
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.idDrink === product.idDrink);
        if (ProductExist) {
            setCartItems(cartItems.map((item) => item.idDrink === product.idDrink ?
                { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));

        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }

    console.log('app', cartItems);

    const handleRemoveProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.idDrink === product.idDrink);
        if (ProductExist.quantity === 1) {
            setCartItems(cartItems.filter((item) => item.idDrink !== product.idDrink));
        } else {
            setCartItems(
                cartItems.map((item) => item.idDrink === product.idDrink
                    ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
                    : item)
            )
        }
    }

    const email = "felix@gmail.com";

    const onSubmitOrder = () => {
        axios.post('http://localhost:4000/order', {
            cartItems: cartItems,
            email: email
        })
            .then(user => {
                console.log('user data', user.data);
                setOrderedItems(user.data);
                console.log('ordered items', orderedItems);
            })

    }
    const getCartItems = () => {
        axios.get('http://localhost:4000/cartitems')
            .then(response => {
                console.log(response.data)
                setHistoryItems(response.data);
                console.log('history items', historyItems);
            })
            .catch(error => { 
                console.log(error) 
                alert(error.response.data);
            })
    }

    const handleCartClearance = () => {
        setCartItems([]);
    }

    return (
        <Provider store={store}>

            <BrowserRouter>
                <div className="container">
                <Header cartItems={cartItems} />
                    <Routes>
                        <Route path="/search/"
                            element={<SearchScreen handleAddProduct={handleAddProduct} />} />
                        <Route path="/search/:cocktailSearch"
                            element={<SearchScreen handleAddProduct={handleAddProduct} />} />
                        <Route path="/detail/:imdbID" exact={true} element={<DetailScreen />} />
                        <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} onSubmitOrder={onSubmitOrder} />} />
                        <Route path="history" element={<History historyItems={historyItems} getCartItems={getCartItems} />} />
                        <Route path="ordered" element={<Ordered />} />
                    </Routes>
                </div>
            </BrowserRouter>

        </Provider>

    );
}



export default App;
