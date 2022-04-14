import React from "react";
import { useNavigate } from 'react-router-dom';

const Profile = ({ name, email, address, dob, account, onRouteChange }) => {
    console.log(name);
    console.log(email);
    console.log(address);
    console.log(dob);
    console.log(account);

    const format = (input) => {
        var pattern = /(\d{4})-(\d{2})-(\d{2})/;
        if (!input || !input.match(pattern)) {
            return null;
        }
        return input.replace(pattern, '$2/$3/$1');
    };

    console.log(format(dob));
    const navigate = useNavigate();

    return (
        <div >
            <div className="white f3">
                <p> Profile page  </p>
                <p> name : {name}  </p>
                <p> email : {email}  </p>
                <p> address : {address}  </p>
                <p> date of birth : {format(dob)}  </p>
                <p> account : {account}  </p>
            </div>

            <button onClick={() => navigate(-1)}>go back</button>
        </div>

    );
}

export default Profile;