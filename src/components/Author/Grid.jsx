import React from 'react'
import H1 from '../Assets/Author/Poem/Heading/H1.png'
import H2 from '../Assets/Author/Poem/Heading/H2.png'
import H3 from '../Assets/Author/Poem/Heading/H3.png'
import H4 from '../Assets/Author/Poem/Heading/H4.png'
import H5 from '../Assets/Author/Poem/Heading/H5.png'
import H6 from '../Assets/Author/Poem/Heading/H6.png'
import H7 from '../Assets/Author/Poem/Heading/H7.png'
import P1 from '../Assets/Author/Poem/Text/P1.jpg'
import P2 from '../Assets/Author/Poem/Text/P2.jpg'
import P3 from '../Assets/Author/Poem/Text/P3.jpg'
import P4 from '../Assets/Author/Poem/Text/P4.jpg'
import P5 from '../Assets/Author/Poem/Text/P5.jpg'
import P6 from '../Assets/Author/Poem/Text/P6.jpg'
import P7 from '../Assets/Author/Poem/Text/P7.jpg'

const Grid = () => {
    return (
        <div className='grid md:grid-cols-2 w-[1280px] grid-cols-1 md:grid-rows-7 grid-rows-14'>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H1} alt="" />
                    <p className='text-[24px] px-[80px]'>One day at a time, shall we saunter on the
                        shore,<br />
                        Washed by the waves of concords of
                        goodwill,<br />
                        Awaiting a lifeguard to rescue from these
                        waters of despair,<br />
                        For I have forgotten how to swim<br /></p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P1} alt="" className='h-full' />
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P2} alt="" className='h-full' />
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H2} alt="" />
                    <p className='text-[24px] px-[80px]'>
                        These petals adorning me like jewels,<br />
                        Are mistaken for the reason of my
                        existence,<br />
                        For when the cold embrace of winter
                        dominates the warmth,<br />
                        They are the first to leave and the last to
                        enter<br />
                    </p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H3} alt="" />
                    <p className='text-[24px] px-[80px]'>
                        Seek the light that brightens within
                        you,<br />
                        And bid your inner turbulence adieu,<br />
                        Bring on your inner illuminating
                        lighthouse,<br />
                        And sail through oceans of
                        magnanimity<br />
                    </p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P3} alt="" className='h-full' />
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P4} alt="" className='h-full' />
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H4} alt="" />
                    <p className='text-[24px] px-[80px]'>
                        No one else could have made what I was
                        drinking, <br />
                        Because it was my father’s selfless love that
                        enhanced my emotional perception of
                        taste, <br />
                        For others, it was a four-walled room called
                        the kitchen, <br />
                        However, for me, it was the native home of
                        the most beautiful memories <br />
                    </p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H5} alt="" />
                    <p className='text-[24px] px-[80px]'>
                        While the world read the caterpillar’s book, <br />
                        It was the beginning of a new chapter for
                        the butterfly, <br />
                        The hue of its black veins accompanied the
                        sunny golds with conviviality. <br />
                        As it danced in the aromatic spring air,
                        In the camera of the universe, <br />
                        It brings serenity to the frame <br />
                    </p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P5} alt="" className='h-full' />
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P6} alt="" className='h-full' />
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H6} alt="" />
                    <p className='text-[24px] px-[80px]'>
                        For the price of the crimes these emotions
                        commit, <br />
                        Can only be paid on this paper, <br />
                        For they were once the adroit residents of
                        your unhappy mind, <br />
                        And now they are the prisoners of my
                        paper <br />
                    </p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh]'>
                <div className='flex flex-col items-center'>
                    <img src={H7} alt="" />
                    <p className='text-[24px] px-[80px]'>
                        One can sense earnest condolences as it
                        disappears in my surveillance, <br />
                        My mind drowns in the demands for
                        rebuttal to the accusations of my ailment, <br />
                        It doesn’t express, nor does it aim to find
                        the medicine, <br />
                        As it is with faith fthat it drowns in the
                        waters of dejection <br />
                    </p>
                </div>
            </div>
            <div className='w-full lg:mb-5 mb-10 min-h-[70vh] flex justify-center items-center'>
                <img src={P7} alt="" className='h-full' />
            </div>
        </div>
    )
}

export default Grid