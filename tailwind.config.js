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
            primaryBlue: '#2ED7FE',
         },

         fontFamily: {
            kalamehThin100: 'kalamehThin100',
            kalamehExtraLight200: 'kalamehExtraLight200',
            kalamehLight300: 'kalamehLight300',
            kalamehRegular400: 'kalamehRegular400',
            kalamehMedium500: 'kalamehMedium500',
            kalamehSemiBold600: 'kalamehSemiBold600',
            kalamehBold700: 'kalamehBold700',
            kalamehExtraBold800: 'kalamehExtraBold800',
            kalamehBlack900: 'kalamehBlack900',
         },
         borderRadius: {
            10: '10px',
         },
         fontSize: {
            10: '10px',
            eighteen: '18px',
            15: '15px',
         },
         padding: {
            eighteen: '18px',
         },
         margin: {
            eighteen: '18px',
         },
      },
   },
   plugins: [],
};
