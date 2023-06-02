import React from "react";
import { Link } from 'react-router-dom';
import './employment.css'

function Employment () {
    return (
        <main className="employment">
            <h2 className="sectionTitle">EMPLOYMENT</h2>
            <h3>FREELANCER</h3>
            <p className="pNormal centrado">Backend Developer | Front-end Developer</p>
            <p className="pNormal centrado">I have freelanced on several projects prior to creating WhiteForest, which I now take precedence over freelancing</p>
            <Link className="a-style" target="_blank" rel="noopener noreferrer" to="/employment/freelancer">View projects »</Link>
            <p className="pNormal centrado">2022-</p>
        </main>

        // Some day i add more jobs :)
    )
}

export default Employment;