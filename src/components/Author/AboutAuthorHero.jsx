import React from 'react'
import One from '../Assets/Author/Author Page/2.jpg'
import Two from '../Assets/Author/Author Page/1.png'
import { Link } from 'react-router-dom'

const AboutAuthorHero = () => {
    return (
        <section className='w-full flex lg:flex-row flex-col items-center justify-center'>
            <div className='lg:w-2/5 relative w-full flex flex-col items-center justify-center'>
                <img src={One} alt="About me" className=' w-full h-[700px]' />
                <div className='flex flex-col items-center justify-center absolute bottom-[150px] mx-auto'>
                    <h1 className='text-[42px] font-courier font-[100] text-light-blue'>Arayna Saxena</h1>
                    <Link className='bg-purple p-2 hover:bg-lightpurple text-[20px] font-[700] font-quicksand text-white hover:text-dark-gray rounded-md transition' to='/author/book'>
                        About the book
                    </Link>
                </div>
            </div>
            <div className='lg:w-3/5 h-[700px] w-full'>
                <img src={Two} alt="My book" className='w-full h-[700px]' />
            </div>
        </section>
    )
}

export default AboutAuthorHero