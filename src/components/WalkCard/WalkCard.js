import React from 'react';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

import './WalkCard.scss';


class WalkCard extends React.Component {
  static propTypes = {
    walkShape: walkShape.walkShape,
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
  }

  render() {
    const { walk, dog, employee } = this.props;

    return (
    <div className="WalkCard col-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{dog.name}</h5>
          <p>{employee.firstName} {employee.lastName}</p>
          <p><strong>{walk.date}</strong></p>
        </div>
      </div>
    </div>
    );
  }
}

export default WalkCard;
