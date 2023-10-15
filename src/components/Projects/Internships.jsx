import React from 'react'

const Internships = () => {
  return (
    <article id='internships' className='lg:w-[1280px] lg:p-4 p-8 w-full flex flex-col justify-center bg-light-gray shadow-md rounded-md md:mt-0 mt-[80px] '>
      <h1 className='font-display text-[56px] md:text-[56px] font-[400] text-secondary mb-[40px] text-left'>Internships</h1>
      <article className='flex flex-col gap-8 p-4'>
        <div>
          <p className='font-quicksand text-[18px] font-[400] my-8'>1. Completed Virtual Internship in <strong>“Software Development and Engineering”</strong> with <a href="https://www.memomoti.com/" target='_blank' rel='noreferrer' className='font-quicksand font-[400] text-[18px] text-purple underline '>MemoMoti </a></p>
          <a className='font-quicksand font-[700] text-[18px] w-[180px] bg-purple rounded-lg hover:bg-lightpurple py-4 px-8  text-white hover:text-gray mb-5 ' href="https://drive.google.com/file/d/1AgzQW3-rhvJCiFmGSe-DdJDtKtbWfctE/view?usp=drive_link"  target='_blank' rel="noreferrer">
            Certificate
          </a>
        </div>
        <div>
          <p className='font-quicksand text-[18px] font-[400] my-8'>2. Completed SDE Internship with <a href="https://www.jungleegames.com/" className='font-quicksand font-[400] text-[18px] text-purple underline ' target='_blank' rel="noreferrer">JungleeGames,</a> designed a <strong>prototype website</strong> using HTML, CSS & Javascript.</p>
          <a href="https://drive.google.com/file/d/1xR73lgcwkYbAZN69gUq7fUm6Wbg9EzwD/view?usp=drive_link" target='_blank' rel="noreferrer" className=' font-quicksand font-[700] text-[18px] w-[180px] bg-purple rounded-lg hover:bg-lightpurple py-4 px-8  text-white hover:text-gray mb-5 '>
            Certificate
          </a>
        </div>
      </article>
    </article>
  )
}

export default Internships