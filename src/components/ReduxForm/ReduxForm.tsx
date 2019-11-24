import React, { useEffect } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { fetchUser } from "../../redux/actions";

const initialValues = {
  reduxFormName: "Tan Yi Long",
  reduxPhone: "S9422715A"
};

const mapDispatchToProps = {
  fetchUser
};

const mapStateToProps = (state: any) => {
  return { initialValues: state.reduxForm };
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
    console.log("done");
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reduxFormName">Name</label>
      <Field name="reduxFormName" component="input" type="text"></Field>
      <label htmlFor="reduxPhone">NRIC</label>
      <Field name="reduxPhone" component="input" type="text"></Field>
      <input type="submit" value="Submit" />
    </form>
  );
};

ReduxForm = reduxForm({ form: "reduxForm", enableReinitialize: true })(
  ReduxForm
);
ReduxForm = connect(mapStateToProps, mapDispatchToProps)(ReduxForm);
export default ReduxForm;
