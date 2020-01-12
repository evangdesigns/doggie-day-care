import React from 'react';
import PropTypes from 'prop-types';

import WalkCard from '../WalkCard/WalkCard';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

class WalkBoard extends React.Component {
  static propTypes = {
    walkShape: walkShape.walkShape,
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
    deleteWalk: PropTypes.func,
  }

  render() {
    const {
      walks,
      dogs,
      employees,
      deleteWalk,
    } = this.props;

    return (
      <div className="WalkBoard">
        <h1>Walks</h1>
        <div className="d-flex flex-wrap justify-content-center">
        { walks.map((walk) => (<WalkCard key={walk.id} walk={walk} dogs={dogs} employees={employees} deleteWalk={deleteWalk} />))}
        </div>
      </div>
    );
  }
}

export default WalkBoard;
