import React, { useState, useEffect } from "react";
import '../../styles/projects.css';
import { fetchBubblesData } from './bubbles-fetch';

function Bubbles() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchBubblesData(setData);
  }, []);

  return (
    <>
      {data.map((bubble, i) => (
        <a href={bubble.url} target="_blank" rel="noreferrer" className="bubble" key={i}>
          <img src={bubble.img} alt={bubble.title} title={bubble.title} />
          <div className="bubbleInfo">
            <p>{bubble.info}</p>
          </div>
        </a>
      ))}
    </>
  );
}

export default Bubbles;
