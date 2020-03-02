import React from 'react';
import Otp from './components/Otp'
import './App.css';

function App() {
  return (
    <div className="App">
        <Otp numberOfOtpDigits={5}/>
    </div>
  );
}

export default App;
