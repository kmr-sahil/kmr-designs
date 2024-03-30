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

    <div className='max-w-[40rem] mx-auto p-[1rem] flex flex-col gap-[4rem]'>

      <Navbar />

      <section className='mt-[1.5rem] flex flex-col justify-center items-center gap-[1.5rem]'>

          <h1 className='text-[28px] font-bold leading-[2rem] text-center'>Crafting engaging websites with meaningful designs that drive results.</h1>

          <h3 className='text-[14px] font-light tracking-tight leading-tight text-center'>We work with startups, creatives, and visionaries. Through efficient design, we create websites that excel as powerful sales engines, fostering success, engagement, and growth.</h3>

          <Link href={'facebook.com'} className='w-[156px] px-[1rem] py-[0.5rem] rounded-[8px] outline outline-[1px] outline-[#131313] bg-[#131313] text-white'>Book a free Call</Link>

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