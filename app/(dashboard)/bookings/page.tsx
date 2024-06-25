'use client'
import { Card2 } from "../../components/Card2";
import { Navbar } from "../../components/Navbar";
import { DateNavigation } from "../../components/DateNav";
import { GiantButtons } from "@/app/components/GiantButtons";
import GetSessions from "@/app/components/GetSessions";
import { PrismaClient } from "@prisma/client";
import { useRouter } from 'next/navigation'


export default  function Home(){
  
    const router =useRouter()
    const prisma = new PrismaClient();

    type BookingStateType = {
        date: Date;
        slot: string;
        available: boolean;
      };


      const paymentHandler=async ()=>{
  
         router.push('/booked')
      }


    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center">
                <Card2></Card2>
            </div>
            <div className='text-3xl text-black font-aktiv-bold ml-24 my-16'>
                Available Slots
            </div>
            <div>
                <GiantButtons></GiantButtons>
            </div>
            
            <div className="flex justify-center">
                    <div>
                        <DateNavigation  ></DateNavigation>
                    </div>
            </div>
            <div>
                <div  className="flex justify-between text-xl mx-10">
                  <div>
                      <div>
                     <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 51.25C41.736 51.25 51.25 41.736 51.25 30C51.25 18.2639 41.736 8.75 30 8.75C18.2639 8.75 8.75 18.2639 8.75 30C8.75 41.736 18.2639 51.25 30 51.25Z" stroke="black"/>
                    <path d="M41.25 30H30.625C30.4592 30 30.3003 29.9342 30.1831 29.8169C30.0658 29.6997 30 29.5408 30 29.375V21.25" stroke="black" stroke-linecap="round"/>
                     </svg>
                    </div>
                    <div className="my-4 font-aktiv-regular text-xl text-custom-grey">
                     30 min
                    </div>
                    <div>
                      <div>
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 51.25C41.736 51.25 51.25 41.736 51.25 30C51.25 18.2639 41.736 8.75 30 8.75C18.2639 8.75 8.75 18.2639 8.75 30C8.75 41.736 18.2639 51.25 30 51.25Z" stroke="black"/>
                    <path d="M41.25 30H30.625C30.4592 30 30.3003 29.9342 30.1831 29.8169C30.0658 29.6997 30 29.5408 30 29.375V21.25" stroke="black" stroke-linecap="round"/>
                     </svg>
                      </div>
                      <div>
                        01 Hour
                      </div>
                    </div>
                  </div>
                  
                    <div>
                      <GetSessions></GetSessions>
                    </div>
                    
                    </div>
            </div>
            <div className="flex justify-center">
                     <button onClick={paymentHandler} className="my-20 border-0 border-rounded rounded-full bg-custom-text-color px-20 py-2 text-white text-3xl text-black font-aktiv-bold">
                     Proceed To Payment
                    </button>
            </div>
            <div className="flex justify-center mb-44">
           <svg width="1307" height="2" viewBox="0 0 1307 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line y1="1" x2="1307" y2="1" stroke="#D9D9D9" stroke-width="2"/>
            </svg>

      </div>
        </div>
    )
}



