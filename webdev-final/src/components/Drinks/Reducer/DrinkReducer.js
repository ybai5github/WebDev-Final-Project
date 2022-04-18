import DrinkData from "../Data/recentdrinks.json";

const DrinkReducer = (state = DrinkData, action)=>{
  switch (action.type) {
    case 'save':
      //console.log(action.profile)
      state[0] = {
        ...state[0],
        ...action.drink[0],
      }
      return state;
    default:
      return state;
  }
};
export default DrinkReducer;