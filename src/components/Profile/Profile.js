import React, { useState, useRef, useEffect } from "react";
import { useNavigate, Link, useParams } from 'react-router-dom';
import axios from "axios";
import './profile.css';
import drinking from "../Data/recentdrinks.json";
import StarRating5 from "../StarRating/StarRating5";
import StarRating3 from "../StarRating/StarRating3";

const Profile = ({ name, email, address, dob, account, getAllHistory, adminItems }) => {
  console.log(name);
  console.log(email);
  console.log(address);
  console.log(dob);
  console.log(account);


  const format = (input) => {
    var pattern = /(\d{4})-(\d{2})-(\d{2})/;
    if (!input || !input.match(pattern)) {
      return null;
    }
    return input.replace(pattern, '$2/$3/$1');
  };

  console.log(format(dob));
  const navigate = useNavigate();

  let [newProfile, setNewProfile] = useState({ profile: 'New profile' });

  const { userSearch } = useParams()
  const searchUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php";
  const Searchforuser = useRef();

  const searchuserbyname = async () => {
    const searchString = Searchforuser.current.value || userSearch || ""

    const response = await axios.get(`${searchUrl}?s=${searchString}`)
    setNewProfile(response.data.profile)
    Searchforuser.current.value = searchString
    if (searchString == null) {
      navigate(`/profile`)
    } else {
      navigate(`/profile/${searchString}`)
    }

  }
  useEffect(() => {
    searchuserbyname()
    //eslint-disable-next-line
  }, [newProfile])

  return (
    <div >
      {/* <div className="white f3">
                <p> Profile page  </p>
                <p> name : {name}  </p>
                <p> email : {email}  </p>
                <p> address : {address}  </p>
                <p> date of birth : {format(dob)}  </p>
                <p> account : {account}  </p>
            </div> */}

      {/*<button onClick={() => navigate(-1)}>go back</button>*/}

      <div className="row">
        <div className="col-1">
          <Link to="/"><i className="fas fa-arrow-left"></i></Link>
        </div>

        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Find users..."
            aria-label="Recipient's username" aria-describedby="basic-addon2" ref={Searchforuser} />
          <div className="input-group-append">
            <button className="btn btn-outline-primary float-end" type="button" onClick={searchuserbyname}>Find users</button>
          </div>
        </div>

      </div>
      <div className="mb-5 card">
        <div className="mb-5">
          <img
            className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
            height="100" width="100" src="http://static.zerochan.net/Anya.Forger.full.3333219.jpg" alt="star" />
        </div>

        <div width="100">
          <Link to="/editProfile"
            className="btn btn-primary rounded-pill float-end mt-2 wd-rounded-corners  wd-border-color-grey wd-bolded-font wd-font-white">
            Edit Profile</Link></div>

        <div className="mt-5 flex-column">
          <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
            {name}
          </h5>

          <h6 className="wd-relative-profile-bio pb-2">{address}</h6>

          <div className="wd-relative-profile-icons pb-2">

            <i className="me-2 fa-solid  fa-cake"></i>
            <text className="me-3">{format(dob)}</text>

            <i className="me-2 fa-solid fa-envelope"></i>
            <text className="me-3">{email}</text>

            <i className="me-2 fa-solid fa-user"></i>
            <text className="me-3">{account}</text>
          </div>
        </div>
      </div>

      {account !== 'admin' && (
        <div>
          <ul className="mb-5 col-1 list-group list-group-horizontal">
            <li className="list-group-item">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[0].strDrink}</h5>
                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[0].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
            <li className="list-group-item">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[1].strDrink}</h5>
                <div className="card-body wd-flex">
                  <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={drinking[1].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
            <li className="list-group-item">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[2].strDrink}</h5>
                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[2].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating3 />
              </div>
            </li>
            <li className="list-group-item ">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[3].strDrink}</h5>

                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[3].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
          </ul>
          <ul className="mb-5 col-1 list-group list-group-horizontal">
            <li className="list-group-item">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[5].strDrink}</h5>
                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[5].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
            <li className="list-group-item ">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[6].strDrink}</h5>

                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[6].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
            <li className="list-group-item">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[7].strDrink}</h5>
                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[7].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
            <li className="list-group-item">
              <div className="card">
                <h5 className="card-title mb-5">{drinking[8].strDrink}</h5>
                <div className="card-body wd-flex">
                  <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[8].strDrinkThumb} alt="star" />
                  <div className="p-5 mt-5"><a href="/#" className="btn btn-primary mb-5">Go somewhere</a></div>
                </div>
                <StarRating5 />
              </div>
            </li>
          </ul>
        </div>)}

      {account === 'admin' && (
        <div className="category-preview-container">
          <h1>Order History Items from all the users</h1>
          <button className="clear-cart-button" onClick={getAllHistory}> History</button>
          {adminItems.map((item) => (

            <div className="preview" key={item.strDrink}>
              <img className="cart-items-image"
                src={item.strDrinkThumb}
                alt={item.strDrink}
              />
              <div className="title"> {item.strDrink}</div>
              <div className="preview">

              </div>
              <div className="preview">
                {item.count}
              </div>
            </div>

          ))}
        </div>)}


    </div>
  );
}

export default Profile;
