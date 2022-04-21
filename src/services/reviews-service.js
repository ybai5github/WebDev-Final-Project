import axios from 'axios';

const API_BASE = 'http://localhost:4000/detail';
//const TUITS_API = `${API_BASE}/reviews`;


export const findAllReviews = async () => {
    const response = await axios.get(API_BASE);
    return response.data;
}

export const findReviewsByDrinkID = async () => {
    const response = await axios.get(API_BASE);
    return response.data;

}

// export const findReviewsByDrinkID = (id) => fetch(????).then(response => response.json());