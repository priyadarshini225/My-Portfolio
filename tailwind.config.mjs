// tailwind.config.mjs
export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        lightHover: '#fcf4ff',
        darkHover: '#2a004a',
        darkTheme: '#11001F',
      },
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
