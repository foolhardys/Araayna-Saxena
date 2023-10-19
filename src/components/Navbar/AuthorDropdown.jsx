import React, { useState } from "react"
import { Link } from "react-router-dom";


const sublinks = [
    {
        id: 1,
        text: 'About book',
        url: 'book'
    },
    {
        id: 2,
        text: 'the author',
        url: 'author'
    },
    {
        id: 3,
        text: 'Recognitions',
        url: 'recognitions'
    }
]

const AuthorDropdown = () => {

    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <ul
                className='transition mt-4 absolute top-[64px] w-[120px] p-3 flex flex-col gap-2 z-30 shadow-md bg-gray/30'
                onClick={() => setDropdown(!dropdown)}
            >
                {sublinks.map((sublink) => {
                    const { id, text, url } = sublink
                    return (
                        <a key={id} href={`book#${url}`} className='font-raleway text-[15px] font-normal'>
                            {/* <Link
                                to={url}
                                className='font-raleway text-[15px] font-normal'
                                onClick={() => setDropdown(false)}
                            >
                                {text}
                            </Link> */}
                            {text}
                        </a>
                    );
                })}
            </ul>
        </div>
    )
}

export default AuthorDropdown