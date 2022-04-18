import React from "react";
import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import profileReducer from "./Reducer/ProfileReducer.js";
import charlieReducer from "./Reducer/CharlieReducer";
import bobReducer from "./Reducer/BobReducer";
import drinkReducer from "./Reducer/DrinkReducer";
import {combineReducers, createStore} from "redux";
const reducer = combineReducers({ profile: profileReducer, charlie: charlieReducer, bob: bobReducer, drink: drinkReducer});
const store = createStore(reducer);



const Drinks = () => {
  return (
      <>
        <Provider store={store}>
          <div className="row mt-2">

            <div className="col-10 col-lg-8 col-xl-12">
              <Outlet/>
            </div>

          </div>
        </Provider>
      </>
  )
};

export default Drinks;







