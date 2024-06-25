import { atom } from "recoil";

export const bookingState = atom({
    key: 'bookingState', 
    default: {
        date:new Date(),
        slot:" ",
        available:true
    }, 
  });