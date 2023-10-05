import React from 'react'
import PageHero from '../components/Author/PageHero'
import PageArticle from '../components/Author/PageArticle'
import PagePara from '../components/Author/PagePara'
import { Outlet } from 'react-router-dom'

const AuthorPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <PageHero />
      <PageArticle />
      <PagePara />
      <Outlet/>
    </section>
  )
}

export default AuthorPage