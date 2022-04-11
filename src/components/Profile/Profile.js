import React from "react";
import { useNavigate } from 'react-router-dom';

const Profile = ({ name, email, onRouteChange }) => {
    console.log(name);
    console.log(email);
    const navigate = useNavigate();

    return (
        <div >
            <div className="black f3">
                <p> Profile page  </p>
                <p> name : {name}  </p>
                <p> email : {email}  </p>
            </div>

            <button onClick={() => navigate(-1)}>go back</button>
        </div>

    );
}

export default Profile;