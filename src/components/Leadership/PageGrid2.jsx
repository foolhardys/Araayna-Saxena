import React from 'react'
import Billabong from './Billabong'
import Tete from './Tete'

// const griditems = [
//     {
//         id: 1,
//         title: 'Billabong Bulletin',
//         img: One,
//         url: ''
//     },
//     {
//         id: 2,
//         title: 'Tete-a-tete',
//         img: Two,
//         url: ''
//     },
// ]

const PageGrid2 = () => {
    return (
        <article className=' py-28 lg:px-[200px] lg:w-[1280px] w-full bg-white shadow-lg rounded-md flex flex-col gap-5 my-8 px-3'>
            <h1 className='font-display text-left md:text-[36px] text-[32px] lg:ml-0 md:ml-2 leading-[40px] font-[400] mb-[40px] self-start'>
                Editorial Board Member <br /> (2020-2021) :
            </h1>
            <article className='md:min-w-[600px] grid gap-x-[80px] gap-y-[20px] md:grid-cols-3 md:grid-rows-1 grid-cols-1 grid-rows-2 w-full  p-4'>
                <Billabong/>
                <Tete/>
            </article>
        </article> 
    )
}

export default PageGrid2