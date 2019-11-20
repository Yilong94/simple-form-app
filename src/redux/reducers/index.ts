import { combineReducers } from "redux";
// Reducer from counter
import counter from "./counter";
// Reducer from form
import { reducer as formReducer } from "redux-form";
// Reducer to help redux form
import reduxForm from "./reduxForm";

// The key used to pass the redux-form reducer should be named form.
export default combineReducers({ counter, form: formReducer, reduxForm });
