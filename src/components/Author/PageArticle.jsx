import React from 'react'
import Author from '../Assets/Author/Author.png'

const PageArticle = () => {
    return (
        <article className='relative w-full lg:w-[1280px]'>
            <img src={Author} alt="My Book" className='rounded-sm' />
            <button className='bg-purple rounded-xl md:w-[200px] w-[150px] absolute  lg:left-[180px] md:left-[80px] left-[30px] bottom-[40px] p-1 md:p-2'>
                <a href="" className='md:text-[18px] text-[12px] font-quicksand font-[700] text-white'>Have a look!</a>
            </button>
            <button className='bg-purple rounded-xl md:w-[200px] w-[150px] absolute  lg:left-[400px] md:left-[300px] md:bottom-[40px] left-[30px] bottom-[0px] p-1 md:p-2'>
                <a href="" className='md:text-[18px] text-[12px] font-quicksand font-[700] text-white'>Authors Journey</a>
            </button>
        </article>
    )
}

export default PageArticle