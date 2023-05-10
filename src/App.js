import Header from './components/header'
import Banner from './components/banner'
import Particle from './components/particle'
import Projects from './components/Projects';
import Bubbles from './components/bubbles';

import React, { useState, useEffect } from 'react';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://samuelvasquezgonzalez.github.io/API-portf/proyectos.json')
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner />
      <Particle />
      <Projects>
      {data.map((bubble, index) => (
          <Bubbles src={bubble.img} info={bubble.info}  url={bubble.url} key={index}/>
        ))}
      </Projects>
      
    </div>
  );
}

export default App;
