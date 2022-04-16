import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import {findAllReviews} from '../../actions/reviews-actions'
import ReviewListItem from "./review-list-item";


const ReviewList = () => {
    const reviews = useSelector(state => state);
    const dispatch = useDispatch();
    useEffect(() => findAllReviews(dispatch), []);

    return(
        <>
            <h4 className="pt-2 wd-color-orange">Reviews</h4>
            <ul className="list-group">
                {
                    reviews.map && reviews.map(review =>
                        <ReviewListItem key={review._id}
                                        review={review}/>)
                }

            </ul>
        </>



    );
}

export default ReviewList;