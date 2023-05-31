import React from 'react';

import Projects from "../components/Projects";
import Banner from "../components/banner/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutMe from "../components/Me";
import Particle from "../components/Particle";
import Skill from "../components/Skills";
import Bubbles from '../components/bubbles/Bubbles';

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