import React from 'react'
import Email from '../Assets/Contacts/Email.png'
import Insta from '../Assets/Contacts/Insta.png'
import Linkedin from '../Assets/Contacts/Linkedin.png'
import Youtube from '../Assets/Contacts/Youtube.png'

const Contacts = () => {
    return (
        <article className='flex justify-center items-center mt-10 lg:flex-row flex-col md:mb-4 mb-40 lg:gap-0 gap-5'>
            <a href='mailto:saxena.arayna1@gmail.com' className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-gray/50 '>
                <img src={Email} alt="mail" className='h-[60px]' />
                <a href="mailto:saxena.arayna1@gmail.com" className='text-[15px] font-raleway font-[700] text-center'> saxena.arayna1@gmail.com</a>
            </a>
            <a href='https://www.youtube.com/@arayna.saxena_yt' target='_blank' className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-danger/50 relative' rel="noreferrer">
                <img src={Youtube} alt="youtube" className='h-[60px]'/>
                <img src="https://cdn.pixabay.com/photo/2015/05/29/19/17/study-789631_1280.jpg" className='absolute h-full w-full -z-20' alt="office" />
                <p> <a href="" className='font-serif italic text-[15px] font-[700] text-white' target='_blank' rel="noreferrer">Youtube</a></p>
            </a>
            <a href='https://www.linkedin.com/in/arayna-saxena-209177253/' target='_blank' rel="noreferrer" className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-blue/50 relative'>
                <img src={Linkedin} alt="linkedin" />
                <img src="https://cdn.pixabay.com/photo/2016/07/14/08/25/office-1516329_1280.jpg" alt="office" className='absolute h-full w-full -z-20' />
                <p><a href="https://www.linkedin.com/in/arayna-saxena-209177253/" className='font-serif italic text-[15px] font-[700] text-white' target='_blank' rel="noreferrer">Connect with me on Linkedin</a></p>
            </a>
            <a href='https://www.instagram.com/arayna_saxena2/' target='_blank' rel="noreferrer" className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-purple/75 relative'>
                <img src={Insta} alt="instagram" />
                <img src="https://cdn.pixabay.com/photo/2017/11/27/21/31/computer-2982270_1280.jpg" alt="office" className='absolute h-full w-full -z-20' />
                <p> <a href="https://www.instagram.com/arayna_saxena2/" className='font-serif italic text-[15px] font-[700] text-white'>Get to know more about me</a></p>
            </a>
        </article>
    )
}

export default Contacts