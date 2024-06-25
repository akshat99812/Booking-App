import { useState } from "react";

export const GiantButtons=()=>{
    const [startup,isStartup]=useState(true);

    const handleClick=()=>{
        isStartup(!startup);
        
    }
    return (
        <div className="flex justify-center">
                <div className="flex justfy-center">
                    <div className="font-aktiv-regular text-3xl  py-2 px-3 bg-custom-grey-100 border-0 border-rounded rounded-lg">
                        <button className={`${startup ? 'bg-custom-peach-300' : 'bg-custom-grey-100'} ${startup ? 'text-custom-text-color' : 'text-custom-grey'} border-0 border-rounded rounded-lg py-4  px-7 `} onClick={handleClick}>
                        Startup Consulting
                        </button>
                    </div>
                    <div className="font-aktiv-regular text-3xl text-custom-text-color py-2 px-3 bg-custom-grey-100 border-0 border-rounded rounded-lg">
                        <button  className={`${!startup ? 'bg-custom-peach-300' : 'bg-custom-grey-100'} ${!startup ? 'text-custom-text-color' : 'text-custom-grey'} border-0 border-rounded rounded-lg py-4 px-7`} onClick={handleClick}>
                        Career Consulting
                        </button>
                    </div>
                </div>

            </div>
    )
}