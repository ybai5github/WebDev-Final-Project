import React from "react";
import {Outlet} from "react-router-dom";
import {Provider} from "react-redux";
import profileReducer from "./Reducer/ProfileReducer.js";
import {combineReducers, createStore} from "redux";
const reducer = combineReducers({ profile: profileReducer});
const store = createStore(reducer);



const Drinks = () => {
  return (
      <>
        <Provider store={store}>
          <div className="row mt-2">

            <div className="col-10 col-lg-7 col-xl-6">
              <Outlet/>
            </div>

          </div>
        </Provider>
      </>
  )
};

export default Drinks;







