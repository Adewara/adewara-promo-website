function loadParticlesConfig(theme = "light") {
  const baseColors = ["#2563eb", "#059669", "#d97706"];
  const brightenedColors = ["#3b82f6", "#10b981", "#f59e0b"]; // ~10% brighter

  const colors = theme === "dark" ? brightenedColors : baseColors;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: colors,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000",
        },
      },
      opacity: {
        value: 0.4,
        random: true,
      },
      size: {
        value: 4,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: colors[0], // use primary color for lines
        opacity: 0.3,
        width: 1,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
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
          enable: false,
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 100,
          duration: 0.4,
        },
      },
    },
    retina_detect: true,
  });
}
