import React from 'react';

import Projects from "../components/Projects";
import Banner from "../components/banner/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import AboutMe from "../components/me";
import Particle from "../components/particle";
import Skill from "../components/skills";
import Bubbles from '../components/bubbles/bubbles';

function Home () {
    return (
        <>
        <Header />
        <Banner />
        <Particle />
        <Projects>
            <Bubbles />
        </Projects>
        <Skill />
        <AboutMe />
        <div className='img-container'>
          <img className='img-footer' src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/logoVector.svg" alt="Samuel Gonzalez Logo" />
        </div>
        <Footer />
        </>
    )
}

export default Home;