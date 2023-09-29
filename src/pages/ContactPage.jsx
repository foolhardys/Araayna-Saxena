import React from 'react'
import PageHero from '../components/Contacts/PageHero'
import Contacts from '../components/Contacts/Contacts'

const ContactPage = () => {
  return (
    <section className='flex flex-col items-center'>
      <PageHero />
      <Contacts/>
    </section>
  )
}

export default ContactPage