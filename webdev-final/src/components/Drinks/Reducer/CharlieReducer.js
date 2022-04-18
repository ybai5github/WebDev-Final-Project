import CharlieData from "../Data/charlie.json";

const CharlieReducer = (state = CharlieData, action)=>{
  switch (action.type) {
    case 'save':
      //console.log(action.profile)
      state[0] = {
        ...state[0],
        ...action.charlie[0],
      }
      return state;
    default:
      return state;
  }
};
export default CharlieReducer;