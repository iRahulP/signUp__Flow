import React, { useState } from 'react'
import './Otp.css';
import mockOtp from './mock/otp.json';
import { Button,Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Otp = (props) => {
    const [ one, setOne ]= useState('');
    const [ two, setTwo ]= useState('');
    const [ three, setThree ]= useState('');
    const [ four, setFour ]= useState('');
    const [ five, setFive ]= useState('');
    const [ loading, setLoading ] = useState(false);
    const [ otpValid, setOtpValid ] = useState(true);

    const continueToNext = (e) => {
        e.preventDefault();
        
        setLoading(true)
        setTimeout(() => {
            if(one.concat(two,three,four,five) === mockOtp.otp){
                props.nextStep();   
            }
            else{
                setOtpValid(false);
                setOne('');
                setTwo('');
                setThree('');
                setFour('');
                setFive('');
                document.querySelector("span").innerText = 'Invalid OTP';
            }
            setLoading(false)
        }, 1000)
    }

    return (
        <div  className="flow2">
            <h3>Enter ~ OTP</h3>
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
                inputMode="numeric"
                autoComplete="one-time-code" 
                maxLength='1'
                value={one}
                onChange={e => {
                    if(e.target.value.trim().length > 0 ){
                        setOtpValid(true);
                    }
                    setOne(e.target.value)
                }}
                style={{ borderColor: !otpValid ? 'red' : '#ccc' }}
                required                     
            />
            <input 
                id="digit-2" 
                name="digit-2" 
                data-testid="digit-2"
                data-next="digit-3"
                data-previous="digit-1"
                type='text' 
                inputMode="numeric"
                autoComplete="one-time-code" 
                maxLength='1'
                value={two}
                onChange={e => {
                    if(e.target.value.trim().length > 0 ){
                        setOtpValid(true);
                    }
                    setTwo(e.target.value)
                }} 
                style={{ borderColor: !otpValid ? 'red' : '#ccc' }}
                required
            />
            <input 
                id="digit-3" 
                name="digit-3" 
                data-testid="digit-3"
                data-next="digit-4"
                data-previous="digit-2"
                type='text' 
                inputMode="numeric"
                autoComplete="one-time-code" 
                maxLength='1' 
                value={three}
                onChange={e => {
                    if(e.target.value.trim().length > 0 ){
                        setOtpValid(true);
                    }
                    setThree(e.target.value)
                }}
                style={{ borderColor: !otpValid ? 'red' : '#ccc' }}
                required
            />
            <input 
                id="digit-4" 
                name="digit-4" 
                data-testid="digit-4"
                data-next="digit-5"
                data-previous="digit-3"
                type='text' 
                inputMode="numeric"
                autoComplete="one-time-code" 
                maxLength='1' 
                value={four}
                onChange={e => {
                    if(e.target.value.trim().length > 0 ){
                        setOtpValid(true);
                    }
                    setFour(e.target.value)
                }}
                style={{ borderColor: !otpValid ? 'red' : '#ccc' }}
                required
            />
            <input 
                id="digit-5" 
                name="digit-5" 
                data-testid="digit-5"
                data-next="digit-6"
                data-previous="digit-4"
                type='text' 
                inputMode="numeric"
                autoComplete="one-time-code" 
                maxLength='1' 
                value={five}
                onChange={e => {
                    if(e.target.value.trim().length > 0 ){
                        setOtpValid(true);
                    }
                    setFive(e.target.value)
                }}
                style={{ borderColor: !otpValid ? 'red' : '#ccc' }}
                required
            /> 
        </form>

            <span
                data-testid="otp-check" 
                id="otp-check"
            >
            </span>

            <Button
                variant="primary"
                disabled={!one || !two || !three || !four || !five }
                type="submit"
                data-testid="submit-btn"
                onClick={continueToNext}
                className="btn"
            >
                { !loading ?  
                    "Confirm OTP" 
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

        </div>
    )
}

export default Otp;
