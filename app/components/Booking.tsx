import Image from 'next/image';

type PropsType ={
    date: Date,
    available: boolean,
    type:number,
    slot:string,
    duration:number
}

export const Booking =({ date, available, type ,slot,duration }: PropsType)=>{
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        };
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, options);
      };
    if(!available){
    return(
        <div className="border boder-rounded rounded-lg w-full border-custom-grey-100 flex justify-between">
            <div className='mt-10 mx-10'>
                <div className='py-2'>
                <Image 
                        src="/images/booking1.png"
                        alt="booking"
                        width={50} 
                        height={50}
                    />
                </div>
                <div className='font-aktiv-medium text-lg py-2'>
                Booking ID
                </div>
                <div className='font-aktiv-regular text-lg text-custom-grey py-2'>
                {Math.floor(Math.random()*1000000)}
                </div>
            </div>
            <div className='mt-10 mx-10'>
                <div className='py-2'>
                <Image 
                        src="/images/booking2.png"
                        alt="booking"
                        width={50} 
                        height={50}
                    />
                </div>
                <div className='font-aktiv-medium text-lg py-2'>
                Consultation Category
                </div>
                <div className='font-aktiv-regular text-lg text-custom-grey py-2'>
                {type==3 ? 'Startup Consulation' : 'Career Consulation'}
                </div>
            </div>
            <div className='mt-10 mx-10'>
                <div className='py-2'>
                <Image 
                        src="/images/booking3.png"
                        alt="booking"
                        width={50} 
                        height={50}
                    />
                </div>
                <div className='font-aktiv-medium text-lg py-2'>
                Session Time & date
                </div>
                <div className='font-aktiv-regular text-lg text-custom-grey py-2'>
                {formatDate(date.toString())}
                </div>
                <div className='font-aktiv-regular text-lg text-custom-grey py-2'>
                {slot} PM
                </div>
                <div className='font-aktiv-regular text-lg text-custom-grey py-2'>
                01 Hrs
                </div>
            </div>
            <div className='mt-10 mx-10'>
                <div className='py-2'>
                <Image 
                        src="/images/booking4.png"
                        alt="booking"
                        width={50} 
                        height={50}
                    />
                </div>
                <div className='font-aktiv-medium text-lg py-2 '>
                Booking Status
                </div>
                <div className='font-aktiv-regular text-lg text-custom-grey my-2 bg-custom-purple-200 text-custom-purple-100 px-5 py-2 border-0 border-rounded rounded-full'>
                {available ? 'Not Confirmed' : 'Confirmed'}
                </div>
            </div>
            <div>
                <button className='my-36 mx-10 font-aktiv-medium text-2xl text-custom-text-color border-custom-text-color border-2 boder-rounded rounded-full px-20 py-2'>
                    Join Session
                </button>
            </div>
        </div>
    )
}
}