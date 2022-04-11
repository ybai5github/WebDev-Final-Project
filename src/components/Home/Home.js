import React from "react";
import { useNavigate } from 'react-router-dom';

const Home = ({ onRouteChange }) => {

    const navigate = useNavigate();

    const profile = () => {
        onRouteChange('profile');
        navigate('/profile');
    }

    return (
        <div >
            <div className="black f3">

                <ul className="list-group">
                    <li className="list-group-item"> Must allow users to register and create a new account</li>
                </ul>

                <p onClick={ profile } className="pointer">Profile</p>
            </div>
            <div className="white f1">

            </div>
        </div>

    );
}

export default Home;