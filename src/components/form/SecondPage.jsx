import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import arcade from "../../images/icon-arcade.svg"
import advanced from "../../images/icon-advanced.svg"
import pro from "../../images/icon-pro.svg"
import "./SecondPage.css"
const SecondPage = ({formData, setFormData, setFormPageNumber, setTotalSum}) => {
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [checkboxSelected, setCheckboxSelected] = useState(true);

  useEffect(() =>{
    console.log("USE EFFECT",formData)
  }, [formData])
  const handleItemClick = (id) => {
    console.log("ID: ", id);
    if (selectedItemId === id) {
      console.log("NULL...")
      setSelectedItemId(null);
    } else {
      console.log("UPDATING...")
      setSelectedItemId(id);
      setFormData({
        ...formData,
        planType: secondPageData[id-1].para ,
        planPrice: secondPageData[id-1].para === "Yearly" ? secondPageData[id-1].ycost : secondPageData[id-1].mcost
      })
      console.log("FORM DATA: ", formData)
    }
  };

  const changeHandler = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.checked ? "Monthly" : "Yearly" 
    })
    setCheckboxSelected(!checkboxSelected);
    console.log(formData)
  }

  const clickHandler = (e) => {
    e.preventDefault();
    setFormPageNumber(3);
    console.log("FINAL...",formData);
  }

  const secondPageData = [{id:1, source:arcade, para: "Arcade", monthPrice:"$9/mo", yearPrice:"$90/yr", mcost:9, ycost:90 }, {id:2, source:advanced, para: "Advanced", monthPrice:"$12/mo", yearPrice:"$120/yr", mcost:12, ycost:120 }, {id:3, source:pro, para: "Pro", monthPrice:"$15/mo", yearPrice:"$150/yr", mcost:15, ycost:150 }]
  
  return (
    <div className='flex h-[100%] w-[100%]'>
      <Sidebar page={2}/>
      <form onSubmit={clickHandler}>
        <div className='flex flex-col pl-16 py-9'>
          <h1 className='font-bold text-3xl'>Select your plan</h1>
          <p className='font-bold opacity-35'>You have the option of monthly or yearly billing</p>
          <div className='flex gap-4 py-8 w-auto'>
            {
              secondPageData.map((data) => (
                <div className={`border-2 hover:border-[#544E98] ${selectedItemId === data.id ? "border-[#544E98] bg-[#F8F9FE]" : "border-[#DBDADF]"} w-auto h-36 p-3 rounded-md`} key={data.id} onClick={() => handleItemClick(data.id)}>
                  <img src={data.source} alt="" />
                  <p className='font-bold text-[#001530]'>{data.para}</p>
                  <p className='text-[#001530] opacity-55'>{checkboxSelected ? data.yearPrice : data.monthPrice}</p>
                  {
                    checkboxSelected &&
                    <p className='text-[#001530] font-normal'>2 months free</p>
                  }
                </div>
              ))
            }
          </div>
          <div className='flex gap-6 mb-8 justify-center items-center'>
            <p className='font-bold'>Monthly</p>      
            <div>
            <label htmlFor="toggle">
              <input type="checkbox" id="toggle" className="input" name='planDuration' onChange={changeHandler}/>
              <div className="toggle-wrapper">
                <span className="selector"></span>
              </div>
            </label>
            </div>
            <p className='font-bold opacity-55'>Yearly</p>
          </div>
          <div className='flex justify-between'>
            <button className=' font-semibold'>Go Back</button>
            <button className='text-white bg-[#174A8B] w-fit p-3 flex justify-end rounded-md'>Next Step</button>
          </div>
        </div>

      </form>
    </div>
  )
}
export default SecondPage
