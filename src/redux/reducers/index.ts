import { combineReducers } from "redux";
// Reducer from form
import { reducer as formReducer } from "redux-form";
// Reducer from counter
import counter from "./counter";
// Reducer to help redux form
import reduxForm from "./reduxForm";

// The key used to pass the redux-form reducer should be named form.
export default combineReducers({
  counter,
  form: formReducer,
  tempReduxFormCache: reduxForm
});
