import { FETCH_USER, RECEIVE_USER } from "../actionTypes";

const initialState = {
  reduxName: "",
  reduxPhone: ""
};

const reduxForm = (state = initialState, action: any) => {
  switch (action.type) {
    case RECEIVE_USER: {
      const { name, phone } = action.json;
      return {
        ...state,
        reduxName: name,
        reduxPhone: phone
      };
    }
    default:
      return state;
  }
};

export default reduxForm;
