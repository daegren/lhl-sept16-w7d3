import React from 'react';
import './App.css';
import Form from './components/Form';
import MouseTracker from './components/MouseTracker';
import Socket from './components/Socket';

function App() {
  return (
    <div className="App">
      <Form />
      <MouseTracker />
      <Socket />
    </div>
  );
}

export default App;
