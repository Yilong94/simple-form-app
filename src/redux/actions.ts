import { INCREMENT, DECREMENT, FETCH_USER } from "./actionTypes";

// Action creators
export const increment = () => {
  return {type: INCREMENT}
}

export const decrement = () => ({
  type: DECREMENT
})

export const fetchUser = (id: number) => ({
  type: FETCH_USER,
  id: id
})