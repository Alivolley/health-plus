// MUI
import { LinearProgress } from '@mui/material';

function LoadingComponent() {
   return (
      <div className="rounded-10 bg-[#000000a2] p-5">
         <div className="mt-1 w-20">
            <LinearProgress sx={{ height: '6px' }} />
         </div>
      </div>
   );
}

export default LoadingComponent;
