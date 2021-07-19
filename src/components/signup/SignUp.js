import React, { useState } from 'react'
import './SignUp.css';
import { Button,Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import PasswordStrength from './validation/PasswordStrength';
import PasswordMatch from './validation/PasswordMatch';
import EmailValidation from './validation/EmailValidation';

function SignUp(props) {

    const [ email, setEmail ]= useState('');
    const [ passwordOne, setPasswordOne ] = useState('');
    const [ passwordTwo, setPasswordTwo ] = useState('');
    const [ emailValid, setEmailValid ] = useState(true);
    const [loading, setLoading] = useState(false);
    const [passwordsValid, setPasswordsValid ] = useState(true);

    // const [ userInput, setUserInput ] = useState({
    //     email: '',
    //     passwordOne: '',
    //     passwordTwo: ''
    // });

    const continueToNext = (e) => {
        e.preventDefault();
        
        setLoading(true)
        setTimeout(() => { 
            const checkBlanks = email.trim().length !== 0 && passwordOne.trim().length !== 0 && passwordTwo.trim().length !== 0; 
            console.log(checkBlanks);
            console.log(email);
            const check = EmailValidation(email) && checkBlanks && passwordTwo !== '' && PasswordMatch(passwordOne,passwordTwo);
            console.log(check);
            if (check){
                props.nextStep();
            }
            else{
                setEmailValid(false);
                setPasswordsValid(false);
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
                    type="text"
                    data-testid="email"
                    placeholder="Enter email" 
                    value={email}
                    onChange={(e) => {
                        if(e.target.value.trim().length > 0 ){
                            setEmailValid(true);
                        }
                        setEmail(e.target.value)
                        // setUserInput({...userInput, email: e.target.value})
                        // setUserInput((prevState) => {
                        //  return { ...prevState, email : e.target.value }
                        // })
                    }}
                    style={{ borderColor: !emailValid ? 'red' : '#ccc' }}
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
                    onChange={e => {
                        if(e.target.value.trim().length > 0 ){
                            setPasswordsValid(true);
                        }
                        setPasswordOne(e.target.value)
                    }}
                    style={{ borderColor: !passwordsValid ? 'red' : '#ccc' }}
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
                    onChange={e => {
                        if(e.target.value.trim().length > 0 ){
                            setPasswordsValid(true);
                        }
                        setPasswordTwo(e.target.value)
                    }}
                    style={{ borderColor: !passwordsValid ? 'red' : '#ccc' }}
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
