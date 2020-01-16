import React from 'react';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkBoard from '../WalkBoard/WalkBoard';

import dogData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeeData';
import walkData from '../../helpers/data/walkData';

class Home extends React.Component {
  componentDidMount() {
    this.printDogs()
      .then(() => {
        this.printEmployees()
          .then(() => {
            this.printWalks();
          });
      });
  }

  state = {
    dogs: [],
    employees: [],
    walks: [],
    showWalkForm: false,
  }

  printDogs = () => dogData.getAllDogs()
    .then((dogs) => {
      this.setState({ dogs });
    })
    .catch((errFromGettingDogs) => console.error({ errFromGettingDogs }));

  printEmployees = () => employeeData.getAllEmployees()
    .then((employees) => {
      this.setState({ employees });
    })
    .catch((errFromGettingEmployees) => console.error({ errFromGettingEmployees }));

  printWalks = () => walkData.getAllWalks()
    .then((walks) => {
      this.setState({ walks });
    })
    .catch((errFromGettingWalks) => console.error({ errFromGettingWalks }));

  deleteWalk = (walkId) => {
    walkData.deleteWalk(walkId)
      .then(() => {
        this.printWalks();
      })
      .catch((errorFromDeleteWalks) => console.error({ errorFromDeleteWalks }));
  }

  addWalk = (newWalk) => {
    walkData.addWalk(newWalk)
      .then(() => {
        this.printWalks();
      })
      .catch((errorFromAddWalks) => console.error({ errorFromAddWalks }));
  }

  updateWalkInfo = (walkId, updatedWalk) => {
    walkData.updateWalk(walkId, updatedWalk)
      .then(() => {
        this.printWalks();
      })
      .catch((errorFromUpdateWalk) => console.error({ errorFromUpdateWalk }));
  }

  render() {
    const { walks, dogs, employees } = this.state;

    return (
      <div>
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
        <WalkBoard dogs={dogs} employees={employees} walks={walks} deleteWalk={this.deleteWalk} addWalk={this.addWalk} updateWalkInfo={this.updateWalkInfo}/>
      </div>);
  }
}

export default Home;
