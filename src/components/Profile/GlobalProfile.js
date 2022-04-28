import { useNavigate, useParams } from "react-router-dom";
import drinking from "../Data/recentdrinks.json";
import StarRating5 from "../StarRating/StarRating5";
import StarRating3 from "../StarRating/StarRating3";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { findAllReviews } from "../../actions/reviews-actions";


const GlobalProfilePage = () => {

  const getUserID = useParams();
  let myname = getUserID.user
  const reviews = useSelector(state => state);

  const dispatch = useDispatch();

  useEffect(() => {
    findAllReviews(dispatch)
    console.log('render 1st');
  }, [dispatch]);

  console.log('reviews', reviews)

  var filtered = reviews.filter(
    obj => {
      return obj.user === myname
    }
  )

  console.log('render', filtered[0]);

  const copy = Object.assign({},filtered);

  console.log(copy);

  var profilePic =""

/*   const storedPic = localStorage.getItem('pic');
    const routePic = JSON.parse("") || "";

    const [pic, setPic] = useState(routePic); */

  /*   useEffect(() => {
        localStorage.setItem('pic', JSON.stringify(pic));
    }, [pic]); */

  /*   const loadPic = (filtered) => {
      setPic(filtered[0])
    } */
/* 
    console.log(loadPic); */

  
  console.log(profilePic);
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
              height="100" width="100" src={profilePic} alt="img" />
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
              <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[0].strDrinkThumb} alt="img" />
              <div className="p-5 mt-5"><a href="/" className="btn btn-primary mb-5">Go somewhere</a></div>
            </div>
            <StarRating5 />
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
            <h5 className="card-title mb-5">{drinking[1].strDrink}</h5>
            <div className="card-body wd-flex">
              <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={drinking[1].strDrinkThumb} alt="img" />
              <div className="p-5 mt-5"><a href="/" className="btn btn-primary mb-5">Go somewhere</a></div>
            </div>
            <StarRating5 />
          </div>
        </li>
        <li className="list-group-item">
          <div className="card">
            <h5 className="card-title mb-5">{drinking[2].strDrink}</h5>
            <div className="card-body wd-flex">
              <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[2].strDrinkThumb} alt="img" />
              <div className="p-5 mt-5"><a href="/" className="btn btn-primary mb-5">Go somewhere</a></div>
            </div>
            <StarRating3 />
          </div>
        </li>
        <li className="list-group-item ">
          <div className="card">
            <h5 className="card-title mb-5">{drinking[3].strDrink}</h5>

            <div className="card-body wd-flex">
              <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[3].strDrinkThumb} alt="img" />
              <div className="p-5 mt-5"><a href="/" className="btn btn-primary mb-5">Go somewhere</a></div>

            </div>
            <StarRating5 />
          </div>
        </li>
      </ul>

    </>
  );
};
export default GlobalProfilePage;