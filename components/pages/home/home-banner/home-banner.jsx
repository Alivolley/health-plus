import Image from 'next/image';

// MUI
import { useMediaQuery } from '@mui/material';

// Assets
import banner1Desktop from '@/assets/images/banner1Desktop.png';
import banner1Mobile from '@/assets/images/banner1Mobile.png';
import homeBannerVisit from '@/assets/images/homeBannerVisit.png';
import homeBannerTurn from '@/assets/images/homeBannerTurn.png';
import homeBannerPharmacy from '@/assets/images/homeBannerPharmacy.png';
import homeBannerCounseling from '@/assets/images/homeBannerCounseling.png';

function HomeBanner() {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   return (
      <div className="px-eighteen customMd:px-[90px]">
         <div className="mx-auto max-w-[1260px]">
            <div className="relative aspect-[1/0.5] w-full customMd:h-[262px]">
               <Image src={isDesktop ? banner1Desktop : banner1Mobile} alt="banner" fill className="rounded-[38px]" />
            </div>

            <div className="mt-eighteen customMd:mt-[45px]">
               <div>
                  <p className="text-center text-[19px] text-[#404040] max-customMd:hidden">مشاوره با پزشک متخصص</p>
                  <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-[#40404080] max-customMd:hidden">
                     مشاوره فنی و تلفنی
                  </p>
                  <p className="font-kalamehSemiBold600 text-sm text-[#404040] customMd:hidden">دسته بندی ها</p>
               </div>
               <div className="mt-[9px] flex items-center justify-center gap-[9px] customMd:mt-[45px] customMd:gap-[120px]">
                  <div className="flex flex-col items-center gap-[9px] customMd:gap-[22px]">
                     <div
                        style={{ background: 'linear-gradient(360deg, #CF63FE 0%, #FAD1FE 100%)' }}
                        className="flex size-16 items-center justify-center rounded-[15px] customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerCounseling} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-[#404040BF] customMd:text-[19px] customMd:text-[#404040]">
                        مشاوره آنلاین
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-[9px] customMd:gap-[22px]">
                     <div
                        style={{ background: 'linear-gradient(360deg, #FE639B 0%, #FED1E1 100%)' }}
                        className="flex size-16 items-center justify-center rounded-[15px] customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerTurn} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-[#404040BF] customMd:text-[19px] customMd:text-[#404040]">
                        نوبت دهی
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-[9px] customMd:gap-[22px]">
                     <div
                        style={{ background: 'linear-gradient(360deg, #63D9FE 0%, #D1EEFE 100%)' }}
                        className="flex size-16 items-center justify-center rounded-[15px] customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerPharmacy} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-[#404040BF] customMd:text-[19px] customMd:text-[#404040]">
                        داروخانه
                     </p>
                  </div>
                  <div className="flex flex-col items-center gap-[9px] customMd:gap-[22px]">
                     <div
                        style={{ background: 'linear-gradient(360deg, #FEB763 0%, #FEF7D1 100%)' }}
                        className="flex size-16 items-center justify-center rounded-[15px] customMd:size-[101px] customMd:rounded-[38px]"
                     >
                        <div className="size-9 customMd:size-[56px]">
                           <Image src={homeBannerVisit} alt="icon" className="size-full" />
                        </div>
                     </div>
                     <p className="text-center text-[11px] text-[#404040BF] customMd:text-[19px] customMd:text-[#404040]">
                        ویزیت در منزل
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default HomeBanner;
