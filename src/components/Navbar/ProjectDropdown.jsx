import React, { useState } from "react"
import { Link } from "react-router-dom";




const sublinks = [
    {
        id: 1,
        text: 'research',
        sectionId: 'projects'
    },
    {
        id: 2,
        text: 'internships',
        sectionId: 'internships'
    },
    {
        id: 3,
        text: 'competitions',
        sectionId: 'competetions'
    },
]

const ProjectDropdown = () => {

      // Function to handle smooth scrolling
  function handleNavigation(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

    const [dropdown, setDropdown] = useState(false);

    return (
        <div>
            <ul
                className='transition mt-4 absolute top-[64px] w-[120px] p-3 flex flex-col gap-2 z-30 shadow-md bg-gray/30'
                onClick={() => setDropdown(!dropdown)}
            >
                {sublinks.map((sublink) => {
                    const { id, text, sectionId } = sublink
                    return (
                        <Link
                        key={id}
                        to={`projects#${sectionId}`}
                        className='font-raleway text-[15px] font-normal'
                        onClick={() => {
                setDropdown(false);
                handleNavigation(sectionId);
              }}
                           >
                            {text}
                        </Link>
                    );
                })}
            </ul>
        </div>
    )
}

export default ProjectDropdown


// const sublinks = [
//     {
//       id: 1,
//       text: 'research',
//       url: 'projects',
//     },
//     {
//       id: 2,
//       text: 'internships',
//       url: 'internships',
//     },
//     {
//       id: 3,
//       text: 'competitions',
//       url: 'competitions',
//     },
//   ];
  

//   {sublinks.map((sublink) => (
//     <a key={sublink.id} href={`#${sublink.url}`}>
//       {sublink.text}
//     </a>
//   ))}
  