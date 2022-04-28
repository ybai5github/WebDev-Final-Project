import './App.css';
import '../src/vendors/bootstrap/bootstrap-5.1.3-dist/css/bootstrap.min.css';
import '../src/vendors/bootstrap/bootstrap-5.1.3-dist/bootstrap.min.css';
import '../src/vendors/fontawesome/css/all.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailScreen from "./components/detail-screen";
import reviewsReducer from "./reducer/reviews-reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";
import SearchScreen from "./components/SeachPage/SearchScreen";
import Cart from './components/Cart/Cart';
import History from './components/Cart/History';
import Ordered from './components/Cart/Ordered';
import Header from './components/Header/Header';
import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import GlobalProfile from "./components/Profile/GlobalProfile";
import EditProfile from "./components/Profile/EditProfile";
/* import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css'; */

import axios from 'axios';

const store = createStore(reviewsReducer);



function App() {

    const [route, setRoute] = useState('signin');

    const [isSignedIn, setSignedIn] = useState(false);

    const [users, setUser] = useState(
        {
            id: '',
            name: '',
            email: '',
            address: '',
            joined: '',
            dob: '',
            account: ''
        }
    );

    const [drink, setdrink] = useState(
        {
            id: '',
            strDrink: '',
            strDrinkThumb: '',
            idDrink: ''


        }
    );

    /* const LoadUser = (data) => {
      setUsers({
        ...users,
        id: data.id,
        name: data.name,
        email: data.email,
        entry: data.entry,
        joined: data.joined
      }); */
    const loadDrink = (recentdrinks) => {
        console.log("recentdrinks", recentdrinks)
        setdrink({
            id: recentdrinks.id,
            strDrink: recentdrinks.strDrink,
            strDrinkThumb: recentdrinks.strDrinkThumb,
            idDrink: recentdrinks.idDrink
        })
    }

    const loadUser = (users) => {
        console.log('users', users)
        setUser({
            id: users._id,
            name: users.name,
            email: users.email,
            address: users.address,
            dob: users.dob,
            account: users.account,
            joined: users.joined
        })

    }

    console.log('name', users.name);
    console.log('address', users.address);
    console.log('email', users.email);
    console.log('dob', users.dob);
    console.log('account', users.account);


    console.log("strDrink", drink.strDrink);
    console.log("strDrinkThumb", drink.strDrinkThumb);

    const onRouteChange = (route) => {
        if (route === 'signout') {
            setSignedIn(false);
        } else if (route === 'home') {

            setSignedIn(true);

        } else if (route === 'profile') {
            setSignedIn(true);
        }
        setRoute(route);
    }

    //cookie session
    const myarray = localStorage.getItem('item') ? JSON.parse(localStorage.getItem('item')) : [];
    console.log('parsed cart', myarray);

    const [cartItems, setCartItems] = useState([]);
    const [orderedItems, setOrderedItems] = useState([]);
    const [historyItems, setHistoryItems] = useState([]);

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(cartItems));
    }, [myarray]);

    console.log('cart items', cartItems)

    const handleAddProduct = (product) => {
        if (users.name === '' || users.name === undefined) {
            alert('please sign in');
            return;
        } else {
            const ProductExist = cartItems.find((item) => item.idDrink === product.idDrink);
            if (ProductExist) {
                setCartItems(cartItems.map((item) => item.idDrink === product.idDrink ?
                    { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));

            } else {
                setCartItems([...cartItems, { ...product, quantity: 1 }]);
            }
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
                if (users.name === '' || users.name === undefined) {
                    alert('please sign in');
                    return;
                } else {
                    setHistoryItems(response.data);
                    console.log('history items', historyItems);
                }
            })
            .catch(error => {
                console.log(error)
                alert(error.response.data);
            })
    }

    const handleCartClearance = () => {
        setCartItems([]);
    }

    const handleSignout = () => {
        setUser('');
    }

    return (
        <Provider store={store}>

            <BrowserRouter>
                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} handleSignout={handleSignout} />

                <div className="container">
                    <Header cartItems={cartItems} />
                    <Routes>
                        <Route path="/">
                            <Route index element={
                                <Home isSignedIn={isSignedIn} onRouteChange={onRouteChange} userName={users.name} />} />
                            <Route path="login" element={route === 'home'
                                ? <div>
                                    <Home userName={users.name} />
                                </div>
                                : (
                                    route === 'signin'
                                        ? <Signin loadUser={loadUser} onRouteChange={onRouteChange} />
                                        : (route === 'signout'
                                            ? <Signin onRouteChange={onRouteChange} />
                                            : <Register loadUser={loadUser} onRouteChange={onRouteChange} />
                                        )
                                )

                            } />
                            <Route path="register" element={<Register loadUser={loadUser} onRouteChange={onRouteChange} />} />
                            <Route path="profile" element={route === 'profile' ? <div><Profile id ={users.id} name={users.name} email={users.email} address={users.address} dob={users.dob} account={users.account} strDrink={drink.strDrink} strDrinkThumb={drink.strDrinkThumb} /></div> : <Home />} />
                            <Route path="profile/:user" element={<GlobalProfile  strDrink={drink.strDrink} strDrinkThumb={drink.strDrinkThumb} loadDrink={loadDrink} />} />
                            <Route path="editProfile" element={<div><EditProfile loadUser={loadUser} onRouteChange={onRouteChange} userInfo={users} /></div>} />
                            <Route path="home" element={<Home />} />
                            <Route path="search" element={<SearchScreen handleAddProduct={handleAddProduct} />} />
                            <Route path="search/:cocktailSearch" element={<SearchScreen handleAddProduct={handleAddProduct} />} />
                            <Route path="detail/:imdbID" exact={true} element={<DetailScreen />} />
                            <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} onSubmitOrder={onSubmitOrder} />} />
                            <Route path="history" element={<History historyItems={historyItems} getCartItems={getCartItems} />} />
                            <Route path="ordered" element={<Ordered />} />
                        </Route>
                        {/*  <Route path="/search"
                            element={<SearchScreen handleAddProduct={handleAddProduct} />} />
                        <Route path="/search/:cocktailSearch"
                            element={<SearchScreen handleAddProduct={handleAddProduct} />} />
                        <Route path="/detail/:imdbID" exact={true} element={<DetailScreen />} />
                        <Route path="cart" element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} onSubmitOrder={onSubmitOrder} />} />
                        <Route path="history" element={<History historyItems={historyItems} getCartItems={getCartItems} />} />
                        <Route path="ordered" element={<Ordered />} /> */}
                    </Routes>
                </div>
            </BrowserRouter>

        </Provider>

    );
}



export default App;
