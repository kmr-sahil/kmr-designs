"use client";
import React, { useState } from "react";
import { FaCaretDown } from "react-icons/fa6";
import Link from "next/link";

function FAQs() {
  const faqsData = [
    {
      question: "What services we offer ?",
      answer:
        "We excel in crafting landing pages, multipage websites, SaaS, and comprehensive web services. Our expertise lies in designing product in such a to captivate and convert target audiences effectively.",
    },
    {
      question: "How Do I Start ?",
      answer:
        "Begin your journey in three simple steps: Schedule an introductory call, discuss your business needs, and choose the plan that fits best. It's that easy – and you're on your way to success!",
    },
    {
      question: "Who's Behind This Agency?",
      answer:
        "Hi there, I'm Sahil Kumar, running this agency solo. With experience in startups like DailyDumbbell and SecondBrainLabs, I've transitioned to running this design/development agency full-time, bringing my expertise to every project.",
    },
    {
      question: "How Long Does a Project Take?",
      answer:
        "Typically, a single-page design takes 36 hours or less. However, for revisions or complex requests, it may require additional time.",
    },
    // Add more FAQs here as needed
  ];

  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const handleQuestionClick = (index) => {
    setSelectedQuestion(selectedQuestion === index ? null : index);
  };

  return (
    <section className="w-[100%] flex flex-col md:flex-row">
      <div className="w-[100%] flex flex-col gap-[1rem]">
        <h2 className="text-[1.5rem] md:text-[2rem] font-bold text-center leading-tight pb-[1rem] md:pb-[2rem] md:text-start md:pl-[1.5rem]">
          FAQs
        </h2>

        <div className="w-[100%] max-w-[40rem] mx-auto rounded-[16px] flex flex-col px-[1.5rem] gap-[0.5rem]">
          {faqsData.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col gap-[0.5rem]"
              onClick={() => handleQuestionClick(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="w-[80%] title-sub text-[1rem] font-medium text-start">
                  {faq.question}
                </h3>
                <div className={selectedQuestion === index ? "rotate-180" : ""}>
                  <FaCaretDown />
                </div>
              </div>
              <p
                className={`title-sub text-start ${
                  selectedQuestion === index ? "" : "hidden"
                }`}
              >
                {faq.answer}
              </p>
              <hr className="w-[100%]  my-[0.25rem]"></hr>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-grow bg-[#41444B] text-white p-[1rem] md:p-[2rem] rounded-[16px] flex flex-col gap-[2rem]">
        <h1 className="text-[1.25rem] md:text-[2rem] font-medium leading-tight text-start">
          We assure you of the best and quickest service with us. Let’s make
          something great together
        </h1>
        <Link
          href={"/"}
          className="btn-primary bg-[#F5F7F8] text-[#41444B] font-medium py-[1rem]"
        >
          Book a quick 15 min Call Now
        </Link>
      </div>
    </section>
  );
}

export default FAQs;
