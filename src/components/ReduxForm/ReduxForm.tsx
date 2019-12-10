import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { fetchUser } from "../../redux/actions";
import TextInput from "../TextInput";
import { CustomProps } from "../TextInput/TextInput";

const initialValues = {
  reduxName: "Tan Yi Long",
  reduxPhone: "S9422715A"
};

const mapDispatchToProps = {
  fetchUser
};

const mapStateToProps = (state: any) => {
  return { initialValues: state.tempReduxFormCache };
};

let ReduxForm: any = ({
  handleSubmit,
  fetchUser
}: {
  handleSubmit: any;
  fetchUser: any;
}) => {
  useEffect(() => {
    fetchUser(1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const reduxJokeProps: CustomProps = {
  //   uselessprop: "this is a useless prop"
  // };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reduxName">Name</label>
      <Field name="reduxName" component="input" type="text"></Field>
      <br />

      <label htmlFor="reduxPhone">NRIC</label>
      <Field name="reduxPhone" component="input" type="text"></Field>
      <br />

      <label htmlFor="reduxJoke">Tell me a joke</label>
      <Field
        name="reduxJoke"
        component={TextInput}
        // uselessprop={"this is a uselessprop"}
        onChange={(event: any, newValue) => {
          // event.preventDefault();
          console.log("custom onchange");
        }}
        onBlur={(event: any, newValue) => {
          // event.preventDefault();
          console.log("custom onblur");
        }}
      ></Field>
      <br />

      <input type="submit" value="Submit" />
    </form>
  );
};

ReduxForm = reduxForm({ form: "reduxForm", enableReinitialize: true })(
  ReduxForm
);
ReduxForm = connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
export default ReduxForm;
