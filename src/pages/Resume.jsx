import React from "react";
import HeaderResume from "../resumeComponents/headerResume/HeaderResume";
import MiniBanner from "../resumeComponents/resumeBanner/ResumeBanner";
import Employment from "../resumeComponents/employment/Employment";
import Experience from "../resumeComponents/experience/Experience";
import Inspirations from "../resumeComponents/inspirations/Inspirations";
import Footer from '../components/footer/Footer'

function Resume (){
    return (
        <>
            <HeaderResume />
            <MiniBanner />
            <Employment />
            <Experience />
            <Inspirations />
                <div className="img-container">
                    <img
                    className="img-footer"
                    src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/logoVector.svg"
                    alt="Samuel Gonzalez Logo"
                    />
                </div>
            <Footer />
        </>
    )
}

export default Resume;