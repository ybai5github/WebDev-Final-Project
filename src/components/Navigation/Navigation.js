import React from "react";
import { useNavigate } from 'react-router-dom';

const Navigation = ({ onRouteChange, isSignedIn, handleSignout }) => {
      const navigate = useNavigate();

      const signIn = () => {
          onRouteChange('signin');
          navigate('/login');
      }

      const register = () =>{
          onRouteChange('register');
          navigate('/register');
      }

      const signOut = () => {
          onRouteChange('signout')
          handleSignout();
          navigate('/')
      }
      


    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={signOut} className="f3 link dim white underline pa3 pointer"> Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                 {/*  <NavLink to="/login" activeclassname="active" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'home' ? 'active' : ''}`}><i
                    className="fas fa-house "></i> <span className="d-flex d-none d-xl-block ms-1"> Home</span></NavLink> */}
              <p onClick={signIn} className="f3 link dim white underline pa3 pointer"> Sign in</p>
                <p onClick={register} className="f3 link dim white underline pa3 pointer"> Register</p>
            </nav>
        );


    }
}

export default Navigation