import React from 'react';
import EmployeesList from './containers/employees-list-container';
const Home = React.createClass({
  render: function() {
    return (
      <div className="app">
      <header className="primary-header">
        <div className="search-box">
          <from>
            <input placeholder="Type name..." type="text" />
            <input value="Search" type="submit" />
          </from>
        </div>
        <div className="add-user">
          <form>
            <input type="submit" value="Add user" />
          </form>
        </div>
      </header>

      <main>
        <div className="users-container">
          <EmployeesList/>
          <div className="edit-form">
            <form>
              <input type="text" placeholder="Name" />
              <input type="chackbox" value="yes" />
              <select>
                <option>HR</option>
                <option>Tech</option>
                <option>Finance</option>
              </select>
              <input type="button" value="Save" />
              <input type="button" value="Cancel" />
            </form>
          </div>
        </div>
      </main>
    </div>
    );
  }
});

export default Home;
