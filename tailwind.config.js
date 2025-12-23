/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.css"
  ],
  safelist: [
    'bg-green-100', 'text-green-800', 'bg-red-100', 'text-red-800',
    'bg-blue-100', 'text-blue-800', 'bg-yellow-100', 'text-yellow-800',
    'bg-blue-600', 'hover:bg-blue-700'
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
