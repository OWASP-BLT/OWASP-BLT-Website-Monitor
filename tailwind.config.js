/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './.github/workflows/website-monitor.yml',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1976d2',
      },
    },
  },
  plugins: [],
}
