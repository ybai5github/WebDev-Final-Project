import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const EditProfileBob = () => {


  const dispatch = useDispatch();
  const profiles = useSelector(state => state.bob);


  let [fullName, setFullName] = useState(profiles[0].fullName)
  let [bio, setBio] = useState(profiles[0].bio)
  let [location, setLocation] = useState(profiles[0].location)
  let [email, setemail] = useState(profiles[0].email)
  let [dob, setDob] = useState(profiles[0].dob)
  let navigate = useNavigate()

  const saveHandler = () => {
    const newProfile = [{fullName, bio, location, email, dob}];
    dispatch({profile: newProfile, type: 'save'});
    navigate("/drinks/profilebob")
  }

  const closeProfile = () => {
    navigate("/drinks/profilebob")
  }

  return(

      <>
        <div className="mt-2 row">
          <div className="col-1">
            {/*<i onClick={() => deleteProfile(profile)}*/}
            <i onClick={closeProfile}
               className="fas fa-remove fa-2x fa-pull-right"/>
          </div>

          <div className="col-10">
            <h5 className="mt-1 ms-3 wd-bolded-font">Edit Profile</h5>
          </div>
          <div className="col-1">
            <button onClick={saveHandler}
                    className="float-end btn btn-primary rounded-pill float-end wd-rounded-corners  wd-bolded-font ed-font-black">
              Save
            </button>
          </div>

        </div>


        <div className="pt-2 position-relative">
          <img width="100%" height="180" src={profiles[0].bannerPicture}/>

        </div>
        <img
            className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style"
            height="100" width="100" src={profiles[0].profilePicture}/>


        <div className="wd-content-goes-up">
          <text>Name</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={fullName} onChange={(event) =>
              setFullName(event.target.value)}>
                </textarea>
          <br/>
          <text>Bio</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={bio} onChange={(event) =>
              setBio(event.target.value)}>
                </textarea>
          <br/>
          <text>Address</text>
          <textarea className="wd-width bg-transparent wd-selector wd-font-white"
                    value={location} onChange={(event) =>
              setLocation(event.target.value)}>
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
              setDob(event.target.value)}>
                </textarea>

        </div>

      </>

  );

}

export default EditProfileBob;