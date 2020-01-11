import React from 'react';

import Employee from '../Employee/Employee';

import './StaffRoom.scss';

class StaffRoom extends React.Component {
  render() {
    const { employees } = this.props;
    return (
      <div className="Staff Room">
        <h1>Staff Room</h1>
        <div className="d-flex flex-wrap justify-content-center">
        { employees.map((employee) => (<Employee key={employee.id} employee={employee} />)) }
        </div>
      </div>
    );
  }
}

export default StaffRoom;
