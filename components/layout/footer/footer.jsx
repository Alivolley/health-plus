import Image from 'next/image';

// Icons
import { FaInstagram, FaTelegram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

// Assets
import Link from 'next/link';
import logoPic from '@/assets/images/logo.png';
import footerPic1 from '@/assets/images/footerPic1.png';
import footerPic2 from '@/assets/images/footerPic2.png';

function Footer() {
   return (
      <footer>
         <div className="bg-[#CCCCCC0F] px-eighteen pb-[27px] pt-eighteen customMd:px-[90px] customMd:pb-[188px] customMd:pt-[112px]">
            <div className="mx-auto max-w-[1260px]">
               <div className="flex flex-col customMd:flex-row customMd:items-end customMd:justify-between">
                  <div className="max-customMd:w-full customMd:flex-1">
                     <div>
                        <div className="relative w-[187px] pb-[10px] max-customMd:mx-auto customMd:w-[405px] customMd:pb-[23px]">
                           <Image src={logoPic} alt="logo" className="size-full" />
                           <div className="absolute inset-x-0 bottom-0 h-[2px] bg-[#2ED7FE40]" />
                        </div>

                        <div className="mt-[9px] customMd:mt-[23px]">
                           <p className="text-[7px] text-[#404040] max-customMd:text-center customMd:text-[19px]">
                              با ما در ارتباط باشید
                           </p>
                           <div className="mt-[9px] flex items-center gap-[9px] max-customMd:justify-center customMd:mt-[23px] customMd:gap-[23px]">
                              <Link
                                 href="/"
                                 className="flex size-10 items-center justify-center rounded-10 bg-[#2ED7FE1A]
                                 text-primaryBlue transition-all duration-200 hover:bg-primaryBlue hover:text-white
                                  customMd:size-[84px] customMd:rounded-[26px]"
                              >
                                 <FaInstagram className="text-[21px] customMd:text-[45px]" />
                              </Link>
                              <Link
                                 href="/"
                                 className="flex size-10 items-center justify-center rounded-10 bg-[#2ED7FE1A]
                                 text-primaryBlue transition-all duration-200 hover:bg-primaryBlue hover:text-white
                                  customMd:size-[84px] customMd:rounded-[26px]"
                              >
                                 <FaTelegram className="text-[21px] customMd:text-[45px]" />
                              </Link>
                              <Link
                                 href="/"
                                 className="flex size-10 items-center justify-center rounded-10 bg-[#2ED7FE1A]
                                 text-primaryBlue transition-all duration-200 hover:bg-primaryBlue hover:text-white
                                  customMd:size-[84px] customMd:rounded-[26px]"
                              >
                                 <FaWhatsapp className="text-[21px] customMd:text-[45px]" />
                              </Link>
                              <Link
                                 href="/"
                                 className="flex size-10 items-center justify-center rounded-10 bg-[#2ED7FE1A]
                                 text-primaryBlue transition-all duration-200 hover:bg-primaryBlue hover:text-white
                                  customMd:size-[84px] customMd:rounded-[26px]"
                              >
                                 <FaFacebook className="text-[21px] customMd:text-[45px]" />
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="max-customMd:mb-[26px] max-customMd:mt-eighteen max-customMd:w-full customMd:flex-1">
                     <div className="flex justify-center gap-7 text-[7px] customMd:justify-end customMd:gap-[100px] customMd:text-[19px] customMd:leading-6">
                        <div>
                           <p className="text-[#404040]">خدمات ما</p>
                           <div className="mt-[7px] flex flex-col gap-[5px] text-[#40404080] customMd:mt-[22px] customMd:gap-3">
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 پزشک عمومی
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 قلب و عروق
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 داروخانه
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 کلیه و مجرا
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 ویزیت در منزل
                              </Link>
                           </div>
                        </div>
                        <div>
                           <p className="text-[#404040]">هلث پلاس</p>
                           <div className="mt-[7px] flex flex-col gap-[5px] text-[#40404080] customMd:mt-[22px] customMd:gap-3">
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 تماس با ما
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 درباره ما
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 قوانین و مقررات
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 ثبت نام پزشکان
                              </Link>
                              <Link href="/" className="transition-all duration-200 hover:text-primaryBlue">
                                 ثبت داروخانه
                              </Link>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className="max-customMd:w-full customMd:flex-1">
                     <div className="flex items-center justify-center gap-[9px] customMd:justify-end customMd:gap-[23px]">
                        <div className="h-[39px] customMd:h-[99px]">
                           <Image src={footerPic2} alt="icon" className="size-full" />
                        </div>
                        <div className="h-[39px] customMd:h-[99px]">
                           <Image src={footerPic1} alt="icon" className="size-full" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p
            className="bg-[#2ED7FE40] px-eighteen py-[7px] text-center text-[7px]
          text-[#404040] customMd:px-[90px] customMd:py-[17px] customMd:text-[19px]"
         >
            کلیه حقوق مادی و معنوی این وبسایت متعلق به هلث پلاس میباشد
         </p>
      </footer>
   );
}

export default Footer;
