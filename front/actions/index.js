import { ADD_USER, ADD_PROJECT } from "./actionTypes";

/**
 * ACTION CREATORS
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
function fetchProject(id = "") {
  return [
    {
      "project-id": ""
    }
  ];
}
export { createUser, createProject };
