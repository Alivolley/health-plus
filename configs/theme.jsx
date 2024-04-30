const getDesignTokens = mode => ({
   direction: 'rtl',

   typography: {
      fontFamily: 'kalamehMedium500',
   },

   palette: {
      mode,

      primary: {
         main: '#2ED7FE',
      },
   },

   components: {
      MuiButton: {
         styleOverrides: {
            root: () => ({
               boxShadow: 'none',
               textTransform: 'none',
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               '&:hover': {
                  boxShadow: 'none',
               },
            }),
         },
      },

      MuiDialog: {
         styleOverrides: {
            root: {
               fontFamily: 'kalamehMedium500',
            },
         },
      },

      MuiDrawer: {
         styleOverrides: {
            root: {
               fontFamily: 'kalamehMedium500',
            },
         },
      },

      MuiFab: {
         styleOverrides: {
            root: {
               boxShadow: 'none',
               zIndex: 1,
               padding: 0,
               minWidth: 0,
               borderRadius: 0,
               minHeight: 0,
               width: 'auto',
               height: 'auto',
            },
         },
      },

      MuiTextField: {
         styleOverrides: {
            root: props => ({
               // '& .MuiOutlinedInput-root': {
               //    ...(props?.size === 'small' && {
               //       height: '45px',
               //       borderRadius: '47px',
               //    }),
               // },
            }),
         },
      },
   },
});

export default getDesignTokens;
