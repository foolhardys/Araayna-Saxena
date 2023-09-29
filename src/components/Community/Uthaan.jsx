import React from 'react'
import Image from '../Assets/SummerSchool/Harvard.png'

const Uthaan = () => {
    return (
        <article className='md:min-h-[434px] gap-10 rounded-md shadow-lg lg:w-[1280px] flex nd:gap-5 px-10 py-4 justify-center items-center mt-4 lg:flex-row flex-col mb-40'>
            <div>
                <h1 className='text-[36px] font-display font-[400] mb-4 '>Uthaan Foundation</h1>
                <p className='mb-4 leading-10'>
                Founded Uthaan, a Non-Governmental organization which is registered with the Government of India with the initiative of providing upliftment, education, empowerment & assistance. <a href="">Website link</a>
                <br />
                •Leading a team of 20+ members and 50+ volunteers.
                <br />
                •Established connections with government schools to support STEM education to connect volunteers as support teachers.
                <br />
                •Conducted workshops and awareness sessions for underprivileged communities.
                <br />
                •Impacted over 5000+ individuals through these initiatives.
                </p>
                <button className='bg-purple rounded-md  p-2'>
                    <a href="" className='text-[18px] font-quicksand font-[700] text-white'>Visit Website</a></button>
            </div>
            <div>
                <img src={Image} alt="Machine learning certificate" className='h-[346px]' />
            </div>
        </article>
    )
}

export default Uthaan