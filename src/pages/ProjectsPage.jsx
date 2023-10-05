import React from 'react'
import PageHero from '../components/Projects/PageHero'
import Gamechanger from '../components/Projects/Gamechanger'
import Internships from '../components/Projects/Internships'
import Website from '../components/Projects/Website'
import Competetions from '../components/Projects/Competetions'
import Detective from '../components/Projects/Detective'


const ResearchPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero/>
      <Gamechanger/>
      <Detective/>
      <Competetions/>
      <Internships/>
      <Website/>
    </section>
  )
}

export default ResearchPage