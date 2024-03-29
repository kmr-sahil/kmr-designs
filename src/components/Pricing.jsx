import React from 'react'
import { FaCheck } from "react-icons/fa6";
import Link from 'next/link';

function Pricing() {

    const features = ['Engaging copy', 'Website design', 'Website Developemnt', 'Update in every 48H', 'Revisions included', 'Unlimited stock images & custom illustration', 'Private communication channel for 24H support']

  return (
    <section className='flex flex-col gap-[1rem]'>

        <h2 className='title-primary'>Pricing</h2>

        <div className='flex flex-col sm:flex-row gap-[1rem] flex-grow'>

            <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col justify-center items-start gap-[0.5rem]'>

                <h1 className='title-primary text-[28px]'>$199  
                    <span className='title-sub'> / month</span>
                </h1>

                <p className='title-sub text-start'>standalone project, <br></br>ideally good for single & landing page design</p>

                <hr className='w-[100%] border-[#131313] mt-[0.5rem] mb-[0.75rem]'></hr>

                {features.map((title) => (<div className='flex gap-[1rem] items-start justify-start'>

                        <div className='w-[1rem] h-[1rem] bg-[#131313] bg-opacity-40 rounded-full text-[#131313] text-[8px] p-[0.25rem] flex justify-center items-center'>
                            <FaCheck />
                        </div>

                        <h3 className='title-sub font-medium text-start'>{title}</h3>

                </div>))}

                <Link href={'/f'} className='btn-primary w-[100%] mt-[3rem]'>Book a Call Now</Link>

            </div>

            <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col justify-center items-start gap-[0.5rem]'>

                <h1 className='title-primary text-[28px]'>$499  
                    <span className='title-sub'> / month</span>
                </h1>

                <p className='title-sub text-start'>subscription based, <br></br>perfect for those who need multipage design</p>

                <hr className='w-[100%] border-[#131313] mt-[0.5rem] mb-[0.75rem]'></hr>

                {features.map((title) => (<div className='flex gap-[1rem] items-start justify-start'>

                        <div className='w-[1rem] h-[1rem] bg-[#131313] bg-opacity-40 rounded-full text-[#131313] text-[8px] p-[0.25rem] flex justify-center items-center'>
                            <FaCheck />
                        </div>

                        <h3 className='title-sub font-medium text-start'>{title}</h3>

                </div>))}

                <Link href={'/f'} className='btn-primary w-[100%] mt-[3rem] text-white bg-[#131313]'>Book a Call Now</Link>

            </div>

        </div>

        <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col justify-center items-start gap-[0.5rem]'>

            <div className='w-[100%]'>
                <h1 className='title-primary font-medium text-start mb-[0.75rem]'>Couldn't find a perfect plan?</h1>
                <p className='title-sub text-start sm:pr-[2rem]'>If your project doesn't fit the plans mentioned, or if you'd like to discuss before deciding, schedule a call with us. We promise to find a way to work together.</p>
            </div>
            
            <Link href={'/f'} className='btn-primary sm:w-[10rem] mt-[1rem] text-white bg-[#131313]'>Let's Discuss</Link>

        </div>

    </section>
  )
}

export default Pricing