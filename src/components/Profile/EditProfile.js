import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import service from "../../services/profile-service.js"
import {updateUser} from "../../actions/profile-action";
import {Button} from "react-bootstrap";

const EditProfile = ({loadUser,onRouteChange }) => {


  // const dispatch = useDispatch();



  let [name, setname] = useState('')
  let [address, setaddress] = useState('')
  let [email, setemail] = useState('')
  let [dob, setdob] = useState('')
  let [user, setuser] = useState({name:""})


  const onNameChange = (event) => {
    setname(event.target.value);
  }

  const onAddressChange = (event) => {
    setaddress(event.target.value);
  }

  const onEmailChange = (event) => {
    setemail(event.target.value);
  }
  const onDobChange = (event) => {
    setdob(event.target.value);
  }

  const updateUser = (event) =>{
      setuser({...user, name: event.target.value});}

  const saveUser = () => {
    service.updateUser(user)
    .then(() => setuser(
        loadUser.map(m => m._id === user._id ? user : m)
    ));
    onRouteChange('profile');
    navigate('/');
  }



  console.log('name', name);

  // console.log('address', address);
  // console.log('email', email);
  // console.log('dob', dob);
  // console.log('account', account);

  let navigate = useNavigate()

  const profile = () => {
    onRouteChange('profile');
    navigate('/');
  }

  // const saveHandler = () => {
  //   const newProfile = [{name, account, address, email, dob}];
  //   dispatch({users: newProfile, type: 'save'});
  //   onRouteChange('profile');
  //   navigate("/profile")
  // }

  // const closeProfile = () => {
  //   onRouteChange('profile');
  //   navigate("/profile");
  // }

  // const updateUser = (event) => setname({...name, name:event.target.value});
  //
  // const saveuser = () =>{
  //   service.updateUser(name).then(() => setname(user.map(m => m._id === name._id? name: m)));
  // }

  const onSubmitSignIn = () => {
    axios.post('http://localhost:4000/editProfile', {
      email: email,
      name: name,
      address: address,
      dob: dob
    })
    .then(user => {
      console.log('user data', user.data);
      if (user.data) {
        loadUser(user.data);
        profile();
      } else {
        alert('incorrect submission');
      }
    }).catch(error => {
      console.log(error);
      alert('please fill out all the fields');
    })

  }

  return(

      <>

        <h2>Hello</h2>
        <h2>{name}</h2>
        <div className="mt-2 row">
        <div className="col-2">
          <button className="btn btn-outline-primary"onClick={() => navigate(-1)}>Profile</button>
        </div>

        {/*  <div className="col-10">*/}
        {/*    <h5 className="mt-1 ms-3 wd-bolded-font">Edit Profile</h5>*/}
        {/*  </div>*/}
        {/*  <div className="col-1">*/}
        {/*    <button onClick={saveHandler}*/}
        {/*            className="float-end btn btn-primary rounded-pill float-end wd-rounded-corners  wd-bolded-font ed-font-black">*/}
        {/*      Save*/}
        {/*    </button>*/}
        {/*  </div>*/}

        </div>


        <img
            className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style"
            height="100" width="100" src="http://static.zerochan.net/Anya.Forger.full.3333219.jpg"/>


        <div className="wd-content-goes-up">
          <text>Name</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                  value={user.name} onChange={updateUser} >
                </textarea>
          <br/>
          <text>Address</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={address} onChange={onAddressChange}>
                </textarea>
          <br/>
          <text>Email</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={email} onChange={onEmailChange}>
                </textarea>
          <br/>
          <text>Date of Birth</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={dob} onChange={onDobChange}>
                </textarea>

          <div className="">
            <Button onClick={saveUser} className="btn btn-outline-primary">Update</Button>
          </div>

        </div>

      </>

  );

}

export default EditProfile;