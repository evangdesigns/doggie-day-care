import React from 'react';
import employeeShape from '../../helpers/propz/employeeShape';
import './Employee.scss';

class Employee extends React.Component {
  static propTypes = {
    employee: employeeShape.employeeShape,
  }

  render() {
    const { employee } = this.props;

    return (
    <div className="Employee col-3">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{employee.firstName} {employee.lastName}</h3>
          <p><strong>{employee.phoneNumber}</strong></p>
        </div>
      </div>
    </div>
    );
  }
}

export default Employee;
