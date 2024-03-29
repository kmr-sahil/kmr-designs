
"use client"
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

function FAQs() {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section className='w-[100%] flex flex-col gap-[1rem]'>

      <h2 className='title-primary '>Frequently asked Questions</h2>

      <div className='w-[100%] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col p-[1rem] gap-[0.5rem]'>

        <div className='flex flex-col gap-[0.5rem]'>

          <div className='flex justify-between items-center'>
            <h3 className='w-[80%] title-sub text-[14px] font-medium text-start' onClick={() => handleQuestionClick(0)}>What services we offer ?</h3>
            <div className={selectedQuestion === 0 ? 'rotate-180' : ''}><FaCaretDown /></div>
          </div>

          <p className={`title-sub text-start ${selectedQuestion === 0 ? '' : 'hidden'}`}>We excel in crafting landing pages, multipage websites, SaaS, and comprehensive web services. Our expertise lies in designing product in such a to captivate and convert target audiences effectively.</p>

        </div>

        <hr className='w-[100%] border-[#131313] mt-[0.5rem] mb-[0.75rem]'></hr>

        <div className='flex flex-col gap-[0.5rem]'>
            
          <div className='flex justify-between items-center'>
            <h3 className='w-[80%] title-sub text-[14px] font-medium text-start' onClick={() => handleQuestionClick(1)}>Another question here ?</h3>
            <div className={selectedQuestion === 1 ? 'rotate-180' : ''}><FaCaretDown /></div>
          </div>

          <p className={`title-sub text-start ${selectedQuestion === 1 ? '' : 'hidden'}`}>Another answer here.</p>

        </div>

        <hr className='w-[100%] border-[#131313] mt-[0.5rem] mb-[0.75rem]'></hr>

        {/* Add more questions and answers similarly */}

      </div>

    </section>
  );
}

export default FAQs;
