import React from 'react'
import One from '../Assets/Projects/1.png'
import Two from '../Assets/Projects/2.png'

const Competetions = () => {
    return (
        <article className='lg:w-[1280px] lg:p-4 p-8 w-full flex flex-col justify-center mb-40 '>
            <h1 className='font-display text-[56px] md:text-[56px] font-[400] text-secondary mb-[40px] text-left'>Competitions</h1>
            <div className='flex lg:flex-row flex-col lg:justify-start justify-between gap-5 h-[900px] md:h-auto'>
                <article className='rounded-md md:w-[500px] md:h-[640px] w-[350px] h-[300px]'>
                    <a href="https://drive.google.com/file/d/1toIHgEI2yJUNJByaYE7-SPhBcKHWhFr4/view?usp=drive_link" target='_blank' rel="noreferrer">
                        <img src={One} alt="8th science festival" className='md:w-[500px] md:h-[420px] w-[350px] h-[300px] shadow-md' />
                    </a>
                    <p className='bg-purple/50 rounded-b-md font-raleway text-[16px] font-[400] p-4 relative -z-10 lg:-translate-y-3'>Presented and Won 1st prize at School-level AI and ML projects including, Facial Emotions Recognizer, Quench The Thirst: A game with a bigger purpose, MudraMitrita at the 10th Vigyan Mela 2023, organized by Madhya Pradesh Council of Science & Technology (MPCST) and attended by Senior ISRO Scientist Dr. P. Kunhikrishnan</p>
                </article>
                <article className='rounded-md md:w-[500px] md:h-[640px] w-[350px] h-[300px]'>
                    <a href="https://drive.google.com/file/d/1ty7lx0l_OEX1J9m3q29-IFGC9PClrZJi/view?usp=drive_link" target='_blank' rel="noreferrer">
                        <img src={Two} alt="110th Bhopal Vigyan Mela" className='md:w-[500px] md:h-[420px] shadow-md w-[350px] h-[300px]' />
                    </a>
                    <p className='bg-purple/50 rounded-b-md font-raleway text-[16px] font-[400] p-4 relative -z-10 lg:-translate-y-3'>Participated and won Youth Innovation Award  in New Age Technology Show of 8th India International Science Festival 2022 for research projects</p>
                </article>
            </div>
        </article>
    )
}

export default Competetions