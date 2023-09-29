import React from 'react'
import { Outlet } from 'react-router-dom'
import PageHero from '../components/Extracurricular/PageHero'
import PageNavigation from '../components/Extracurricular/PageNavigation'

const ExtraCurricularPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <PageNavigation/>
      <Outlet/>
    </section>
  )
}

export default ExtraCurricularPage