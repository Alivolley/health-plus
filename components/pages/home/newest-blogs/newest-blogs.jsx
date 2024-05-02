// Components
import ArticleCard from '@/components/templates/article-card/article-card';

function NewestBlogs() {
   return (
      <div className="px-eighteen customMd:px-[90px]">
         <div className="mx-auto mt-[27px] max-w-[1260px] customMd:mt-[67px]">
            <div>
               <p className="text-center text-[19px] text-[#404040] max-customMd:hidden">مجله سلامت</p>
               <p className="mt-[11px] text-center font-kalamehRegular400 text-[19px] text-[#40404080] max-customMd:hidden">
                  مقالات حوزه سلامت و بهداشت
               </p>
               <p className="font-kalamehSemiBold600 text-sm text-[#404040] customMd:hidden">مجله سلامت</p>
            </div>
            <div className="mt-[9px] flex items-center gap-[9px] max-customMd:overflow-x-auto customMd:mt-[45px] customMd:gap-[22px]">
               <ArticleCard />
               <ArticleCard />
               <ArticleCard />
               <ArticleCard />
            </div>
         </div>
      </div>
   );
}

export default NewestBlogs;
