import React, { useState } from 'react'
import './Referral.css';

const Referral = () => {

    const [ referral, setReferral ] = useState('');
    const [ isChecked, setIsChecked ] = useState(false);

    const handleInputChange = (e) => {
        setIsChecked(e.target.checked);
    }

    return (
        <form
            className="signup-form" 
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
