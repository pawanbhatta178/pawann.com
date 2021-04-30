module.exports = {
  // Uncomment the line below to enable the experimental Just-in-Time ("JIT") mode.
  // https://tailwindcss.com/docs/just-in-time-mode
  // mode: "jit",
  theme: {
    extend: {
      colors: {
        blue: {
          250: "#61DBFB",
          350: "#0db7ed",
          450: "#326ce5",
          550: "#007acc",
          650: "#0064a5",
          750: "#06B6D4",
        },
        green: {
          550: "#68A063",
        },
      },
    },
  },
  darkMode: "media", // or 'media' or 'class'
  variants: {},
  plugins: [],
  purge: {
    // Filenames to scan for classes
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
      "./src/**/*.jsx",
      "./src/**/*.ts",
      "./src/**/*.tsx",
      "./public/index.html",
    ],
    // Options passed to PurgeCSS
    options: {
      // Whitelist specific selectors by name
      // safelist: [],
    },
  },
};
