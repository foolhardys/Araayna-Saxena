import React from 'react'
import SingleProject from './SingleProject'

const projects = [
    {
        id: 1,
        heading: 'Project Gamechanger',
        description: 'In a remarkable blend of creativity and technology, Project “GameChanger” has harnessed the power of storytelling and interactive gaming to raise awareness about widespread societal issues while supporting NGOs.',
        url: '#gamechanger'
    },
    {
        id: 2,
        heading: 'Project Detective',
        description: 'Ever looked at your computer and wondered if it could take on the role of a detective if not of a robot that’s going to take over us soon? This project includes a series of Artificial Intelligence and Machine Learning based programs that detect all sorts of things including Facial Emotions, Dance forms, Eyes and Faces, or major gaps in your business which is on the verge of losing customers. ',
        url: '#detective'
    },
    {
        id: 3,
        heading: 'Indian Classical Dance Form Corrector and Identifier',
        description: 'I am a professional Bharatnatyam Dancer and also wondered if I could merge two of my passions to create something that would help students like me.',
        url: '#dance'
    },
    {
        id: 4,
        heading: 'Facial Emotion Recognizer',
        description: 'Decoding human feelings with AI. One thing AI cannot imitate is the human quality of empathy driven by their complicated emotions',
        url: '#face'
    },
    {
        id: 5,
        heading: 'FunFilters using Face Recognition',
        description: 'FunFilters is a dynamic project aimed at providing users with a captivating platform to elevate their photos and videos using a wide array of customizable face filters, stickers, effects, and animations.',
        url: '#filters'
    },
    {
        id: 6,
        heading: 'Evaluation of the performance of a local cafe using ML algorithm',
        description: 'Data Collection: Gathered a dataset of customer reviews for the cafe from all online/delivery platforms, QR code based surveys, and basic customer data from the cafe.',
        url: '#cafe'
    },
]

const ProjectSlider = () => {
    return (
        <section className='flex gap-5 m-10 flex-wrap md:flex-row flex-col items-center justify-center'>
            {projects.map((project) => {
                const { id, heading, description } = project
                return <SingleProject key={id} {...project} />
            })}
        </section>
    )
}

export default ProjectSlider