import React from 'react';

import DogPen from '../DogPen/DogPen';
import StaffRoom from '../StaffRoom/StaffRoom';
import WalkBoard from '../WalkBoard/WalkBoard';

import dogData from '../../helpers/data/dogsData';
import employeeData from '../../helpers/data/employeeData';
import walkData from '../../helpers/data/walkData';

class Home extends React.Component {
  componentDidMount() {
    this.printDogs();
    this.printEmployees();
    this.printWalks();
  }

  state = {
    dogs: [],
    employees: [],
    walks: [],
  }

  printDogs = () => {
    dogData.getAllDogs()
      .then((dogs) => {
        this.setState({ dogs });
      })
      .catch((errFromGettingDogs) => console.error({ errFromGettingDogs }));
  }

  printEmployees = () => {
    employeeData.getAllEmployees()
      .then((employees) => {
        this.setState({ employees });
      })
      .catch((errFromGettingEmployees) => console.error({ errFromGettingEmployees }));
  }

  printWalks = () => {
    walkData.getAllWalks()
      .then((walks) => {
        this.setState({ walks });
      })
      .catch((errFromGettingWalks) => console.error({ errFromGettingWalks }));
  }

  render() {
    const { dogs, employees, walks } = this.state;
    return (
      <div>
        <DogPen dogs={dogs} />
        <StaffRoom employees={employees} />
        <WalkBoard walks={walks} dogs={dogs} employees={employees} />
      </div>);
  }
}

export default Home;
