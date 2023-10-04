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
        title: 'Book: Amidst The Downpour',
        img: '',
        url: ''
    },
    {
        id: 3,
        title: 'Research projects',
        img: '',
        url: ''
    },
    {
        id: 4,
        title: 'Internships',
        img: '',
        url: ''
    },
    {
        id: 5,
        title: 'Brewscape: A Coffee Adventure',
        img: '',
        url: ''
    },
    {
        id: 6,
        title: 'Websites',
        img: '',
        url: ''
    },
    {
        id: 7,
        title: 'My Author’s Journey',
        img: '',
        url: ''
    },
    {
        id: 8,
        title: '8 years journey with Bharatnatyam',
        img: '',
        url: ''
    },
    {
        id: 9,
        title: 'School Vice-Captain',
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
            <article className='md:min-w-[600px] max-w-[980px] grid gap-x-[80px] gap-y-[20px] md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9 w-full  p-4'>
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