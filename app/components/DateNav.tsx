
'use-client'
import React, { useState } from 'react';
import { format, addDays, subDays ,isToday ,isTomorrow } from 'date-fns';

type propType={
    date: Date;
    slot: string;
    available: boolean;
}

export const DateNavigation = () => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextClick = () => {
    setCurrentDate(addDays(currentDate, 1));
  };

  const handlePrevClick = () => {
    setCurrentDate(subDays(currentDate, 1));
  };


  const getLabel = (date: Date) => {
    if (isToday(date)) return 'Today';
    if (isTomorrow(date)) return 'Tomorrow';
    return format(date, 'eee, MMM d');
  };

  const dates = [
    { label: getLabel(currentDate), date: currentDate },
    { label: getLabel(addDays(currentDate, 1)), date: addDays(currentDate, 1) },
    { label: getLabel(addDays(currentDate, 2)), date: addDays(currentDate, 2) },
  ];


  return (
    <div className="flex justify-between my-10 mx-10"> 
     <div className='px-4'>
        <button className="rounded-full bg-white " onClick={handlePrevClick}  >
        <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_14_673)">
        <circle cx="44" cy="40" r="40" fill="white"/>
        </g>
        <path d="M29.6001 41.6L51.2001 63.2L54.5601 59.6L36.8001 41.6L54.5601 23.6L51.2001 20L29.6001 41.6Z" fill="#FC1C00"/>
        <defs>
        <filter id="filter0_d_14_673" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_673"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_673" result="shape"/>
        </filter>
        </defs>
         </svg>
      </button> 
    </div>
    
      <div className="flex justify-between  px-8 ">
        {dates.map((dateObj, index) => (
          <div key={index} className="text-center  ">
            <div className="font-aktiv-medium text-xl py-4  mx-10 px-10">
                <button onClick={()=>{
                  
                }}>{dateObj.label}</button>
            </div>
            <div className="text-blue-600 font-aktiv-regular text-xl  mx-10 px-10">{`8 Available`}</div>
          </div>
        ))}
      </div>
      <div className='px-8'>
      <button className="rounded-full bg-white " onClick={handleNextClick}>
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#filter0_d_14_677)">
        <circle cx="44" cy="40" r="40" fill="white"/>
        </g>
        <path d="M40.0006 20L36.6406 23.6L54.4006 41.6L36.6406 59.6L40.0006 63.2L61.6006 41.6L40.0006 20Z" fill="#FC1C00"/>
        <defs>
        <filter id="filter0_d_14_677" x="0" y="0" width="88" height="88" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="4"/>
        <feGaussianBlur stdDeviation="2"/>
        <feComposite in2="hardAlpha" operator="out"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_14_677"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_14_677" result="shape"/>
        </filter>
        </defs>
        </svg>
      </button>
      </div>
     
    </div>
  );
};

// import React, { useState } from 'react';
// import { format, addDays, subDays ,isToday ,isTomorrow } from 'date-fns';

// type propType={
//     date: Date;
//     slot: string;
//     available: boolean;
// }

// export const DateNavigation = () => {
//   const [currentDate, setCurrentDate] = useState(new Date());

//   const handleNextClick = () => {
//     setCurrentDate(addDays(currentDate, 1));
//   };

//   const handlePrevClick = () => {
//     setCurrentDate(subDays(currentDate, 1));
//   };


//   const getLabel = (date: Date) => {
//     if (isToday(date)) return 'Today';
//     if (isTomorrow(date)) return 'Tomorrow';
//     return format(date, 'eee, MMM d');
//   };

//   const dates = [
//     { label: getLabel(currentDate), date: currentDate },
//     { label: getLabel(addDays(currentDate, 1)), date: addDays(currentDate, 1) },
//     { label: getLabel(addDays(currentDate, 2)), date: addDays(currentDate, 2) },
//   ];


//   return (
//     <div className="flex justify-between my-10 mx-10"> 
//      <div className='px-4'>
//         <button className="rounded-full bg-white " onClick={handlePrevClick}  >
       
//       </button> 
//     </div>
    
//       <div className="flex justify-between  px-8 ">
//         {dates.map((dateObj, index) => (
//           <div key={index} className="text-center  ">
//             <div className="font-aktiv-medium text-xl py-4  mx-10 px-10">
//                 <button onClick={()=>{
                  
//                 }}>{dateObj.label}</button>
//             </div>
//             <div className="text-blue-600 font-aktiv-regular text-xl  mx-10 px-10">{`8 Available`}</div>
//           </div>
//         ))}
//       </div>
//       <div className='px-8'>
//       <button className="rounded-full bg-white " onClick={handleNextClick}>
      
//       </button>
//       </div>
     
//     </div>
//   );
// };


