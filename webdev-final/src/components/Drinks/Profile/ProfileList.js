import React from "react";
import {useSelector} from "react-redux";
import ProfilePage from "./ProfilePage.js"
import ProfileReducer from "../Reducer/ProfileReducer.js";

const ProfileList = () => {
  const profiles = useSelector(state => state.profile);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((profile) =>
            <ProfilePage profile={profile}/>)
        }
      </div>
  );
}


export default ProfileList;
