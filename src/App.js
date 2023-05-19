import Header from './components/header'
import Banner from './components/banner'
import Particle from './components/particle'
import Projects from './components/Projects';
import Bubbles from './components/bubbles';
import StatusMsm from './components/status';
import LoaderVideo from './assets/loader.gif'

import React, { useState, useEffect} from 'react';

function App() {
  const [data, setData] = useState([]);
  const [state, setState] = useState({modal: "no-visible", msm: "null", status: "nothing"});

  useEffect(() => {
    fetch('https://samuelvasquezgonzalez.github.io/API-portf/proyectos.json')
      .then(response => response.json())
      .then(response => {
        setData(response)
        showModal("no-visible", "null", "nothing");
      })
      .catch(error => {
        setData([
          {
            img: LoaderVideo,
            info: "We have had some inconveniences when loading the information :(",
            url: '#'
          },
          {
            img: LoaderVideo,
            info: "We have had some inconveniences when loading the information :(",
            url: '#'
          },
          {
            img: LoaderVideo,
            info: "We have had some inconveniences when loading the information :(",
            url: '#'
          }
        ]);
        if(navigator.onLine){
          showModal("visible", "We are having issues to load the information:(", "Our API is not working at the moment, we are trying to solve it as quickly as possible ");
        }else{
          showModal("visible", "You don't have internet connection", "Check you internet access")
        }
      });
  }, []);

  const showModal = (modal, msm, status) =>{
    setState({modal: modal, msm: msm, status: status});
  }

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
      <StatusMsm modal={state.modal} msm={state.msm} status={state.status} />
    </div>
  );
}

export default App;
