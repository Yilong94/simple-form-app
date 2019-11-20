import React, { useState, ChangeEvent, ChangeEventHandler, FormEventHandler } from 'react';

const nullCredentials = {username: "", password: ""}

const SimpleForm = ({onSubmit}:{onSubmit:any}) => {
  const [credentials, setCredentials] = useState(nullCredentials);

  const handleChange: ChangeEventHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setCredentials({...credentials, [event.target.name]: event.target.value});
  }

  const handleSubmit: FormEventHandler = (event) => {
    onSubmit(credentials);
    setCredentials(nullCredentials);
    event.preventDefault();
  }

  return (
    <div>
      <form  onSubmit={handleSubmit}>
        <label htmlFor="username">Username: </label>
        <input name="username" id="username" value={credentials.username} placeholder="Input username" onChange={handleChange} />
        <br/>
        <label htmlFor="password">Password:</label>
        <input name="password" id="password" value={credentials.password} placeholder="Input password" type="password" onChange={handleChange}/>
        <br/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  );
};

export default SimpleForm;