import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

// MUI
import { Button } from '@mui/material';

const categoryBtnSx = {
   borderRadius: '5px',
   fontSize: '15px',
   justifyContent: 'start',
   paddingLeft: '30px',
};

function ChangeCategoryBox() {
   const [chosenCategory, setChosenCategory] = useState('');

   const { push, query } = useRouter();

   const changeCategoryHandler = cat => {
      setChosenCategory(cat);
      push(
         {
            query: {
               ...query,
               category: cat,
            },
         },
         undefined,
         { scroll: false }
      );
   };

   useEffect(() => {
      setChosenCategory(query?.category || '');
   }, [query]);

   return (
      <div className="space-y-[30px]">
         <Button
            fullWidth
            onClick={() => changeCategoryHandler('')}
            className="h-[50px] customMd:h-[60px]"
            sx={{
               ...categoryBtnSx,
               ...(chosenCategory === ''
                  ? {
                       backgroundColor: '#2ED7FE80',
                       color: 'white',
                    }
                  : {
                       backgroundColor: 'white',
                       border: '1px solid #2ED7FE40',
                       color: 'black',
                    }),
            }}
         >
            همه
         </Button>
         <Button
            fullWidth
            onClick={() => changeCategoryHandler('nursing')}
            className="h-[50px] customMd:h-[60px]"
            sx={{
               ...categoryBtnSx,
               ...(chosenCategory === 'nursing'
                  ? {
                       backgroundColor: '#2ED7FE80',
                       color: 'white',
                    }
                  : {
                       backgroundColor: 'white',
                       border: '1px solid #2ED7FE40',
                       color: 'black',
                    }),
            }}
         >
            پرستاری و تزریقات
         </Button>
         <Button
            fullWidth
            onClick={() => changeCategoryHandler('generalPractitioner')}
            className="h-[50px] customMd:h-[60px]"
            sx={{
               ...categoryBtnSx,
               ...(chosenCategory === 'generalPractitioner'
                  ? {
                       backgroundColor: '#2ED7FE80',
                       color: 'white',
                    }
                  : {
                       backgroundColor: 'white',
                       border: '1px solid #2ED7FE40',
                       color: 'black',
                    }),
            }}
         >
            پزشک عمومی
         </Button>
         <Button
            fullWidth
            onClick={() => changeCategoryHandler('specialistDoctor')}
            className="h-[50px] customMd:h-[60px]"
            sx={{
               ...categoryBtnSx,
               ...(chosenCategory === 'specialistDoctor'
                  ? {
                       backgroundColor: '#2ED7FE80',
                       color: 'white',
                    }
                  : {
                       backgroundColor: 'white',
                       border: '1px solid #2ED7FE40',
                       color: 'black',
                    }),
            }}
         >
            پزشک متخصص
         </Button>
         <Button
            fullWidth
            onClick={() => changeCategoryHandler('therapy')}
            className="h-[50px] customMd:h-[60px]"
            sx={{
               ...categoryBtnSx,
               ...(chosenCategory === 'therapy'
                  ? {
                       backgroundColor: '#2ED7FE80',
                       color: 'white',
                    }
                  : {
                       backgroundColor: 'white',
                       border: '1px solid #2ED7FE40',
                       color: 'black',
                    }),
            }}
         >
            فیزیوتراپی / سونوگرافی / رادیولوژی
         </Button>
      </div>
   );
}

export default ChangeCategoryBox;
