import { FETCH_USER, RECEIVE_USER } from "../actionTypes";

const initialState = {
  reduxFormName: "",
  reduxPhone: ""
};

const reduxForm = (state = initialState, action: any) => {
  switch (action.type) {
    case RECEIVE_USER: {
      const { name, phone } = action.json;
      console.log("ACTION", action);
      return {
        ...state,
        reduxFormName: name,
        reduxPhone: phone
      };
    }
    default:
      return state;
  }
};

export default reduxForm;
