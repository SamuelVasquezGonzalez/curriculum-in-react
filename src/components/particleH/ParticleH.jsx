import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function Particle() {
    const particlesInit = async (main) => {
        await loadFull(main)

    }

    const particlesLoaded = (container) =>{
        return;
    }

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                "fullScreen": {
                    "enable": true,
                    "zIndex": 1
                },
                "particles": {
                    "number": {
                        "value": 10,
                        "density": {
                            "enable": false,
                            "value_area": 900
                        }
                    },
                    "color": {
                        "value": "#fff"
                    },
                    "shape": {
                        "type": "circle",
                        "options": {
                            "sides": 1
                        }
                    },
                    "opacity": {
                        "value": 0.1,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 7,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": true,
                        "distance": 600,
                        "color": "#fff",
                        "opacity": 0.2,
                        "width": 5
                    },
                    "move": {
                        "enable": true,
                        "speed": 1,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": false,
                            "mode": ["grab"]
                        },
                        "onclick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": false
                    },
                    "modes": {
                        "grab": {
                            "distance": 1000,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "background": {
                    "color": "transparent",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}
        >
            
        </Particles>
    )
}


export default Particle