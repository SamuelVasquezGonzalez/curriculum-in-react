import React from "react";
import '../styles/projects.css'

function Bubbles (props){
    return (
        <a href={props.url} target="_blank" className="bubble">
            <img src={props.src} alt="Project" />
            <div className="bubbleInfo">
                <p>{props.info}</p>
            </div>
        </a>
    )
}

export default Bubbles;