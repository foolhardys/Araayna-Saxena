import React from 'react'
import PageHero from '../components/Author/PageHero'
import PageArticle from '../components/Author/PageArticle'
import PagePara from '../components/Author/PagePara'

const AuthorPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <PageHero />
      <PageArticle/>
      <PagePara/>
    </section>
  )
}

export default AuthorPage