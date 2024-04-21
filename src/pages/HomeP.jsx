// Home.jsx
import React, { useEffect, useState } from "react";

import Projects from "../components/projectsComponent/ProjectsH";
import Banner from "../components/bannerH/BannerH";
import Footer from "../components/footer/Footer";
import Header from "../components/headerH/HeaderH";
import AboutMe from "../components/meH/MeH";
import Particle from "../components/particleH/ParticleH";
import Skill from "../components/skillsH/SkillsH";
import Bubbles from "../components/bubblesH/BubblesH";
import { Helmet } from "react-helmet";

const Home = () => {
    const [activeBtn, setActiveBtn] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute("id");

                    switch (id) {
                        case "banner":
                            setActiveBtn(0);
                            break;
                        case "projects":
                            setActiveBtn(1);
                            break;
                        case "skill":
                            setActiveBtn(2);
                            break;
                        case "aboutMe":
                            setActiveBtn(3);
                            break;
                        default:
                            setActiveBtn(0);
                            break;
                    }
                }
            });
        });

        const bannerElement = document.querySelector("#banner");
        if (bannerElement) {
            observer.observe(bannerElement);
        }

        const projectsElement = document.querySelector("#projects");
        if (projectsElement) {
            observer.observe(projectsElement);
        }

        const skillElement = document.querySelector("#skill");
        if (skillElement) {
            observer.observe(skillElement);
        }

        const aboutMeElement = document.querySelector("#aboutMe");
        if (aboutMeElement) {
            observer.observe(aboutMeElement);
        }

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <>
            <Helmet>
                <title>Samuel Gonzalez | Full-Stack Web Developer</title>
                <meta name="description" content="Mi nombre es samuel Vasquez Gonzalez y soy un programador front-end y back-end en la web. Este portafolio tiene informacion sobre proyectos que he realizado y como es mi forma de trabajo, tambien sobre mis conocimientos y caminos" />
                <link
                    rel="canonical"
                    href="https://samuegonzalez.netlify.app/"
                />
            </Helmet>
            <Header activeBtn={activeBtn} />
            <Banner />
            <Particle />
            <Projects>
                <Bubbles />
            </Projects>
            <Skill />
            <AboutMe />
            <div className="img-container">
                <img
                    className="img-footer"
                    src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/logoVector.svg"
                    alt="Samuel Gonzalez Logo"
                    title="Samuel Gonzalez Logo"
                />
            </div>
            <Footer />
        </>
    );
};

export default Home;
