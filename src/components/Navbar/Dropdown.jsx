import React, { useState } from "react"
import { Link } from "react-router-dom";

const sublinks = [
    {
        id: 1,
        text: 'bharatnatyam',
        url: '/extracurricular/bharatnatyam'
    },
    {
        id: 2,
        text: 'drama',
        url: '/extracurricular/drama'
    },
    {
        id: 3,
        text: 'drums',
        url: '/extracurricular/drums'
    },
    {
        id: 4,
        text: 'piano',
        url: '/extracurricular/piano'
    },
]

const Dropdown = () => {

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
                        <li key={id}>
                            <Link
                                to={url}
                                className='font-raleway text-[15px] font-normal'
                                onClick={() => setDropdown(false)}
                            >
                                {text}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Dropdown