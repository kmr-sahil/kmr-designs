/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'sm': '464px',
      // => @media (min-width: 640px) { ... }

      'lg-sm': '564px', 

      'md': '964px',
      // => @media (min-width: 1024px) { ... }

      'lg': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      animation: {
        'loop-scroll': 'loop-scroll 30s linear infinite 2s',
      },
      keyframes: {
        'loop-scroll': {
          from: { transform: 'translateX(0px)' },
          to: { transform: 'translateX(-250%)' },
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
