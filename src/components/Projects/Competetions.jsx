import React from 'react'
import One from '../Assets/Projects/1.png'
import Two from '../Assets/Projects/2.png'

const Competetions = () => {
    return (
        <article id='competetions' className='lg:w-[1280px] lg:p-4 p-8 w-full flex flex-col justify-center mb-20 '>
            <h1 className='font-display text-[56px] md:text-[56px] font-[400] text-secondary mb-[40px] text-left'>Competitions</h1>
            <div className='flex lg:flex-row flex-col lg:justify-start justify-between gap-5 min-h-[700px] md:h-auto'>
                <article className='rounded-md md:w-[500px] md:h-[640px] w-[350px] h-[300px]'>
                    <a href="https://drive.google.com/file/d/1toIHgEI2yJUNJByaYE7-SPhBcKHWhFr4/view?usp=drive_link" target='_blank' rel="noreferrer">
                        <img src={One} alt="8th science festival" className='md:w-[500px] md:h-[420px] w-[350px] h-[300px] shadow-md' />
                    </a>
                    <p className='bg-purple/50 rounded-b-md font-raleway text-[16px] font-[400] p-4 relative -z-10 lg:-translate-y-3'>
                        Participated and won Youth Innovation Award  in New Age Technology Show of <strong>8th India International Science Festival 2022 </strong> for research projects</p>
                </article>
                <article className='rounded-md md:w-[500px] md:h-[640px] w-[350px] h-[300px]'>
                    <a href="https://drive.google.com/file/d/1ty7lx0l_OEX1J9m3q29-IFGC9PClrZJi/view?usp=drive_link" target='_blank' rel="noreferrer">
                        <img src={Two} alt="110th Bhopal Vigyan Mela" className='md:w-[500px] md:h-[420px] shadow-md w-[350px] h-[300px]' />
                    </a>
                    <p className='bg-purple/50 font-raleway text-[16px] font-[400] p-4 relative -z-10 lg:-translate-y-3'>
                        Presented and Won 1st prize at School-level AI and ML projects including, Facial Emotions Recognizer, Quench The Thirst: A game with a bigger purpose, MudraMitrita at the <strong>10th Vigyan Mela</strong>  2023, organized by Madhya Pradesh Council of Science & Technology (MPCST) and attended by Senior ISRO Scientist Dr. P. Kunhikrishnan
                    </p>
                    <div  className='bg-purple/50 rounded-b-md font-raleway text-[16px] font-[400] px-4 py-6 relative lg:-translate-y-3 '>
                        <a href=" https://youtube.com/shorts/eaEgQhpXyr0?si=2liFuEchraeSfcvk" target='_blank' rel='noreferrer' className='bg-white hover:bg-purple text-dark-gray hover:text-white py-3 px-8 rounded-md'>
                           Have a look
                        </a>
                    </div>
                </article>
            </div>
        </article>
    )
}

export default Competetions