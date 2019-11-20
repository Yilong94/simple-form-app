import { INCREMENT, DECREMENT, FETCH_USER, RECEIVE_USER } from "./actionTypes";

// Action creators
export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => ({
  type: DECREMENT
});

export const receiveUser = (json: any) => {
  return {
    type: RECEIVE_USER,
    json
  };
};

export const fetchUser = (id: number) => {
  return (dispatch: any) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(
        res => res.json(),
        err => console.log(err)
      )
      .then(json => dispatch(receiveUser(json)));
  };
};
