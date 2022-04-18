import {Link} from "react-router-dom";
import React from "react";
import StarRating5 from "../StarRating/StarRating5";




const GlobalProfilePage2 = ({bob})=> {


  return (
      <>
        <div className="row">
          <div className="col-1">
            <Link to="/drinks/profile"><i className="fas fa-arrow-left"></i></Link>
          </div>

          <div className="col-11">
            <div className="pb-2 wd-font-white wd-font-size3">
              {bob.fullName}
              <div className="wd-font-color wd-font-size">{bob.tweet}</div>
            </div>

          </div>
          <div className="mb-5 card">
            <div className="mb-5 mt-5">
              <img
                  className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                  height="100" width="100" src={bob.profilePicture}/>
            </div>



            <div className="mt-5 flex-column">
              <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
                {bob.fullName}
              </h5>

              <text
                  className="wd-relative-profile-handle wd-font-grey">@{bob.handle}</text>


              <h6 className="wd-relative-profile-bio pb-2">{bob.bio}</h6>

              <div className="wd-relative-profile-icons pb-2">


                <i className="me-2 fa-regular fa-calendar-days"></i>
                <text className="me-3">{bob.dateJoined}</text>
              </div>
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
              <a href="#" className="btn btn-primary mb-5">More Details</a>
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
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">Blue Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//bry4qh1582751040.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item ">
            <div className="card">
              <h5 className="card-title mb-5">Blue Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//tqyrpw1439905311.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

        <ul className="mb-5 col-1 list-group list-group-horizontal">
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
              <h5 className="card-title mb-5">Blue Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//bry4qh1582751040.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
          <li className="list-group-item">
            <div className="card">
              <h5 className="card-title mb-5">Smashed Watermelon Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="400" width="400" src="https://www.thecocktaildb.com//images//media//drink//dztcv51598717861.jpg"/>

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
              <h5 className="card-title mb-5">Blue Margarita</h5>

              <div className="card-body wd-flex">
                <img className="card-img-top wd-product-image-photo" height="291" width="291" src="https://www.thecocktaildb.com//images//media//drink//bry4qh1582751040.jpg"/>
                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

              </div>
              <StarRating5/>
            </div>
          </li>
        </ul>

      </>
  );
};
export default GlobalProfilePage2;
