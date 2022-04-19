import * as service from "../services/reviews-service";

export const FIND_ALL_REVIEWS = 'FIND_ALL_REVIEWS';

export const findAllReviews = async (dispatch) => {
    const reviews = await service.findAllReviews();
    dispatch({
        type: FIND_ALL_REVIEWS,
        reviews
    });
}