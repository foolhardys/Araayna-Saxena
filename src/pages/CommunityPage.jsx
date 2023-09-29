import React from 'react'
import PageHero from '../components/Community/PageHero'
import Uthaan from '../components/Community/Uthaan.jsx'

const CommunityPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <Uthaan/>
    </section>
  )
}

export default CommunityPage