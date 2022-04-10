import React from "react";
import { NavLink} from "react-router-dom";


const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <p onClick={() => onRouteChange('signout')} className="f3 link dim black underline pa3 pointer"> Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                 {/*  <NavLink to="/login" activeclassname="active" className={`list-group-item list-group-item-action d-flex align-items-center ${active === 'home' ? 'active' : ''}`}><i
                    className="fas fa-house "></i> <span className="d-flex d-none d-xl-block ms-1"> Home</span></NavLink> */}
              <p onClick={() => onRouteChange('signin')} className="f3 link dim black underline pa3 pointer"> Sign in</p>
                <p onClick={() => onRouteChange('register')} className="f3 link dim black underline pa3 pointer"> Register</p>
            </nav>
        );


    }
}

export default Navigation