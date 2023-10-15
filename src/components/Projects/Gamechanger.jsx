import React from 'react'
import Image from '../Assets/Projects/Gamechanger.png'

const Gamechanger = () => {
    return (
        <article id='gamechanger' className='max-w-[1280px] my-4 pb-[220px] rounded-lg shadow-lg bg-light-gray min-h-[50vh] p-8 flex md:flex-row flex-col justify-between items-center gap-5  bg-gray-white-bg/5'>
            <div className='flex-1'>
                <h1 className='font-display font-[400] text-[36px] mb-[60px] pl-4'>Project: Gamechanger</h1>
                <p className='font-quicksand font-[400] text-[18px] mb-8  pl-4'>Keeping in mind the current generation’s love for gaming, this project includes games that spotlight real-world issues through storytelling and allow players to step into the shoes of characters facing real-world challenges related to critical issues such as water scarcity, poverty, lack of access to basic amenities, and the struggles faced by marginalized communities. <br /><br />
                    Not only does it spread awareness but also helps NGOs working towards these causes raise funds by including their donation details at each loss or win with a message. It has successfully helped raise over 60,000 rupees for 4+ NGOs.
                </p>
                <a href="https://github.com/AraynaSaxena/Quench-The-Thirst-Game-" target='_blank' rel="noreferrer" className='w-[180px] font-quicksand font-[700] text-[18px] bg-purple rounded-lg hover:bg-lightpurple px-5 ml-3 py-4 border-2 text-white hover:text-gray mb-10 '>
                    Project
                </a>
            </div>
            <div className='flex-1 flex justify-center mt-5'>
                <img src={Image} className='shadow-lg rounded-lg' alt="Gamechanger" />
            </div>
        </article>
    )
}

export default Gamechanger