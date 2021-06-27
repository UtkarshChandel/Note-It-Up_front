module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    mode : "jit",
    darkMode: false, // or 'media' or 'class'
    theme: {
      minHeight: {
        0: "0",
        "1/4": "25vh",
        "1/2": "50vh",
        "3/4": "75vh",
        full: "100vh",
      },
      minWidth: {
        0: "0",
        "1/4": "25vw",
        "1/2": "50vw",
        "3/4": "75vw",
        full: "100vw",
      },
      fontSize: {
        xs: ".75rem",
        sm: ".875rem",
        tiny: ".875rem",
        base: "1rem",
        lg: "1.125rem",
        xl: "1.25rem",
        "2xl": "1.5rem",
        "3xl": "1.875rem",
        "4xl": "2.25rem",
        "5xl": "3rem",
        "6xl": "4rem",
        "7xl": "5rem",
      },
      extend: {
        colors: {
          primary: "#EB5424",
          textgray: "#373232CC",
        },
        screens: {
          "3xl": "2000px",
        },
        fontFamily: {
          body: ["Open Sans"],
          primary: ["Bree Serif"],
          paragraph : ["Quicksand"]
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [require("tailwind-scrollbar-hide"),require("@tailwindcss/line-clamp")],
  };
  