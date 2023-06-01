// Home.jsx
import React, { useEffect, useState } from 'react';

import Projects from "../components/projectsComponent/Projects";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import AboutMe from "../components/me/Me";
import Particle from "../components/particle/Particle";
import Skill from "../components/skills/Skills";
import Bubbles from '../components/bubbles/Bubbles';

function Home() {
  const [activeBtn, setActiveBtn] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');

          switch (id) {
            case 'banner':
              setActiveBtn(0);
              break;
            case 'projects':
              setActiveBtn(1);
              break;
            case 'skill':
              setActiveBtn(2);
              break;
            case 'aboutMe':
              setActiveBtn(3);
              break;
            default:
              setActiveBtn(0);
              break;
          }
        }
      });
    });

    // Observar el componente Banner
    const bannerElement = document.querySelector('#banner');
    if (bannerElement) {
      observer.observe(bannerElement);
    }

    // Observar el componente Projects
    const projectsElement = document.querySelector('#projects');
    if (projectsElement) {
      observer.observe(projectsElement);
    }

    // Observar el componente Skill
    const skillElement = document.querySelector('#skill');
    if (skillElement) {
      observer.observe(skillElement);
    }

    // Observar el componente AboutMe
    const aboutMeElement = document.querySelector('#aboutMe');
    if (aboutMeElement) {
      observer.observe(aboutMeElement);
    }

    // Devolver una función de limpieza para detener la observación cuando el componente se desmonte
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Header activeBtn={activeBtn} />
      <Banner />
      <Particle />
      <Projects >
        <Bubbles />
      </Projects>
      <Skill />
      <AboutMe />
      <div className="img-container">
        <img
          className="img-footer"
          src="https://samuelvasquezgonzalez.github.io/API-portf/multimedia/logoVector.svg"
          alt="Samuel Gonzalez Logo"
        />
      </div>
      <Footer />
    </>
  );
}

export default Home;
