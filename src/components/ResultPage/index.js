import ResultItem from "./ResultItem";
import drink from "../data/drink.json";
import React from "react";

const ResultList =() => {
    return(

        <div className="card-group">
                {
                    drink.map(drink => {
                        return (
                            <ResultItem drink={drink}/>
                        );
                    })
                }
        </div>
        )
}

export default ResultList;