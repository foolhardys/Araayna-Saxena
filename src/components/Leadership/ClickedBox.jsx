import React, { useState } from 'react'

const ClickedBox = ({ boxheading, boxcontent, links, urls, button, pictures, id, index, box }) => {

    const [showBox, setShowBox] = useState(true)
    // console.log(id, index)
    // console.log(showBox);

    return (
        <article className={showBox ? 'absolute top-0 md:left-0 left-[-75px]' : 'hidden'} onMouseLeave={() => setShowBox(true)}>
            <div className='bg-deep-purple/95 rounded-md p-4 lg:w-[500px] md:w-[400px] w-[350px] min-h-[300px] z-20 shadow-md'>
                <h1 className='font-quicksand text-[18px] font-[700] text-white my-2'>{boxheading}</h1>
                <p className='font-quicksand text-[16px] font-[400] my-8 text-white '>
                    {boxcontent}
                </p>
                {
                    pictures && <div className='flex gap-4 md:flex-row flex-col'>
                        <img src={pictures[0].img} alt="" />
                        <img src={pictures[1].img} alt="" />

                    </div>
                }
                {button &&
                    <button className='w-[230px] bg-purple p-2 capitalize hover:bg-lightpurple hover:text-gray rounded-md text-white'>
                        take a look
                    </button>}
            </div>
        </article>
    )
}

export default ClickedBox