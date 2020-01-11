import React from 'react';

import WalkCard from '../WalkCard/WalkCard';


class WalkBoard extends React.Component {
  render() {
    const { walks, dogs, employees } = this.props;
    return (
      <div className="WalkBoard">
        <h1>Walks</h1>
        <div className="d-flex flex-wrap justify-content-center">
        { walks.map((walk) => (<WalkCard key={walk.id} walk={walk} dog={dogs.find((dog) => dog.id === walk.dogId)} employee={employees.find((employee) => employee.id === walk.employeeId)}/>)) }
        </div>
      </div>
    );
  }
}

export default WalkBoard;
