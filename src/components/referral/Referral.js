import React, { useState } from 'react'
import './Referral.css';
import refCheck from './mock/ref.json';

const Referral = (props) => {

    const [ referral, setReferral ] = useState('');
    const [ isChecked, setIsChecked ] = useState(false);

    const handleInputChange = (e) => {
        setIsChecked(e.target.checked);
    }   

    const continueToNext = (e) => {
        e.preventDefault();
        if(referral === refCheck.ref && isChecked === false){
            props.handleFinal(refCheck.refBy);
            props.nextStep();
        }
        else if(referral !== refCheck.refBy && isChecked === false) {
            setReferral('');
            document.querySelector("span").innerText = 'Invalid referral code, Try again!';
        }
        else {
            props.nextStep();    
        }
    }

    return (
        <form
            className="signup-form"
            onSubmit={continueToNext} 
        >
            <h3>
                Enter ~ Referral Code   
            </h3>
            <input 
                id="referral" 
                data-testid="referral"
                type='text' 
                value={referral}
                onChange={e => setReferral(e.target.value)}
            />

            <span
                data-testid="ref-check" 
                id="ref-check"
            >
            </span>

            <div>
                <input 
                    name="referral-check"
                    id="referral-check"
                    type="checkbox"
                    data-testid="referral-check"
                    checked={isChecked}
                    onChange={handleInputChange}
                />
                <label 
                    htmlFor="referral-check"
                >
                    I don't have a referral code
                </label>
            </div>
            <button
                className="btn"
                id="btn"
                data-testid="btn"
                disabled={!isChecked && !referral}
            >
                Submit
            </button>
        </form>
    )
}

export default Referral
