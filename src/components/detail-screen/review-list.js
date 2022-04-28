import React, {useEffect, useState} from "react";
import ReviewListItem from "./review-list-item";



const ReviewList = ({drinkReviews}) => {
    // const reviews = useSelector(state => state);
    // console.log(reviews);
    // const dispatch = useDispatch();
    // useEffect(() => findReviewsByDrinkID(dispatch), []);

    return(
        <>
            <h4 className="pt-2 wd-color-orange">Reviews</h4>
            <ul className="list-group">
                {
                    drinkReviews.map && drinkReviews.map(review =>
                        <ReviewListItem key={review._id}
                                        review={review}/>)
                }

            </ul>
        </>



    );
}

export default ReviewList;