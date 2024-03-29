import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function page() {
  return (

    <div className='p-[1rem] flex flex-col gap-[4rem]'>

      <nav className='flex justify-between items-center'>

          <Image src={'/logo.png'} width={38} height={10} alt='logo' />

          <Link href={'facebook.com'} className='px-[1rem] py-[0.5rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>Book a Call</Link>

      </nav>

      <section className='mt-[1.5rem] flex flex-col justify-center items-center gap-[1.5rem]'>

          <h1 className='text-[28px] font-bold leading-[2rem] text-center'>Crafting engaging websites with meaningful designs that drive results.</h1>

          <h3 className='text-[14px] font-light tracking-tight leading-tight text-center'>We work with startups, creatives, and visionaries driven by success. Through efficient design, we create websites that excel as powerful sales engines, fostering success, engagement, and growth.</h3>

          <Link href={'facebook.com'} className='w-[156px] px-[1rem] py-[0.5rem] rounded-[8px] outline outline-[1px] outline-[#131313] bg-[#131313] text-white'>Book a free Call</Link>

      </section>

      <div className='overflow-x-auto scrollbar-hide'>

          <div className='w-[100%] flex justify-start items-center gap-[1rem] p-[0.15rem] animate-loop-scroll'>

            <div className='flex-shrink-0 w-[15rem] h-[15rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>
              1
            </div>

            <div className='flex-shrink-0 w-[15rem] h-[15rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>
                2
            </div>

            <div className='flex-shrink-0 w-[15rem] h-[15rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>
                3
            </div>

            <div className='flex-shrink-0 w-[15rem] h-[15rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>
                  4
            </div>

            <div className='flex-shrink-0 w-[15rem] h-[15rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>
                      5
            </div>
      
      </div>

    </div>
      
    <div className='flex flex-col justify-center items-center gap-[0.75rem]'>

        <h2 className='text-[20px] font-bold text-center leading-tight my-[1rem]'>Hear from individuals we have worked with</h2>

        <div className='flex-shrink-0 w-[100%] h-[5rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>

        </div>

        <div className='flex-shrink-0 w-[100%] h-[5rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>

        </div>

        <div className='flex-shrink-0 w-[100%] h-[5rem] rounded-[8px] outline outline-[1px] outline-[#131313]'>

        </div>

    </div>

    <div className='flex flex-col justify-center items-center gap-[0.75rem]'>

      <h2 className='text-[20px] font-bold text-center leading-tight'>How we work</h2>

      <h3 className='text-[12px] px-[1rem] mb-[0.75rem] font-light tracking-tight leading-tight text-center'>We explore your industry thoroughly, studying competitors to find unique opportunities.</h3>

      <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col items-center justify-center'>

          <div className='bg-[#131313] rounded-full bg-opacity-40 p-[0.5rem]'>

              <div className='bg-[#131313] bg-opacity-80 rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center'>
                  1
              </div>

          </div>

          <h3 className='text-[20px] font-bold mt-[1rem]'>Research</h3>

          <p className='text-[12px] font-light text-center'>We explore your industry thoroughly, studying competitors to find unique opportunities.</p>

      </div>

      <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col items-center justify-center'>

          <div className='bg-[#131313] rounded-full bg-opacity-40 p-[0.5rem]'>

              <div className='bg-[#131313] bg-opacity-80 rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center'>
                  1
              </div>

          </div>

          <h3 className='text-[20px] font-bold mt-[1rem]'>Research</h3>

          <p className='text-[12px] font-light text-center'>We explore your industry thoroughly, studying competitors to find unique opportunities.</p>

      </div>

      <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col items-center justify-center'>

          <div className='bg-[#131313] rounded-full bg-opacity-40 p-[0.5rem]'>

              <div className='bg-[#131313] bg-opacity-80 rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center'>
                  1
              </div>

          </div>

          <h3 className='text-[20px] font-bold mt-[1rem]'>Research</h3>

          <p className='text-[12px] font-light text-center'>We explore your industry thoroughly, studying competitors to find unique opportunities.</p>

      </div>

    </div>

    </div>

  )
}

export default page