import Image from 'next/image';

// Icons
import { PiStarFill } from 'react-icons/pi';

// Assets
import doctorProfileSample from '@/assets/images/doctorProfileSample.png';

function SuggestDoctorCard() {
   return (
      <div
         className="w-[89px] rounded-[9px] bg-white px-[7px] pb-[7px] pt-[10.5px] max-customMd:shrink-0
          customMd:w-[191px] customMd:rounded-[19px] customMd:px-15 customMd:pb-15 customMd:pt-[23px]"
         style={{ background: '0px 3.75px 11.25px 0px #0000000D' }}
      >
         <div className="relative mx-auto size-[34px] customMd:size-[75px]">
            <Image src={doctorProfileSample} alt="user profile" fill className="rounded-full object-cover" />
            <div
               className="absolute right-[3px] top-0 size-[6px] rounded-full border border-solid border-white bg-[#63FEAA]
             customMd:right-[8px] customMd:size-3 customMd:border-2"
            />
         </div>
         <p className="mt-[9px] text-center text-[8px] text-textColor1 customMd:mt-15 customMd:text-15">
            دکتر سعیده برزین تند
         </p>
         <p className="mt-1 text-center text-[8px] text-textColor2 customMd:mt-[11px] customMd:text-15">
            متخصص زنان زایمان
         </p>
         <div className="mt-[10px] flex items-center justify-between customMd:mt-[23px]">
            <p
               className="flex h-4 items-center rounded-[4px] bg-[#E5FAFF] px-1 font-kalamehSemiBold600
             text-[6px] text-primaryBlue customMd:h-[34px] customMd:rounded-10 customMd:px-15 customMd:text-xs"
            >
               ۱۰۰۰+ مشاوره
            </p>
            <div
               className="flex h-4 items-center bg-[#FFF4DC] px-1 font-kalamehSemiBold600 text-[8px]
             text-[#FFAF03] customMd:h-[34px] customMd:gap-1 customMd:rounded-10 customMd:px-[13px] customMd:text-xs"
            >
               ۴.۴
               <PiStarFill />
            </div>
         </div>
      </div>
   );
}

export default SuggestDoctorCard;
