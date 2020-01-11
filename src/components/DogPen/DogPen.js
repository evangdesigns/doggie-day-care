import React from 'react';

import Dog from '../Dog/Dog';

import './DogPen.scss';

class DogPen extends React.Component {
  render() {
    const { dogs } = this.props;
    return (
      <div className="DogPen">
        <h1>Dog Pen</h1>
        <div className="d-flex flex-wrap justify-content-center">
        { dogs.map((dog) => (<Dog key={dog.id} dog={dog} />)) }
        </div>
      </div>
    );
  }
}

export default DogPen;
