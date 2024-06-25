import { format, addDays, subDays, isToday, isTomorrow } from 'date-fns';
import { useState } from 'react';

type propType = {
  date: Date;
  slot: string;
  available: boolean;
};

// Client Component
export const DateNavigationClient = ({ initialDate }:{initialDate:any}) => {
  const [currentDate, setCurrentDate] = useState(new Date(initialDate));

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
        <button className="rounded-full bg-white" onClick={handlePrevClick}>
          Prev
        </button>
      </div>

      <div className="flex justify-between px-8">
        {dates.map((dateObj, index) => (
          <div key={index} className="text-center">
            <div className="font-aktiv-medium text-xl py-4 mx-10 px-10">
              <button onClick={() => { }}>
                {dateObj.label}
              </button>
            </div>
            <div className="text-blue-600 font-aktiv-regular text-xl mx-10 px-10">{`8 Available`}</div>
          </div>
        ))}
      </div>
      <div className='px-8'>
        <button className="rounded-full bg-white" onClick={handleNextClick}>
          Next
        </button>
      </div>
    </div>
  );
};