import {Link} from "react-router-dom";
import React,  {useState}  from "react";
import ControlledCarousel from "../Carousel/ControlledCarousel";
import {useDispatch} from "react-redux";
import {findAllUsers2} from "../Action/ProfileActions";
import drinking from "../Data/recentdrinks.json";
import StarRating5 from "../StarRating/StarRating5";
import ControlledWishlistCharlie from "../Wishlist/ControlledWishListCharlie";

const ProfilePageCharlie = ({charlie})=> {

  let [newProfile, setNewProfile] = useState({charlie: 'New profile'});
  const dispatch = useDispatch();



  return (
      <>

        <div className="row">
          <div className="col-1">
            <Link to="/home"><i className="fas fa-arrow-left"></i></Link>
          </div>

          <div className="col-11">
            <div className="pb-2 wd-font-white wd-font-size3">
              {charlie.fullName}
              <div className="wd-font-color wd-font-size">{charlie.tweet}</div>
            </div>


            <Link to="/drinks/globalProfile/:_id" className="btn btn-primary rounded-pill float-end" onClick={() => findAllUsers2(dispatch, newProfile)}>
              Find Users
            </Link>

          </div>
          <div className="mb-5 card">
            <div className="mb-5">
            <img
                className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                height="100" width="100" src={charlie.profilePicture}/>
          </div>

                <div width="100">
            <Link to="/drinks/editprofilecharlie"
                  className="btn btn-primary rounded-pill float-end mt-2 wd-rounded-corners  wd-border-color-grey wd-bolded-font wd-font-white">
              Edit Profile</Link></div>

            <div className="mt-5 flex-column">
            <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
              {charlie.fullName}
            </h5>

            <text
                className="wd-relative-profile-handle wd-font-grey">@{charlie.handle}</text>


            <h6 className="wd-relative-profile-bio pb-2">{charlie.bio}</h6>

            <div className="wd-relative-profile-icons pb-2">
              <i className="me-2 fa-solid fa-location-dot"></i>
              <text className="me-3">{charlie.location}</text>

              <i className="me-2 fa-solid  fa-cake"></i>
              <text className="me-3">{charlie.dob}</text>

              <i className="me-2 fa-solid fa-envelope"></i>
              <text className="me-3">{charlie.email}</text>

              <i className="me-2 fa-regular fa-calendar-days"></i>
              <text className="me-3">{charlie.dateJoined}</text>
            </div>


            <div className="wd-relative-profile-icons row mb-5">

              <text className="col-3 wd-font-white">
                <i className="me-2 fa-solid fa-cart-plus"></i> {charlie.wishlistCount}
                <span className="ms-1 wd-font-grey">Wishlist</span>
              </text>

              <text className="col-9 wd-font-white">
                <i className="me-2 fa-solid fa-shopping-cart"></i> {charlie.orderCount}
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

                <ControlledWishlistCharlie/>

            </div>
          </div>
        </div>



        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[17].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[17].strDrinkThumb}/>


                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[10].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={drinking[10].strDrinkThumb}/>

                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[18].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[18].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[19].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[19].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[20].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[20].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[21].strDrink}</h5>
              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[21].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[22].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[22].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[23].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[23].strDrinkThumb}/>

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
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">{drinking[24].strDrink}</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[24].strDrinkThumb}/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

      </>
  );
};
export default ProfilePageCharlie;
