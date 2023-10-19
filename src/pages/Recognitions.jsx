import React from 'react'
import BookBox from '../components/Author/BookBox'
import Three from '../components/Assets/Author/Components/1.png'
import Four from '../components/Assets/Author/Components/2.png'
import Five from '../components/Assets/Author/Components/3.png'
import Six from '../components/Assets/Author/Components/4.png'
import Seven from '../components/Assets/Author/Components/5.png'



const books = [
    {
      id: 1,
      img: Three,
      button: false,
      buttontitle: ''
    },
    {
      id: 2,
      img: Four,
      para: ' Addressed peers and faculty, shared my motivation behind the book and its intended message at  a special felicitation ceremony held at my school.',
      button: true,
      buttontitle: 'Post link',
      link: 'https://www.instagram.com/p/CVKXSYgIoDz/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
    },
    {
      id: 3,
      img: Five,
      button: true,
      buttontitle: 'Link to letter',
      link: 'https://drive.google.com/file/d/1WcfCb-rATC6q1TqZFV4iMkp3LKuuxzPM/view'
    },
    {
      id: 4,
      img: Six,
      button: false,
      buttontitle: ''
    },
    {
      id: 5,
      img: '',
      button: false,
      buttontitle: ''
    },
    {
      id: 6,
      img: Seven,
      button: false,
      buttontitle: ''
    },
  ]

const Recognitions = () => {
    return (
        <section className='min-h-screen flex flex-col items-center'>
            <section className='w-full flex flex-col items-center'>
                <article id='recognitions' className='lg:w-[1160px] w-full min-h-[80vh] ml-[10px] md:ml-0 grid lg:grid-cols-2 lg:grid-rows-3 grid-cols-1 grid-rows-6 mt-[20px] lg:p-0 p-5'>
                    {books.map((book) => {
                        const { id } = book
                        return (<BookBox key={id} {...book} />)
                    })}
                </article>
            </section>
        </section>
    )
}

export default Recognitions