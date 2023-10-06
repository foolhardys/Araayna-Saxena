import React, { useState } from 'react'
import One from '../Assets/Leadership/Editorial/1.png'
import img from '../Assets/Leadership/EB grid/2.png'


const Billabong = () => {

    const [showBox, setShowBox] = useState(false)

    return (
        <article className='lg:w-[300px] w-[200px] mb-4 md:mb-0 lg:h-[250px] h-[180px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center relative p-4 hover:bg-dark-purple hover:text-white transition-all' onClick={() => setShowBox(true)}>
            <h2 className='text-[16px] text-center font-[700] font-quicksand capitalize'>
                Billabong Bulletin
            </h2>
            <img src={One} alt='' className='absolute top-0 left-0 w-full h-full' />
            {showBox && <div className='bg-bg-purple p-[50px] lg:w-[800px] md:w-[700px] w-[400px] absolute top-0 lg:left-0 z-10 gap-5 flex md:flex-row flex-col' onMouseLeave={()=> setShowBox(false)}>
                <div className='md:w-3/5 w-full'>
                    <h1 className='text-[18px] font-[700] font-quicksand capitalize mb-8 text-left text-white'>Billabong Bulletin</h1>
                    <p className='text-[16px]  font-[400]  text-white font-quicksand mb-4'>Curated 5 issues of The Billabong Bulletin- A quarterly School Newsletter with the Editorial Board. <br /><br />
                        Started the  “Mode de Vie” - Lifestyle page in the newsletter featuring seasonal themes, health and wellness guides, trends, and interesting blogs. The addition added variety to the newsletter, and received a 50% boost in submissions from readers within the first month. <br /> <br />

                        • Theme Selection: Collaborated on choosing themes for each issue.
                        <br />
                        • Content Planning: Conducted meetings to determine unique features.
                        <br />
                        • Design: Created newsletter designs aligned with chosen themes.
                        <br />
                        • Content Management: Collected, sorted, and selected submissions, including photos, stories, and essays.
                        <br />
                        • Writing: Authored various write-ups, including event coverage.
                    </p>
                </div>
                <div className='flex flex-col gap-4 md:w-2/5 w-full'>
                    <div className='flex flex-1 flex-col gap-2 rounded-xl' >
                        <img src={img} alt="" className='rounded-xl' />
                        <p className='text-white px-4 font-quicksand font-[600] text-[12px]'>Link to more Publications :</p>
                    </div>
                    <div className='gap-2 p-2 bg-purple/80 rounded-md '>
                        <p className='overflow-hidden'>
                            <a href="https://www.billabonghighbhopal.com/pdf/newsletter-july-2020.pdf" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] '>July,2020</a>   
                            <a href="https://www.billabonghighbhopal.com/pdf/newsletter-oct-2020.pdf" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] '>October,2020</a>
                            <a href="https://www.billabonghighbhopal.com/pdf/newsletter-jan-2021.pdf" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] '>January,2021</a>
                            <br />
                            <a href="https://www.billabonghighbhopal.com/pdf/newsletter-april-2021.pdf" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] '>April,2021</a>
                            <a href="https://www.billabonghighbhopal.com/pdf/newsletter-july-2021.pdf" className='mr-2 underline text-white hover:text-dark-gray font-roboto font-[100] '>July,2021</a>
                        </p>
                    </div>
                </div>
            </div>}
        </article>
    )
}

export default Billabong