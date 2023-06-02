import React from "react";
import '../../styles/projects.css'

function Projects (props){
    return(
        <main className="projectsMain" id="projects">
            <h2 className="sectionTitle">PROJECTS</h2>
            <p className="pInBlue">Projects that I have developed or that I help to develop</p>
            <div className="projectsBubbles">
                {props.children}
            </div>
        </main>
    )
}

export default Projects;