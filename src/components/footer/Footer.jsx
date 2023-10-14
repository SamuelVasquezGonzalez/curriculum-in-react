import React  from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import GitHubButton from 'react-github-btn';


import '../../styles/footer.css'


function Footer (){
    const fechaActual = new Date();
    const añoActual = fechaActual.getFullYear();

    function scrollToTop () {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
        console.log("hola")
      };

    return (
        <footer>
            <a rel="noreferrer" className="a" href="mailto:samuelgonza2006@gmail.com" target="_blank">samuelgonza2006@gmail.com</a>

            <div className="socialmedia">
                <a rel="noreferrer" href="https://github.com/SamuelVasquezGonzalez" target="_blank" title="@SamuelVasquezGonzalez On Github"><FontAwesomeIcon icon={faGithubAlt} /></a>
                <a rel="noreferrer" href="https://www.facebook.com/profile.php?id=100055489142003" title="Samuel on Facebook" target="_blank"><FontAwesomeIcon icon={faFacebookF} /></a>
                <a rel="noreferrer" href="https://www.instagram.com/samugonza.jpg/" title="@samugonza.jpg On Instagram" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>
            <div className="github">
                <GitHubButton href="https://github.com/SamuelVasquezGonzalez" data-size="large" data-show-count="true" aria-label="Follow @SamuelVasquezGonzalez on GitHub">Follow</GitHubButton>

                <GitHubButton href="https://github.com/SamuelVasquezGonzalez/curriculum-in-react" data-size="large" data-show-count="true" aria-label="Star SamuelVasquezGonzalez/curriculum-in-react on GitHub">Star</GitHubButton>
            </div>
            <p className="copy">&#169; {añoActual} Samuel Gonzalez</p>
            <button className="up" onClick={scrollToTop}><FontAwesomeIcon icon={faArrowUp} /></button>
            <div className="background-img">
            </div>
        </footer>
    )
}

export default Footer;