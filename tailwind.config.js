/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  corePlugins: {
    preflight: false,
  },
  theme: {
    screens: {
      'max-sm': {'max': '480px'},
      // => @media (max-width: 480px) { ... }
      'min-md': '940px',
      // => @media (min-width: 940px) { ... }
      /*
        config breakpoint by tailwindcss
      */
      'sx': '390px',
      // => @media (min-width: 390px) { ... }
      'ss': '460px',
      // => @media (min-width: 460px) { ... }
      'sy': '580px',
      // => @media (min-width: 580px) { ... }
      'sm': '690px',
      // => @media (min-width: 690px) { ... }
      'md': '768px',
      // => @media (min-width: 768px) { ... }
      'my': '780px',
      // => @media (min-width: 780px) { ... }
      '2md': '870px',
      // => @media (min-width: 940px) { ... }
      '3md': '940px',
      // => @media (min-width: 940px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "hero-pattern": "url('assets/images/hero-img.svg')",
      },
      keyframes: {
        'miru-breathing': {
          '0%': { 'transform': 'translate(5px, 5px)' },
          '100%': { 'transform': 'translate(-5px, -5px)' },
        },
        'load-smooth': {
          '0%': {
            'opacity': '0',
            'transform': 'scale(.96)'
          },
          '60%': {
            'opacity': '1'
          },
          '100%': {
            'transform': 'none'
          }
        }
      }
    },
  },
};