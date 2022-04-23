import {useDispatch, useSelector} from "react-redux";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";


const EditProfile = ({onRouteChange }) => {


  // const dispatch = useDispatch();



  let [name, setname] = useState(name)
  let [account, setaccount] = useState(account)
  let [address, setaddress] = useState(address)
  let [email, setemail] = useState(email)
  let [dob, setdob] = useState(dob)



  // console.log('name', name);
  // console.log('address', address);
  // console.log('email', email);
  // console.log('dob', dob);
  // console.log('account', account);

  let navigate = useNavigate()

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


        {/*<div className="pt-2 position-relative">*/}
        {/*  <img width="100%" height="180" src=""/>*/}

        {/*</div>*/}
        <img
            className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style"
            height="100" width="100" src="http://static.zerochan.net/Anya.Forger.full.3333219.jpg"/>


        <div className="wd-content-goes-up">
          <text>Name</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                  value={name} onChange={(event) =>
               setname(event.target.value)}>
                </textarea>
          <br/>
          <text>Bio</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={account} onChange={(event) =>
              setaccount(event.target.value)}>
                </textarea>
          <br/>
          <text>Address</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={address} onChange={(event) =>
              setaddress(event.target.value)}>
                </textarea>
          <br/>
          <text>Email</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={email} onChange={(event) =>
              setemail(event.target.value)}>
                </textarea>
          <br/>
          <text>Date of Birth</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={dob} onChange={(event) =>
              setdob(event.target.value)}>
                </textarea>
        </div>

      </>

  );

}

export default EditProfile;