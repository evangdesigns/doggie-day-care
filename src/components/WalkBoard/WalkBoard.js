import React from 'react';
import PropTypes from 'prop-types';

import WalkCard from '../WalkCard/WalkCard';
import WalkForm from '../WalkForm/WalkForm';

import walkShape from '../../helpers/propz/walkShape';
import employeeShape from '../../helpers/propz/employeeShape';
import dogShape from '../../helpers/propz/dogShape';

class WalkBoard extends React.Component {
  static propTypes = {
    walkShape: walkShape.walkShape,
    dog: dogShape.dogShape,
    employee: employeeShape.employeeShape,
    deleteWalk: PropTypes.func,
    addWalk: PropTypes.func,
    showWalkForm: PropTypes.func,
  }

  state = {
    showWalkForm: false,
  }

  setShowWalkForm = (e) => {
    this.setState({ showWalkForm: true });
  }

  render() {
    const {
      walks,
      dogs,
      employees,
      deleteWalk,
      addWalk,
    } = this.props;

    return (
      <div className="WalkBoard">
        <h1>Walks</h1>
        <button className="btn btn-primary" onClick={this.setShowWalkForm}>ADD WALK</button>
      { this.state.showWalkForm && <WalkForm dogs={dogs} employees={employees} addWalk={addWalk}/> }
        <div className="d-flex flex-wrap justify-content-center">
        { walks.map((walk) => (<WalkCard key={walk.id} walk={walk} dogs={dogs} employees={employees} deleteWalk={deleteWalk} />))}
        </div>
      </div>
    );
  }
}

export default WalkBoard;
