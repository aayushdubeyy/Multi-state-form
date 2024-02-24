import React from 'react'
import Sidebar from './Sidebar'
import thankyou from "../../images/icon-thank-you.svg"
const SuccessPage = () => {
  return (
    <div className='flex h-[100%] w-[100%]'>
      <Sidebar page={4}/>
      <div className='flex justify-center items-center flex-col p-20 w-[70%] gap-7'>
        <img src={thankyou} alt="" className='h-20 w-20'/>
        <h1 className='font-bold text-3xl text-[#001530]'>Thank you!</h1>
        <p className=' font-semibold opacity-35 mb-5'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please 
        feel free to email us at padhai_kar@gmail.com.</p>
      </div>
    </div>
  )
}

export default SuccessPage
