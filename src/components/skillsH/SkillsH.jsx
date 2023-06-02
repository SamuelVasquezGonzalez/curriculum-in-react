import React, { useEffect, useState } from 'react';
import './skills.css';
import LoaderVideo from '../../assets/loader.gif'

function Skill() {
  const [webSkills, setWebSkills] = useState([]);
  const [designSkills, setDesignSkills] = useState([]);
  const [dbSkills, setDbSkills] = useState([]);
  const [toolSkills, setToolSkills] = useState([]);
  const [backendSkills, setBackendSkills] = useState([]);

  const MeMc = 'https://samuelvasquezgonzalez.github.io/API-portf/multimedia/meMc.gif';

  useEffect(() => {
    fetch('https://samuelvasquezgonzalez.github.io/API-portf/api-habilidades.json')
      .then(response => response.json())
      .then(data => {
        separateSkills(data);
      })
      .catch(error => handleFetchError(error));
  }, []);

  function separateSkills(data) {
    const [web, design, db, tools, backend] = data;

    setWebSkills(web || []);
    setDesignSkills(design || []);
    setDbSkills(db || []);
    setToolSkills(tools || []);
    setBackendSkills(backend || []);
  }

  function handleFetchError(error) {
    console.log(error);
  
    const errorSkill = {
      imagen: LoaderVideo,
      parrafo: "Sorry, we can't load the info"
    };
  
    setWebSkills([errorSkill]);
    setDesignSkills([errorSkill]);
    setDbSkills([errorSkill]);
    setToolSkills([errorSkill]);
    setBackendSkills([errorSkill]);
  }

  return (
    <main className="skillsMain" id="skill">
      <h2 className="sectionTitle">SKILLS</h2>
      <p className="pInBlue">Let's take a look at the amazing technology with which we make magic on the web</p>
      <img className='no-bg' src={MeMc} alt="Samuel Pixelman Pixel art" title='Me on Minecraft'/>
      <p className="pNormal">
        I have the ability to manipulate the web with its different technologies. Let's start with the structure, I use <b>HTML</b> to layout the website, then I use <b>CSS</b> to give it a beautiful, responsive and user-friendly design. <b>Javascript</b> to give all the functionality to our website and make it dynamic and interactive depending on the need. He also mastered <b>React.js</b> to make the application more future scalable and competitive. <br /> <br />
        In the backend, I like to work with <b>Node.js</b> for the development of the web server and its needs, its <b>Express</b> module for routing and endpoint development. <b>MySql</b> to handle the data that needs to be stored in a database.
      </p>

        <article className='skill-article Web' >
          <h3>WEB</h3>
          <div className="skills-container">
        {webSkills.map(skill => (
            <div className="skill-card" key={skill.imagen}>
              <img className='skill-img' src={skill.imagen} alt={skill.title} title={skill.title} />
              <p className='skill-p'>{skill.parrafo}</p>
            </div>
          ))}
          </div>
        </article>
       
        <article className='skill-article desingWeb' >
          <h3>DESIGN</h3>
          <div className="skills-container">
        {designSkills.map(skill => (
            <div className="skill-card" key={skill.imagen}>
              <img className='skill-img' src={skill.imagen} alt={skill.title} title={skill.title} />
              <p className='skill-p'>{skill.parrafo}</p>
            </div>
          ))}
          </div>
        </article>
        
        <article className='skill-article db' >
          <h3>DATA BASE</h3>
          <div className="skills-container">
        {dbSkills.map(skill => (
            <div className="skill-card" key={skill.imagen}>
              <img className='skill-img' src={skill.imagen} alt={skill.title} title={skill.title} />
              <p className='skill-p'>{skill.parrafo}</p>
            </div>
          ))}
          </div>
        </article>
        
        <article className='skill-article tools' >
          <h3>TOOLS</h3>
          <div className="skills-container">
        {toolSkills.map(skill => (
            <div className="skill-card" key={skill.imagen}>
              <img className='skill-img' src={skill.imagen} alt={skill.title} title={skill.title} />
              <p className='skill-p'>{skill.parrafo}</p>
            </div>
          ))}
          </div>
        </article>
        
        <article className='skill-article tools' >
          <h3>BACKEND</h3>
          <div className="skills-container">
        {backendSkills.map(skill => (
            <div className="skill-card" key={skill.imagen}>
              <img className='skill-img' src={skill.imagen} alt={skill.title} title={skill.title} />
              <p className='skill-p'>{skill.parrafo}</p>
            </div>
          ))}
          </div>
        </article>

    </main>
  );
}

export default Skill;
