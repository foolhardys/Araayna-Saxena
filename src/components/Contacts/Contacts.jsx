import React from 'react'
import Email from '../Assets/Contacts/Email.png'
import Insta from '../Assets/Contacts/Insta.png'
import Linkedin from '../Assets/Contacts/Linkedin.png'
import Youtube from '../Assets/Contacts/Youtube.png'

const Contacts = () => {
    return (
        <article className='flex justify-center items-center mt-10 lg:flex-row flex-col md:mb-4 mb-40 lg:gap-0 gap-5'>
            <div className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-gray/50 '>
                <img src={Email} alt="mail" className='h-[60px]' />
                <p><a href="mailto:saxena.arayna1@gmail.com" className='text-[15px] font-raleway font-[700] '> saxena.arayna1@gmail.com</a></p>
            </div>
            <div className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-danger/50'>
                <img src={Youtube} alt="youtube" className='h-[60px]'/>
                <p> <a href="" className='font-serif italic text-[15px] font-[700] text-white'>Youtube</a></p>
            </div>
            <div className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-blue/50'>
                <img src={Linkedin} alt="linkedin" />
                <p><a href="" className='font-serif italic text-[15px] font-[700] text-white'>Connect with me on Linkedin</a></p>
            </div>
            <div className='lg:w-[334px] md:w-[450px] w-[300px] h-[360px] flex items-center justify-center flex-col gap-4 bg-purple/75'>
                <img src={Insta} alt="instagram" />
                <p> <a href="" className='font-serif italic text-[15px] font-[700] text-white'>Get to know more about me</a></p>
            </div>
        </article>
    )
}

export default Contacts