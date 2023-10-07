import React, { useState } from 'react'
import One from '../Assets/Leadership/SchoolGrid/1.png'
import Two from '../Assets/Leadership/SchoolGrid/2.png'
import Three from '../Assets/Leadership/SchoolGrid/3.png'
import Four from '../Assets/Leadership/SchoolGrid/4.png'
import Five from '../Assets/Leadership/SchoolGrid/5.png'
import Six from '../Assets/Leadership/SchoolGrid/6.png'
import Seven from '../Assets/Leadership/SchoolGrid/7.png'
import Eight from '../Assets/Leadership/SchoolGrid/8.png'
import Nine from '../Assets/Leadership/SchoolGrid/9.png'
import Boxone3 from '../Assets/Leadership/Conditionalbox/1.png'
import Boxtwo3 from '../Assets/Leadership/Conditionalbox/2.png'
import Boxone9 from '../Assets/Leadership/Conditionalbox/3.png'
import Boxtwo9 from '../Assets/Leadership/Conditionalbox/4.png'
import GridComponent from './GridComponent'


let griditems = [
    {
        id: 1,
        title: 'Protection of Children from Sexual Offenses (POCSO)',
        img: One,
        boxheading: 'Protection of Children from Sexual Offenses (POCSO) and the Prevention of Sexual Harassment Act (POSH) Workshops and Training session',
        boxcontent: "",
        button: true,
        buttontitle: 'Take a look',
        buttonlink:'',
        box: false,
    },
    {
        id: 2,
        title: 'Campaign Aikyam - Mission Literacy',
        img: Two,
        boxheading: 'Campaign Aikyam - Mission Literacy-means unity or oneness)',
        boxcontent: "",
        button: true,
        buttontitle: 'Take a look',
        buttonlink:'https://www.instagram.com/p/CiUMzc7tFqr/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
        box: false,
    },
    {
        id: 3,
        title: 'CPR (Cardio-pulmonary resuscitation) and Heimlich Maneuver Workshop by experts',
        img: Three,
        boxheading: 'CPR (Cardio-pulmonary resuscitation) and Heimlich Maneuver Workshop by experts',
        boxcontent: "Collaborated with Dr. Rakesh Bhargava  and Dr. Bhupeshwari Patel to provide interactive demonstrations and hands-on training on CPR, Heimlich maneuver and Oral Hygiene.",
        pictures: [
            {
                id: 1,
                img: Boxone3
            },
            {
                id: 2,
                img: Boxtwo3
            }
        ],
        button: true,
        buttontitle: 'Take a look',
        buttonlink:'https://www.instagram.com/p/Cq7wNYxvaMy/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
        box: false,
    },
    {
        id: 4,
        title: 'Menstrual Hygiene Survey and Implementation',
        img: Four,
        urls: [],
        boxheading: 'Menstrual Hygiene Survey and Implementation',
        boxcontent: 'Surveyed high school girls on discomfort during periods at school via Google Forms, receiving 100+ student responses. Presented findings to the principal, leading to the installation of sanitary napkin vending machines, informative sessions on menstrual hygiene, and the provision of menstrual hygiene-friendly dustbins.',
        button: true,
        buttontitle: 'Link to Survey',
        buttonlink:'https://docs.google.com/forms/d/e/1FAIpQLSfqXc4ldFoQv5MrEO-72OxsYNhNzVoQu4LAaHtAt27b5TEpUg/viewform?usp=sf_link',
        box: false
    },
    {
        id: 5,
        title: 'HS EXAMINATION COMMITTEE',
        img: Five,
        urls: [],
        boxheading: 'HS EXAMINATION COMMITTEE',
        boxcontent: 'Collaborated with school administrators to create educational materials on academic integrity, and successfully planned remedial action for cases of misconduct during examinations throughout the year, effectively promoting maintenance of students’ integrity.',
        button: false,
        box: false,
    },
    {
        id: 6,
        title: 'Child Abuse Monitoring Commitee',
        img: Six,
        urls: [],
        boxheading: 'Child Abuse Monitoring Commitee',
        boxcontent: 'Installation of suggestion boxes  to ensure that any concerns of the students regarding their safety were addressed. The committee including the Principal, Primary, Middle and High School faculty heads met every month to read the suggestions and addressed the concerns in the Assembly.',
        button: false,
        box: false
    },
    {
        id: 7,
        title: 'Alleviating Stress through Yoga',
        img: Seven,
        urls: [],
        boxheading: 'Alleviating Stress through Yoga',
        boxcontent: "Initiated yoga sessions to alleviate student stress and anxiety during exams starting at International Yoga Day, with participation from 300+ students, resulting in a decrease in reported stress levels and physical manifestations of exam anxiety.",
        button: true,
        buttontitle: 'Take a look',
        buttonlink:'https://www.instagram.com/reel/CtvMbM8ILOC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
        box: false,
    },
    {
        id: 8,
        title: 'Competitions',
        img: Eight,
        boxheading: 'Competitions',
        box: false,
        boxcontent: '',
    },
    {
        id: 9,
        title: 'Hosting',
        img: Nine,
        urls: [],
        boxheading: 'Hosting',
        boxcontent: "Hosted assemblies and events on countless occasions. Even acted as a famous Bollywood character to lighten the teachers’ faces on Teachers Day:",
        pictures: [
            {
                id: 1,
                img: Boxone9
            },
            {
                id: 2,
                img: Boxtwo9
            }
        ],
        links: [
            {
                id: 1,
                url: 'https://www.instagram.com/reel/Cu-D1rkojSx/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
            },
            {
                id: 2,
                url: 'https://www.instagram.com/p/Cn3ZzbWPtUv/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
            },
            {
                id: 3,
                url: 'https://youtu.be/48QEjDR8KzY?si=DAMwyoOjFFygx5bL'
            },
            {
                id: 4,
                url: 'https://www.instagram.com/reel/Ct_CZSkolAo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA=='
            }
        ],
        button: false,
        buttontitle: 'Take a look',
        buttonlink:'https://www.instagram.com/reel/Ct_CZSkolAo/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==',
        box: false,
    }
]



