import React, { useEffect, useRef, useState } from 'react';
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
//import drink from "../data/drink.json";
import ResultItem from "../ResultPage/ResultItem";


const SearchScreen = ({handleAddProduct}) => {

    const cocktailSearchRef = useRef()
    const {cocktailSearch} = useParams()
    const navigate = useNavigate()
    const [cocktails, setCocktails] = useState([])
    const searchUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php'
    const searchCocktailByName = async () => {
        const searchString = cocktailSearchRef.current.value || cocktailSearch ||""
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
 


    /*  console.log('cocktail', cocktails); */
    /* const [cartItems, setCartItems] = useState([]);
    console.log('cart items', cartItems)
    const handleAddProduct = (product) => {
        const ProductExist = cartItems.find((item) => item.idDrink === product.idDrink);
        if (ProductExist) {
            setCartItems(cartItems.map((item) => item.idDrink === product.idDrink ?
                { ...ProductExist, quantity: ProductExist.quantity + 1 } : item));

        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    }
    console.log('app', cartItems); */

    return (
        <div>
            <div className="row align-items-center">
                <div className="col-1">
                </div>
                <div className="col-10">
                    <img src="/image/drink.jpg" className="pb-3 wd-image float-end" width="600" />
                    <h2 className="p-2 wd-centered wd-yellow-color wd-font-style wd-bolded-font">Enjoy your Fresh Drink Today!</h2>

                    <div>
                        <div className="input-group mb-3">
                            <input type="text" className="pt-2 form-control" placeholder="Please Start your Cocktail Today!"
                                aria-label="Recipient's username" aria-describedby="basic-addon2" ref={cocktailSearchRef} />
                            <div className="input-group-append">
                                <button className="btn btn-outline-primary" type="button" onClick={searchCocktailByName}>Search</button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            cocktails.map((cocktails) =>
                                <div className="col-sm-12 col-md-10 col-lg-6">
                                    <div className="card mb-4">
                                        <img className="card-img-top wd-search-result-image" src={cocktails.strDrinkThumb ? cocktails.strDrinkThumb : ""} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{cocktails.strDrink}</h5>
                                            <p className="card-text wd-instruction-length">{cocktails.strInstructions}</p>
                                            <Link to={`/detail/i=${cocktails.idDrink}`}>
                                                Detail Page</Link>
                                        </div>

                                        <div>
                                            <button className="product-add-button" onClick={() => handleAddProduct(cocktails)}>Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        {
                            !cocktails && <h1>Please enter a valid drink!</h1>
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