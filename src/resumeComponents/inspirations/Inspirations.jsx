import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitch, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './inspirations.css'

function Inspirations (){
    return (
        <main className="inspirationsMain" id="inspirations">
            <h2 className="sectionTitle">INSPIRATIONS</h2>
            <p className="pInBlue">People to whom I am grateful for all the support, motivation and help they have given me</p>
            <div className="liContainer">
                <ul>
                    <li><a href="https://www.twitch.tv/Michamoro" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faTwitch} /> Michamoro</a></li>
                    <li><a href="https://www.instagram.com/dvid_v/" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faInstagram} /> David</a></li>
                    <li><a href="https://www.youtube.com/@soydalto" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faYoutube} /> SoyDalto</a></li>
                    <li><a href="https://www.youtube.com/@HolaMundoDev" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faYoutube} /> HolaMundo</a></li>
                </ul>
                <ul>
                    <li><a href="https://www.youtube.com/@FaztTech" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faYoutube} /> Fazt</a></li>
                    <li><a href="https://www.youtube.com/@nodician" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faYoutube} /> Nodician</a></li>
                    <li><a href="https://www.youtube.com/@atl.academy" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faYoutube} /> LucasMoy</a></li>
                    <li><a href="https://www.youtube.com/@Jygproyectosweb" target="_blank" rel="noreferrer"><FontAwesomeIcon className="iconF" icon={faYoutube} /> J&G Proyectos Web</a></li>
                </ul>
            </div>
        </main>
    )
}

export default Inspirations;