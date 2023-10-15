import React from 'react'
import Bg from '../Assets/Brewsacpe/Bg.png'
import Pic1 from '../Assets/Brewsacpe/Pic1.png'
import Video from '../Assets/Brewsacpe/video.mp4'

const PageHero = () => {
    return (
        <section className='flex flex-col gap-10 w-full rounded-md items-center'>
            <h1 className='font-display text-[56px] font-[400] ml-[100px] self-start'>Brewscape</h1>
            <div className='py-4 px-14 flex lg:flex-row flex-col relative gap-4 lg:w-[1280px] w-full'>
                <div className='lg:w-1/2 w-full p-4'>
                    <p className='font-quicksand font-[400] text-[18px] text-gray '>I decided to start my initiative : <strong className='font-[800] text-dark-gray'>“Brewscape: A Coffee <br /> Adventure”</strong> to share my passion for Coffee, which <br />developed close to my heart right since I was a kid, <br /> from trying out my dad’s signature coffee after he’d <br /> return tired from work late at night to trying to <br /> authentic blends at placed I’d travel to. <br /> <br />
                        At Brewscape we:  <br />
                        &nbsp;&nbsp;&nbsp;1. <strong className='font-[800] text-dark-gray'>Research and recommend </strong>local cafes across India <br />&nbsp;&nbsp;&nbsp; which sell the most authentic varieties of coffees <br />&nbsp;&nbsp;&nbsp;, providing insights into the <strong className='font-[800] text-dark-gray'>passion and creativity</strong><br />&nbsp;&nbsp;&nbsp; that goes behind it right from its <br />&nbsp;&nbsp;&nbsp; <strong className='font-[800] text-dark-gray'>harvesting to its delectable recipes</strong>.
                        <br />
                        &nbsp;&nbsp;&nbsp;2. <strong className='font-[800] text-dark-gray'>Host Coffee Tasting</strong> Events in partnership with <br />&nbsp;&nbsp;&nbsp;local cafes in cities, to bring to you coffee made <br /> &nbsp;&nbsp;&nbsp;which ingredients you can’t imagine and a taste <br />&nbsp;&nbsp;&nbsp; you’d die for.
                        <br />
                        &nbsp;&nbsp;&nbsp;3. <strong className='font-[800] text-dark-gray'>Build a Community of Caffeinated Adventurers</strong> <br />&nbsp;&nbsp;&nbsp;, taking suggestions and transforming shared sips <br />&nbsp;&nbsp;&nbsp; into lasting bonds.
                        <br />
                        &nbsp;&nbsp;&nbsp;4.<strong className='font-[800] text-dark-gray'>Embark</strong>  a flavourful  journey together, where <br />&nbsp;&nbsp;&nbsp; suggestions brew, and <strong className='font-[800] text-dark-gray'>connections flourish</strong> – one cup <br />&nbsp;&nbsp;&nbsp; at a time.</p>
                    <a href='http://Brewscape.in' target='_blank' rel='noreferrer' className='flex justify-center w-[230px] p-4 bg-purple text-white hover:bg-lightpurple hover:text-gray my-4 rounded-md'>
                        <button  className='font-quicksand text-[18px] font-[700]'> Visit Website</button>
                    </a>
                </div>
                <div className='lg:w-1/2 w-full flex flex-col justify-between items-center lg:p-4 p-0'>
                    <img src={Pic1} alt="Araayna" className='h-[340px]' />
                    <p className='text-[16px] font-[400] font-roboto my-1'>Melbourne , 2014 </p>
                    <video width="320" height="340" controls className='h-[340px] w-[500px] shadow-md rounded-md'>
                        <source src={Video} type="video/mp4" />
                    </video>
                    <p className='text-[16px] font-[400] font-roboto my-1'>At a local cafe in Malaysia, 2018</p>
                </div>
                <img src={Bg} alt="" className='absolute top-0 left-0 h-full w-full opacity-90 -z-10' />
            </div>
        </section>
    )
}

export default PageHero