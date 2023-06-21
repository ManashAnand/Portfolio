import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: {
          number: {
            value: 160,
            density: {
              enable: true,
              value_area: 1500,
            },
          },
          line_linked: {
            enable: false,
            opacity: 0.03,
          },
          move: {
            direction: "right",
            speed: 0.05,
          },
          size: {
            value: 1,
          },
          opacity: {
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.9,
            },
          },
        },
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "grab",
            },
            onHover: {
                enable: true,
                mode: "grab",

                distance: 400
              },
          },
          modes: {
            grab: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
      // params={particleConfig}
      // style={{zIndex:-1}}
    />
  );
}

export default Particle;
