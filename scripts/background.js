export function backgroundParticles () {

particlesJS("background", {
  particles: {
    number: {
      value: 60, 
      density: {
        enable: true,
        value_area: 600, 
      },
    },
    color: {
      value: ["#22c55e"], 
    },
    shape: {
      type: ["circle"], 
      stroke: {
        width: 0,
        
      },
      triangle: {
        nb_sides: 3,
      },
    },
    opacity: {
      value: 0.4, 
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 7, 
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
  },
});
}