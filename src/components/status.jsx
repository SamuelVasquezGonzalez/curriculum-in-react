import React from "react";
import '../styles/status.css'

function StatusMsm (props) {
    return (
        <div className={props.modal}>
            <p>{props.msm}</p>
            <p>{props.status}</p>
        </div>
    )
}

export default StatusMsm;