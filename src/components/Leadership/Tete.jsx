import React, { useState } from 'react'
import One from '../Assets/Leadership/Editorial/2.png'
import img from '../Assets/Leadership/EB grid/3.png'


const Tete = () => {

    const [showBox, setShowBox] = useState(false)

    return (
        <article className='lg:w-[300px] w-[200px] mb-4 md:mb-0 lg:h-[250px] h-[180px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center relative p-4 hover:bg-dark-purple hover:text-white transition-all' onClick={() => setShowBox(true)}>
            <h2 className='text-[16px] text-center font-[700] font-quicksand capitalize'>
            Tete -a- Tete
            </h2>
            <img src={One} alt='' className='absolute top-0 left-0 w-full h-full' />
            {showBox && <div className='bg-bg-purple p-[50px] lg:w-[800px] md:w-[700px] w-[400px] absolute top-0 lg:left-0 z-10 gap-5 flex md:flex-row flex-col' onMouseLeave={()=> setShowBox(false)}>
                <div className='md:w-3/5 w-full'>
                    <h1 className='text-[18px] font-[700] font-quicksand capitalize mb-8 text-left text-white'>Tete-a-Tete</h1>
                    <p className='text-[16px]  font-[400]  text-white font-quicksand mb-4'>Conducted impactful interviews with significant personalities including  <strong>Kailash Satyarthi</strong>, child rights activist and Nobel Peace Laureate; <strong>Tarun Thakral</strong>, Founder and managing trustee of Heritage Transport Museum; <strong>Sr. Adv. Sidharth Luthra</strong>, Senior Advocate in the Supreme Court of India;  <strong>Piyuli Ghosh</strong>, Eco-warrior, Co-founder of <strong>Anant Mandi</strong> and Life school; <strong>Ronit Ranjan</strong>, A Mental Health & Leadership Coach, 3X TEDx speaker, and an Ex-Indian Army Cadet; <strong>Rajeshwari Loomba </strong>(Author, Mindfulness Advocate and singer and <strong>Lina Ashar</strong>, expert educationist and founder of Billabong High.
                    </p>
                </div>
                <div className='flex flex-col gap-4 md:w-2/5 w-full'>
                    <div className='flex flex-1 flex-col gap-2 rounded-xl' >
                        <img src={img} alt="" className='rounded-xl' />
                        <p className='text-white px-4 font-quicksand font-[600] text-[12px]'>Link to more Publications :</p>
                    </div>
                    <div className='gap-2 p-2 bg-purple/80 rounded-md '>
                        <p className='overflow-hidden'>
                            <a href="https://www.facebook.com/BillabongFamily/videos/591628439276800/" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] ' target='_blank' rel="noreferrer">Interview - Mr. Kailash Satyarthi</a>
                            <br />   
                            <a href="https://www.facebook.com/BillabongFamily/videos/434550201080202/" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] ' target='_blank' rel="noreferrer">Interview - Mr. Ronit Ranjan</a>
                            <br />
                            <a href="https://www.facebook.com/BillabongFamily/videos/1519231721800730/" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] ' target='_blank' rel="noreferrer">Interview - Sr. Adv. Sidharth Luthra</a>
                            <br />
                        </p>
                    </div>
                </div>
            </div>}
        </article>
    )
}

export default Tete