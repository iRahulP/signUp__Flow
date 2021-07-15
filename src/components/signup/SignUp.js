import React, { useState } from 'react'
import './SignUp.css';
import { Button,Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordStrength from './validation/PasswordStrength';
import PasswordMatch from './validation/PasswordMatch';

function SignUp(props) {

    const [ email, setEmail ]= useState('');
    const [ passwordOne, setPasswordOne ] = useState('');
    const [ passwordTwo, setPasswordTwo ] = useState('');

    const [loading, setLoading] = useState(false);
    // const [ userInput, setUserInput ] = useState({
    //     email: '',
    //     passwordOne: '',
    //     passwordTwo: ''
    // });

    const continueToNext = (e) => {
        e.preventDefault();
        
        setLoading(true)
        setTimeout(() => {
            if (passwordTwo !== '' && passwordOne === passwordTwo ){
                props.nextStep();
            }
            else{
                setEmail('');
                setPasswordOne('');
                setPasswordTwo('');
            }
            setLoading(false)
        }, 1000)
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
                    onChange={(e) => {
                        setEmail(e.target.value)
                          // setUserInput({...userInput, email: e.target.value})
                        // setUserInput((prevState) => {
                        //  return { ...prevState, email : e.target.value }
                        // })
                    }}
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
                className={`${PasswordMatch(passwordOne,passwordTwo)}`}
            >
                {PasswordMatch(passwordOne,passwordTwo)}
            </span>

            <Button 
                variant="primary"
                className="button"
                data-testid="submit-btn"
                disabled={ !email || !passwordOne || !passwordTwo }
                type="submit"
            >
                { !loading ?  
                    "Sign Up" 
                    : 
                     <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                        >
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                } 
                </Button>
        </form>
    )
}

export default SignUp;
