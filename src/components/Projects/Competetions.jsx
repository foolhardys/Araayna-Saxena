import React from 'react'
import One from '../Assets/Projects/1.png'
import Two from '../Assets/Projects/2.png'

const Competetions = () => {
    return (
        <article className='lg:max-w-[980px] lg:p-4 p-8 w-full flex flex-col justify-center mb-40'>
            <h1 className='font-display text-[56px] md:text-[56px] font-[400] text-secondary mb-[40px] text-left'>Competitions</h1>
            <div className='flex lg:flex-row flex-col lg:justify-start justify-center gap-5'>
                <article className='rounded-md w-[350px]'>
                    <a href="https://drive.google.com/file/d/1toIHgEI2yJUNJByaYE7-SPhBcKHWhFr4/view?usp=drive_link">
                        <img src={One} alt="8th science festival" className='w-[350px]' />
                    </a>
                    <p className='bg-purple/50 rounded-b-md font-raleway text-[16px] font-[400] p-4 relative -z-10 lg:-translate-y-3'>Presented and Won 1st prize at School-level AI and ML projects including, Facial Emotions Recognizer, Quench The Thirst: A game with a bigger purpose, MudraMitrita at the 10th Vigyan Mela 2023, organized by Madhya Pradesh Council of Science & Technology (MPCST) and attended by Senior ISRO Scientist Dr. P. Kunhikrishnan</p>
                </article>
                <article className='rounded-md w-[350px]'>
                    <a href="https://drive.google.com/file/d/1ty7lx0l_OEX1J9m3q29-IFGC9PClrZJi/view?usp=drive_link">
                        <img src={Two} alt="110th Bhopal Vigyan Mela" className='w-[350px]' />
                    </a>
                    <p className='bg-purple/50 rounded-b-md font-raleway text-[16px] font-[400] p-4 relative -z-10 lg:-translate-y-3'>Participated and won Youth Innovation Award  in New Age Technology Show of 8th India International Science Festival 2022 for research projects</p>
                </article>
            </div>
        </article>
    )
}

export default Competetions