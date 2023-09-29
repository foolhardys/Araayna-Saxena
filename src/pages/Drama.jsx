import React from 'react'
import PageContent from '../components/Extracurricular/PageContent'
import Image from '../components/Assets/Drama/AraynaDramaMain.png'

const Drama = () => {
  return (
    <section>
      <PageContent heading='Actor, Director and Activist' text='Directed, wrote and acted in multiple plays, leading teams of 5+ individuals for memorable performances. 
Presented comprehensive manuals on the “Art of Playwriting” (will share on youtube link)
' image={Image} />
      <div className="ratio ratio-16x9">
        <iframe src="https://www.youtube.com/watch?v=oZMzRjHqQCI" title="YouTube video" allowfullscreen></iframe>
      </div>
    </section>
  )
}

export default Drama