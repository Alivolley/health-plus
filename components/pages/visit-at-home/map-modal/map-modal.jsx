// MUI
import { Dialog } from '@mui/material';

// Neshan
import { Map } from '@neshan-maps-platform/ol';
import NeshanMap, { NeshanMapRef } from '@neshan-maps-platform/react-openlayers';

function MapModal({ showMapModal, setShowMapModal }) {
   return (
      <Dialog open={showMapModal} onClose={() => setShowMapModal(false)} dir="rtl" fullWidth maxWidth="md">
         <div>
            <NeshanMap mapKey="web.0cddec11cfd3421d9b33fdfc92e0d2bb" />
         </div>
      </Dialog>
   );
}

export default MapModal;
