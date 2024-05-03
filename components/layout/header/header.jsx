import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// MUI
import { Button, Fab, IconButton } from '@mui/material';

// Icons
import { CiSearch } from 'react-icons/ci';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { Category, User } from 'iconsax-react';

// Assets
import logoPic from '@/assets/images/logo.png';

// Styles
import HeaderStyle from './header.style';

// Components
import MobileMenu from '../mobile-menu/mobile-menu';

function Header() {
   const [showMobileMenu, setShowMobileMenu] = useState(false);

   const formSubmitHandler = e => {
      e.preventDefault();
   };

   return (
      <HeaderStyle className="fixed inset-x-0 top-0 z-10 bg-white px-eighteen pb-2 pt-eighteen customMd:px-[90px] customMd:py-[21px]">
         <div className="mx-auto max-w-[1260px]">
            <div className="flex items-center justify-between">
               <div className="hidden items-center gap-3 customLg:flex xl:gap-[37.5px]">
                  <Link href="/" className="relative block w-[106px]">
                     <Image src={logoPic} alt="logo" className="size-full" />
                  </Link>
                  <div className="flex items-center gap-3 xl:gap-[37.5px]">
                     <div id="dropdownWrapper">
                        <div
                           className="flex items-center gap-1 text-15 text-[#40404080] transition-all duration-200"
                           id="dropdownText"
                        >
                           مشاور آنلاین
                           <MdOutlineKeyboardArrowDown id="dropdownArrow" className="transition-all duration-200" />
                        </div>
                        <div
                           id="dropdownBox"
                           className="flex flex-col gap-5 rounded-10 border border-solid border-[#2ED7FE80] bg-white p-5"
                        >
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص زنان و زایمان
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص داخلی
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص قلب و عروق
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص پوست و مو
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص روانپزشک
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص جراج
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص دندانپزشک
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص مغز و اعصاب
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              متخصص تغذیه
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              مشاهده تمام تخصص ها
                           </Link>
                        </div>
                     </div>
                     <Link href="/" className="text-15 text-[#40404080]">
                        نوبت دهی
                     </Link>
                     <Link href="/" className="text-15 text-[#40404080]">
                        داروخانه
                     </Link>
                     <div id="dropdownWrapper">
                        <div
                           className="flex items-center gap-1 text-15 text-[#40404080] transition-all duration-200"
                           id="dropdownText"
                        >
                           پزشک در منزل
                           <MdOutlineKeyboardArrowDown id="dropdownArrow" className="transition-all duration-200" />
                        </div>
                        <div
                           id="dropdownBox"
                           className="flex flex-col gap-5 rounded-10 border border-solid border-[#2ED7FE80] bg-white p-5"
                        >
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              ویزیت پزشک در منزل
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              آزمایش در منزل
                           </Link>
                           <Link
                              href="/"
                              className="flex items-center gap-[5px] whitespace-nowrap text-[#40404080] transition-all duration-200 hover:text-primaryBlue"
                           >
                              <span className="mt-1 size-[5px] rounded-full bg-[#2ED7FE80]" />
                              پرستاری در منزل
                           </Link>
                        </div>
                     </div>
                     <Link href="/" className="text-15 text-[#40404080]">
                        مجله سلامت
                     </Link>
                  </div>
               </div>

               <div className="customLg:hidden">
                  <Fab
                     color="primary"
                     sx={{ width: '21px', height: '21px', borderRadius: '6px' }}
                     onClick={() => setShowMobileMenu(true)}
                  >
                     <Category size="15" color="#FFf" />
                  </Fab>
               </div>
               <div className="customLg:hidden">
                  <Link href="/" className="relative block w-[138px]">
                     <Image src={logoPic} alt="logo" className="size-full" />
                  </Link>
               </div>
               <div className="customMd:hidden">
                  <Fab color="primary" sx={{ width: '21px', height: '21px', borderRadius: '6px' }}>
                     <User size="15" color="#FFf" />
                  </Fab>
               </div>

               <div className="hidden items-center gap-[22.5px] customMd:flex">
                  <form
                     className="flex h-[34px] min-w-[285px] items-center rounded-2xl bg-[#70707026] px-1"
                     onSubmit={formSubmitHandler}
                  >
                     <IconButton type="submit">
                        <CiSearch color="#70707080" />
                     </IconButton>
                     <input
                        type="text"
                        placeholder="جستجو پزشک یا خدمات پزشکی"
                        className="size-full border-none bg-transparent font-kalamehMedium500 outline-none placeholder:text-[#70707080]"
                     />
                  </form>

                  <Link href="/">
                     <Button
                        variant="contained"
                        sx={{
                           color: 'white',
                           paddingX: '16px',
                           height: '34px',
                           borderRadius: '16px',
                           fontSize: '12px',
                           gap: '7.5px',
                        }}
                     >
                        ورود
                        <p>|</p>
                        ثبت نام
                     </Button>
                  </Link>
               </div>
            </div>
            <form
               className="mt-6 flex h-[43px] items-center rounded-lg bg-[#70707026] customMd:hidden"
               onSubmit={formSubmitHandler}
            >
               <IconButton type="submit">
                  <CiSearch color="#70707080" />
               </IconButton>
               <input
                  type="text"
                  placeholder="جستجو پزشک یا خدمات پزشکی"
                  className="size-full border-none bg-transparent font-kalamehMedium500 text-xs outline-none placeholder:text-[#70707080]"
               />
            </form>
         </div>
         <MobileMenu open={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
      </HeaderStyle>
   );
}

export default Header;
