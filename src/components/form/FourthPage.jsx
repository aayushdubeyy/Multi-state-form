import React from 'react'
import Sidebar from './Sidebar'

const FourthPage = ({formData, setFormData, formPageNumber, setFormPageNumber, totalSum}) => {
    let data = [];
    data.push(formData.addOns[1])
    data.push(formData.addOns[2])
    data.push(formData.addOns[3])
    let total = formData.planPrice;
    for(let i = 0; i < 3; i++){
        if(data[i].selected){
            total += formData.planDuration === "Yearly" ? data[i].yearlyPrice : data[i].monthlyPrice;
        }
    }
    const clickHandler = (e) => {
      e.preventDefault();
      setFormPageNumber(5)
    }
  return (

    <div className='flex h-[100%] w-[100%]'>
      <Sidebar page={4}/>
      <div className='flex flex-col pl-16 py-9'>
      <h1 className='font-bold text-3xl text-[#001530]'>Finishing up</h1>
      <p className=' font-semibold opacity-35 mb-5'>Double-check everything looks OK before confirming.</p>
      <div className='bg-[#F8F9FE] w-[27rem] p-5 flex flex-col gap-3'>
        <div className='flex justify-between'>
            <div>
                <p>{formData.planType} ({formData.planDuration})</p>
                <p className='text-[#5049B0] font-medium hover:underline cursor-pointer'>Change</p>
            </div>
            <div className='pt-3'>${formData.planPrice}/{formData.planDuration === "Monthly" ? "mo" : "yr"}</div>
        </div>
        <div className='w-[100%] h-[2px] opacity-10 bg-black'></div>
        <div>
            {
                data.map((item) => (
                    item.selected ? (
                        <div className='flex justify-between'>
                            <p>{item.title}</p>
                            <p>{formData.planDuration === "Yearly" ? `+$${item.yearlyPrice}/yr` : `+$${item.monthlyPrice}/mo`}</p>
                        </div>
                    ) : (<div></div>)
                ))
            }
        </div>
      </div>
      <div className='flex justify-between pt-5 px-5'>
        <p>Total (per {formData.planDuration === "Yearly" ? "year" : "month"})</p>
        <p>+${total}/{formData.planDuration === "Yearly" ? "yr" : "mo"}</p>
        
      </div>
      <div className='flex justify-between pt-9'>
        <button>Go Back</button>
        <button className='bg-[#483EFF] hover:bg-[#938CFE] transition-all delay-100 text-white w-fit p-3 px-7 rounded-md'
        onClick={clickHandler}>Confirm</button>
      </div>
      </div>
    </div>
  )
}

export default FourthPage
