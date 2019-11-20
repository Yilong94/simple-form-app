import React, { useEffect } from "react";
import { reduxForm, Field } from "redux-form";

const initialValues = {
  'reduxFormName': 'Tan Yi Long',
  'reduxPhone': 'S9422715A'
}

const url = "https://jsonplaceholder.typicode.com/users/1";
const getUser = async () => {
  try {
    const res = await fetch(url)
    const json = await res.json();
    return json;
  }
  catch(err){
    throw err;
  }
}


const ReduxForm = ({ handleSubmit }: {handleSubmit: any}) => {
  useEffect(() => {
    // Dispatch action here
  })

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="reduxFormNamee">Name</label>
      <Field name="reduxFormNam" component="input" type="text"></Field>
      <label htmlFor="reduxPhone">NRIC</label>
      <Field name="reduxPhone" component="input" type="text"></Field>
      <input type="submit" value="Submit"/>
    </form>
  )
}

export default reduxForm({form: 'reduxForm', initialValues})(ReduxForm)