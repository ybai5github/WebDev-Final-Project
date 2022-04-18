import React from "react";
import {useSelector} from "react-redux";
import ProfilePageBob from "./ProfilePageBob.js"
import ProfileReducer from "../Reducer/ProfileReducer.js";

const ProfileBobList = () => {
  const profiles = useSelector(state => state.bob);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((bob) =>
            <ProfilePageBob bob={bob}/>)
        }
      </div>
  );
}


export default ProfileBobList;
