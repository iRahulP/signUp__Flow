import { useState } from 'react';
import './App.css';
import SignUp from './components/signup/SignUp';
import Otp from './components/otp/Otp';
import Referral from './components/referral/Referral';
import Congrats from './components/congrats/Congrats';

function App() {  

  const [ step, setStep ] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  }

  const handleChange = (input) => (e) => {
    setStep(e.target.value);
  }

  switch(step) {
    case 1:
      return (
        <SignUp 
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 2:
      return (
        <Otp 
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    case 3:
      return (
        <Referral
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );
    default:
      return (
        <Congrats 
          nextStep={nextStep}
          handleChange={handleChange}
        />
      );  
  }
  
}

export default App;