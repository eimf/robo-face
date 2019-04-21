import {CHANGE_SEARCH_FIELD} from './constants';

const initialState = {
  searchField: ''
}

export const searchKittens = (state=initialState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return Object.assign({}, state, {searchField: action.payload});
    default:
      return state;
  }
}