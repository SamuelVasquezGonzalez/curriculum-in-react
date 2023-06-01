// Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

function Header({ activeBtn }) {
  return (
    <div className="header">
      <ul className="header-list">
        <li className="li-btn">
          <a
            href="#banner"
            className={activeBtn === 0 ? 'header-btn active' : 'header-btn'}
          >
            Home
          </a>
        </li>
        <li className="li-btn">
          <a
            href="#projects"
            className={activeBtn === 1 ? 'header-btn active' : 'header-btn'}
          >
            Projects
          </a>
        </li>
        <li className="li-btn">
          <a
            href="#skill"
            className={activeBtn === 2 ? 'header-btn active' : 'header-btn'}
          >
            Skills
          </a>
        </li>
        <li className="li-btn">
          <a
            href="#aboutMe"
            className={activeBtn === 3 ? 'header-btn active' : 'header-btn'}
          >
            About
          </a>
        </li>
        <li className="li-btn">
          <Link to="/resume" className="header-btn">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
