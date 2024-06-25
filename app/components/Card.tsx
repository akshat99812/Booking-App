'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const Card=()=>{
   const router =useRouter()
    return(
    <div className="w-full mx-10 shadow-custom-red border border-custom-pink pl-6 pt-10 ">
        <div className="flex justify-between">
         <div className="border-r-2 w-1/2 flex">
         <div className=''>
            <Image       className='border-2 rounded-full border-custom-red-2'
                        src="/images/baby-modified.png"
                        alt="girl"
                        width={200} 
                        height={200}
                    />
            </div>
            <div className='ml-8'>
              <div className='text-3xl font-medium font-aktiv-medium'>
              Ridhima Sen
              </div>
              <div className=' text-xl font-aktiv-regular text-custom-grey'>
               Consulting Leader
              </div>
              <div className='font-aktiv-regular text-custom-grey  '>
              <div className='py-2 text-base flex'>
                 <div className='pr-4 '>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_14_694)">
                    <path d="M6.66683 9.16683C7.7719 9.16683 8.83171 8.72784 9.61311 7.94644C10.3945 7.16504 10.8335 6.10523 10.8335 5.00016C10.8335 3.89509 10.3945 2.83529 9.61311 2.05388C8.83171 1.27248 7.7719 0.833496 6.66683 0.833496C5.56176 0.833496 4.50195 1.27248 3.72055 2.05388C2.93915 2.83529 2.50016 3.89509 2.50016 5.00016C2.50016 6.10523 2.93915 7.16504 3.72055 7.94644C4.50195 8.72784 5.56176 9.16683 6.66683 9.16683ZM6.66683 9.16683C8.34433 9.16683 9.81016 9.80016 10.8527 10.8527C11.4709 11.4792 11.9333 12.2422 12.2027 13.0802M6.66683 9.16683C3.3335 9.16683 0.833496 11.6668 0.833496 15.0002V19.1668H9.16683M10.0002 15.6868L13.4918 18.3335L19.1668 10.8335" stroke="#FC1C00" stroke-width="2"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_14_694">
                    <rect width="20" height="20" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                 </div>
                 <div >
                    Qualified in startup Consulting
                 </div>

                </div>
                <div className='py-2 text-base flex'>
                 <div className='pr-4'>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.25 5H18.75V20H2.5V5H5V3.75H6.25V5H15V3.75H16.25V5ZM17.5 6.25H16.25V7.5H17.5V6.25ZM15 6.25H6.25V7.5H15V6.25ZM5 6.25H3.75V7.5H5V6.25ZM3.75 18.75H17.5V8.75H3.75V18.75ZM2.5 3.75V2.5H1.25V16.25H0V1.25H2.5V0H3.75V1.25H12.5V0H13.75V1.25H16.25V2.5H13.75V3.75H12.5V2.5H3.75V3.75H2.5ZM6.25 13.75V12.5H7.5V13.75H6.25ZM8.75 13.75V12.5H10V13.75H8.75ZM11.25 13.75V12.5H12.5V13.75H11.25ZM13.75 13.75V12.5H15V13.75H13.75ZM6.25 16.25V15H7.5V16.25H6.25ZM8.75 16.25V15H10V16.25H8.75ZM11.25 16.25V15H12.5V16.25H11.25ZM8.75 11.25V10H10V11.25H8.75ZM11.25 11.25V10H12.5V11.25H11.25ZM13.75 11.25V10H15V11.25H13.75Z" fill="#FC1C00"/>
                    </svg>


                 </div>
                 <div>
                   20 Years of experience in consulting
                 </div>

                </div>
                <div className='py-2 text-base flex '>
                 <div className='pr-4'>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.5 13C13.3674 13 13.2402 13.0527 13.1464 13.1464C13.0527 13.2402 13 13.3674 13 13.5C13 13.6326 13.0527 13.7598 13.1464 13.8536C13.2402 13.9473 13.3674 14 13.5 14H15.5C15.6326 14 15.7598 13.9473 15.8536 13.8536C15.9473 13.7598 16 13.6326 16 13.5C16 13.3674 15.9473 13.2402 15.8536 13.1464C15.7598 13.0527 15.6326 13 15.5 13H13.5ZM2 6.75C2 6.02065 2.28973 5.32118 2.80546 4.80546C3.32118 4.28973 4.02065 4 4.75 4H15.25C15.9793 4 16.6788 4.28973 17.1945 4.80546C17.7103 5.32118 18 6.02065 18 6.75V13.25C18 13.9793 17.7103 14.6788 17.1945 15.1945C16.6788 15.7103 15.9793 16 15.25 16H4.75C4.02065 16 3.32118 15.7103 2.80546 15.1945C2.28973 14.6788 2 13.9793 2 13.25V6.75ZM4.75 5C4.28587 5 3.84075 5.18437 3.51256 5.51256C3.18437 5.84075 3 6.28587 3 6.75V8H17V6.75C17 6.28587 16.8156 5.84075 16.4874 5.51256C16.1592 5.18437 15.7141 5 15.25 5H4.75ZM17 9H3V13.25C3 14.216 3.784 15 4.75 15H15.25C15.7141 15 16.1592 14.8156 16.4874 14.4874C16.8156 14.1592 17 13.7141 17 13.25V9Z" fill="#FC1C00"/>
                    </svg>

                 </div>
                 <div>
                    Consultation fee ₹1000
                 </div>

                </div>

              </div>

            </div>
         </div>
         <div className="w-1/2">
         <div className='ml-8'>
              <div className='text-3xl font-medium  font-aktiv-medium'>
              Consultation Prices
              </div>
              
              <div className='font-aktiv-regular text-custom-gray flex '>
              <div className='py-2 text-base flex'>
                 <div className='pr-2 mt-1'>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1743 17.7085C15.2307 17.7085 17.7085 15.2307 17.7085 12.1743C17.7085 9.11787 15.2307 6.64014 12.1743 6.64014C9.11787 6.64014 6.64014 9.11787 6.64014 12.1743C6.64014 15.2307 9.11787 17.7085 12.1743 17.7085Z" stroke="#FC1C00" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.4645 14.2894C10.6285 14.4962 10.8397 14.6607 11.0804 14.769C11.3211 14.8773 11.5843 14.9263 11.8479 14.9119H12.6783C13.0452 14.9119 13.3971 14.7661 13.6566 14.5066C13.916 14.2472 14.0618 13.8952 14.0618 13.5283C14.0618 13.1614 13.916 12.8095 13.6566 12.55C13.3971 12.2905 13.0452 12.1448 12.6783 12.1448H11.7787C11.4117 12.1448 11.0598 11.999 10.8004 11.7395C10.5409 11.4801 10.3951 11.1282 10.3951 10.7612C10.3951 10.3943 10.5409 10.0424 10.8004 9.78292C11.0598 9.52345 11.4117 9.37769 11.7787 9.37769H12.6091C12.8743 9.3478 13.1427 9.38982 13.3861 9.49935C13.6295 9.60887 13.8389 9.78187 13.9924 10.0002M12.1937 8.61685V15.5344M6.87285 10.2885C6.6862 10.1136 6.5376 9.90203 6.43631 9.66711C6.33501 9.43219 6.2832 9.17893 6.2841 8.9231V7.12435C6.28311 6.8788 6.33075 6.63547 6.42428 6.40842C6.5178 6.18137 6.65536 5.97509 6.82901 5.80147C7.00267 5.62785 7.20899 5.49034 7.43606 5.39687C7.66313 5.30339 7.90646 5.25581 8.15202 5.25685C8.42951 5.26186 8.70273 5.32616 8.95332 5.44546C9.20392 5.56476 9.42609 5.73628 9.60494 5.94852M5.4541 7.26269H7.80619M5.4541 8.64602H7.80619" stroke="#FC1C00" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.67523 13.2393C5.701 13.0322 4.80072 12.566 4.06936 11.8898C3.33799 11.2137 2.80266 10.3527 2.51982 9.39771C2.23698 8.4427 2.21712 7.42906 2.46233 6.4637C2.70753 5.49834 3.20873 4.61705 3.91304 3.91279C4.61735 3.20852 5.49867 2.70739 6.46404 2.46224C7.42942 2.21709 8.44306 2.23702 9.39805 2.51992C10.353 2.80282 11.214 3.33821 11.8901 4.06961C12.5662 4.80102 13.0323 5.70133 13.2394 6.67558" stroke="#FC1C00" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>

                 </div>
                 <div>
                    <div className='text-lg text-custom-grey'>
                        30 min session
                    </div>
                    <div className='text-lg text-black font-aktiv-bold'>
                    ₹1000
                    </div>
                 </div>
                 

                </div>
                <div className='py-2 text-base flex'>
                 <div className='pl-8 pr-2 mt-1'>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.1743 17.7085C15.2307 17.7085 17.7085 15.2307 17.7085 12.1743C17.7085 9.11787 15.2307 6.64014 12.1743 6.64014C9.11787 6.64014 6.64014 9.11787 6.64014 12.1743C6.64014 15.2307 9.11787 17.7085 12.1743 17.7085Z" stroke="#FC1C00" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10.4645 14.2894C10.6285 14.4962 10.8397 14.6607 11.0804 14.769C11.3211 14.8773 11.5843 14.9263 11.8479 14.9119H12.6783C13.0452 14.9119 13.3971 14.7661 13.6566 14.5066C13.916 14.2472 14.0618 13.8952 14.0618 13.5283C14.0618 13.1614 13.916 12.8095 13.6566 12.55C13.3971 12.2905 13.0452 12.1448 12.6783 12.1448H11.7787C11.4117 12.1448 11.0598 11.999 10.8004 11.7395C10.5409 11.4801 10.3951 11.1282 10.3951 10.7612C10.3951 10.3943 10.5409 10.0424 10.8004 9.78292C11.0598 9.52345 11.4117 9.37769 11.7787 9.37769H12.6091C12.8743 9.3478 13.1427 9.38982 13.3861 9.49935C13.6295 9.60887 13.8389 9.78187 13.9924 10.0002M12.1937 8.61685V15.5344M6.87285 10.2885C6.6862 10.1136 6.5376 9.90203 6.43631 9.66711C6.33501 9.43219 6.2832 9.17893 6.2841 8.9231V7.12435C6.28311 6.8788 6.33075 6.63547 6.42428 6.40842C6.5178 6.18137 6.65536 5.97509 6.82901 5.80147C7.00267 5.62785 7.20899 5.49034 7.43606 5.39687C7.66313 5.30339 7.90646 5.25581 8.15202 5.25685C8.42951 5.26186 8.70273 5.32616 8.95332 5.44546C9.20392 5.56476 9.42609 5.73628 9.60494 5.94852M5.4541 7.26269H7.80619M5.4541 8.64602H7.80619" stroke="#FC1C00" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M6.67523 13.2393C5.701 13.0322 4.80072 12.566 4.06936 11.8898C3.33799 11.2137 2.80266 10.3527 2.51982 9.39771C2.23698 8.4427 2.21712 7.42906 2.46233 6.4637C2.70753 5.49834 3.20873 4.61705 3.91304 3.91279C4.61735 3.20852 5.49867 2.70739 6.46404 2.46224C7.42942 2.21709 8.44306 2.23702 9.39805 2.51992C10.353 2.80282 11.214 3.33821 11.8901 4.06961C12.5662 4.80102 13.0323 5.70133 13.2394 6.67558" stroke="#FC1C00" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>



                 </div>
                 <div>
                     <div className='text-lg text-custom-grey'>
                 01 hr session
                 </div>
                    <div className='text-lg text-black font-aktiv-bold'>
                    ₹1500
                    </div>
                 </div>
                

                </div>
                <div className='py-2 text-base flex '>
                 <div className='pl-8 mt-1 pr-2'>
                 <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.99984 17.0832C13.9119 17.0832 17.0832 13.9119 17.0832 9.99984C17.0832 6.08782 13.9119 2.9165 9.99984 2.9165C6.08782 2.9165 2.9165 6.08782 2.9165 9.99984C2.9165 13.9119 6.08782 17.0832 9.99984 17.0832Z" stroke="#FC1C00"/>
                <path d="M13.75 9.99967H10.2083C10.1531 9.99967 10.1001 9.97773 10.061 9.93866C10.0219 9.89959 10 9.84659 10 9.79134V7.08301" stroke="#FC1C00" stroke-linecap="round"/>
                </svg>

                 </div>
                 <div>
                    <div className='text-lg text-custom-grey'>
                 Availability
                 </div>
                 <div className='text-lg text-black font-aktiv-bold '>
                 ₹1000
                 </div>
                 </div>
                 
                 

                </div>

              </div>

            </div>
            <div className='flex justify-center mt-20'>
            <div>
                    <button onClick={()=>{
                     router.push('/bookings')
                    }} className="border-0 border-rounded rounded-full bg-custom-text-color px-20 py-2 text-white text-3xl text-black font-aktiv-bold">
                    Book Now
                    </button>
                </div>
             </div>
         </div>
         
        </div>
        <div className='px-4 mb-20'>
            <div className='text-3xl text-black font-aktiv-regular '>
                Skills
            </div>
            <div className='flex mt-4 justify-between'>
                <div className='border-2 border-custom-peach-200 text-lg border-rounded rounded-full py-2 px-6 bg-custom-peach-100 text-custom-text-color'>
                Marketing Consulting
                </div>
                <div className='border-2 border-custom-peach-200 text-lg border-rounded rounded-full py-2 px-6 bg-custom-peach-100 text-custom-text-color'>
                Accounts Consulting
                </div>
                <div className='border-2 border-custom-peach-200 text-lg border-rounded rounded-full py-2 px-6 bg-custom-peach-100 text-custom-text-color'>
                Buisness Consulting
                </div>
                <div className='border-2 border-custom-peach-200 text-lg border-rounded rounded-full py-2 px-6 bg-custom-peach-100 text-custom-text-color'>
                Buisness Consulting
                </div>
                <div className='border-2 border-custom-peach-200 text-lg border-rounded rounded-full py-2 px-6 bg-custom-peach-100 text-custom-text-color'>
                Buisness Consulting
                </div>
            </div>
        </div>
    </div>
    )
}

