import React, { useState } from 'react'
import './SignUp.css';

const SignUp = (props) => {

    const [ email, setEmail ]= useState('');
    const [ passwordOne, setPasswordOne ] = useState('');
    const [ passwordTwo, setPasswordTwo ] = useState('');

    const submitHandler = (e) => {

        e.preventDefault();
        console.log("CLicked Sumbit");
    }

    return (
        <form className="signup-form" onSubmit={submitHandler}>
            <h3>Sign Up ~ Flow</h3>

            <div>
                <label>Email </label>
                <input 
                    id="email"
                    name="email"
                    type="email" 
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
                    placeholder="Enter password again" 
                    value={passwordTwo}
                    onChange={e => setPasswordTwo(e.target.value)}
                    required 
                />
            </div>

            <span id="match_password"></span>

            <button 
                disabled={!email || !passwordOne || !passwordTwo}
                type="submit"
            >
                Sign Up
            </button>
        </form>
    )
}

export default SignUp;
