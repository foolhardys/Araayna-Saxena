import React from 'react'


const griditems = [
    {
        id: 1,
        title: 'Community outreach with Uthaan foundation',
        img: '',
        url: ''
    },
    {
        id: 2,
        title: 'Literary Journey- Amidst the Downpour',
        img: '',
        url: ''
    },
    {
        id: 3,
        title: 'research',
        img: '',
        url: ''
    },
    {
        id: 4,
        title: 'projects',
        img: '',
        url: ''
    },
    {
        id: 5,
        title: 'leadership',
        img: '',
        url: ''
    },
    {
        id: 6,
        title: 'Creativity: YT/Social Media / Design',
        img: '',
        url: ''
    },
    {
        id: 7,
        title: 'Dance',
        img: '',
        url: ''
    },
    {
        id: 8,
        title: 'Instruments',
        img: '',
        url: ''
    },
    {
        id: 9,
        title: 'Theatre/Drama',
        img: '',
        url: ''
    }
]




const HomeGrid = () => {
    return (
        <article className=' p-4 flex flex-col items-center w-full bg-primary'>
            <h1 className='font-display text-center md:text-[72px] text-[40px] mt-[80px] lg:ml-0 md:ml-2 leading-[90px] font-[400] text-secondary mb-[40px] self-center'>
                Some key initiatives
            </h1>
            <article className='md:min-w-[600px] grid gap-x-[80px] gap-y-[20px] md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9 w-full  p-4'>
                {griditems.map((griditem) => {
                    const { id, title} = griditem
                    return <article key={id} className='md:w-[180px] w-[220px] mb-4 md:mb-0 h-[182px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center'>
                        <h2 className='text-[16px] text-center font-[400] font-quicksand capitalize'>
                            {title}
                        </h2>
                    </article>
                })}
            </article>
        </article>
    )
}

export default HomeGrid