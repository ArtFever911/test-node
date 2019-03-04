import * as types from '../actions/action-types';

const initialState = {
  employees: [],
  error: null,
};

const employeesListReducer = function (state = initialState, action) {

  switch (action.type) {
    
    case types.GET_EMPLOYEES_SUCCESS:
      return Object.assign({}, state, { employees: action.data, error: null });

    case types.GET_EMPLOYEES_FAILURE:

      return Object.assign({}, state, { employees: [], error: action.error });

  }

  return state;

}

export default employeesListReducer;
