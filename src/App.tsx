import React, { useState, useEffect } from "react";
import { Provider } from "react-redux";

import SimpleForm from "./SimpleForm";
import Counter from "./Counter";
import ReduxForm from "./ReduxForm";
import store from "./redux/store";
import "./App.css";

// TODO: create a simple react form ---(DONE)
// TODO: state management using react redux ---(DONE)
// TODO: create a simple redux form ---(DONE)
// TODO: initialize values in the form with API call using redux-thunk ---(DONE)
// TODO: Form styling with layout
// • sub-TODO: CSS styling with containers/rows/columns

const url = "https://jsonplaceholder.typicode.com/users/1";
const getUser = async () => {
  try {
    const res = await fetch(url);
    const json = await res.json();
    return json;
  } catch (err) {
    throw err;
  }
};

const App: React.FC = () => {
  const [displayUserInfo, setDisplayUserInfo] = useState({
    username: "",
    password: "",
    name: "",
    emailAddress: ""
  });
  // TODO: add useEffect to call simple API when React DOM mounts ---(DONE)
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
  }, []);
  // TODO: play around with other custom hooks to get familiar

  const handleSubmit = (credentials: any) => {
    setDisplayUserInfo({ ...displayUserInfo, ...credentials });
  };

  const handleReduxFormSubmit = (form: any) => {
    console.log(form);
  };

  return (
    <>
      <h1>Simple Form</h1>
      <SimpleForm onSubmit={handleSubmit} />
      <p>My name: {displayUserInfo.name}</p>
      <p>My email address: {displayUserInfo.emailAddress}</p>
      <p>My username: {displayUserInfo.username}</p>
      <p>My password: {displayUserInfo.password}</p>

      <h1>Increment Counter with React-Redux</h1>
      <Counter />

      <h1>Redux Form</h1>
      <ReduxForm onSubmit={handleReduxFormSubmit} />
    </>
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
