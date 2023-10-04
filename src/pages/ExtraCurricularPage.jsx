import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHero from '../components/Extracurricular/PageHero'
import TalentSlider from '../components/Extracurricular/Talents'

const ExtraCurricularPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <TalentSlider/>
      <Outlet/>
    </section>
  )
}

export default ExtraCurricularPage