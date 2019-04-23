import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTENS_PENDING,
    REQUEST_KITTENS_SUCCESS,
    REQUEST_KITTENS_FAIL
        } from './constants';

const initialStateSearch = {
  searchField: ''
}

export const searchKittens = (state=initialStateSearch, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}

const initialStateRequest = {
    isPending: false,
    kittens: [],
    error: ''
}

export const requestKittens = (state=initialStateRequest, action={}) => {
    switch(action.type) {
        case REQUEST_KITTENS_PENDING:
            return Object.assign({}, state, {isPending: true})
        case REQUEST_KITTENS_SUCCESS:
            return Object.assign({}, state, {kittens: action.payload, isPending: false})
        case REQUEST_KITTENS_FAIL:
            return Object.assign({}, state, {kittens: action.payload, isPending: false})
        default:
            return state
    }
}