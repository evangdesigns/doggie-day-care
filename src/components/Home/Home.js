import React from 'react';
import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';

class Home extends React.Component {
  state ={

  }

  render() {
    return (
      <div>
        <DogPen />
        <StaffRoom />
      </div>);
  }
}

export default Home;
