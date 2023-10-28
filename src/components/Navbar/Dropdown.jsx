// import React, { useState } from "react"
import { Link } from "react-router-dom";

// const sublinks = [
//     {
//         id: 1,
//         text: 'bharatnatyam',
//         url: 'bharatnatyam'
//     },
//     {
//         id: 2,
//         text: 'theatre',
//         url: 'drama'
//     },
//     {
//         id: 3,
//         text: 'drums',
//         url: 'drums'
//     },
//     {
//         id: 4,
//         text: 'piano',
//         url: 'piano'
//     },
// ]

// const Dropdown = () => {

//     const [dropdown, setDropdown] = useState(false);

//     return (
//         <div>
//             <ul
//                 className='transition mt-4 absolute top-[64px] w-[120px] p-3 flex flex-col gap-2 z-30 shadow-md bg-gray/30'
//                 onClick={() => setDropdown(!dropdown)}
//             >
//                 {sublinks.map((sublink) => {
//                     const { id, text, url } = sublink
//                     return (
//                         <a
//                             key={id}
//                             href={`#${url}`}
//                             className='font-raleway text-[15px] font-normal'
//                             onClick={() => setDropdown(false)}
//                         >
//                             {text}
//                         </a>
//                     );
//                 })}
//             </ul>
//         </div>
//     )
// }

// export default Dropdown


import React, { useState } from "react";

const sublinks = [
  {
    id: 1,
    text: 'Bharatnatyam',
    sectionId: 'bharatnatyam',
  },
  {
    id: 2,
    text: 'Theatre',
    sectionId: 'drama',
  },
  {
    id: 3,
    text: 'Drums',
    sectionId: 'drums',
  },
  {
    id: 4,
    text: 'Piano',
    sectionId: 'piano',
  },
];

const Dropdown = () => {
  const [dropdown, setDropdown] = useState(false);

  // Function to handle smooth scrolling
  function handleNavigation(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div>
      <ul
        className='transition mt-4 absolute top-[64px] w-[120px] p-3 flex flex-col gap-2 z-30 shadow-md bg-gray/30'
        onClick={() => setDropdown(!dropdown)}
      >
        {sublinks.map((sublink) => {
          const { id, text, sectionId } = sublink;
          return (
            <Link
              key={id}
              to={`/extracurricular#${sectionId}`}
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
  );
}

export default Dropdown;
