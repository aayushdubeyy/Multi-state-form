import React from 'react'

const Sidebar = ({page}) => {
    const cardData = [{id: 1,info: "YOUR INFO"}, {id: 2,info: "SELECT PLAN"}, {id: 3,info: "ADD-ONS"}, {id: 4,info: "SUMMARY"}]
  return (
    <div className="sidebar text-white w-[30%] p-8 rounded-xl">
        <div>
            {
                cardData.map((data, index) => (
                    <div className='flex gap-5 pb-5' key={index}>
                        <div className={`number flex justify-center items-center font-bold h-10 w-10 border-[#E1DFFF] border-2 ${page===data.id ? "bg-[#BEE1FD] text-[#483EFF]": "bg-transparent"}`}>{data.id}</div>
                        <div className='flex flex-col'>
                            <p className='opacity-50'>Step {data.id}</p>
                            <p className='sidebar-info'>{data.info}</p>
                        </div>

                    </div>
                ))
            }
        </div>
        
      </div>
  )
}

export default Sidebar
