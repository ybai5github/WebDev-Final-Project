import {Link} from "react-router-dom";
import React,  {useState}  from "react";
import ControlledCarousel from "../Carousel/ControlledCarousel";
import {useDispatch} from "react-redux";
import ControlledWishlist from "../Wishlist/ControlledWishlist";
import {findAllUsers2} from "../Action/ProfileActions";

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
            <Link to="/drinks/editProfile"
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
              <h5 className="card-title">Special title treatment</h5>

                <ControlledWishlist/>

            </div>
          </div>
        </div>



        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//srpxxp1441209622.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                  the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <img className="card-img-top  wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//5noda61589575158.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                  the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//loezxn1504373874.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                  the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
        </ul>

        <ul className="mb-5 col-1 list-group list-group-horizontal">
          <li className="list-group-item">
            <div className="card">
              <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//bry4qh1582751040.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                  the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//tqyrpw1439905311.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                  the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//dztcv51598717861.jpg"/>
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on
                  the card title and make up the bulk of the card's
                  content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </li>
        </ul>

      </>
  );
};
export default ProfilePage;
