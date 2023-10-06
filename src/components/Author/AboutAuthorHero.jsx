import React from 'react'
import One from '../Assets/Author/Author Page/2.jpg'
import Two from '../Assets/Author/Author Page/1.png'

const AboutAuthorHero = () => {
    return (
        <section className='w-full flex lg:flex-row flex-col items-center justify-center'>
            <div className='w-2/5 relative'>
                <img src={One} alt="About me" className=' w-full h-[700px]' />
                <h1 className='text-[42px] absolute left-[120px] bottom-[200px] font-courier font-[100] text-light-blue'>Arayna Saxena</h1>
            </div>
            <div className='w-3/5 h-[700px]'>
                <img src={Two} alt="My book" className='w-full h-[700px]' />
            </div>
        </section>
    )
}

export default AboutAuthorHero