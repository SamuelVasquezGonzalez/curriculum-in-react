import React from "react";
import './resumeBanner.css'

function MiniBanner (props) {
    return (
        <main className="miniBanner">
            <h1 className="site-title">
                <a href="/">SAMUEL GONZALEZ</a>
            </h1>
            <p className="pmidbig">THE ODYSSEY OF A FRONT/BACK WEB DEVELOPER</p>

            <h4 className="h1big">{props.bigTitle}</h4>
        </main>
    )
}

export default MiniBanner;
