import React from 'react'
import "./FirstPage.css"
import Sidebar from './Sidebar'
const FirstPage = ({formData, setFormData, setFormPageNumber}) => {
    // const cardData = [{id: 1,info: "YOUR INFO"}, {id: 2,info: "SELECT PLAN"}, {id: 3,info: "ADD-ONS"}, {id: 4,info: "SUMMARY"}]
    const submitFirstFormHandler = (e) => {
      e.preventDefault();
      setFormPageNumber(2);
      // console.log(formData);
    }
    const changeHandler = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      })
  
    }
  return (
    <div className='flex h-[100%] w-[100%]'>
      <Sidebar page={1}/>
      <div className='flex flex-col w-[70%] px-12 py-9'>
        <form onSubmit={submitFirstFormHandler} className='flex flex-col gap-3'>
          <h1 className='font-bold text-3xl md:font-semibold'>Personal info</h1>
          <p className='font-bold opacity-35'>Please provide your name, email and phone number.</p>
          <div className='flex flex-col'>

            <label htmlFor="fullName" className='font-medium'>Name</label>
            <input type="text" name="fullName" id="fullName" required className=' border-[#DBDADF] border-2 rounded-md h-10 px-2' onChange={
              changeHandler
            } value={formData.fullName}/>
          </div>
          <div className='flex flex-col'>
            <label htmlFor="email" className='font-medium'>Email Address</label>
            <input type="email" name="email" id="email" required className=' border-[#DBDADF] border-2 rounded-md h-10 px-2' 
            onChange={changeHandler} value={formData.email}/>

          </div>
          <div className='flex flex-col'>
            <label htmlFor="phoneNumber" className='font-medium'>Phone Number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" required className=' border-[#DBDADF] border-2 rounded-md h-10 px-2' 
            onChange={changeHandler} value={formData.phoneNumber}/>
          </div>
          <div className='flex justify-end pt-5'>
              <button className='text-white bg-[#174A8B] w-fit p-3 flex justify-end rounded-md'>Next Step</button>        
          </div>
        </form>
      </div>
    </div>
  )
}

export default FirstPage
