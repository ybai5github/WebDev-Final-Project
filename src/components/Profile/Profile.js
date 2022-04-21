import React, {useState, useEffect, useRef}  from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import {useDispatch} from "react-redux";
import profile from "../Data/profile.json";

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
    
  let [newProfile, setNewProfile] = useState({profile: 'New profile'});
  const dispatch = useDispatch();
  const {userSearch} = useParams()
  const searchUrl = "";
  const Searchforuser = useRef();

  const searchuserbyname = async () => {
    const searchString = Searchforuser.current.value || userSearch ||""

    const response = await axios.get(`${searchUrl}?s=${searchString}`)
    setNewProfile(response.data.profile)
    Searchforuser.current.value = searchString
    if(searchString == null){
      navigate(`/profile`)
    }else {
      navigate(`/profile/${searchString}`)
    }

  }
  useEffect(() => {
    searchuserbyname()
  }, [])

    return (
        <div >
            {/* <div className="white f3">
                <p> Profile page  </p>
                <p> name : {name}  </p>
                <p> email : {email}  </p>
                <p> address : {address}  </p>
                <p> date of birth : {format(dob)}  </p>
                <p> account : {account}  </p>
            </div> */}

            <button onClick={() => navigate(-1)}>go back</button>

            <div className="row">
                <div className="col-1">
                    <Link to="/home"><i className="fas fa-arrow-left"></i></Link>
                </div>

                <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Find users..."
                     aria-label="Recipient's username" aria-describedby="basic-addon2" ref={Searchforuser}/>
              <div className="input-group-append">
                <button className="btn btn-outline-primary float-end" type="button" onClick={searchuserbyname}>Find users</button>
              </div>
            </div>

                </div>
          <div className="mb-5 card">
            <div className="mb-5">
            <img
                className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                height="100" width="100" src={profile.profilePicture}/>
          </div>

                <div width="100">
                    <Link to="/drinks/editProfile/:_id"
                        className="btn btn-primary rounded-pill float-end mt-2 wd-rounded-corners  wd-border-color-grey wd-bolded-font wd-font-white">
                        Edit Profile</Link></div>

                <div className="mt-5 flex-column">
                    <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
                        {name}
                    </h5>

                    


                    <h6 className="wd-relative-profile-bio pb-2">{address}</h6>

                    <div className="wd-relative-profile-icons pb-2">
                       
                        <i className="me-2 fa-solid  fa-cake"></i>
                        <text className="me-3">{format(dob)}</text>

                        <i className="me-2 fa-solid fa-envelope"></i>
                        <text className="me-3">{email}</text>

                     
                    </div>


                 
                </div>
            </div>


        </div>


    );
}

export default Profile;
