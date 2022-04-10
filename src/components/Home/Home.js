import React from "react";
import Profile from "../Profile/Profile";
import Navigation from "../Navigation/Navigation";
const Home = ({ onRouteChange, isSignedIn }) => {

    return (
        <div >
            <div className="black f3">
                <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
                <ul className="list-group">
                    <li className="list-group-item"> Must allow users to register and create a new account</li>
                </ul>

                <Profile />
            </div>
            <div className="white f1">

            </div>
        </div>

    );
}

export default Home;