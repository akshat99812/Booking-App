
import React from 'react';
import { useRecoilState } from 'recoil';
import { sessionAtom } from '../store/src/atoms/sessionData';

export const HalfHourTiming = ({ slot, available ,id ,duration}: { slot: string; available: boolean ,id :number ,duration:number}) => {

    const [sId,setSId]=useRecoilState(sessionAtom)

if(duration==30){
    return (
    <div>
      <div className={`border rounded-lg text-xl font-aktiv-medium px-7 py-6 ${!available ? 'bg-custom-grey-100 text-custom-grey  border-custom-grey' : ' text-custom-red border-custom-red '}`}>
        <button onClick={()=>{
             setSId(id);
        }}>
          {slot} PM
        </button>
      </div>
    </div>
  );
}
};