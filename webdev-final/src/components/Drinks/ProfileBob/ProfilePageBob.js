import {Link} from "react-router-dom";
import React,  {useState}  from "react";
import ControlledCarousel from "../Carousel/ControlledCarousel";
import {useDispatch} from "react-redux";
import ControlledWishlistBob from "../Wishlist/ControlledWishListBob";
import {findAllUsers2} from "../Action/ProfileActions";
import StarRating4 from "../StarRating/StarRating4";
import StarRating5 from "../StarRating/StarRating5";
import StarRating3 from "../StarRating/StarRating3";
import drinking from "../Data/recentdrinks.json";

const ProfilePageBob = ({bob})=> {

  let [newProfile, setNewProfile] = useState({bob: 'New profile'});
  const dispatch = useDispatch();



  return (
      <>

        <div className="row">
          <div className="col-1">
            <Link to="/home"><i className="fas fa-arrow-left"></i></Link>
          </div>

          <div className="col-11">
            <div className="pb-2 wd-font-white wd-font-size3">
              {bob.fullName}
              <div className="wd-font-color wd-font-size">{bob.tweet}</div>
            </div>


            <Link to="/drinks/globalProfile2/:_id" className="btn btn-primary rounded-pill float-end" onClick={() => findAllUsers2(dispatch, newProfile)}>
              Find Users
            </Link>

          </div>
          <div className="mb-5 card">
            <div className="mb-5">
            <img
                className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                height="100" width="100" src={bob.profilePicture}/>
          </div>

                <div width="100">
            <Link to="/drinks/editprofilebob"
                  className="btn btn-primary rounded-pill float-end mt-2 wd-rounded-corners  wd-border-color-grey wd-bolded-font wd-font-white">
              Edit Profile</Link></div>

            <div className="mt-5 flex-column">
            <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
              {bob.fullName}
            </h5>

            <text
                className="wd-relative-profile-handle wd-font-grey">@{bob.handle}</text>


            <h6 className="wd-relative-profile-bio pb-2">{bob.bio}</h6>

            <div className="wd-relative-profile-icons pb-2">
              <i className="me-2 fa-solid fa-location-dot"></i>
              <text className="me-3">{bob.location}</text>

              <i className="me-2 fa-solid  fa-cake"></i>
              <text className="me-3">{bob.dob}</text>

              <i className="me-2 fa-solid fa-envelope"></i>
              <text className="me-3">{bob.email}</text>

              <i className="me-2 fa-regular fa-calendar-days"></i>
              <text className="me-3">{bob.dateJoined}</text>
            </div>


            <div className="wd-relative-profile-icons row mb-5">

              <text className="col-3 wd-font-white">
                <i className="me-2 fa-solid fa-cart-plus"></i> {bob.wishlistCount}
                <span className="ms-1 wd-font-grey">Wishlist</span>
              </text>

              <text className="col-9 wd-font-white">
                <i className="me-2 fa-solid fa-shopping-cart"></i> {bob.orderCount}
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
              <h5 className="card-title">My Special treatment</h5>

                <ControlledWishlistBob/>

            </div>
          </div>
        </div>



        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">Whitecap Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src="https://www.thecocktaildb.com//images//media//drink//srpxxp1441209622.jpg"/>


                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating4/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">Magarita</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top  wd-product-image-photo" height="400" width="400" src="https://www.thecocktaildb.com//images//media//drink//5noda61589575158.jpg"/>

                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">Tommy's Margarita</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src="https://www.thecocktaildb.com//images//media//drink//loezxn1504373874.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating4/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">Blue Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//bry4qh1582751040.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating3/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">Strawberry Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//tqyrpw1439905311.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating4/>
            </div>
          </li>
        </ul>

        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[11].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[11].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[12].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[12].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[13].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[13].strDrinkThumb}/>

                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating4/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[15].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[15].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[16].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[16].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

      </>
  );
};
export default ProfilePageBob;
