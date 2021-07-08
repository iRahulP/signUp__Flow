import React from 'react'

const SignUp = () => {
    return (
        <form>
        <h3>Sign Up</h3>

        <div>
            <label>Email  </label>
            <input type="email" placeholder="Enter email" />
        </div>

        <div>
            <label>Password </label>
            <input type="password" placeholder="Enter password" />
        </div>

        <div>
            {/* Check Password */}
        </div>

        <div>
            <label>Password </label>
            <input type="password" placeholder="Enter password again" />
        </div>

        <div>
            {/* Check Password Match */}
        </div>

        <button type="submit">Sign Up</button>
    </form>
    )
}

export default SignUp;
