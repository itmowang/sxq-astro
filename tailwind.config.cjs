/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1350px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        darkBg1: "rgb(18,18,18)", // 底层背景色
        darkBg2: "#232323", // 模板背景色
      },
    },
  },
  plugins: [],
};
