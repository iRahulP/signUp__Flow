import React, { useState } from 'react'
import './Otp.css';

const Otp = (props) => {
    const [ one, setOne ]= useState('');
    const [ two, setTwo ]= useState('');
    const [ three, setThree ]= useState('');
    const [ four, setFour ]= useState('');
    const [ five, setFive ]= useState('');

    const continueToNext = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    return (
        <div  className="flow2">
            <h3>Sign Up ~ Flow</h3>
        <form 
            className="digit-group" 
            data-group-name="digits"
            id="otp"
        >
            <input 
                id="digit-1" 
                name="digit-1"
                data-testid="digit-1" 
                data-next="digit-2"
                type='text' 
                maxLength='1'
                value={one}
                onChange={e => setOne(e.target.value)}                     
            />
            <input 
                id="digit-2" 
                name="digit-2" 
                data-testid="digit-2"
                data-next="digit-3"
                data-previous="digit-1"
                type='text' 
                maxLength='1'
                value={two}
                onChange={e => setTwo(e.target.value)} 
            />
            <input 
                id="digit-3" 
                name="digit-3" 
                data-testid="digit-3"
                data-next="digit-4"
                data-previous="digit-2"
                type='text' 
                maxLength='1' 
                value={three}
                onChange={e => setThree(e.target.value)}
            />
            <input 
                id="digit-4" 
                name="digit-4" 
                data-testid="digit-4"
                data-next="digit-5"
                data-previous="digit-3"
                type='text' 
                maxLength='1' 
                value={four}
                onChange={e => setFour(e.target.value)}
            />
            <input 
                id="digit-5" 
                name="digit-5" 
                data-testid="digit-5"
                data-next="digit-6"
                data-previous="digit-4"
                type='text' 
                maxLength='1' 
                value={five}
                onChange={e => setFive(e.target.value)}
            /> 
        </form>
            <button
                disabled={!one || !two || !three || !four || !five }
                type="submit"
                data-testid="submit-btn"
                onClick={continueToNext}
            >
                Confirm OTP
            </button>

        </div>
    )
}

export default Otp;
