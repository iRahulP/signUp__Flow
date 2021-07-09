import React from 'react'
import './SignUp.css';

const SignUp = () => {
    return (
        <form className="signup-form">
            <h3>Sign Up</h3>

            <div>
                <label>Email  </label>
                <input type="email" placeholder="Enter email" required />
            </div>

            <div>
                <label>Password </label>
                <input type="password" placeholder="Enter password" required />
            </div>

            <div>
                {/* Check Password */}
            </div>

            <div>
                <label>Password </label>
                <input type="password" placeholder="Enter password again" required />
            </div>

            <div>
                {/* Check Password Match */}
            </div>

            <button type="submit" name="submit">Sign Up</button>
        </form>
    )
}

export default SignUp;
