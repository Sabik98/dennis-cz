/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dennis: {
          black: '#000000',
          dark: '#222222',
          gold: '#F4C857',
          gray: '#55555e',
          'gray-dark': '#3f4047',
          'gray-topbar': '#636363',
          bg: '#f0f0f0',
          'bg-light': '#f7f8f9',
        },
      },
      fontFamily: {
        sans: ['Red Hat Display', 'system-ui', 'sans-serif'],
        heading: ['Red Hat Display', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      maxWidth: {
        'site': '1300px',
      },
    },
  },
  plugins: [],
};
