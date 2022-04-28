import {FIND_ALL_REVIEWS} from "../actions/reviews-actions";
import {FIND_USER_BY_ID} from  "../actions/reviews-actions";

const reviewsReducer = (state = [], action) => {
    switch (action.type){
        case FIND_ALL_REVIEWS:
            return action.reviews;
        case FIND_USER_BY_ID:
            return action.reviews;
        default:
            return state;
    }
}

export default reviewsReducer;