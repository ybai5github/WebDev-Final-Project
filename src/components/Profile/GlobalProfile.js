import {Link, useNavigate} from "react-router-dom";

const GlobalProfilePage = ({name})=> {

  //const [profile, setprofile] = useState([])
  // const viewprofile = useParams()
  // console.log(viewprofile);
  // const uservalue = Object.values(viewprofile);
  console.log(name);
  let navigate = useNavigate()



  return (
      <>
        <div className="row">
          <div className="col-1">
            <i className="fas fa-arrow-left" onClick={() => navigate(-1)}></i>
          </div>

          <div className="col-11">
            <div className="pb-2 wd-font-white wd-font-size3">
              {name}
              <div className="wd-font-color wd-font-size">Profile</div>
            </div>

          </div>
          <div className="mb-5 card">
            <div className="mb-5 mt-5">
              <img
                  className="wd-image-border wd-relative-position-profile wd-rounded-corners-circle2 wd-border-style wd-move-up"
                  height="100" width="100" src="http://static.zerochan.net/Anya.Forger.full.3333219.jpg"/>
            </div>



            <div className="mt-5 flex-column">
              <h5 className="wd-relative-profile-name wd-profile-name-style wd-font-white">
                {name}
              </h5>

              <text
                  className="wd-relative-profile-handle wd-font-grey">@{name}</text>


              <h6 className="wd-relative-profile-bio pb-2">bio</h6>

              <div className="wd-relative-profile-icons pb-2">


                <i className="me-2 fa-regular fa-calendar-days"></i>
                <text className="me-3">join</text>
              </div>
            </div>
          </div>
        </div>




        {/*<ul className="mb-5 col-1 list-group list-group-horizontal">*/}
        {/*  <li className="list-group-item">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[0].strDrink}</h5>*/}

        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[0].strDrinkThumb}/>*/}


        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}
        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[1].strDrink}</h5>*/}
        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={drinking[1].strDrinkThumb}/>*/}

        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}

        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[2].strDrink}</h5>*/}
        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[2].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}
        {/*      </div>*/}
        {/*      <StarRating3/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item ">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[3].strDrink}</h5>*/}

        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[3].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}

        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item ">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[4].strDrink}</h5>*/}

        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[4].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}

        {/*      </div>*/}
        {/*      <StarRating4/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*</ul>*/}

        {/*<ul className="mb-5 col-1 list-group list-group-horizontal">*/}
        {/*  <li className="list-group-item">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[5].strDrink}</h5>*/}
        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[5].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}
        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item ">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[6].strDrink}</h5>*/}

        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[6].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}

        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[7].strDrink}</h5>*/}

        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[7].strDrinkThumb}/>*/}

        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}
        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[8].strDrink}</h5>*/}
        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="400" width="400" src={drinking[8].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}
        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*  <li className="list-group-item ">*/}
        {/*    <div className="card">*/}
        {/*      <h5 className="card-title mb-5">{drinking[9].strDrink}</h5>*/}

        {/*      <div className="card-body wd-flex">*/}
        {/*        <img className="card-img-top wd-product-image-photo" height="291" width="291" src={drinking[9].strDrinkThumb}/>*/}
        {/*        <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>*/}

        {/*      </div>*/}
        {/*      <StarRating5/>*/}
        {/*    </div>*/}
        {/*  </li>*/}
        {/*</ul>*/}

      </>
  );
};
export default GlobalProfilePage;
