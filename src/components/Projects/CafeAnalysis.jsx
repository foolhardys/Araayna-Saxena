import React, { useState } from 'react'
import Four from '../Assets/Projects/Detective/4.png'

const CafeAnalysis = () => {

  const [showCard, setShowCard] = useState(false)

  return (
    <article className='lg:w-[600px] md:w-[700px] min-h-[300px] p-4 bg-purple/50 flex md:flex-row flex-col gap-2 items-center rounded-md relative'>
      <div className='w-4/6'>
        <h1 className='font-quicksand font-[700] text-[20px] text-dark-gray mb-4'>Cafe Analysis </h1>
        <p className='font-quicksand font-[400] text-[18px] text-gray mb-4'>
          Worked at “Cafe Coffee Day” and leveraged Machine Learning to evaluate the cafe’s performance post losses due to COVID-19.
        </p>
        <button className='bg-white hover:bg-lightpurple text-gray hover:text-dark-gray p-2 w-[200px]' onClick={() => setShowCard(true)}>Read More</button>
      </div>
      <div className='w-2/6'>
        <img src={Four} alt="Funfilters" className='h-[200px] md:block hidden' />
      </div>
      {showCard && <div className='bg-bg-purple z-10 md:w-[720px] w-full flex gap-4 justify-between items-center absolute top-0 left-0 p-6 rounded-md' onClick={() => setShowCard(false)} onMouseLeave={() => setShowCard(false)}>
        <div className='w-4/6'>
          <h1 className='font-quicksand font-[700] text-[20px] text-white mb-4'>ML & AI -Powered Performance Assessment :</h1>
          <p className='font-quicksand font-[400] text-[18px] text-white mb-8'>
          • Worked at “Cafe Coffee Day” and leveraged Machine Learning to evaluate the cafe’s performance post losses due to COVID-19. <br />

          • Data Analysis and Visualization: Collected customer feedback using detailed surveys, QR codes and online reviews, trained a sentiment analysis model, and generated visual insights. <br /><br />

            My contributions involved innovative technology integration, introduction of QR code surveys, analysis of diverse data sources, optimization of peak timings, and provision of direction of targeted improvements.
            These efforts resulted in data-driven insights, reducing negative feedback and boosting positive reviews, empowering cafe management with valuable decision-making resources.
          </p>
          <a className='bg-purple hover:bg-lightpurple text-white hover:text-dark-gray py-4 px-8 rounded-md font-quicksand font-[700] text-[18px] w-[200px] mr-[10px]' href="https://drive.google.com/file/d/1vf2AwMr40i1jjvL5rHah378SVfmVXQLq/view?usp=share_link" target='_blank' rel="noreferrer">Project Report</a>
          <a className='bg-purple hover:bg-lightpurple text-white hover:text-dark-gray py-4 px-8 rounded-md font-quicksand font-[700] text-[18px] w-[200px]' href="https://github.com/AraynaSaxena/Cafe-success-analysis-using-ML" target='_blank' rel="noreferrer">Github</a>
        </div>
        <div className='w-2/6'>
          <img src={Four} alt="Funfilters" className='h-[200px] md:block hidden' />
        </div>
      </div>}
    </article>
  )
}

export default CafeAnalysis