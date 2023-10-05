import React from 'react'
import SubProjects from './SubProjects'

const Detective = () => {
  return (
    <article className='max-w-[1280px] my-4 rounded-lg shadow-lg bg-card min-h-[700px] p-8 flex md:flex-row flex-col justify-between items-center gap-5'>
    <div className='flex-1'>
        <h1 className='font-display font-[400] text-[36px] mb-5 '>Project: Detective</h1>
        <p className='font-quicksand font-[400] text-[18px] mb-10 '>Ever looked at your computer and wondered if it could take on the role of a detective if not of a robot that’s going to take over us soon? This project includes a series of Artificial Intelligence and Machine Learning based programs that detect all sorts of things including Facial Emotions, Dance forms, Eyes and Faces, or major gaps in your business which is on the verge of losing customers.
        </p>
        <SubProjects/>
    </div>
</article>
  )
}

export default Detective