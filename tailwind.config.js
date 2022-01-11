module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'main': '#f0ebe1',
      'secondary': '#2d2e39',
      'white': '#fff',
      'black': '#000'
    },
    extend: {},
  },
  backgroundImage: {
    'hero': "url('/images/header.png')",
  },
  plugins: [],
}
