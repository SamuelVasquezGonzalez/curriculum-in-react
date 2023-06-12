import React from "react";
import HeaderResume from "../resumeComponents/headerResume/HeaderResume";
import MiniBanner from "../resumeComponents/resumeBanner/ResumeBanner";
import Employment from "../resumeComponents/employment/Employment";
import Experience from "../resumeComponents/experience/Experience";
import Inspirations from "../resumeComponents/inspirations/Inspirations";
import Footer from '../components/footer/Footer'
import { Helmet } from "react-helmet";

const Resume = () =>{
    return (
        <>
            <Helmet>
                <title>Samuel Gonzalez | Resume</title>
                <meta name="description" content="Esta es la misma informacion pero un poco mas resumida, incluso esta la historia de como comenzo todo este amor por el desarollo de soluciones y aplicaciones web, tambien las personas que me apoyaron y me inspiraron a seguir adelante" />
                <link rel="canonical" href="https://samuelgonzalez.onrender.com/resume" />
            </Helmet>
            <HeaderResume />
            <MiniBanner bigTitle="RESUME"/>
            <Employment />
            <Experience />
            <Inspirations />
                <div className="img-container">
                    <img
                    className="img-footer"
                    src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/logoVector.svg"
                    alt="Samuel Gonzalez Logo" title="Samuel Gonzalez Logo"
                    />
                </div>
            <Footer />
        </>
    )
}

export default Resume;