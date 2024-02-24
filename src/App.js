import { useState } from 'react';
import './App.css';
import FirstPage from './components/form/FirstPage';
import SecondPage from './components/form/SecondPage';
import ThirdPage from './components/form/ThirdPage';
import FourthPage from './components/form/FourthPage';
import SuccessPage from './components/form/SuccessPage';

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    planPrice: 0,
    planType: "",
    planDuration: "Yearly",
    totalPrice:0,
    addOns: {
      1: {
        title: "Online service",
        monthlyPrice:1,
        yearlyPrice:10,
        selected:false
      },
      2: {
        title:"Larger storage",
        monthlyPrice:2,
        yearlyPrice:20,
        selected:false
      },
      3: {
        title:"Customizable profile",
        monthlyPrice:2,
        yearlyPrice:20,
        selected:false
      },
    },

  })
  const [totalSum, setTotalSum] = useState(0);
  const [formPageNumber, setFormPageNumber] = useState(1);
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  return (
    <div className="app w-full flex justify-center items-center bg-[#dce3ed] h-auto">
      <div className='w-[60%] p-3 bg-white rounded-xl'>
        {formPageNumber === 1 && <FirstPage formData={formData} setFormData={setFormData} formPageNumber={formPageNumber} setFormPageNumber={setFormPageNumber} />}
        {formPageNumber === 2 && <SecondPage formData={formData} setFormData={setFormData} formPageNumber={formPageNumber} setFormPageNumber={setFormPageNumber} setTotalSum={setTotalSum}/>}
        {formPageNumber === 3 && <ThirdPage formData={formData} setFormData={setFormData} formPageNumber={formPageNumber} setFormPageNumber={setFormPageNumber}setTotalSum={setTotalSum}/>}
        {formPageNumber === 4 && <FourthPage formData={formData} setFormData={setFormData} formPageNumber={formPageNumber} setFormPageNumber={setFormPageNumber} totalSum={totalSum}/>}
        {formPageNumber === 5 && <SuccessPage/>}
      </div>
    </div>
  );
}

export default App;
