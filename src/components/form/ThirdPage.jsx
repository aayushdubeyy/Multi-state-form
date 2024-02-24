import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'

const ThirdPage = ({formData, setFormData, setFormPageNumber, setTotalSum}) => {
  const thirdPageData = [
    {id: 1, title: "Online service", para: "Access to multiplayer games", monthleCost: "+$1/mo", yearlyCost: "+$10/yr", mcost:1, ycost:10},
    {id: 2, title: "Larger storage", para: "Extra 1TB of cloud save", monthleCost: "+$2/mo", yearlyCost: "+$20/yr", mcost: 2, ycost:20}, 
    {id: 3, title: "Customizable profile", para: "Custom theme on your profile", monthleCost: "+$2/mo", yearlyCost: "+$20/yr", mcost: 2, ycost:20}
  ]
  
  const [isChecked, setIsChecked] = useState({});

  const handleDivClick = (id) => {
    setIsChecked(prevState => ({...prevState, [id]: !prevState[id]}));
    console.log("IDDDD: ", id)
    console.log("isChecked[id]: ", isChecked[id])
    if(!isChecked[id]){
      setFormData({
        ...formData,
        addOns: {
          ...formData.addOns,
          [id]: {
            ...formData.addOns[id],
            selected: !formData.addOns[id].selected
          }
        }
      })
    }
  };
  useEffect(() =>{
    console.log("USE EFFECT2",formData)
  }, [formData])
  const submitHandler = (e) => {
    e.preventDefault();
    setFormPageNumber(4);
    console.log("FINAL...",formData);
  }
  return (
    <div className='flex h-[100%] w-[100%]'>
      <Sidebar page={3}/>
      <form onSubmit={submitHandler}>
        <div className='flex flex-col pl-16 py-9 w-[125%]'>
          <h1 className='font-bold text-3xl'>Pick add-ons</h1>
          <p className=' font-semibold opacity-35 mb-5'>Add-ons help enhance your gaming experience</p>
          {
            thirdPageData.map((data) => (
              <div className={`flex "border-[#DBDADF] hover:border-[#544E98] ${isChecked[data.id] ? "border-[#544E98] bg-[#F8F9FE]": "border-[#DBDADF]"} border-2 p-3 w-[100%] rounded-md mb-3`} id='add-ons' onClick={() => handleDivClick(data.id)}>
                <input type="checkbox" name="add-ons" id="add-ons" checked={isChecked[data.id] || false}/>
                <label htmlFor="add-ons" className='pl-5 w-[100%]'>
                  <div className='flex justify-between'>
                    <div>
                      <p className='font-bold text-[#001530]'>{data.title}</p>
                      <p className='text-[#001530] opacity-55 font-medium'>{data.para}</p>
                    </div>
                    <div>
                      <p className='pt-3 text-[#5F5AAC] font-medium'>{formData.planDuration === "Yearly" ? data.yearlyCost : data.monthleCost}</p>
                    </div>
                  </div>
                </label>
              </div>
            ))
          }
          <div className='flex justify-between w-[100%]'>
            <button className=' font-semibold'>Go Back</button>
            <button className='text-white bg-[#174A8B] w-fit p-3 flex justify-end rounded-md'>Next Step</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ThirdPage
