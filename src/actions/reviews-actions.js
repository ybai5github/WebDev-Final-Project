import * as service from "../services/reviews-service";

export const FIND_ALL_REVIEWS = 'FIND_ALL_REVIEWS';
export const FIND_REVIEWS_BY_DRINKID = 'FIND_REVIEWS_BY_DRINKID';

export const findAllReviews = async (dispatch) => {
    const reviews = await service.findAllReviews();
    dispatch({
        type: FIND_ALL_REVIEWS,
        reviews
    });
}

export const findReviewsByDrinkID = async (dispatch) => {
    const reviews = await service.findReviewsByDrinkID();
    dispatch({
        type: FIND_REVIEWS_BY_DRINKID,
        reviews
    });
}