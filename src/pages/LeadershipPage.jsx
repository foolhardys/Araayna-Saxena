import React from 'react'
import PageHero from '../components/Leadership/PageHero'
import PageGrid from '../components/Leadership/PageGrid'
import PageGrid2 from '../components/Leadership/PageGrid2'
import LiteraryPrefect from '../components/Leadership/LiteraryPrefect'

const LeadershipPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center p-4'>
      <PageHero />
      <PageGrid/>
      <PageGrid2/>
      <LiteraryPrefect/>
    </section>
  )
}

export default LeadershipPage