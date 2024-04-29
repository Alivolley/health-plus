import { useRouter } from 'next/router';

// Components
import Footer from '../footer/footer';
import Header from '../header/header';
import RtlProvider from '../rtlProvider/rtlProvider';

function PagesLayout({ children }) {
   const { pathname } = useRouter();

   return (
      <div
      //  className="font-almaraiRegular"
      >
         <RtlProvider>
            {pathname !== '/login' && <Header />}

            <main>{children}</main>

            {pathname !== '/login' && <Footer />}
         </RtlProvider>
      </div>
   );
}

export default PagesLayout;
