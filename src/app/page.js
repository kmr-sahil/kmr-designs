import React from 'react'
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Work from '@/components/Work';
import Testimonials from '@/components/Testimonials';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import FAQs from '@/components/FAQs';
import Footer from '@/components/Footer';

function page() {

  return (

    <div className='max-w-[40rem] md:max-w-[60rem] mx-auto p-[1rem] md:px-[4rem] flex flex-col gap-[4rem] md:gap-[5rem] lg:gap-[6rem]'>

      <Navbar />

      <section className='mt-[1.5rem] md:mt-[1.8rem] flex flex-col justify-center items-center gap-[1.5rem]'>

          <h1 className='text-[28px] md:text-[36px] lg:text-[48px] font-bold leading-[2rem] md:leading-[2.5rem] lg:leading-[3.5rem] text-center'>Crafting engaging websites with meaningful designs that <br className='hidden lg:block'></br> drive results.</h1>

          <h3 className='text-[14px] md:text-[18px] font-light tracking-tight leading-tight text-center'>We work with startups, creatives, and visionaries. Through efficient design, we create websites that excel as powerful sales engines, fostering success, engagement, and growth.</h3>

          <Link href={'facebook.com'} className=' px-[1rem] py-[0.5rem] rounded-[8px] outline outline-[1px] outline-[#131313] bg-[#131313] md:text-[1.25rem] text-white'>Book a free Call</Link>

      </section>

    <Work />
      
    <Testimonials />

    <Process />

    <Pricing />

    <FAQs />

    <Footer />

    </div>

  )
}

export default page