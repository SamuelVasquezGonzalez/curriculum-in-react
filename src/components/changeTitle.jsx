import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect} from 'react';

function ChangeTitle () {
    const location = useLocation();

    useEffect(() => {
      const pathname = location.pathname;
      let title = '';
  
      if(pathname === '/' || pathname === '/home'){
        title = 'Samuel Gonzalez | Full-Stack Web Developer';
      }else if(pathname === '/resume'){
        title = 'Samuel Gonzalez | Resume'
      }else if(pathname === '/employment/freelancer'){
        title = 'Samuel Gonzalez | Freelance'
      }
  
      document.title = title;
    }, [location])

    return null;
}

export default ChangeTitle;