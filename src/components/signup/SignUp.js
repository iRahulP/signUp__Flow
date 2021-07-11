import React, { useState, useEffect } from 'react'
import './SignUp.css';
import PasswordStrength from './validation/PasswordStrength';
import PasswordMatch from './validation/PasswordMatch';

function SignUp(props) {

    const [ email, setEmail ]= useState('');
    const [ passwordOne, setPasswordOne ] = useState('');
    const [ passwordTwo, setPasswordTwo ] = useState('');

    const continueToNext = (e) => {
        e.preventDefault();
        props.nextStep();
    }
    
    return (
        <form className="signup-form" onSubmit={continueToNext}>
            <h3>Sign Up ~ Flow</h3>

            <div>
                <label htmlFor="email">Email</label>
                <input 
                    id="email"
                    type="email"
                    data-testid="email"
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required 
                />
            </div>

            <div>
                <label htmlFor="password">Password </label>
                <input 
                    id="pass1" 
                    type="password" 
                    data-testid='pass1'
                    placeholder="Enter password" 
                    value={passwordOne}
                    onChange={e => setPasswordOne(e.target.value)}
                    required 
                />
            </div>

            <span
                data-testid="password-strength" 
                id="password_strength"
                className={`${PasswordStrength(passwordOne)}`}
            >
                {PasswordStrength(passwordOne)}
            </span>

            <div>
                <label htmlFor="password">Password </label>
                <input 
                    id="pass2" 
                    type="password" 
                    data-testid="pass2"
                    placeholder="Enter password again" 
                    value={passwordTwo}
                    onChange={e => setPasswordTwo(e.target.value)}
                    required 
                />
            </div>
            
            <span
                data-testid="match-password"
                id="match_password"
            >
                {PasswordMatch(passwordOne,passwordTwo)}
            </span>

            <button 
                data-testid="submit-btn"
                disabled={!email || !passwordOne || !passwordTwo}
                type="submit"
            >
                Sign Up
            </button>
        </form>
    )
}

export default SignUp;
