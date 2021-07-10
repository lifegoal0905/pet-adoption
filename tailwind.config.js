module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-home": "url(/src/assets/img/home/hero.png)",
        "hero-background-home": "url(/src/assets/img/home/hero-cover.jpg)",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
