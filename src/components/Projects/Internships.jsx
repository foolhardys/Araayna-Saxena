import React from 'react'

const Internships = () => {
  return (
    <article className='lg:max-w-[980px] lg:p-4 p-8 w-full flex flex-col justify-center '>
      <h1 className='font-display text-[56px] md:text-[56px] font-[400] text-secondary mb-[40px] text-left'>Internships</h1>
      <p className='text-secondary text-[16px] font-quicksand font-[400] w-full lg:w-[750px] mb-[28px] lg:px-0 md:pr-4 mr-1'>Hi! I'm Arayna, a senior student at Billabong High International School in Bhopal. I wear many hats as an author, known for my work "Amidst The Downpour," a dedicated founder of the Uthaan Foundation, and a proactive initiative-taker. I harness my knowledge and passion to drive meaningful change and make a positive impact. This website offers a journey through my years of dedication and hard work. Placeat alias esse facere sunt, nostrum asperiores!</p>
      <article className='flex flex-col gap-8 p-4'>
        <div>
          <p className='font-quicksand text-[18px] font-[400] my-4'>1. Completed Virtual Internship in <strong>“Software Development and Engineering”</strong> with <a href="https://www.memomoti.com/" className='font-quicksand font-[400] text-[18px] text-purple underline '>MemoMoti </a></p>
          <button className='w-[180px] bg-purple rounded-lg hover:bg-lightpurple p-2  text-white hover:text-gray mb-5 '>
            <a href="https://drive.google.com/file/d/1AgzQW3-rhvJCiFmGSe-DdJDtKtbWfctE/view?usp=drive_link" className='font-quicksand font-[700] text-[18px]'>Certificate</a>
          </button>
        </div>
        <div>
          <p className='font-quicksand text-[18px] font-[400] my-4'>2. Completed SDE Internship with <a href="https://www.jungleegames.com/" className='font-quicksand font-[400] text-[18px] text-purple underline '>JungleeGames,</a> designed a <strong>prototype website</strong> using HTML, CSS & Javascript.</p>
          <button className='w-[180px] bg-purple rounded-lg hover:bg-lightpurple p-2  text-white hover:text-gray mb-5 '>
            <a href="https://drive.google.com/file/d/1xR73lgcwkYbAZN69gUq7fUm6Wbg9EzwD/view?usp=drive_link" className='font-quicksand font-[700] text-[18px]'>Certificate</a>
          </button>
        </div>
      </article>
    </article>
  )
}

export default Internships