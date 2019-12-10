import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";
import {
  DatePickerInput,
  DatePickerInputProps,
  DatePicker
} from "rc-datepicker";
import "rc-datepicker/src/style.scss";

import SimpleForm from "./components/SimpleForm";
import PaymentForm from "./components/PaymentForm";
import Counter from "./components/Counter";
import ReduxForm from "./components/ReduxForm";
import store from "./redux/store";
import "./App.css";
import FormWidgets from "./components/FormWidgets";

// TODO: create a simple react form ---(DONE)
// TODO: learn about basic html form
// TODO: add useEffect to call simple API when React DOM mounts ---(DONE)
// TODO: play around with other custom hooks to get familiar
// TODO: state management using react redux ---(DONE)
// TODO: create a simple redux form ---(DONE)
// TODO: setup redux form validation on the simple redux form
// TODO: initialize values in the form with API call using redux-thunk ---(DONE)
// TODO: CSS styling of HTML forms
// • sub-TODO: CSS styling with containers/rows/columns

const url = "https://jsonplaceholder.typicode.com/users/2";
const getUser = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    throw err;
  }
};

const App: React.FC = () => {
  const [date, setDate] = useState("02/12/2012");
  const [displayUserInfo, setDisplayUserInfo] = useState({
    username: "",
    password: "",
    name: "",
    emailAddress: ""
  });
  useEffect(() => {
    getUser().then(
      res => {
        setDisplayUserInfo({
          ...displayUserInfo,
          username: res.username,
          name: res.name,
          emailAddress: res.email
        });
      },
      err => {
        alert(`Error calling API ${err}`);
      }
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (credentials: any) => {
    setDisplayUserInfo({ ...displayUserInfo, ...credentials });
  };

  const handleReduxFormSubmit = (form: any) => {
    console.log(form);
  };

  const handleChange = (date: Date) => {
    console.log(date);
  };

  const setStringDate = (_date: Date, stringDate: string) => {
    return setDate(stringDate);
  };
  return (
    <div className="App">
      <h1>Simple Form</h1>
      <SimpleForm onSubmit={handleSubmit} />
      <p>My name: {displayUserInfo.name}</p>
      <p>My email address: {displayUserInfo.emailAddress}</p>
      <p>My username: {displayUserInfo.username}</p>
      <p>My password: {displayUserInfo.password}</p>
      <hr />

      <PaymentForm />
      <hr />

      <FormWidgets />
      <hr />

      <h1>Increment Counter with React-Redux</h1>
      <Counter />
      <hr />

      <h1>Redux Form</h1>
      <ReduxForm onSubmit={handleReduxFormSubmit} />
      <hr />

      {/* <DatePickerInput
        value={date}
        displayFormat="DD/MM/YYYY"
        // onChange={setStringDate}
        // minDate="12-12-2019"
        // maxDate="30-12-2019"
        returnFormat="DD/MM/YYYY"
        validationFormat="DD/MM/YYYY"
      />
      {date} */}
    </div>
  );
};

const ReduxedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default ReduxedApp;
