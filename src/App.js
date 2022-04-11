import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes, Link, NavLink } from "react-router-dom";
import Profile from './components/Profile/Profile';

const App = () => {

  const [imageURL, setURL] = useState('');

  const [input, setInput] = useState('');

/*   const [box, setBox] = useState({}); */

  const [route, setRoute] = useState('signin');

  const [isSignedIn, setSignedIn] = useState(false);

  const [users, setUser] = useState(
    {
      id: '',
      name: '',
      email: '',
      address: '',
      joined: ''
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

    const loadUser = (users) => {
      console.log('users', users)
      setUser({
        id: users.id,
        name: users.name,
        email: users.email,
        address: users.address,
        joined: users.joined
      })
  
    }


  console.log('name', users.name);
  console.log('entries', users.entry);
  console.log('email', users.email);

  /*  useEffect(()=>{
     fetch('http://localhost:4000/')
     .then(response=> response.json())
     .then(data => console.log(data))
   }) */



  const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  }



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

  const onSubmit = () => {
    setURL(input);

    const raw = JSON.stringify({
      "user_app_id": {
        "user_id": "1028693",
        "app_id": "bd6ab4db310c42dba83a7791fb6efa3b"
      },
      "inputs": [
        {
          "data": {
            "image": {
              "url": input
            }
          }
        }
      ]
    });

  
     
  }

  return (

    <BrowserRouter>
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      <div className="container">

        <Routes>
          <Route path="/">
            <Route index element={
              <Home isSignedIn={isSignedIn} onRouteChange={onRouteChange} />} />
            <Route path="login" element={route === 'home'
              ? <div>
                <Home />
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
            <Route path="profile" element={route === 'profile' ? <div><Profile name={users.name} email={users.email}/></div> : <Home/>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>


  );


  /*  {
     <div className="App">
 
     <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
     {route === 'home'
       ? <div>
         <Home />
       </div>
       : (
         route === 'signin'
           ? <Signin LoadUser={LoadUser} onRouteChange={onRouteChange} />
           : (route === 'signout'
             ? <Signin onRouteChange={onRouteChange} />
             : <Register LoadUser={LoadUser} onRouteChange={onRouteChange} />
           )
       )
 
     }
 
   </div>
   } */
}

export default App;
