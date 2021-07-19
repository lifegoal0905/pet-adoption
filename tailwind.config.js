module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      monsterrat: ["Montserrat"],
      roboto: ["Roboto", "sans-serif"],
    },
    extend: {
      backgroundImage: (theme) => ({
        "hero-home": "url(/src/assets/img/home/hero.png)",
        "hero-background-home": "url(/src/assets/img/home/hero-cover.jpg)",
        "bones-background": "url(/src/assets/img/contact/contactBg.jpg)",
        "-10": "-10",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      textColor: ["active"],
      borderWidth: ["active"],
      borderColor: ["active"],
      borderRadius: ["active"],
      transform: ["hover"],
      rotate: ["hover"],
    },
  },
  plugins: [],
};
