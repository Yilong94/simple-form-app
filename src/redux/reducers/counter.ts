import { INCREMENT, DECREMENT } from "../actionTypes";

const initialState = {
  count: 0
};

const counter = (state = initialState, action:any) => {
  switch(action.type) {
    case INCREMENT: {
      return {
        ...state,
        count: ++state.count
      }
    }
    
    case DECREMENT: {
      return {
        ...state,
        count: --state.count
      }
    }

    default:
      return state;
  };
};

export default counter;