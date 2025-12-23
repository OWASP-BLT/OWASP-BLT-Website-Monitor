/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./.github/workflows/website-monitor.yml"
  ],
  theme: {
    extend: {
      colors: {
        'status-success': '#4CAF50',
        'status-warning': '#FFC107',
        'status-error': '#f44336',
      },
    },
  },
  plugins: [],
}
