import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHero from '../components/Extracurricular/PageHero'
import TalentSlider from '../components/Extracurricular/Talents'
import Bharatnatyam from './Bharatnatyam'
import Drama from './Drama'
import Drums from './Drums'
import Piano from './Piano'

const ExtraCurricularPage = () => {

  function handleNavigation(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <section className='min-h-screen flex flex-col items-center justify-evenly'>
      <PageHero />
      <TalentSlider />
      <div id='bharatnatyam'>
        <Bharatnatyam />
      </div>
      <div id="drama">
        <Drama />
      </div>
      <div id="drums">
        <Drums />
      </div>
      <div id="piano">
        <Piano />
      </div>
      {/* <Outlet /> */}
    </section>
  )
}

export default ExtraCurricularPage
