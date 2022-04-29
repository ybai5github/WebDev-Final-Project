import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "../../index.css"
import ReviewList from "./review-list";


const DetailScreen = () => {
    const [drinkDetails, setDrinkDetails] = useState({})
    const [drinkReviews, setDrinkReviews] = useState({})
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'
    const idDrink = useParams()
    const propertyValues = Object.values(idDrink);

    const searchDrinkByID = async () => {
        const response = await axios.get(`${url}?${propertyValues[0]}`)
        setDrinkDetails(response.data.drinks[0])
    }

    const searchReviewByDrinkID = async () => {
        const response = await axios.get(`https://shrouded-brushlands-00973.herokuapp.com/detail`)
        /* const response = await axios.get(`http://localhost:4000/detail`) */
        const result = response.data;
        let myString = propertyValues[0].replace(/\D/g, '');
        var filtered = result.filter(obj => {
            return obj.drinkID === myString
        })
        setDrinkReviews(filtered)
    }

    useEffect(() => {
        searchDrinkByID()
        searchReviewByDrinkID()
        //eslint-disable-next-line
    }, [])

    return (
        <>
            <h1 className="pt-3 wd-color-orange">Welcome to Detail Screen</h1>
            <div className="p-3">
                <div>
                    <h6><span><i className="wd-blue-color fa-solid fa-circle-info"></i>&nbsp;</span>This is information from remote API</h6>
                    <h1 className="wd-yellow-color pt-3 pb-3">{drinkDetails.strDrink}<span>&nbsp;
                        <i className="wd-yellow-color fa-solid fa-martini-glass-citrus"></i>
                    </span></h1>
                    <div className="row">
                        <img className="col-4" src={drinkDetails.strDrinkThumb} height={350} width={300} alt="img" />
                        <ul className="col-8 ps-4">
                            <li className="wd-font pb-4">
                                <h5 className="wd-bolded-font">
                                    Category

                                </h5>
                                {drinkDetails.strCategory}

                            </li>

                            <li className="wd-font pb-4">
                                <h5 className="wd-bolded-font">
                                    Alcoholic
                                </h5>
                                {drinkDetails.strAlcoholic}
                            </li>

                            <li className="wd-font pb-4">
                                <h5 className="wd-bolded-font">
                                    Ingredient
                                </h5>
                                {drinkDetails.strIngredient1}; {drinkDetails.strIngredient2}; {drinkDetails.strIngredient3};
                            </li>

                            <li className="wd-font pb-4">
                                <h5 className="wd-bolded-font">
                                    Instructions
                                </h5>
                                {drinkDetails.strInstructions}
                            </li>
                        </ul>

                    </div>

                    {/*<Preformatted obj={drinkDetails}/>*/}
                </div>
                <br />
                <hr />

                <div>
                    <h6><span><i className="wd-blue-color fa-solid fa-circle-info"></i>&nbsp;</span>This is information from local API</h6>
                </div>

                {
                    (drinkReviews.length !== 0) ?
                        <ReviewList drinkReviews={drinkReviews} />
                        :
                        <h5 className="pt-4 wd-red-color">"There are not any reviews for this product yet!"</h5>

                }

                {/*{JSON.stringify(drinkReviews)}*/}

            </div>
        </>

    )

};
export default DetailScreen;