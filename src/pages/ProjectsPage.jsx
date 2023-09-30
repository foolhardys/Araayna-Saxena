import React from 'react'
import PageHero from '../components/Projects/PageHero'
import Gamechanger from '../components/Projects/Gamechanger'
import Internships from '../components/Projects/Internships'
import Detective from '../components/Projects/Detective'
import Website from '../components/Projects/Website'


const ResearchPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      {/* <ProjectSlider/> */}
      <PageHero/>
      <Gamechanger/>
      <Detective/>
      <Internships/>
      <Website/>
    </section>
  )
}

export default ResearchPage