const PageGrid = () => {

    const [selectedDiv, setSelectedDiv] = useState(null)

    const handleDivClick = (index) => {
        setSelectedDiv(index);
    };

    const handleDivMouseLeave = () => {
        setSelectedDiv(null);
    };


    return (
        <article className=' py-28 lg:px-[200px] lg:w-[1280px] bg-white shadow-lg rounded-md flex flex-col gap-5 my-8 w-full px-3'>
            <h1 className='font-display text-left md:text-[36px] text-[32px] lg:ml-0 md:ml-2 leading-[40px] font-[400] mb-[40px] self-start'>
                School Vice-Captain <br /> (2022-2023) :
            </h1>
            <p className='text-left text-[18px] mt-[20px] lg:ml-0 md:ml-2 text-gray font-quicksand font-[400] mb-[40px] self-start'>
                As the School Vice-Captain of Billabong High International School I have spearheaded and hosted countless school events and assemblies, led a team of 17 council members and student volunteers, kickstarted initiatives from impactful workshops and competitions to implementation of survey results.
            </p>
            <article className='md:min-w-[600px] grid gap-x-[80px] gap-y-[20px] lg:grid-cols-3 lg:grid-rows-3 grid-cols-1 grid-rows-9 w-full  p-4 relative'>
                {griditems.map((griditem, index) => {
                    return <GridComponent
                        key={index}
                        griditem={griditem}
                        isSelected={selectedDiv === index}
                        onClick={() => handleDivClick(index)}
                        onMouseLeave={handleDivMouseLeave}
                    />
                })}
            </article>
        </article>
    )
}

export default PageGrid
