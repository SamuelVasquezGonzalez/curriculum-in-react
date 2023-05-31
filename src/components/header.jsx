import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/header.css";

function Header() {
  const [activeBtn, setActiveBtn] = useState(0);

  const handleClick = (index) => {
    setActiveBtn(index);
  };

  return (
      <div className="header">
        <ul className="header-list">
          <li className="li-btn">
            <a
              href="#home"
              className={activeBtn === 0 ? "header-btn active" : "header-btn"}
              onClick={() => handleClick(0)}
            >
              Home
            </a>
          </li>
          <li className="li-btn">
            <a
              href="#proyects"
              className={activeBtn === 1 ? "header-btn active" : "header-btn"}
              onClick={() => handleClick(1)}
            >
              Projects
            </a>
          </li>
          <li className="li-btn">
            <a
              href="#skills"
              className={activeBtn === 2 ? "header-btn active" : "header-btn"}
              onClick={() => handleClick(2)}
            >
              Skills
            </a>
          </li>
          <li className="li-btn">
            <a
              href="#me"
              className={activeBtn === 3 ? "header-btn active" : "header-btn"}
              onClick={() => handleClick(3)}
            >
              About
            </a>
          </li>
          <li className="li-btn">
            <Link to={'/resume'} className="header-btn">Resume</Link>
          </li>
        </ul>
        <div>
        </div>
      </div>
  );
}

export default Header;
