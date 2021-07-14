import React from 'react'
import '../Congrats.css'

const WithReferral = (props) => {
    return (
        <div className="congrats">
            <p>Congrats! You were referred by {props.user}.</p>
        </div>
    )
}

export default WithReferral
