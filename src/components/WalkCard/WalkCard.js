import React from 'react';

import PropTypes from 'prop-types';
import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

import './WalkCard.scss';


class WalkCard extends React.Component {
  static propTypes = {
    walkShape: walkShape.walkShape,
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
    deleteWalk: PropTypes.func,
  }

  deleteWalkEvent = (e) => {
    e.preventDefault();
    const { deleteWalk, walk } = this.props;
    deleteWalk(walk.id);
  }

  render() {
    const { walk, dogs, employees } = this.props;
    const foundDog = dogs.find((dog) => dog.id === walk.dogId);
    const foundSlave = employees.find((employee) => employee.id === walk.employeeId);

    return (
    <div className="WalkCard col-3">
      <div className="card">
        <button className="btn btn-danger float-right" onClick={this.deleteWalkEvent}>X</button>
        <div className="card-body">
          <h5 className="card-title">{foundDog.name}</h5>
          <p>{foundSlave.firstName} {foundSlave.lastName}</p>
          <p><strong>{walk.date}</strong></p>
        </div>
      </div>
    </div>
    );
  }
}

export default WalkCard;
