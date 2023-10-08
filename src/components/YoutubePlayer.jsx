import React from 'react'

const YoutubePlayer = ({ url, para }) => {
  return (
    <div className='bg-div-bg flex flex-col justify-center items-center rounded-xl'>
      <iframe width="390px" height="220px" className='rounded-xl' src={url} frameborder="0" allowfullscreen></iframe>
      <p className='w-[390px] px-2 py-4'>{para}</p>
      {
        url === 'https://www.youtube.com/embed/oZMzRjHqQCI?si=A1STtB0lrP2Ex3SU' && <p className='w-[390px] px-2 py-4' >

          Play on “Public Safety of Women,” resulting in an audience of 250+ children and adults from <a href="https://www.chaitanyakul.in/" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Chaitanya Kul</a> and <a href="https://www.thinksharpfoundation.org/" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>ThinkSharp Foundation</a>. <br /><br />
          Featured: <a href="https://tribesforgood.com/storytelling-for-social-impact-a-step-by-step-guide-to-creating-powerful-plays/" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Blog1</a>, <a href="https://tribesforgood.com/empowering-social-discourse-araynas-journey-through-theatre-and-activism/" target="_blank" rel="noopener noreferrer" className='font-quicksand font-[400] text-[18px] text-purple underline '>Blog 2</a>
        </p>
      }
    </div>
  )
}

export default YoutubePlayer