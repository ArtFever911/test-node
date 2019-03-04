import * as types from './action-types';
//get employees list
export function getEmployeesSuccess(employees) {
  const  {data} = employees;
  return {
    type: types.GET_EMPLOYEES_SUCCESS,
    data
  };
}
export function getEmployeesFailure(error) {
  return {
    type: types.GET_EMPLOYEES_FAILURE,
    error
  };

}

//get one employee
export function getEmployeeSuccess(employee) {
  return {
    type: types.GET_EMPLOYEE_SUCCESS,
    employee
  };
}
export function getEmployeeFailure(error) {
  return {
    type: types.GET_EMPLOYEE_FAILURE,
    error
  };

}

//create employee
export function createEmployeeSuccess(emlpoyee) {
  return {
    type: types.CREATE_EMPLOYEE_SUCCESS,
    emlpoyee
  };
}
export function createEmployeeFailure(error) {
  return {
    type: types.CREATE_EMPLOYEE_FAILURE,
    error
  };
}

//update emloyee
export function updateEmployeeSuccess(employee) {
  return {
    type: types.GET_EMPLOYEE_SUCCESS,
    employee
  };
}
export function updateEmployeeFailure(error) {
  return {
    type: types.GET_EMPLOYEE_FAILURE,
    error
  };
}

//delete employee
export function deleteEmployeeSuccess(userId) {
  return {
    type: types.DELETE_EMPLOYEE_SUCCESS,
    userId
  };
}
export function deleteEmployeeFailure(error) {
  return {
    type: types.DELETE_EMPLOYEE_FAILURE,
    error
  };
}

