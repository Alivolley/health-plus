// Components
import HomeBanner from '@/components/pages/home/home-banner/home-banner';
import SuggestedDoctors from '@/components/pages/home/suggested-doctors/suggested-doctors';

export default function Home() {
   return (
      <div>
         <HomeBanner />
         <SuggestedDoctors />
      </div>
   );
}
