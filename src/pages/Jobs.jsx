import React from "react";
import ResumeBanner from '../resumeComponents/resumeBanner/ResumeBanner'
import HeaderResume from "../resumeComponents/headerResume/HeaderResume";
import BubblesJ from "../jobsComponents/freelanceProjects/BubblesFree";
import Footer from "../components/footer/Footer";

function Jobs () {
    return (
        <>
            <HeaderResume />
            <ResumeBanner bigTitle="FREELANCE" />
            <BubblesJ />
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

export default Jobs