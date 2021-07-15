import React, { useState } from 'react'
import './Referral.css';
import refCheck from './mock/ref.json';
import { Button,Spinner } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Referral = (props) => {

    const [ referral, setReferral ] = useState('');
    const [ isChecked, setIsChecked ] = useState(false);
    const [ loading, setLoading ] = useState(false);

    const handleInputChange = (e) => {
        console.log(isChecked);
        setIsChecked(e.target.checked);
    }   

    const continueToNext = (e) => {
        e.preventDefault();
        setLoading(true)
        setTimeout(() => {
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
            setLoading(false)
        }, 1000)
        
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

            <div className="check-box">
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
                    style={{marginLeft: '5px'}}
                >
                    I don't have a referral code
                </label>
            </div>
            
            <Button
                variant="primary"
                className="btn"
                id="btn"
                data-testid="btn"
                disabled={!isChecked && !referral}
                type="submit"
            >
                { !loading ?  
                    "Confirm Code" 
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

export default Referral
