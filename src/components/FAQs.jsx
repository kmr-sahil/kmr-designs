"use client"
import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa6";

function FAQs() {
  const faqsData = [
    {
      question: "What services we offer ?",
      answer: "We excel in crafting landing pages, multipage websites, SaaS, and comprehensive web services. Our expertise lies in designing product in such a to captivate and convert target audiences effectively."
    },
    {
      question: "How Do I Start ?",
      answer: "Begin your journey in three simple steps: Schedule an introductory call, discuss your business needs, and choose the plan that fits best. It's that easy – and you're on your way to success!"
    },
    {
      question: "Who's Behind This Agency?",
      answer: "Hi there, I'm Sahil Kumar, running this agency solo. With experience in startups like DailyDumbbell and SecondBrainLabs, I've transitioned to running this design/development agency full-time, bringing my expertise to every project."
    },
    {
      question: "How Long Does a Project Take?",
      answer: "Typically, a single-page design takes 36 hours or less. However, for revisions or complex requests, it may require additional time."
    }
    // Add more FAQs here as needed
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section className='w-[100%] flex flex-col gap-[1rem]'>

      <h2 className='title-primary '>Frequently asked Questions</h2>

      <div className='w-[100%] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col p-[1rem] gap-[0.5rem]'>

        {faqsData.map((faq, index) => (
          <div key={index} className='flex flex-col gap-[0.5rem]' onClick={() => handleQuestionClick(index)}>
            <div className='flex justify-between items-center'>
              <h3 className='w-[80%] title-sub font-medium text-start'>{faq.question}</h3>
              <div className={selectedQuestion === index ? 'rotate-180' : ''}><FaCaretDown /></div>
            </div>
            <p className={`title-sub text-start ${selectedQuestion === index ? '' : 'hidden'}`}>{faq.answer}</p>
            <hr className='w-[100%] border-[#131313] my-[0.25rem]'></hr>
          </div>
        ))}

      </div>

    </section>
  );
}

export default FAQs;
