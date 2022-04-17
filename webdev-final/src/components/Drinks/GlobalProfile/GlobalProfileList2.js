import React from "react";
import {useSelector} from "react-redux";
import GlobalProfilePage2 from "./GlobalProfilePage";

const GlobalProfileList2 = () => {
  const profiles = useSelector(state => state.profile);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((profile) =>
            <GlobalProfilePage2 profile={profile}/>)
        }
      </div>
  );
}


export default GlobalProfileList2;
