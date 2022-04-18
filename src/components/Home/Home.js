import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ControlledCarousel from "../Carousel/ControlledCarousel.js";
import StarRating4 from "../StarRating/StarRating4.js";
import StarRating5 from "../StarRating/StarRating5.js";
import StarRating3 from "../StarRating/StarRating3.js";
import './homepage.css'

const Home = ({ onRouteChange, userName }) => {
    const magaritaurl = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic";
    const getTheMagaritas = async () => {
        const response = await fetch(magaritaurl);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.drinks);
    };
    // console.log(useData);
    //console.log(useData[0].strDrink);
    // console.log('drink array');

    useEffect(() => {
        getTheMagaritas();
    }, []);


    const storedWakanda = localStorage.getItem('wakanda')
    const myarray = JSON.parse(storedWakanda)

    const [useData, setData] = useState(myarray)

    useEffect(() => {
        localStorage.setItem('wakanda', JSON.stringify(useData));
    }, [useData]);


    console.log(userName);
    const navigate = useNavigate();

    const profile = () => {
        onRouteChange('profile');
        navigate('/profile');
    }

    return (
        <div >
            <div className="pt-6 row">
                <h1>
                    welcome {userName}!
                </h1>
                <div>
                    <img width="50" height="50" src="https://ih1.redbubble.net/image.2008026467.8359/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg" />
                    <h2 className="text-center mb-5">Apéritif Cocktails</h2></div>
                <ul className="mb-5 col-1 list-group list-group-horizontal">
                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData[0].strDrink}</h5>

                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={useData[0].strDrinkThumb} />


                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
                            </div>
                            <a href="#" className="btn btn-primary mb-5">More Details</a>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData[1].strDrink}</h5>
                            <div className="card-body wd-flex">
                                <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={useData[1].strDrinkThumb} />

                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData[2].strDrink}</h5>
                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={useData[2].strDrinkThumb} />
                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>
                    <li className="list-group-item ">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData[3].strDrink}</h5>

                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={useData[3].strDrinkThumb} />
                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData[4].strDrink}</h5>

                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={useData[4].strDrinkThumb} />

                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>
                </ul>

                <div className="text-center mb-5">
                    <a href="/search" className="btn btn-primary my-btn-wide">Shop</a>
                </div>

                <div className="col-xxl-12 row-cols-12">
                    <div className="mb-5 offset-md-1">
                        <div className="card">
                            <h5 className="text-center card-header">Featured</h5>
                            <div className="card-body">
                                <h5 className="card-title text-center"> Our House Special</h5>

                                <ControlledCarousel />

                            </div>
                        </div>
                    </div>
                </div>


                <div className="mb-5 offset-md-1">
                    <div className="row">
                        <div className="col-2">
                            <div className="card">
                                <img height="200" src="https://www.thecocktaildb.com//images//media//drink//bry4qh1582751040.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Blue Margarita </h5>
                                    <StarRating4 />
                                </div>
                            </div>
                        </div>

                        <div className="col-3 float-left2">
                            <div className="card">
                                <img width="282" height="200" src="https://www.thecocktaildb.com//images//media//drink//5noda61589575158.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Margarita </h5>
                                    <StarRating4 />
                                </div>
                            </div>
                        </div>


                        <div className="col-3 float-left2">
                            <div className="card">
                                <img width="282" height="200" src="https://www.thecocktaildb.com//images//media//drink//srpxxp1441209622.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Whitecap Margarita </h5>
                                    <StarRating3 />
                                </div>
                            </div>
                        </div>


                        <div className="col-3 float-left3">
                            <div className="card">
                                <img width="282" height="200" src="https://www.thecocktaildb.com//images//media//drink//dztcv51598717861.jpg" />
                                <div className="card-body">
                                    <h5 className="card-title">Smashed Watermelon Margarita</h5>
                                    <StarRating5 />
                                </div>
                            </div>
                        </div>

                    </div>

                </div>



                <div className="white f3">

                    <ul className="list-group">
                        <li className="list-group-item"> Must allow users to register and create a new account</li>
                    </ul>

                    <p onClick={profile} className="pointer">Profile</p>
                </div>
                <div className="white f1">

                </div>
            </div>
        </div>
    );
}

export default Home;