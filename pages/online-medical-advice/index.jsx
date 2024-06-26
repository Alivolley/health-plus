import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Breadcrumbs, Grid, useMediaQuery } from '@mui/material';

// Assets
import onlineMedicPic1 from '@/assets/images/onlineMedicPic1.png';
import onlineMedicPic2 from '@/assets/images/onlineMedicPic2.png';
import onlineMedicPic3 from '@/assets/images/onlineMedicPic3.png';
import medicalAdviceBannerMobile from '@/assets/images/medicalAdviceBannerMobile.png';
import medicalAdviceBannerDesktop from '@/assets/images/medicalAdviceBannerDesktop.png';

// Components
import MedicalAdviceCart from '@/components/templates/medical-advice-cart/medical-advice-cart';

function OnlineMedicalAdvice() {
   const isDesktop = useMediaQuery(`(min-width: 900px)`);

   return (
      <div>
         <div className="px-eighteen customMd:px-[90px]">
            <div className="mx-auto max-w-[1260px]">
               <div>
                  <Breadcrumbs separator=">" className="max-customMd:hidden">
                     {[
                        <Link
                           href="/"
                           key={1}
                           className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                        >
                           صفحه اصلی
                        </Link>,
                        <Link
                           href="/online-medical-advice"
                           key={2}
                           className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                        >
                           مشاوره پزشکی آنلاین
                        </Link>,
                     ]}
                  </Breadcrumbs>
                  <div
                     className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
                     style={{
                        boxShadow: '0px 0px 15px 0px #0000000D',
                     }}
                  >
                     <p className="text-[20px] leading-4 text-primaryBlue max-customMd:text-center">
                        مشاوره پزشکی و آنلاین
                     </p>
                     <p className="mt-[10px] text-15 leading-[21px] text-textColor2 max-customMd:text-center customMd:mt-15 customMd:leading-3">
                        درخواست مشاوره از بهترین متخصصین در وبسایت هلث پلاس
                     </p>
                  </div>

                  <div className="my-[30px] customMd:my-[60px]">
                     <p className="font-kalamehSemiBold600 text-15 text-textColor1 customMd:text-[25px]">
                        چرا مشاوره با هلث پلاس :
                     </p>
                     <div className="mt-[10px] flex items-center gap-[6px] customMd:mt-[30px] customMd:gap-[30px]">
                        <div
                           className="flex flex-1 flex-col gap-[10px] rounded-[7px] bg-[#CCCCCC1A] p-3 customMd:flex-row-reverse
                         customMd:items-center customMd:justify-between customMd:gap-[34px] customMd:rounded-[25px] customMd:py-[30px] customMd:pl-15 customMd:pr-[30px]"
                        >
                           <div className="mx-auto h-10 shrink-0 customMd:h-[93px]">
                              <Image src={onlineMedicPic1} alt="icon" className="size-full" />
                           </div>
                           <div>
                              <p className="text-10 leading-4 text-textColor1 max-customMd:text-center customMd:text-xl">
                                 مشاوره با ۲,۱۲۰+ پزشک
                              </p>
                              <p className="mt-[19px] text-15 leading-6 text-textColor2 max-customMd:hidden">
                                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                 گرافیک{' '}
                              </p>
                           </div>
                        </div>
                        <div
                           className="flex flex-1 flex-col gap-[10px] rounded-[7px] bg-[#CCCCCC1A] p-3 customMd:flex-row-reverse
                         customMd:items-center customMd:justify-between customMd:gap-[34px] customMd:rounded-[25px] customMd:py-[30px] customMd:pl-15 customMd:pr-[30px]"
                        >
                           <div className="mx-auto h-10 shrink-0 customMd:h-[93px]">
                              <Image src={onlineMedicPic2} alt="icon" className="size-full" />
                           </div>
                           <div>
                              <p className="text-10 leading-4 text-textColor1 max-customMd:text-center customMd:text-xl">
                                 ارتباط با پزشک در محیطی امن
                              </p>
                              <p className="mt-[19px] text-15 leading-6 text-textColor2 max-customMd:hidden">
                                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                 گرافیک{' '}
                              </p>
                           </div>
                        </div>
                        <div
                           className="flex flex-1 flex-col gap-[10px] rounded-[7px] bg-[#CCCCCC1A] p-3 customMd:flex-row-reverse
                         customMd:items-center customMd:justify-between customMd:gap-[34px] customMd:rounded-[25px] customMd:py-[30px] customMd:pl-15 customMd:pr-[30px]"
                        >
                           <div className="mx-auto h-10 shrink-0 customMd:h-[93px]">
                              <Image src={onlineMedicPic3} alt="icon" className="size-full" />
                           </div>
                           <div>
                              <p className="text-10 leading-4 text-textColor1 max-customMd:text-center customMd:text-xl">
                                 دسترسی در هر زمان و مکان!
                              </p>
                              <p className="mt-[19px] text-15 leading-6 text-textColor2 max-customMd:hidden">
                                 لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان
                                 گرافیک{' '}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="px-eighteen customMd:bg-[#2ED7FE0D] customMd:px-[90px] customMd:py-[60px]">
            <div className="mx-auto max-w-[1260px]">
               <div>
                  <p className="font-kalamehSemiBold600 text-15 text-textColor1 max-customMd:mb-15 customMd:hidden">
                     دسته بندی مشاوره های پزشکی
                  </p>
                  <Grid container columnSpacing={{ xs: '5px', md: '30px' }} rowSpacing={{ xs: '15px', md: '30px' }}>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                     <Grid item xs={6} md={4}>
                        <MedicalAdviceCart />
                     </Grid>
                  </Grid>
               </div>
            </div>
         </div>

         <div className="mb-[30px] mt-3 px-eighteen customMd:mb-[62px] customMd:mt-15 customMd:px-[90px]">
            <div className="mx-auto max-w-[1260px]">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src={isDesktop ? medicalAdviceBannerDesktop.src : medicalAdviceBannerMobile.src}
                  alt="banner"
                  className="w-full"
               />
            </div>
         </div>
      </div>
   );
}

export default OnlineMedicalAdvice;
