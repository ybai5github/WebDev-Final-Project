import {Link} from "react-router-dom";
import React,  {useState}  from "react";
import ControlledCarousel from "../Carousel/ControlledCarousel";
import {useDispatch} from "react-redux";
import ControlledWishlist from "../Wishlist/ControlledWishlist";
import {findAllUsers2} from "../Action/ProfileActions";
import drinking from "../Data/recentdrinks.json";
import StarRating5 from "../StarRating/StarRating5";
import StarRating3 from "../StarRating/StarRating3";
import StarRating4 from "../StarRating/StarRating4";

const ProfilePage = ({profile})=> {

  let [newProfile, setNewProfile] = useState({profile: 'New profile'});
  const dispatch = useDispatch();



  return (
      <>

        <div className="row">
          <div className="col-1">
            <Link to="/home"><i className="fas fa-arrow-left"></i></Link>
          </div>

          <div className="col-11">
            <div className="pb-2 wd-font-white wd-font-size3">
              {profile.fullName}
              <div className="wd-font-color wd-font-size">{profile.tweet}</div>
            </div>


            <Link to="/drinks/globalProfile" className="btn btn-primary rounded-pill float-end" onClick={() => findAllUsers2(dispatch, newProfile)}>
              Find Users
            </Link>

          </div>
          <div className="mb-5 card">
            <div className="mb-5">
            <img
                className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                height="100" width="100" src={profile.profilePicture}/>
          </div>

                <div width="100">
            <Link to="/drinks/editProfile/:_id"
                  className="btn btn-primary rounded-pill float-end mt-2 wd-rounded-corners  wd-border-color-grey wd-bolded-font wd-font-white">
              Edit Profile</Link></div>

            <div className="mt-5 flex-column">
            <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
              {profile.fullName}
            </h5>

            <text
                className="wd-relative-profile-handle wd-font-grey">@{profile.handle}</text>


            <h6 className="wd-relative-profile-bio pb-2">{profile.bio}</h6>

            <div className="wd-relative-profile-icons pb-2">
              <i className="me-2 fa-solid fa-location-dot"></i>
              <text className="me-3">{profile.location}</text>

              <i className="me-2 fa-solid  fa-cake"></i>
              <text className="me-3">{profile.dob}</text>

              <i className="me-2 fa-solid fa-envelope"></i>
              <text className="me-3">{profile.email}</text>

              <i className="me-2 fa-regular fa-calendar-days"></i>
              <text className="me-3">{profile.dateJoined}</text>
            </div>


            <div className="wd-relative-profile-icons row mb-5">

              <text className="col-3 wd-font-white">
                <i className="me-2 fa-solid fa-cart-plus"></i> {profile.wishlistCount}
                <span className="ms-1 wd-font-grey">Wishlist</span>
              </text>

              <text className="col-9 wd-font-white">
                <i className="me-2 fa-solid fa-shopping-cart"></i> {profile.orderCount}
                <span className="ms-1 wd-font-grey">Orders</span>
              </text>
            </div>
            </div>
          </div>


        </div>








        <div className="mb-5 off">
          <div className="card">
            <h5 className="text-center card-header">WishList</h5>
            <div className="card-body">
              <h5 className="card-title"> My Special treatment</h5>

                <ControlledWishlist/>

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
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[4].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[4].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating4/>
            </div>
          </li>
        </ul>

        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[5].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[5].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[6].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[6].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[7].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[7].strDrinkThumb}/>

                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[8].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[8].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[9].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[9].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

      </>
  );
};
export default ProfilePage;
