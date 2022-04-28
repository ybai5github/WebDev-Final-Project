import {Link, useNavigate, useParams} from "react-router-dom";
import drinking from "../Data/recentdrinks.json";
import StarRating5 from "../StarRating/StarRating5";
import StarRating4 from "../StarRating/StarRating4";
import StarRating3 from "../StarRating/StarRating3";
import React from "react";
import axios from "axios";

const GlobalProfilePage = ({ name, email, address, dob, account, strDrink,strDrinkThumb,loadDrink })=> {


  const getUserID = useParams();
  console.log(getUserID)
  // console.log(name);
  // console.log(email);
  // console.log(address);
  // console.log(dob);
  // console.log(account);

  const searchUserByID = async () =>{
    const response = await axios.get(`http://localhost:4000/user`)
    const result = response.data;
  }
  let navigate = useNavigate()



  return (
      <>
        <div className="row">
          <div className="col-1">
            <i className="fas fa-arrow-left" onClick={() => navigate(-1)}></i>
          </div>

          <div className="col-11">
            <div className="pb-2 wd-font-white wd-font-size3">
              {getUserID.user}
              <div className="wd-font-color wd-font-size">Profile</div>
            </div>

          </div>
          <div className="mb-5 card">
            <div className="mb-5 mt-5">
              <img
                  className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                  height="100" width="100" src="https://images.squarespace-cdn.com/content/v1/544111afe4b0881390277165/1413637430193-F3ZXW2JIYGB62PDBA9AC/James+Stickley+Profile.jpg"/>
            </div>



            <div className="mt-5 flex-column">
              <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
                {getUserID.user}
              </h5>

              <text
                  className="wd-relative-profile-handle wd-font-grey">@{getUserID.user}</text>


              {/*<h6 className="wd-relative-profile-bio pb-2">bio</h6>*/}

              <div className="wd-relative-profile-icons pb-2">


                {/*<i className="me-2 fa-regular fa-calendar-days"></i>*/}
                {/*<text className="me-3">join</text>*/}
              </div>
            </div>
          </div>
        </div>



        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[0].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[0].strDrinkThumb}/>


                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[1].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={drinking[1].strDrinkThumb}/>

                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[2].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[2].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating3/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[3].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[3].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

      </>
  );
};
export default GlobalProfilePage;
