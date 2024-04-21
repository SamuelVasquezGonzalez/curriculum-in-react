import React from "react";
import { NavLink } from 'react-router-dom';
import './employment.css'

function Employment() {
    return (
        <main className="employment">
            <h2 className="sectionTitle">EMPLOYMENT</h2>
            <div className="job">
                <h3>FREELANCER</h3>
                <p className="pNormal centrado">Full-Stack web Developer</p>
                <p className="pNormal centrado">I have freelanced on several projects prior to creating WhiteForest, which I now take precedence over freelancing</p>
                <NavLink className="a-style" to="/employment/freelancer">View projects »</NavLink>
                <p className="pNormal centrado">2022-</p>
            </div>
            <div className="job">
                <h3>ENIGLOGIC (personal project)</h3>
                <p className="pNormal centrado">Full-Stack web Developer</p>
                <p className="pNormal centrado">From creating the database with MySql, going through the endpoints with Node, and making components and validating tokens with React.js</p>
                <p className="pNormal centrado">2023-</p>
            </div>
            <div className="job">
                <h3>TECNOTICS</h3>
                <p className="pNormal centrado">Full-Stack web Developer</p>
                <p className="pNormal centrado">I work as a full-stack, from the backend with Node/Express/MongoDb and on the frontend with ReactJs+vite/redux.</p>
                <p className="pNormal centrado">Of these two areas, I use any subrole, whether for maintenance, bug fixes or implementation of new features.</p>
                <p className="pNormal centrado">2023-</p>
            </div>
        </main>

        // Some day i add more jobs :)
    )
}

export default Employment;