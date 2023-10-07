import React from 'react'
import TalentSlider from '../Slider/TalentSlider'
import { AiOutlineArrowRight } from 'react-icons/ai'



const Talents = () => {
    return (
        <section className='w-full px-[20px] h-[580px] my-[30px] relative'>
            <TalentSlider />
            <span className='absolute right-[45px] bottom-[250px] text-[60px] bg-secondary text-white rounded-full'><AiOutlineArrowRight/></span>
        </section>
    )
}

export default Talents
