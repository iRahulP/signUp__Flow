import React from 'react'
import RefCheck from '../referral/mock/ref.json';
import WithReferral from './CheckRef/WithReferral';
import WithoutReferral from './CheckRef/WithoutReferral';

const Congrats = (props) => {
    return (
        <div className="congrats">
            {
                (props.refUser === RefCheck.refBy) 
                    ? 
                <WithReferral user={props.refUser} /> 
                    : 
                <WithoutReferral />
            }
        </div>
    )
}

export default Congrats;
