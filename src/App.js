import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Profile from './components/Profile/Profile';

const App = () => {

  const [imageURL, setURL] = useState('');

  const [input, setInput] = useState('');

  const [box, setBox] = useState({});

  const [route, setRoute] = useState('signin');

  const [isSignedIn, setSignedIn] = useState(false);

  const [users, setUsers] = useState(
    {
      id: '',
      name: '',
      email: '',
      entry: 0,
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

  const LoadUser = (data) => {
    const updateUsers = [
      ...users,
      {
        id: data.id,
        name: data.name,
        email: data.email,
        entry: data.entry,
        joined: data.joined
      }
    ];

    setUsers(updateUsers);
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

    const requestOptions = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': 'Key 2f27d84734af45cf9458d0dbab0c600d'
      },
      body: raw
    };

    // NOTE: MODEL_VERSION_ID is optional, you can also call prediction with the MODEL_ID only
    // https://api.clarifai.com/v2/models/{YOUR_MODEL_ID}/outputs
    // this will default to the latest version_id

    fetch("https://api.clarifai.com/v2/models/a403429f2ddf4b49b307e318f00e528b/outputs", requestOptions)
      .then((response) => response.text())
      .then((response) => {
        if (response) {
          fetch('http://localhost:4000/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: users.id
            })
          })
        }

      })
      .catch(error => console.log('error', error));

    /* .then(result => console.log(JSON.parse(result, null, 2).outputs[0].data.regions[0]
    .region_info.bounding_box)) */

  }

  return (

    <BrowserRouter>

      <div className="container">
        <Routes>
          <Route path="/">
            <Route index element={<Home isSignedIn={isSignedIn} onRouteChange={onRouteChange} />} />
            <Route path="login" element={route === 'home'
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

            } />
            <Route path="register" element={<Register LoadUser={LoadUser} onRouteChange={onRouteChange} />} />
            <Route path="profile" element={<Profile />} />
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
