import BobData from "../Data/bob.json";

const CharlieReducer = (state = BobData, action)=>{
  switch (action.type) {
    case 'save':
      //console.log(action.profile)
      state[0] = {
        ...state[0],
        ...action.bob[0],
      }
      return state;
    default:
      return state;
  }
};
export default CharlieReducer;