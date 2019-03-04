import React from 'react';
import { connect } from 'react-redux';
import EmployeesList from '../views/employees-list';
import PageNav from '../views/page-nav';
import * as employeeApi from '../../api/employees';
import store from '../../store';

const EmployeesListContainer = React.createClass({

  componentDidMount: function () {
    employeeApi.getEmployees();
  },

  render: function () {
    return (
      <div>
        <PageNav
          employees={this.props.employees}
        ></PageNav>,
        <EmployeesList
          employees={this.props.employees}
          updateEmployee={employeeApi.updateEmployee}
          deleteEmployee={employeeApi.deleteEmployee}
        ></EmployeesList>,
        <PageNav
          employees={this.props.employees}
        ></PageNav>
      </div>
    )
  }

});

const mapStateToProps = function (store) {
  return {
    employees: store.employeesListState.employees
  };
};

export default connect(mapStateToProps)(EmployeesListContainer);
