/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js,md}"],
    theme: {
      extend: {
        fontFamily: {
          unbounded: ['Unbounded'],
        },
        colors: {
          polkadot: '#e6007a',
          substrate: 'rgb(36,204,133)',
        },
      },
    },
    plugins: [],
  }