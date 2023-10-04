import React from 'react'
import Bg from '../Assets/Brewsacpe/Bg.png'
import Pic1 from '../Assets/Brewsacpe/Pic1.png'
import Video from '../Assets/Brewsacpe/video.mp4'

const PageHero = () => {
    return (
        <section className='flex flex-col gap-10 w-full rounded-md items-center'>
            <h1 className='font-display text-[56px] font-[400] ml-[100px] self-start'>Brewscape</h1>
            <div className='py-4 px-14 flex md:flex-row flex-col relative gap-4 w-[1280px]'>
                <div className='w-1/2 p-4'>
                    <p className='font-quicksand font-[400] text-[18px] text-gray '>I decided to start my initiative : <strong className='font-[800] text-dark-gray'>“Brewscape: A Coffee <br /> Adventure”</strong> to share my passion for Coffee, which <br />developed close to my heart right since I was a kid, <br /> from trying out my dad’s signature coffee after he’d <br /> return tired from work late at night to trying to <br /> authentic blends at placed I’d travel to.
                        At Brewscape we:  <br />
                        1. <strong className='font-[800] text-dark-gray'>Research and recommend </strong>local cafes across India <br /> which sell the most authentic varieties of coffees <br />, providing insights into the <strong className='font-[800] text-dark-gray'>passion and creativity</strong><br /> that goes behind it right from its <br /> <strong className='font-[800] text-dark-gray'>harvesting to its delectable recipes</strong>.
                        <br />
                        2. <strong className='font-[800] text-dark-gray'>Host Coffee Tasting</strong> Events in partnership with <br />local cafes in cities, to bring to you coffee made <br /> which ingredients you can’t imagine and a taste <br /> you’d die for.
                        <br />
                        3. <strong className='font-[800] text-dark-gray'>Build a Community of Caffeinated Adventurers</strong> <br />, taking suggestions and transforming shared sips <br /> into lasting bonds.
                        <br />
                        <strong className='font-[800] text-dark-gray'>Embark</strong>  a flavourful  journey together, where <br /> suggestions brew, and <strong className='font-[800] text-dark-gray'>connections flourish</strong> – one cup <br /> at a time.</p>
                    <button className='w-[230px] p-4 bg-purple text-white hover:bg-lightpurple hover:text-gray my-4 rounded-md'>
                        <a href="" className='font-quicksand text-[18px] font-[700]'> Visit Website</a>
                    </button>
                </div>
                <div className='w-1/2 flex flex-col justify-between items-center p-4'>
                    <img src={Pic1} alt="Araayna" className='h-[340px]' />
                    <p className='text-[16px] font-[400] font-roboto my-1'>Melbourne , 2014 </p>
                    <video width="320" height="340" controls className='h-[340px] w-[500px] shadow-md rounded-md'>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <p className='text-[16px] font-[400] font-roboto my-1'>At a local cafe in Malaysia, 2018
</p>
                </div>
                <img src={Bg} alt="" className='absolute top-0 left-0 h-full w-full opacity-90 -z-10' />
            </div>
        </section>
    )
}

export default PageHero