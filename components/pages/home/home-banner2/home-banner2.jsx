// MUI
import { useMediaQuery } from '@mui/material';

// Assets
import banner2Desktop from '@/assets/images/banner2Desktop.png';
import banner2Mobile from '@/assets/images/banner2Mobile.png';

function HomeBanner2() {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   return (
      <div className="px-eighteen pt-eighteen customMd:px-[90px] customMd:pt-[37px]">
         <div className="mx-auto max-w-[1260px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={isDesktop ? banner2Desktop.src : banner2Mobile.src} alt="banner" className="w-full" />
         </div>
      </div>
   );
}

export default HomeBanner2;
