import React, { useState, useEffect } from 'react'
import './SignUp.css';

const SignUp = (props) => {

    const [ email, setEmail ]= useState('');
    const [ passwordOne, setPasswordOne ] = useState('');
    const [ passwordTwo, setPasswordTwo ] = useState('');

    const matchPass = (pass1, pass2) => {
            return (pass1 === pass2);
        }

    useEffect(() => {
        //change css if email invalid
    }, [email])

    const continueToNext = (e) => {
        e.preventDefault();
        props.nextStep();
    }

    return (
        <React.Fragment>
        <form className="signup-form" onSubmit={continueToNext}>
            <h3>Sign Up ~ Flow</h3>

            <div>
                <label>Email </label>
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
                <label>Password </label>
                <input 
                    id="pass1" 
                    type="password" 
                    data-testid='password1'
                    placeholder="Enter password" 
                    value={passwordOne}
                    onChange={e => setPasswordOne(e.target.value)}
                    required 
                />
            </div>

            <span id="password_strength"></span>

            <div>
                <label>Password </label>
                <input 
                    id="pass2" 
                    type="password" 
                    data-testid="password2"
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
                {matchPass(passwordOne,passwordTwo) ? `Passwords Match!` : `Passwords don't Match` }
            </span>

            <button 
                data-testid="submit-btn"
                disabled={!email || !passwordOne || !passwordTwo}
                type="submit"
            >
                Sign Up
            </button>
        </form>
        </React.Fragment>
    )
}

export default SignUp;
