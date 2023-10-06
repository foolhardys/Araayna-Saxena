import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHero from '../components/Extracurricular/PageHero'
import TalentSlider from '../components/Extracurricular/Talents'
import Bharatnatyam from './Bharatnatyam'
import Drama from './Drama'
import Drums from './Drums'
import Piano from './Piano'

const ExtraCurricularPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <TalentSlider />
      <Bharatnatyam />
      <Drama />
      <Drums />
      <Piano />
      <Outlet />
    </section>
  )
}

export default ExtraCurricularPage