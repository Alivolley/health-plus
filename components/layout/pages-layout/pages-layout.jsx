import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import RtlProvider from '../rtlProvider/rtlProvider';

function PagesLayout({ children }) {
   const { pathname } = useRouter();

   return (
      <div className="font-kalamehMedium500" dir="rtl">
         <RtlProvider>
            {pathname !== '/login' && <Header />}

            <main className="mt-[110px] customMd:mt-[150px]">{children}</main>

            {pathname !== '/login' && <Footer />}
         </RtlProvider>
      </div>
   );
}

export default PagesLayout;
