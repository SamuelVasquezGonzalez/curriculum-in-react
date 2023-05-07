import React, { useEffect } from "react";
import Particles from "particles.js";

function MyComponent() {
  useEffect(() => {
    const particleEffect = Particles.init({
      // opciones de configuración de la librería particles.js
      // puedes encontrar la documentación aquí: https://vincentgarreau.com/particles.js/
      selector: ".background",
      color: ["#ffffff", "#ff0000"],
      connectParticles: true,
      responsive: [
        {
          breakpoint: 768,
          options: {
            color: "#00ff00",
            maxParticles: 50,
            connectParticles: false,
          },
        },
      ],
    });

    return () => {
      particleEffect && particleEffect.destroy();
    };
  }, []);

  return (
    <div>
      <h1>SAMUEL GONZÁLEZ</h1>
      <div className="background" />
    </div>
  );
}

export default MyComponent;
