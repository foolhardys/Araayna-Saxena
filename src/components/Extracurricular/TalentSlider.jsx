import React from 'react'
import SingleTalent from './SingleTalent'

const talents = [
    {
        id: 1,
        heading: 'Bharatnatyam',
        description: 'Trained in Bharatanatyam through 8+ years of relentless dedication and attained an esteemed degree with distinction.',
        url: 'bharatnatyam'
    },
    {
        id: 2,
        heading: 'Actor, Playwright, Director and Activist',
        description: 'Directed, wrote and acted in multiple plays, leading teams of 5+ individuals for memorable performances.',
        url: 'drama'
    },
    {
        id: 3,
        heading: 'Drummer- Rock and Roll',
        description: 'Dedicated to learning the drums from the Trinity College of London, fueled by a deep passion for rock and roll-Grade 2 examination- achieved Distinction',
        url: 'drums'
    },
    {
        id: 4,
        heading: 'Pianist',
        description: 'Decoding human feelings with AI. One thing AI cannot imitate is the human quality of empathy driven by their complicated emotions',
        url: 'piano'
    },
]

const TalentSlider = () => {
    return (
        <section className='flex gap-5 m-10 flex-wrap md:flex-row flex-col items-center justify-center lg:justify-normal py-8'>
            {talents.map((talent) => {
                const { id } = talent
                return <SingleTalent key={id} {...talent} />
            })}
        </section>
    )
}

export default TalentSlider