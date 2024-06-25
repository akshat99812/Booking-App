import { Navbar } from "@/app/components/Navbar";
import { Card } from "./../../components/Card";
import { Booking } from "./../../components/Booking";
import MakeBooking from "@/app/components/MakeBooking";

export default function Home() {
  return (
    <div>
      <Navbar></Navbar>

    <div className="flex justify-center" >
      <Card></Card>
    </div>
     <div className='text-3xl text-black font-aktiv-bold ml-24 my-16'>
        Booking Details
      </div>
      <div className="flex justify-center" >
        <MakeBooking></MakeBooking>
      </div>
    
    </div>
  );
}
