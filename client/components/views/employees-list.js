import React from 'react';
import { Link } from 'react-router';



export default function ({ employees }) {
  return (
    <div className="employees-table">
      <table>
        <thead>
          <td></td>
          <td></td>
          <td>ID</td>
          <td>Name</td>
          <td>Active</td>
          <td>Department</td>
          <td></td>
        </thead>
        <tbody>
          {employees.listing && employees.listing.map(employee => {
            return (
              <tr key={employee.empID} className="data-employee-item">
                <td className="view-employee">
                  <Link to={'/employee/' + employee.empID}>View</Link>
                </td>
                <td className="update-employee">
                  <Link to={'/employee/update/' + employee.empID}>Update</Link>
                </td>
                <td className="employee-id">
                  {employee.empID}
                </td>
                <td className="employee-name">
                  {employee.empName}
                </td>
                <td className="employee-active">
                  {employee.empActive}
                </td>
                <td className="employee-department">
                  {employee.departmentName}
                </td>
                <td className="delete-employee">
                  <Link to={'/employee/delete/' + employee.empID}>Remove</Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
