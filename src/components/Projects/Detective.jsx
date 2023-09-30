import React, { useState } from 'react'
import Image from '../Assets/Projects/Detective.png'

const Detective = () => {


  const [show, setShow] = useState(false)

  return (
    <article className='max-w-[1280px] my-4 rounded-lg shadow-lg bg-card min-h-[700px] p-8 flex md:flex-row flex-col justify-between items-center gap-5'>
      <div className='flex-1'>
        <h1 className='font-display font-[400] text-[36px] mb-5 '>Project: Detective</h1>
        {!show ? <p className='font-quicksand font-[400] text-[18px] mb-5 '>Keeping in mind the current generation’s love for gaming, this project includes games that spotlight real-world issues through storytelling and allow players to step into the shoes of characters facing real-world challenges related to critical issues such as water scarcity, poverty, lack of access to basic amenities, and the struggles faced by marginalized communities.
          Not only does it spread awareness but also helps NGOs working towards these causes raise funds by including their donation details at each loss or win with a message. It has successfully helped raise over 60,000 rupees for 4+ NGOs.

        </p> :
          <p className='font-quicksand font-[400] text-[18px] mb-5'>
            1. <strong>Facial Emotion Recognizer :</strong>
            Focuses on decoding human emotions by analyzing characteristic facial muscle movements, bridging the gap between AI and human empathy.
            Can be used in immersive VR/AR, improved human-computer interaction, driver safety through emotion detection, education support, market research, and security via emotion analysis in public places.
            Check it out here : video in drive link and project report
            <br /><br />

            2. <strong>FunFilters using Face Recognition:</strong> FunFilters is a dynamic project aimed at providing users with a captivating platform to elevate their photos and videos using a wide array of customizable face filters, stickers, effects, and animations.
            Features include Face Filters with Face Recognition, Live Webcam Snapshots, Video Recording, Canvas Borders and Frames, Image Editing. It empowers users to transform their visual content into captivating and shareable works of art.
            Best Used with HP or Windows as layout might vary with IOS
            Check it out here : link
            <br /><br />

            3.<strong> MudraMitra :</strong> Bridging Bharatnatyam and ML
            "MudraMitra" is an innovative Bharatanatyam AI project that revolutionizes the learning of this ancient Indian dance form. Through advanced AI technology, it identifies intricate hand gestures known as "mudras" and provides students with their significance and meanings in real-time to benefit students and enthusiasts alike.
            <br />
            Shared with notable Bharatnatyam academies, with thousands of users.
            <br />

            Links: leave button for github link and report or video (to be shared)
            <br /><br />

            4. <strong>ML & AI -Powered Performance Assessment:</strong>
            Leveraged Machine Learning to evaluate a local cafe's performance.
            Data Analysis and Visualization: Collected customer data, trained a sentiment analysis model, and created visual insights.
            My contributions involved innovative technology integration, introduction of QR code surveys, analysis of diverse data sources, optimization of peak timings, and the direction of targeted improvements.
            These efforts resulted in data-driven insights, reducing negative feedback and boosting positive reviews, empowering cafe management with valuable decision-making resources.
            Link to project report in detail and github link (to be shared)
            Keep up with my other Projects : <a href="https://github.com/AraynaSaxena" className='font-quicksand font-[400] text-[18px] text-purple underline '>https://github.com/AraynaSaxena</a>
          </p>}

        <button className='w-[180px] bg-purple hover:bg-lightpurple p-2 rounded-lg  text-white hover:text-gray mb-5 mx-5'>
          <a href="" className='font-quicksand font-[700] text-[18px]'>Project Report</a>
        </button>
        {show ?
          <button
            className='w-[180px] bg-white border-2 border-gray rounded-lg hover:bg-lightpurple p-2  text-gray hover:text-gray mb-5 mx-5 '
            onClick={() => setShow(!show)}>
            <p href="" className='font-quicksand font-[700] text-[18px]' >Read Less</p>
          </button> :
          <button
            className='w-[180px] bg-white border-2 border-gray rounded-lg hover:bg-lightpurple p-2  text-gray hover:text-gray mb-5 mx-5 '
            onClick={() => setShow(!show)}>
            <p href="" className='font-quicksand font-[700] text-[18px]' >Read More</p>
          </button>}

      </div>
      <div className='flex-1 flex justify-center '>
        <img src={Image} className='shadow-lg rounded-lg' alt="Gamechanger" />
      </div>
    </article>
  )
}

export default Detective