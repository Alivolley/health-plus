import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

// MUI
import { Breadcrumbs, Button, Dialog, IconButton, Pagination, Tab, Tabs } from '@mui/material';

// Icons
import { GrFormClose } from 'react-icons/gr';

// Components
import DoctorCard from '@/components/templates/doctor-card/doctor-card';
import MedicalAdviceAside from '@/components/pages/filter-medical-advice/medical-advice-aside/medical-advice-aside';

const filterBtnStyle = {
   backgroundColor: '#2ED7FE0D',
   height: '45px',
   border: 'solid 1px #2ED7FE',
   borderRadius: '10px',
   color: '#404040',
   fontSize: '15px',
   lineHeight: '12px',
};

const filterBtnSx = { backgroundColor: '#4040400D', height: '40px', paddingX: '10px', borderRadius: '5px' };

function FilterMedicalAdvice() {
   const [sortingValue, setSortingValue] = useState('');
   const [showFilterMobile, setShowFilterMobile] = useState(false);
   const [showSortingMobile, setShowSortingMobile] = useState(true);
   const [sortingType, setSortingType] = useState('');

   const { push, query } = useRouter();

   useEffect(() => {
      setSortingValue(query?.ordering || '');
   }, [query]);

   const changeTabHandler = (e, newValue) => {
      setSortingValue(newValue);

      push({
         query: {
            ...query,
            ordering: newValue,
         },
      });
   };

   return (
      <div className="px-eighteen pb-[200px] customMd:px-[90px]">
         <div className="mx-auto max-w-[1260px]">
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
                  <Link
                     href="/filter-medical-advice"
                     key={2}
                     className="text-15 text-textColor2 transition-all duration-200 hover:text-black hover:underline"
                  >
                     متخصص کودکان
                  </Link>,
               ]}
            </Breadcrumbs>
            <div
               className="max-customMd:rounded-lg max-customMd:py-[10px] customMd:mt-15 customMd:!shadow-none"
               style={{
                  boxShadow: '0px 0px 15px 0px #0000000D',
               }}
            >
               <p className="text-[20px] leading-8 text-primaryBlue max-customMd:text-center">
                  مشاوره پزشکی و آنلاین از متخصص کودکان
               </p>
               <p className="mt-15 text-15 leading-7 text-textColor2 max-customMd:hidden">
                  با هلث پلاس می‌توانید ۲۴ ساعته و از همه جای دنیا مشاوره پزشکی و مشاوره روانشناسی بگیرید. هلث پلاس به
                  صورت تخصصی و با حفظ حریم خصوصی، اقدام به ارایه مشاوره آنلاین و مشاوره تلفنی و مشاوره ویدئویی در
                  زمینه‌ی بهترین متخصص کودک و نوزاد کرده است.
               </p>
            </div>

            <div className="mt-5 flex gap-[30px] customMd:mt-[120px]">
               <aside className="h-fit w-[277px] shrink-0 rounded-10 border border-solid border-borderColor max-customLg:hidden">
                  <MedicalAdviceAside />
               </aside>
               <div className="grow">
                  <p
                     className="rounded-10 border border-solid border-borderColor p-4 text-15 leading-3
                   text-textColor2 max-customMd:text-center customMd:p-5 customMd:text-xl customMd:leading-4"
                  >
                     لیست بهترین متخصص کودکان
                  </p>

                  <div className="mt-15 flex items-center gap-5 customLg:hidden">
                     <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowFilterMobile(true)}>
                        فیلتر ها
                     </Button>
                     <Button className="flex-1" sx={filterBtnStyle} onClick={() => setShowSortingMobile(true)}>
                        ترتیب نمایش
                     </Button>
                  </div>
                  <div
                     className="mt-5 hidden items-center gap-[60px] rounded-10 border border-solid
                   border-borderColor px-5 customMd:flex"
                  >
                     <p className="whitespace-nowrap text-xl leading-4 text-secondaryBlue">ترتیب نمایش</p>
                     <div>
                        <Tabs value={sortingValue} onChange={changeTabHandler} variant="scrollable">
                           <Tab
                              label="پیش فرض"
                              value=""
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                           <Tab
                              label="بیشترین امتیاز"
                              value="mostScore"
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                           <Tab
                              label="نزدیک ترین نوبت"
                              value="closestTurn"
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                           <Tab
                              label="بیشترین نوبت موفق"
                              value="mostSuccessfulTurn"
                              sx={{ fontSize: '20px', paddingY: '20px', lineHeight: '16px' }}
                           />
                        </Tabs>
                     </div>
                  </div>
                  <div className="mt-15 space-y-[15px] customMd:mt-[30px] customMd:space-y-[30px]">
                     <DoctorCard />
                     <DoctorCard />
                     <DoctorCard />
                     <DoctorCard />
                     <DoctorCard />
                     <DoctorCard />
                     <DoctorCard />
                  </div>

                  <div className="mt-[30px] flex  justify-center customMd:mt-[60px] customMd:justify-end">
                     <Pagination count={3} variant="outlined" shape="rounded" />
                  </div>
               </div>
            </div>
         </div>

         <Dialog open={showFilterMobile} onClose={() => setShowFilterMobile(false)} dir="rtl">
            <div className="rounded-10">
               <MedicalAdviceAside onClose={() => setShowFilterMobile(false)} />
            </div>
         </Dialog>

         <Dialog open={showSortingMobile} onClose={() => setShowSortingMobile(false)} dir="rtl">
            <div className="p-[30px]">
               <div className="flex items-center justify-between">
                  <p className="font-kalamehSemiBold600 text-xl leading-4 text-textColor1">ترتیب نمایش</p>

                  <IconButton
                     sx={{ width: '25px', height: '25px', backgroundColor: '#2ED7FE80', padding: 0 }}
                     onClick={() => setShowSortingMobile(false)}
                  >
                     <GrFormClose size="20px" color="#000" />
                  </IconButton>
               </div>

               <div className="mt-[35px] space-y-[10px]">
                  <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('')}>
                     <div className="flex w-full items-center justify-between text-textColor2">
                        <p className="text-15">پیش فرض</p>
                        <span
                           className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === '' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                        />
                     </div>
                  </Button>
                  <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('mostScore')}>
                     <div className="flex w-full items-center justify-between text-textColor2">
                        <p className="text-15">بیشترین امتیاز</p>
                        <span
                           className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'mostScore' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                        />
                     </div>
                  </Button>
                  <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('closestTurn')}>
                     <div className="flex w-full items-center justify-between text-textColor2">
                        <p className="text-15">نزدیک ترین نوبت</p>
                        <span
                           className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'closestTurn' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                        />
                     </div>
                  </Button>
                  <Button fullWidth sx={filterBtnSx} onClick={() => setSortingType('mostSuccessTurn')}>
                     <div className="flex w-full items-center justify-between text-textColor2">
                        <p className="text-15">بیشترین نوبت موفق</p>
                        <span
                           className={`size-[15px] rounded-full transition-all duration-200 ${sortingType === 'mostSuccessTurn' ? 'bg-primaryBlue' : 'bg-[#40404033]'}`}
                        />
                     </div>
                  </Button>
               </div>

               <div className="mt-[60px]">
                  <Button
                     fullWidth
                     variant="contained"
                     sx={{
                        borderRadius: '5px',
                        height: '40px',
                        color: 'white',
                        fontSize: '15px',
                        fontFamily: 'kalamehSemiBold600',
                     }}
                  >
                     تایید
                  </Button>
               </div>
            </div>
         </Dialog>
      </div>
   );
}

export default FilterMedicalAdvice;
