import React from 'react'
import PageHero from '../components/Author/PageHero'
import { Link, Outlet } from 'react-router-dom'
import Contact from '../components/Author/Contact'

const AuthorPage = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
      <PageHero />
      <Outlet />
      <Contact />
    </section>
  )
}

export default AuthorPage