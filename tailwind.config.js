module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#60a5fa",
          "secondary": "#67e8f9",
          "accent": "#fef08a",
          "neutral": "#F3F4F6",
          "base-100": "#FFFFFF",
          "info": "#98A8DD",
          "success": "#34d399",
          "warning": "#DF7E07",
          "error": "#FA5C5C",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}