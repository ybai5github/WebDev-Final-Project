import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import service from "../../services/profile-service.js"
import {updateUser} from "../../actions/profile-action";
// import updateUser from "../../services/profile-service.js"
const EditProfile = ({loadUser,onRouteChange, userInfo }) => {


  // const dispatch = useDispatch();

  let [user, setuser] = useState({
    _id: userInfo.id,
    name: userInfo.name,
    address: userInfo.address,
    account: userInfo.account,
    joined: userInfo.joined,
    email: userInfo.email,
    dob: userInfo.dob
  })

  const onNameChange = (event) => {
    setuser({...user, name: event.target.value});
  }

  const onAddressChange = (event) => {
    setuser({...user, address: event.target.value});
  }

  const onEmailChange = (event) => {
    setuser({...user, email: event.target.value});
  }
  const onDobChange = (event) => {
    setuser({...user, dob: event.target.value});
  }

  const saveUser = () => {
    try {
      service.updateUser(user).then(() => loadUser(user))
      navigate('/profile');
    } catch (error) {
      console.log(error)
    }
  }








  let navigate = useNavigate()



  return(

      <>

        <h2>Hello</h2>
        <h2>{user.name}</h2>
        <div className="mt-2 row">
        <div className="col-2">
          <button className="btn btn-outline-primary"onClick={() => navigate(-1)}>Profile</button>
        </div>

        </div>


        <img
            className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style"
            height="100" width="100" src="http://static.zerochan.net/Anya.Forger.full.3333219.jpg"/>


        <div className="wd-content-goes-up">
          <text>Name</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                  value={user.name} onChange={onNameChange} >
                </textarea>
          <br/>
          <text>Address</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={user.address} onChange={onAddressChange}>
                </textarea>
          <br/>
          <text>Email</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={user.email} onChange={onEmailChange}>
                </textarea>
          <br/>
          <text>Date of Birth</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={user.dob} onChange={onDobChange}>
                </textarea>

        </div>


            <button onClick={saveUser} className="btn btn-outline-primary">Update</button>


      </>

  );

}

export default EditProfile;