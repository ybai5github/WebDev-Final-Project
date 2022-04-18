import React from "react";
import {useSelector} from "react-redux";
import ProfilePageCharlie from "./ProfilePageCharlie.js"
import ProfileReducer from "../Reducer/ProfileReducer.js";

const ProfileCharlieList = () => {
  const profiles = useSelector(state => state.charlie);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((charlie) =>
            <ProfilePageCharlie charlie={charlie}/>)
        }
      </div>
  );
}


export default ProfileCharlieList;
