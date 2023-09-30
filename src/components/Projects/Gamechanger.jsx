import React from 'react'
import Image from '../Assets/Projects/Gamechanger.png'

const Gamechanger = () => {
    return (
        <article className='max-w-[1280px] my-4 rounded-lg shadow-lg bg-card min-h-[700px] p-8 flex md:flex-row flex-col justify-between items-center gap-5'>
            <div className='flex-1'>
                <h1 className='font-display font-[400] text-[36px] mb-5 '>Project: Gamechanger</h1>
                <p className='font-quicksand font-[400] text-[18px] mb-5 '>Keeping in mind the current generation’s love for gaming, this project includes games that spotlight real-world issues through storytelling and allow players to step into the shoes of characters facing real-world challenges related to critical issues such as water scarcity, poverty, lack of access to basic amenities, and the struggles faced by marginalized communities.
                    Not only does it spread awareness but also helps NGOs working towards these causes raise funds by including their donation details at each loss or win with a message. It has successfully helped raise over 60,000 rupees for 4+ NGOs.
                </p>
                <button className='w-[180px] bg-purple rounded-lg hover:bg-lightpurple p-2  text-white hover:text-gray mb-5 '>
                    <a href="" className='font-quicksand font-[700] text-[18px]'>Project Report</a>
                </button>
            </div>
            <div className='flex-1 flex justify-center '>
                <img src={Image} className='shadow-lg rounded-lg' alt="Gamechanger" />
            </div>
        </article>
    )
}

export default Gamechanger