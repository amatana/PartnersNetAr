import { ADD_USER, ADD_PROJECT, SET_USER, SET_USERS } from "./actionTypes";
import axios from 'axios';

/**
 * ACTION CREATORS
 * 
 */


/**
 * TODO: Definir el shape del objeto
 * @param {Object} user
 */
function createUser(user) {
  return {
    type: ADD_USER,
    user
  };
}

const setUser = (user) => ({
  type: SET_USER,
  user
});

const setUsers = (users) => ({
  type: SET_USERS,
  users
});


function createProject(project) {
  return {
    type: ADD_PROJECT,
    project
  };
}

/**
 *
 * @param {*} id
 */
export const  fetchProject = (id = "") => {
  return [
    {
      "project-id": ""
    }
  ];
}
export const fetchUser = () => dispatch =>
axios.get('/api/users/user')
  .then(res =>  res.data)
  .then(user => dispatch(setUser(user)));

  export const getAllUsers = () => dispatch =>
  axios.get('/api/users')
    .then(res => res.data)
    .then(users => dispatch(setUsers(users)));

  
