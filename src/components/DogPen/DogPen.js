import React from 'react';

import Dog from '../Dog/Dog';
import dogData from '../../helpers/data/dogsData';

import './DogPen.scss';

class DogPen extends React.Component {
  state = {
    dogs: [],
  }

  componentDidMount() {
    this.printDogs();
  }

  printDogs = () => {
    dogData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errFromGettingDogs) => console.error({ errFromGettingDogs }));
  }

  render() {
    return (
      <div className="DogPen">
        <h1>Dog Pen</h1>
        <div className="d-flex flex-wrap justify-content-center">
        { this.state.dogs.map((dog) => (<Dog key={dog.id} dog={dog} />)) }
        </div>
      </div>
    );
  }
}

export default DogPen;
