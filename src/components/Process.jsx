import React from 'react'

function Process() {
  return (
    <div className='flex flex-col justify-center items-center gap-[0.75rem]'>

      <h2 className='title-primary'>How we work</h2>

      <h3 className='title-sub text-[14px] mb-[0.75rem] px-[1rem]'>We explore your industry thoroughly, studying competitors to find unique opportunities.</h3>

      <div className='flex flex-col md:flex-row gap-[1rem]'>
      

      <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col items-center justify-start gap-[0.5rem]'>

          <div className='bg-[#131313] rounded-full bg-opacity-40 p-[0.5rem]'>

              <div className='bg-[#131313] bg-opacity-80 rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center'>
                  1
              </div>

          </div>

          <h3 className='title-primary mt-[0.75rem]'>Research</h3>

          <p className='title-sub'>Explore your market thoroughly, analyze competitors, and understands customer problems.</p>

      </div>

      <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col items-center justify-start gap-[0.5rem]'>

          <div className='bg-[#131313] rounded-full bg-opacity-40 p-[0.5rem]'>

              <div className='bg-[#131313] bg-opacity-80 rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center'>
                  2
              </div>

          </div>

          <h3 className='title-primary mt-[0.75rem]'>Creation</h3>

          <p className='title-sub'>Create engaging content and efficient visuals to ensure your brand and website shine uniquely.</p>

      </div>

      <div className='w-[100%] p-[1rem] rounded-[8px] outline outline-[1px] outline-[#131313] flex flex-col items-center justify-start gap-[0.5rem]'>

          <div className='bg-[#131313] rounded-full bg-opacity-40 p-[0.5rem]'>

              <div className='bg-[#131313] bg-opacity-80 rounded-full w-[40px] h-[40px] text-[20px] font-bold text-white text-center flex items-center justify-center'>
                  3
              </div>

          </div>

          <h3 className='title-primary mt-[0.75rem]'>Research</h3>

          <p className='title-sub'>Hand off the design only when you're 100% satisfied, and happy to offer ongoing assistance based on your feedback.</p>

      </div>

      </div>
      

    </div>
  )
}

export default Process