import React, { useState } from "react";
import meOne from '../../assets/me1.png';
import meTwo from '../../assets/me2.png';
import meThree from '../../assets/me3.png';
import './me.css'

function AboutMe() {
  const images = [meOne, meTwo, meThree];
  const titles = ["Samuel Pixel man", "Half-life", "Carl Jhonson (cj)"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <main className="meMain" id="aboutMe">
      <h2 className="sectionTitle">About</h2>
      <button className="BotonChange" onClick={handleClick}>
        <img src={images[currentIndex]} alt="" title={titles[currentIndex]} />
      </button>
      <p className="pNormal">What can a "full-stack web developer" do?</p>
      <div className="about-pContainer">
        <p className="pNormal">If you can imagine it, you can program it, that's the phrase I tell myself when I set out to do something new. I am able to imagine it and bring the website from nothing to existence, I do not use tricks or magic. I specialize in manipulating the very structure of the web, its raw materials, HTML, CSS, Javascript and React.js if necessary</p>
        <p className="pNormal">Open source technologies empower me in the process, I am an expert in developing custom plugins and components in React. I fully embrace the Visual Studio Code editor and can build custom projects from scratch for any conceivable need. I have contributed to small projects of colleagues and intend to give back every chance I get.</p>
        <p className="pNormal">My experience in design is not much, I have the necessary knowledge to deploy the resources that a project will use, depending on what the need is, all the knowledge that I have is not certified, because I learned everything independently</p>
        <p className="pNormal">I can plan, design, build, launch and maintain a website myself. A full-stack web developer has no limits. And when one is found, he crosses it without hesitation, boldly entering the unknown to return richer in knowledge for it.</p>
      </div>
    </main>
  );
}

export default AboutMe;
