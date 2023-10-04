import React from 'react'
import PageHero from '../components/Brewscape/PageHero'
import PagePoem from '../components/Brewscape/PagePoem'

const Brewscape = () => {
    return (
        <section className='flex flex-col items-center'>
            <PageHero />
            <PagePoem />
        </section>
    )
}

export default Brewscape