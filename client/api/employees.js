import axios from 'axios';
import store from '../store';
import {
  getEmployeeSuccess,
  getEmployeeFailure,
  getEmployeesSuccess,
  getEmployeesFailure,
  createEmployeeSuccess,
  createEmployeeFailure,
  updateEmployeeSuccess,
  updateEmployeeFailure,
  deleteEmployeeSuccess,
  deleteEmployeeFailure
} from '../actions/employee-actions';
const port = 3000;

/**
 * Get all Employees
 */
export function getEmployees(page) {
  page = page ? page : 1;
  return axios.get(`http://localhost:${port}/api/v1/employees/page/${page}`)
    .then(response => {
      store.dispatch(getEmployeesSuccess(response.data));
      return response;
    })
    .catch(error=>{
      store.dispatch(getEmployeesFailure(error));
      return error;
    });
}


/* export function updateEmployees(id) {
  page = page ? page : 1;
  return axios.get(`http://localhost:${port}/api/v1/employees:page`)
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
}


export function deleteEmployees(id) {
  page = page ? page : 1;
  return axios.get(`http://localhost:${port}/api/v1/employees:page`)
    .then(response => {
      store.dispatch(getUsersSuccess(response.data));
      return response;
    });
} */


