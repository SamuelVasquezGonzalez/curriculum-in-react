import React from "react";
import ResumeBanner from '../resumeComponents/resumeBanner/ResumeBanner'
import HeaderResume from "../resumeComponents/headerResume/HeaderResume";
import BubblesJ from "../jobsComponents/freelanceProjects/BubblesFree";
import Footer from "../components/footer/Footer";

import { Helmet } from "react-helmet";

const Jobs = () => {
    return (
        <>
            <Helmet>
                <title>Samuel Gonzalez | Freelance Jobs</title>
                <meta name="description" content="A lo largo de mi aprendizaje en el desarrollo, he ido desarrollando proyectos que me hacen crecer como desarollador y que quiero mostrar a las personas que me visitan" />
                <link rel="canonical" href="https://samuegonzalez.netlify.app/employment/freelancer" />
            </Helmet>
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