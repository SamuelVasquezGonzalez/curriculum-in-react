import React, { useState } from "react";
import "../styles/header.css";

function Header() {
  const [activeBtn, setActiveBtn] = useState(0);

  const handleClick = (index) => {
    setActiveBtn(index);
    console.log(index)
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
            href="#about"
            className={activeBtn === 3 ? "header-btn active" : "header-btn"}
            onClick={() => handleClick(3)}
          >
            About
          </a>
        </li>
        <li className="li-btn">
          <a
            href="/contact-me"
            className={activeBtn === 4 ? "header-btn active" : "header-btn"}
            onClick={() => handleClick(4)}
          >
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
