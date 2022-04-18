import React from "react";
import {useSelector} from "react-redux";
import GlobalProfilePage3 from "./GlobalProfilePage3";

const GlobalProfileList3 = () => {
  const profiles = useSelector(state => state.charlie);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((charlie) =>
            <GlobalProfilePage3 charlie={charlie}/>)
        }
      </div>
  );
}


export default GlobalProfileList3;
