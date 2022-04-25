import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ControlledCarousel from "../Carousel/ControlledCarousel.js";
import StarRating4 from "../StarRating/StarRating4.js";
import StarRating5 from "../StarRating/StarRating5.js";
import StarRating3 from "../StarRating/StarRating3.js";
import './homepage.css'

const Home = ({ onRouteChange, userName }) => {
    const magaritaurl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita";
    const getTheMagaritas = async () => {
        const response = await fetch(magaritaurl);
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData.drinks);
        console.log('3rd render now')
    };
    const storedWakanda = localStorage.getItem('wakanda')
    const myarray = JSON.parse(storedWakanda)

    const [useData, setData] = useState([])

 

    useEffect(() => {
        localStorage.setItem('wakanda', JSON.stringify(useData));
        console.log('4th render now useeffect');
    }, [myarray]);

/*     console.log('1st', useData[0].strDrink); */

    useEffect(() => {
        getTheMagaritas();
    }, []);

    const navigate = useNavigate();

    const profile = () => {
        onRouteChange('profile');
        navigate('/profile');
    }

    return (
        <div >
            <div className="pt-6 row">
                <h1 style={{ color: 'pink' }}>
                    welcome {userName}!
                </h1>
                {console.log('2nd render return')}
                <div>
                    <img width="50" height="50" src="https://ih1.redbubble.net/image.2008026467.8359/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg" />
                    <h2 className="text-center mb-5">Apéritif Cocktails</h2></div>
                <ul className="mb-5 col-1 list-group list-group-horizontal">
                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData.length ? useData[0].strDrink : 'Loading ... '}</h5>

                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={useData.length ? useData[0].strDrinkThumb : 'Loading ... '}  />


                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
                            </div>
                            <a href="#" className="btn btn-primary mb-5">More Details</a>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData.length ? useData[1].strDrink : 'Loading ... '}</h5>
                            <div className="card-body wd-flex">
                                <img className="card-img-top  wd-product-image-photo" height="400" width="400" src={useData.length ? useData[1].strDrinkThumb : 'Loading ... '} />

                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData.length ? useData[2].strDrink : 'Loading ... '}</h5>
                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={useData.length ? useData[2].strDrinkThumb : 'Loading ... '} />
                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>
                    <li className="list-group-item ">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData.length ? useData[3].strDrink : 'Loading ... '}</h5>

                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="291" width="291" src={useData.length ? useData[3].strDrinkThumb : 'Loading ... '} />
                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>

                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>

                    <li className="list-group-item">
                        <div className="card">
                            <h5 className="card-title mb-5">{useData.length ? useData[4].strDrink : 'Loading ... '}</h5>

                            <div className="card-body wd-flex">
                                <img className="card-img-top wd-product-image-photo" height="400" width="400" src={useData.length ? useData[4].strDrinkThumb : 'Loading ... '} />

                                <div className="p-5 mt-5"><a href="#" className="btn btn-primary mb-5">Go somewhere</a></div>
                            </div>
                            <a href="#" className="btn btn-primary">More Details</a>
                        </div>
                    </li>
                </ul>

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



                {/*<div className="white f3">*/}

                {/*    <ul className="list-group">*/}
                {/*        <li className="list-group-item"> Must allow users to register and create a new account</li>*/}
                {/*    </ul>*/}

                {/*    <p onClick={profile} className="pointer">Profile</p>*/}
                {/*</div>*/}
                {/*<div className="white f1">*/}

                {/*</div>*/}


                <div className="card offset-md-1">
                    <ul className="list-group">
                        <li className="list-group-item"> Must allow users to register and create a new account</li>
                    </ul>
                    <div className="card-body">
                        <div>
                            <h2 className="text-center">About our Store</h2>
                        </div>
                        <div className="row">
                            <ul className="col-3 list-group">
                                <li className="list-group-item wd-float-inside"><strong>We are</strong></li>
                                <li className="list-group-item">
                                    <img width="200" height="200" src="https://ih1.redbubble.net/image.2008026467.8359/poster,840x830,f8f8f8-pad,1000x1000,f8f8f8.jpg" />
                                </li>
                            </ul>






                            <ul className="col-2 list-group">
                                <li className="list-group-item wd-float-inside"><strong>Main Menu</strong></li>
                                <li className="list-group-item">
                                    <a href="#">Home</a>
                                </li>
                                <li className="list-group-item">
                                    <a onClick={profile}>Profile</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Shop</a>
                                </li><li className="list-group-item">
                                    <a href="#">Privacy</a>
                                </li>
                            </ul>

                            <ul className="col-2 list-group">
                                <li className="list-group-item wd-float-inside"><strong>Location</strong></li>
                                <li className="list-group-item">
                                    <span>200 Cleveland Boston MA</span>
                                </li>
                            </ul>

                            <ul className="col-2 list-group">
                                <li className="list-group-item wd-float-inside"><strong>Our Socials</strong></li>
                                <li className="list-group-item">
                                    <a href="#">Facebook</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Twitter</a>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">Instagram</a>
                                </li><li className="list-group-item">
                                    <a href="#">Snapchat</a>
                                </li>
                            </ul>

                            <ul className="col-3 list-group">
                                <li className="list-group-item wd-float-inside"><strong>Contact Us</strong></li>
                                <li className="list-group-item">
                                    <span>111-234-6789</span>
                                </li>
                                <li className="list-group-item">
                                    <a href="#">website@website.com</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;