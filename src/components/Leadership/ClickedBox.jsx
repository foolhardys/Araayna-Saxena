import React, { useState } from 'react'

const ClickedBox = ({ boxheading, boxcontent, links, urls, button, pictures }) => {

    const [showBox, setShowBox] = useState(false)

    return (
        <article className={!showBox ? 'hidden ' : 'absolute top-0 md:left-0 left-[-75px]'} onClick={()=> setShowBox(!showBox)}>
            <div className='bg-deep-purple/95 rounded-md p-4 lg:w-[500px] md:w-[400px] w-[350px] min-h-[300px] z-20 shadow-md'>
                <h1 className='font-quicksand text-[18px] font-[700] text-white my-2'>{boxheading}</h1>
                <p className='font-quicksand text-[16px] font-[400] my-8 text-gray '>
                    {boxcontent}
                </p>
                {
                    pictures && pictures.map((picture) => {
                        return <img src={picture.img} alt="" key={picture.id} />
                    })
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