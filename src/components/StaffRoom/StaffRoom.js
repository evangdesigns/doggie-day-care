import React from 'react';

import Employee from '../Employee/Employee';

import employeeData from '../../helpers/data/employeeData';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  state = {
    employees: [],
  }

  componentDidMount() {
    this.printEmployees();
  }

  printEmployees = () => {
    employeeData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((errFromGettingEmployees) => console.error({ errFromGettingEmployees }));
  }

  render() {
    return (
      <div className="Staff Room">
        <h1>Staff Room</h1>
        <div className="d-flex flex-wrap justify-content-center">
        { this.state.employees.map((employee) => (<Employee key={employee.id} employee={employee} />)) }
        </div>
      </div>
    );
  }
}

export default StaffRoom;
