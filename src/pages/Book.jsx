import React from 'react'
import PageArticle from '../components/Author/PageArticle'
import BookMain from '../components/Author/BookMain'

const Book = () => {
  return (
      <section className='min-h-screen flex flex-col items-center'>
      <PageArticle />
      <BookMain />
      </section>
      
  )
}

export default Book