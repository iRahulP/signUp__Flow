import React from 'react'
import QueueCheck from './Validation/QueueCheck'
import '../Congrats.css';

const WithoutReferral = () => {
    const Q = QueueCheck();
    return (
        <div className="congrats">
            <p>You are #{Q} in the queue!</p>
        </div>
    )
}

export default WithoutReferral
