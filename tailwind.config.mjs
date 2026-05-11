/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateRows: {
        "0fr": "0fr",
        "1fr": "1fr",
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#151312',
          200: '#1a1716'
        },

        orange: {
          100: '#e6552c',
          200: '#de6543',
          300: '#e66637',
          400: '#f2b046',
        },

        red: {
          100: '#e64337',
        },

        blue: {
          200: '#5043de',
        },

        purple: {
          100: '#9843de'
        },

        green: {
          100: '#ddffaa'
        }
      },
    },
  },
  plugins: [],
};
