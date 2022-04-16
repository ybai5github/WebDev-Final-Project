import React from "react";
import {useSelector} from "react-redux";
import GlobalProfilePage from "./GlobalProfilePage";

const GlobalProfileList = () => {
  const profiles = useSelector(state => state.profile);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((profile) =>
            <GlobalProfilePage profile={profile}/>)
        }
      </div>
  );
}


export default GlobalProfileList;
