import React , {useState} from 'react'
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
        <button className='bg-white hover:bg-lightpurple text-gray hover:text-dark-gray p-2 w-[200px]' onClick={()=> setShowCard(true)}>Read More</button>
      </div>
      <div className='w-2/6'>
        <img src={Four} alt="Funfilters" className='h-[200px] md:block hidden' />
      </div>
      {showCard && <div className='bg-bg-purple z-10 md:w-[720px] w-full flex gap-4 justify-between items-center absolute top-0 left-0 p-6 rounded-md' onClick={() => setShowCard(false)} onMouseLeave={() => setShowCard(false)}>
        <div className='w-4/6'>
          <h1 className='font-quicksand font-[700] text-[20px] text-white mb-4'>Facial Emotion Recognizer :</h1>
          <p className='font-quicksand font-[400] text-[18px] text-white mb-4'>
            Recognition:Focuses on decoding human emotions by analyzing characteristic facial muscle movements, bridging the gap between AI and human empathy.
            Can be used in immersive VR/AR, improved human-computer interaction, driver safety through emotion detection, education support, market research, and security via emotion analysis in public places.

          </p>
          <button className='bg-purple hover:bg-lightpurple text-white hover:text-dark-gray p-4 rounded-md font-quicksand font-[700] text-[18px] w-[200px]'> <a href="https://drive.google.com/file/d/1fMXXmbMdR5nrp9R5H1GrWSiNMUxJuBnR/view?usp=drive_link">Project Report</a></button>
        </div>
        <div className='w-2/6'>
          <img src={Four} alt="Funfilters" className='h-[200px] md:block hidden' />
        </div>
      </div>}
    </article>
  )
}

export default CafeAnalysis