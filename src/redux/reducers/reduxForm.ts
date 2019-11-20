import { FETCH_USER } from "../actionTypes";

const initialState = {
  reduxFormName: "",
  reduxPhone: ""
}

const reduxForm = (state=initialState, action:any) => {
  switch(action) {
    case FETCH_USER: {
      const { name:reduxFormName, phone: reduxPhone } = 
      return {
        ...state,

      }
    }
  }
}