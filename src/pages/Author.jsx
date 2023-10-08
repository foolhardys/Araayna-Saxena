import React from 'react'
import AboutAuthorHero from '../components/Author/AboutAuthorHero'
import AboutAuthorMain from '../components/Author/AboutAuthorMain'

const Author = () => {
  return (
    <section  className='min-h-screen flex flex-col items-center'>
      <AboutAuthorHero />
      <AboutAuthorMain />
    </section>
  )
}

export default Author