import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import DogPen from '../components/DogPen/DogPen';
import StaffRoom from '../components/StaffRoom/StaffRoom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

firebaseConnection();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  // renderView = () => {
  //   const { authed, selectedBoardId } = this.state;
  //   if (!authed) {
  //     return (<Auth />);
  //   }
  //   if (!selectedBoardId) {
  //     return (<BoardsContainer setSingleBoard={this.setSingleBoard} />);
  //   }
  //   return (<SingleBoard selectedBoardId={selectedBoardId} setSingleBoard={this.setSingleBoard}/>);
  // }

  render() {
    const { authed } = this.state;

    return (
    <div className="App">
      <Auth />
        <DogPen /><StaffRoom />
    </div>
    );
  }
}

export default App;
