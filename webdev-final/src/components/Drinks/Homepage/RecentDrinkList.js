import React from "react";
import {useSelector} from "react-redux";
import RecentDrinks from "./RecentDrinks.js";



const RecentDrinkList = () => {
  const recent = useSelector(state => state.recentdrinks);
  console.log(recent);
  return(
      <div>
        {recent && recent.map && recent.map((recentdrinks) =>
            <RecentDrinks recentdrinks={recentdrinks}/>)
        }
      </div>
  );
}


export default RecentDrinkList;