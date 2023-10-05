import React from 'react'
import CafeAnalysis from './CafeAnalysis'
import MudraMitra from './MudraMitra'
import FacialRecognition from './FacialRecognition'
import FunFilters from './FunFilters'

const SubProjects = () => {
  return (
    <article className='grid lg:grid-cols-2  grid-cols-1 lg:grid-rows-2 grid-rows-4 gap-x-5 gap-y-5 '>
        <FunFilters/>
        <MudraMitra/>
        <FacialRecognition/> 
        <CafeAnalysis/>
    </article>
  )
}

export default SubProjects