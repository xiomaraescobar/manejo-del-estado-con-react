import React from 'react';
import {UseState} from './UseState'
import {ClassState} from './ClassState'
import {UseReducer} from './UseReducer'
import './App.css';


function App() {
  return (
    <div className="App">
      <UseState />
      <UseReducer />
      <ClassState name='Class State'/>
    </div>
  );
}

export default App;
