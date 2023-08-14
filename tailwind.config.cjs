/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      white: "#f8fafc",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var"],
      },
    },
  },
  plugins: [],
};
