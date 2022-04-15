import React, {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Link, useNavigate, useParams} from "react-router-dom";
//import drink from "../data/drink.json";
import ResultItem from "../ResultPage/ResultItem";
const SearchScreen = () => {
    const cocktailSearchRef = useRef()
    const {cocktailSearch} = useParams()
    const navigate = useNavigate()
    const [cocktails, setCocktails] = useState([])
    const searchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
    const searchCocktailByName = async () => {
        const searchString = cocktailSearchRef.current.value || cocktailSearch
            //||"margarita"
        const response = await axios.get(`${searchUrl}?s=${searchString}`)
        setCocktails(response.data.drinks)
        cocktailSearchRef.current.value = searchString
        if(searchString == null){
            navigate(`/search`)
        }else {
            navigate(`/search/${searchString}`)
        }

    }
    useEffect(() => {
        searchCocktailByName()
    }, [])
    return (
        <div>
            <div className="row align-items-center">
                <div className="col-1">
                </div>
                <div className="col-10">
                    <img src="./image/drink.jpg" className="wd-image"/>
                        <div className="wd-centered">Enjoy your Fresh Drink Today!</div>

                    <div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Please Start your Cocktail Today!"
                                   aria-label="Recipient's username" aria-describedby="basic-addon2" ref={cocktailSearchRef}/>
                                <div className="input-group-append">
                                    <button className="btn btn-outline-primary" type="button" onClick={searchCocktailByName}>Search</button>
                                </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            cocktails&&cocktails.map(drink =>
                                <div className="col-sm-12 col-md-10 col-lg-6">
                                <div className="card mb-4">
                                    <img className="card-img-top wd-search-result-image" src={drink.strDrinkThumb? drink.strDrinkThumb : ""} alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{drink.strDrink}</h5>
                                        <p className="card-text wd-instruction-length">{drink.strInstructions}</p>
                                        <a href="#" className="btn btn-primary">Detail Page</a>
                                    </div>
                                </div>
                                </div>
                            )
                        }
                        {
                            !cocktails&&<h1>Please enter a valid drink!</h1>
                        }
                    </div>
                </div>
                <div className="col-1">
                </div>

            </div>


        </div>

    )
}
export default SearchScreen;