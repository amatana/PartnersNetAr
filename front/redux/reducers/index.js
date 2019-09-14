import { ADD_PROJECT, ADD_USER, SET_USER, SET_USERS } from "../actions/actionTypes";

const initialState = {
  user: {},
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PROJECT:
      break;

    case ADD_USER:
      break;

    case SET_USER:
      return Object.assign({}, state, { user: action.user });

    case SET_USERS:
      return Object.assign({}, state, {users : action.users})
    default:
      return state;
  }
}

