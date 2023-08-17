// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header({ activeBtn }) {
  return (
    <div className="header">
      <ul className="header-list">
        <li className={activeBtn === 0 ? 'li-btn active' : 'li-btn'}>
          <a
            href="#banner"
            className='header-btn'
          >
            Home
          </a>
        </li>
        <li className={activeBtn === 1 ? 'li-btn active' : 'li-btn'}>
          <a
            href="#projects"
            className='header-btn'
          >
            Projects
          </a>
        </li>
        <li className={activeBtn === 2 ? 'li-btn active' : 'li-btn'}>
          <a
            href="#skill"
            className='header-btn'
          >
            Skills
          </a>
        </li>
        <li className={activeBtn === 3 ? 'li-btn active' : 'li-btn'}>
          <a
            href="#aboutMe"
            className='header-btn'
          >
            About
          </a>
        </li>
        <li className="li-btn">
          <NavLink to="/resume" className="header-btn">
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
