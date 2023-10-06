import React from 'react'
import PageHero from '../components/Author/PageHero'
import PagePara from '../components/Author/PagePara'
import { Link, Outlet } from 'react-router-dom'

const AuthorPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <Link to='authorabout'>About </Link>
      <Link to='book'>book </Link>
      <PageHero />
      {/* <PagePara /> */}
      <Outlet />
    </section>
  )
}

export default AuthorPage