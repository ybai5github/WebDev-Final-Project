import React from "react";
import {useSelector} from "react-redux";
import GlobalProfilePage from "./GlobalProfilePage";

const GlobalProfileList = () => {
  const drinks = useSelector(state => state.drink);
  console.log(drinks);
  return(
      <div>
        {drinks && drinks.map && drinks.map((drink) =>
            <GlobalProfilePage drink={drink}/>)
        }
      </div>
  );
}


export default GlobalProfileList;