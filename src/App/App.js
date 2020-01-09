import React from 'react';
import './App.scss';

import DogPen from '../components/DogPen/DogPen';
import StaffRoom from '../components/StaffRoom/StaffRoom';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <DogPen /><StaffRoom />
    </div>
  );
}

export default App;
