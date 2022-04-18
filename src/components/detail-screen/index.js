import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, useParams} from "react-router-dom";
import Preformatted from "./preformatted";
import "../../index.css"
import ReviewList from "./review-list";


const DetailScreen = () => {
    const [drinkDetails, setDrinkDetails] = useState({})
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php'
    //const idDrink = 178363;
    const idDrink = useParams()
    const propertyValues = Object.values(idDrink);
    //console.log(propertyValues[0]);
    const searchDrinkByID = async () => {
        const response = await axios.get(`${url}?${propertyValues[0]}`)
        //console.log(response);
        setDrinkDetails(response.data.drinks[0])
    }
    useEffect( () => {
        searchDrinkByID()}, []
    )
    return(
        <>
            <h1 className="pt-3 wd-color-orange">Welcome to Detail Screen</h1>
            <div className="p-3">
                <div>
                    <h6><span><i className="wd-blue-color fa-solid fa-circle-info"></i>&nbsp;</span>This is information from remote API</h6>
                    <h1 className="wd-yellow-color pt-3 pb-3">{drinkDetails.strDrink}<span>&nbsp;
                        <i className="wd-yellow-color fa-solid fa-martini-glass-citrus"></i>
                    </span></h1>
                    <div className="row">
                        <img className="col-4" src={drinkDetails.strDrinkThumb} height={350} width={300}/>

                        <ul className="col-8 ps-5">
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
                <br/>
                <hr/>

                <div>
                    <h6><span><i className="wd-blue-color fa-solid fa-circle-info"></i>&nbsp;</span>This is information from local API</h6>
                </div>


                <ReviewList/>

            </div>
        </>

    )

};
export default DetailScreen;