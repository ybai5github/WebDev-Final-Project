import React from "react";
/* eslint-disable no-useless-escape */
const ResultItem = (
    {
        drink=  {
            "idDrink": "178332",
            "strDrink": "Smashed Watermelon Margarita",
            "strDrinkAlternate": null,
            "strTags": null,
            "strVideo": null,
            "strCategory": "Cocktail",
            "strIBA": null,
            "strAlcoholic": "Alcoholic",
            "strGlass": "Collins glass",
            "strInstructions": "In a mason jar muddle the watermelon and 5 mint leaves together into a puree and strain. Next add the grapefruit juice, juice of half a lime and the tequila as well as some ice. Put a lid on the jar and shake. Pour into a glass and add more ice. Garnish with fresh mint and a small slice of watermelon.",
            "strInstructionsES": null,
            "strInstructionsDE": null,
            "strInstructionsFR": null,
            "strInstructionsIT": "In un barattolo di vetro pestare l'anguria e 5 foglie di menta insieme, filtrare il contenuto in un bicchiere. Quindi aggiungere il succo di pompelmo, il succo di mezzo lime, la tequila e un po 'di ghiaccio. Metti un coperchio sul barattolo e agita. Versare in un bicchiere e aggiungere altro ghiaccio. Guarnire con menta fresca e una fettina di anguria.",
            "strInstructionsZH-HANS": null,
            "strInstructionsZH-HANT": null,
            "strDrinkThumb": "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/dztcv51598717861.jpg",
            "strIngredient1": "Watermelon",
            "strIngredient2": "Mint",
            "strIngredient3": "Grapefruit Juice",
            "strIngredient4": "Lime",
            "strIngredient5": "Tequila",
            "strIngredient6": "Watermelon",
            "strIngredient7": "Mint",
            "strIngredient8": null,
            "strIngredient9": null,
            "strIngredient10": null,
            "strIngredient11": null,
            "strIngredient12": null,
            "strIngredient13": null,
            "strIngredient14": null,
            "strIngredient15": null,
            "strMeasure1": "1\/2 cup",
            "strMeasure2": "5",
            "strMeasure3": "1\/3 Cup",
            "strMeasure4": "Juice of 1\/2",
            "strMeasure5": "1 shot",
            "strMeasure6": "Garnish with",
            "strMeasure7": "Garnish with",
            "strMeasure8": null,
            "strMeasure9": null,
            "strMeasure10": null,
            "strMeasure11": null,
            "strMeasure12": null,
            "strMeasure13": null,
            "strMeasure14": null,
            "strMeasure15": null,
            "strImageSource": null,
            "strImageAttribution": null,
            "strCreativeCommonsConfirmed": "No",
            "dateModified": null
        }
    }

) => {
        return (
            <div>
                <div className="card">

                    <img className="card-img-top wd-search-result-image" src={drink.strDrinkThumb? drink.strDrinkThumb : ""} alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{drink.strDrink}</h5>
                        <p className="card-text wd-instruction-length">{drink.strInstructions}</p>
                        <a href="/" className="btn btn-primary">Detail Page</a>
                    </div>
                </div>
            </div>
        );
    }
export default ResultItem;