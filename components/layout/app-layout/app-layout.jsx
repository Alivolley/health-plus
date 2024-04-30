import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import toast, { ToastBar, Toaster } from 'react-hot-toast';

// MUI
import { Backdrop, IconButton, ThemeProvider, createTheme } from '@mui/material';

// Icons
import { IoCloseOutline } from 'react-icons/io5';

// Redux
import { Provider } from 'react-redux';
import store from '@/store/store';

// Components
import PagesLayout from '../pages-layout/pages-layout';
import LoadingComponent from '@/components/templates/loading-component/loading-component';

// Styles
import getDesignTokens from '@/configs/theme';

function Loading() {
   const [loading, setLoading] = useState(false);
   const router = useRouter();

   useEffect(() => {
      router.events.on('routeChangeStart', url => url !== router.asPath && setLoading(true));
      router.events.on('routeChangeComplete', url => url !== router.asPath && setLoading(false));
      router.events.on('routeChangeError', url => url !== router.asPath && setLoading(false));

      return () => {
         router.events.off('routeChangeStart', url => url !== router.asPath && setLoading(true));
         router.events.off('routeChangeComplete', url => url !== router.asPath && setLoading(false));
         router.events.off('routeChangeError', url => url !== router.asPath && setLoading(false));
      };
   });

   return (
      <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
         <LoadingComponent />
      </Backdrop>
   );
}

function AppLayout({ children }) {
   const themeConfig = createTheme(getDesignTokens('light'));

   return (
      <Provider store={store}>
         <ThemeProvider theme={themeConfig}>
            <Toaster
               position="top-right"
               toastOptions={{
                  style: { fontFamily: 'kalamehMedium500', fontSize: '14px', direction: 'rtl' },
                  duration: 4000,
               }}
            >
               {t => (
                  <ToastBar toast={t}>
                     {({ icon, message }) => (
                        <div className="flex items-center">
                           {icon}
                           {message}
                           {t.type !== 'loading' && (
                              <IconButton
                                 onClick={() => toast.dismiss(t.id)}
                                 className="!transition-all !duration-150 hover:!text-red-500"
                                 size="small"
                              >
                                 <IoCloseOutline />
                              </IconButton>
                           )}
                        </div>
                     )}
                  </ToastBar>
               )}
            </Toaster>
            <Loading />
            <PagesLayout>{children}</PagesLayout>
         </ThemeProvider>
      </Provider>
   );
}

export default AppLayout;
