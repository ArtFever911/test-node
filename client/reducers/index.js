import { combineReducers } from 'redux';

// Reducers
import employeesListReducer from './employees-list-reducer';

// Combine Reducers
var reducers = combineReducers({
    employeesListState: employeesListReducer
});

export default reducers;
