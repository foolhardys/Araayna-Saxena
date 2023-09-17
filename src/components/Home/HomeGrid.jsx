import React from 'react'


const griditems = [
    {
        id: 1,
        title: 'first',
        img: '',
        url: ''
    },
    {
        id: 2,
        title: 'second',
        img: '',
        url: ''
    },
    {
        id: 3,
        title: 'third',
        img: '',
        url: ''
    },
    {
        id: 4,
        title: 'fourth',
        img: '',
        url: ''
    },
    {
        id: 5,
        title: 'fifth',
        img: '',
        url: ''
    },
    {
        id: 6,
        title: 'sixth',
        img: '',
        url: ''
    },
    {
        id: 7,
        title: 'seventh',
        img: '',
        url: ''
    },
    {
        id: 8,
        title: 'eigth',
        img: '',
        url: ''
    },
    {
        id: 9,
        title: 'ninth',
        img: '',
        url: ''
    }
]


const HomeGrid = () => {
    return (
        <article className='w-[1080px] p-4 flex flex-col items-center'>
            <h1 className='font-garamond text-[72px] mt-[80px] leading-[90px] font-[400] text-secondary mb-[40px] self-start'>
                Some key initiatives
            </h1>
            <article className='w-[600px] grid gap-[10px] grid-cols-3 grid-rows-3 p-4'>
                {griditems.map((griditem) => {
                    const { id, title, img, url } = griditem
                    return <article key={id} className='w-[180px] h-[182px] rounded-sm bg-brown'></article>
                })}
            </article>
        </article>
    )
}

export default HomeGrid