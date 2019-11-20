import { combineReducers } from "redux";
// Reducer from counter
import counter from "./counter";
// Reducer from form
import { reducer as formReducer } from "redux-form";

export default combineReducers({ counter, form: formReducer });
