import React from 'react';
import { Link } from 'react-router-dom';
import '../../components/headerH/header.css'

function HeaderResume() {
  return (
    <div className="header">
      <ul className="header-list">
        <li className="li-btn">
          <a
            href="/"
            className='header-btn'
          >
            Home
          </a>
        </li>
        <li className="li-btn">
          <a
            href="/#projects"
            className='header-btn'
          >
            Projects
          </a>
        </li>
        <li className="li-btn">
          <a
            href="/#skills"
            className='header-btn'
          >
            Skills
          </a>
        </li>
        <li className="li-btn">
          <a
            href="/#aboutMe"
            className='header-btn'
          >
            About
          </a>
        </li>
        <li className="li-btn active">
          <Link to="/resume" className="header-btn">
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderResume;
