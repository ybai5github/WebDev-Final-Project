import React from "react";
import {useSelector} from "react-redux";
import GlobalProfilePage2 from "./GlobalProfilePage2";

const GlobalProfileList2 = () => {
  const profiles = useSelector(state => state.bob);
  console.log(profiles);
  return(
      <div>
        {profiles && profiles.map && profiles.map((bob) =>
            <GlobalProfilePage2 bob={bob}/>)
        }
      </div>
  );
}


export default GlobalProfileList2;
