import React from 'react'
import UthaanSlider from '../Slider/UthaanSlider'
import logo from '../Assets/Community/logo.png'

const Uthaan = () => {
    return (
        <article className='md:min-h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] w-full flex md:gap-5 px-10 py-4 justify-center items-center mt-4 lg:flex-row flex-col mb-40 pb-[60px]'>
            <div className='lg:w-2/5 w-full'>
                <h1 className='text-[36px] font-display font-[400] mb-4 '> <img src={logo} alt="" className='inline-block translate-y-[-2px] mr-[5px]' />Uthaan Foundation</h1>
                <p className='mb-8 leading-8 lg:pl-[50px] text-[18px] font-[400] font-quicksand text-dark-gray'>
                    Founded Uthaan, a Non-Governmental organization which is registered with the Government of India with the initiative of providing upliftment, education, empowerment & assistance. <br />
                    <br />
                    &nbsp;&nbsp;•&nbsp;Leading a team of 20+ members and 50+ volunteers.
                    <br />
                    &nbsp;&nbsp;•&nbsp;Established connections with government schools to support STEM education to connect volunteers as support teachers.
                    <br />
                    &nbsp;&nbsp;•&nbsp;Conducted workshops and awareness sessions for underprivileged communities.
                    <br />
                    &nbsp;&nbsp;•&nbsp;Impacted over 5000+ individuals through these initiatives.
                </p>
                <a href="http://uthaanfoundation.com/" target='_blank' rel="noreferrer" className='bg-purple rounded-md  text-[18px] font-quicksand font-[700] px-8 py-4 hover:bg-lightpurple hover:text-gray  text-white transition ml-[30px]'>
                   Visit Website
                </a>
            </div>
            <div className='lg:w-3/5 md:w-full w-[420px] translate-y-[30px] h-[400px] px-5'>
                <UthaanSlider />
            </div>
        </article>
    )
}

export default Uthaan