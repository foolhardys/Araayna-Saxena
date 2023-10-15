import React from 'react'
import TalentSlider from '../Slider/TalentSlider'
import {BsFillArrowRightCircleFill} from 'react-icons/bs'



const Talents = () => {
    return (
        <section className='w-full px-[20px] h-[580px] my-[30px] relative'>
            <TalentSlider />
            <BsFillArrowRightCircleFill className='text-[40px] text-secondary absolute top-[285px] right-[40px] opacity-40 outline-0 cursor-pointer z-10 hidden lg:block'/>
        </section>
    )
}

export default Talents
