import React from 'react'
import One from '../Assets/Leadership/Editorial/1.png'
import Two from '../Assets/Leadership/Editorial/2.png'

const griditems = [
    {
        id: 1,
        title: 'Billabong Bulletin',
        img: One,
        url: ''
    },
    {
        id: 2,
        title: 'Tete-a-tete',
        img: Two,
        url: ''
    },
]

const PageGrid2 = () => {
    return (
        <article className=' py-28 lg:px-[200px] lg:w-[1280px] w-full bg-primary shadow-md rounded-md flex flex-col gap-5 my-8 px-3'>
            <h1 className='font-display text-center md:text-[36px] text-[32px] lg:ml-0 md:ml-2 leading-[40px] font-[400] mb-[40px] self-start'>
                Editorial Board Member <br /> (2020-2021) :
            </h1>
            <article className='md:min-w-[600px] grid gap-x-[80px] gap-y-[20px] md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-2 w-full  p-4'>
                {griditems.map((griditem) => {
                    const { id, title, img } = griditem
                    return <article key={id} className='lg:w-[300px] w-[200px] mb-4 md:mb-0 lg:h-[250px] h-[180px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center relative p-4'>
                        <h2 className='text-[16px] text-center font-[700] font-quicksand capitalize'>
                            {title}
                        </h2>
                        <img src={img} alt={title} className='absolute top-0 left-0 w-full h-full' />
                    </article>
                })}
            </article>
        </article>
    )
}

export default PageGrid2