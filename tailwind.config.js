/** @type {import('tailwindcss').Config} */
module.exports = {
   corePlugins: {
      preflight: false,
   },

   content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
   ],
   theme: {
      extend: {
         '@layer base': {
            button: [],
         },

         screens: {
            customXs: '350px',
            customSm: '600px',
            customMd: '900px',
            customLg: '1200px',
            customXl: '1400px',
         },

         colors: {
            // customPink: '#FFA3A1',
         },

         fontFamily: {
            // dana: 'dana',
         },
         borderRadius: {
            10: '10px',
         },
         fontSize: {
            10: '10px',
            eighteen: '18px',
         },
      },
   },
   plugins: [],
};
