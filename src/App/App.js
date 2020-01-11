import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/data/connection';

import Auth from '../components/Auth/Auth';
import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home';
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

  renderView = () => {
    const { authed } = this.state;
    if (!authed) {
      return (<Auth />);
    }
    if (authed) {
      return (<Home />);
    }
    return (<StaffRoom />);
  }

  render() {
    const { authed } = this.state;

    return (
    <div className="App">
      <NavBar authed={authed} />
        { this.renderView() }
    </div>
    );
  }
}

export default App;
