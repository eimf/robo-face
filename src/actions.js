import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTENS_PENDING,
    REQUEST_KITTENS_SUCCESS,
    REQUEST_KITTENS_FAIL
        } from './constants';

export const setSearchField = (text) => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestKittens = () => (dispatch) => {
    dispatch({type: REQUEST_KITTENS_PENDING})
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(data => dispatch({type: REQUEST_KITTENS_SUCCESS, payload: data}))
        .catch(error => dispatch({type: REQUEST_KITTENS_FAIL, payload: error}))
}