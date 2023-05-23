/** @type {import('tailwindcss').Config} */
module.exports = {
  //mode: 'jit',
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    colors: {
      'glassy-white': 'rgba(255, 255, 255, .37)',
      'glassy-white-selected': 'rgba(255, 255, 255, .6)',
      'subheading-white': 'rgba(255, 255, 255, .8)',
      'subheading-black': 'rgba(65, 65, 65, .8)',
      'filter': 'rgba(0, 0, 0, .7)',
      
      
    },
    
    extend: {
      backgroundImage: {
        'portrait-photo': "url(src/Media/Images/photo-dummy.jpeg)"
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

