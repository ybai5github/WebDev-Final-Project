import React, { useState } from 'react';
import Navigation from './components/Navigation/Navigation';
import './App.css';
import Home from './components/Home/Home';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from './components/Profile/Profile';
import GlobalProfile from "./components/Profile/GlobalProfile";
import EditProfile from "./components/Profile/EditProfile";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';

const App = () => {

  /* const [imageURL, setURL] = useState(''); */

  /* const [input, setInput] = useState(''); */

  /*   const [box, setBox] = useState({}); */

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

  /*  useEffect(()=>{
     fetch('http://localhost:4000/')
     .then(response=> response.json())
     .then(data => console.log(data))
   }) */



  /* const onInputChange = (event) => {
    console.log(event.target.value);
    setInput(event.target.value);
  }
 */


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

  return (

    <BrowserRouter>
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      <div className="container">

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
            <Route path="profile" element={route === 'profile' ? <div><Profile name={users.name} email={users.email} address={users.address} dob={users.dob} account={users.account} /></div> : <Home />} />
            <Route path="profile/bob" element={<GlobalProfile/>}/>
            <Route path="editProfile" element={route === 'editprofile' ? <div><EditProfile /></div> : <EditProfile/>} />
              <Route path="home" element={<Home/>}/>}/>
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
