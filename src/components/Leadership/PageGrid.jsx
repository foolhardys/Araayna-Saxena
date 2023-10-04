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
import ClickedBox from './ClickedBox'
import Boxone from '../Assets/Leadership/Conditionalbox/1.png'
import Boxtwo from '../Assets/Leadership/Conditionalbox/2.png'


const griditems = [
    {
        id: 1,
        title: 'Protection of Children from Sexual Offenses (POCSO)',
        img: One,
        boxheading: 'Protection of Children from Sexual Offenses (POCSO) and the Prevention of Sexual Harassment Act (POSH) Workshops and Training session',
        boxcontent: "This workshop was implemented in collaboration with the high school faculty, Police Department, and Cyber Crime Cell for students, and training sessions for the faculty, support and transportation staff to educate them on prevention, prohibition, and protection against sexual harassment. Designed educational boards to enhance vigilance and safeguarding measures through scenario based learning, placing them throughout the school.Collaborated with the schools Tech Head to create 'Good & Bad Touch' animation videos for Primary school students Extended educational efforts to over 2000 underprivileged children through NGO: Uthaan.Developed English and Hindi tests with the Editorial Board to understand the acts in context of real-world scenarios, achieving a 95% success rate in test results.",
        button: true,
    },
    {
        id: 2,
        title: 'Campaign Aikyam - Mission Literacy',
        img: Two,
        boxheading: 'Campaign Aikyam - Mission Literacy-means unity or oneness)',
        boxcontent: "“Over 9 lakh incidents of phishing, OTP compromise reported in last two years; 42% Indians have experienced financial fraud” Established and led “Campaign Aikyam- Mission Literacy” to promote digital literacy and raise awareness about scams such as Phishing or Impersonation Scams with 500+ slum residents of Naya Basera through multiple sessions and skits.",
        button: true,
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
                img: Boxone
            },
            {
                id: 2,
                img: Boxtwo
            }
        ],
        button: true
    },
    {
        id: 4,
        title: 'Menstrual Hygiene Survey and Implementation',
        img: Four,
        urls: [],
        boxheading: 'Menstrual Hygiene Survey and Implementation',
        boxcontent: 'Surveyed high school girls on discomfort during periods at school via Google Forms, receiving 100+ student responses. Presented findings to the principal, leading to the installation of sanitary napkin vending machines, informative sessions on menstrual hygiene, and the provision of menstrual hygiene-friendly dustbins.',
        button: true
    },
    {
        id: 5,
        title: 'HS EXAMINATION COMMITTEE',
        img: Five,
        urls: [],
        boxheading: 'HS EXAMINATION COMMITTEE',
        boxcontent: 'Collaborated with school administrators to create educational materials on academic integrity, and successfully planned remedial action for cases of misconduct during examinations throughout the year, effectively promoting maintenance of students’ integrity.',
        button: false
    },
    {
        id: 6,
        title: 'Child Abuse Monitoring Commitee',
        img: Six,
        urls: [],
        boxheading: 'Child Abuse Monitoring Commitee',
        boxcontent: 'Installation of suggestion boxes  to ensure that any concerns of the students regarding their safety were addressed. The committee including the Principal, Primary, Middle and High School faculty heads met every month to read the suggestions and addressed the concerns in the Assembly.',
        button: false
    },
    {
        id: 7,
        title: 'Alleviating Stress through Yoga',
        img: Seven,
        urls: [],
        boxheading: 'Alleviating Stress through Yoga',
        boxcontent: "Initiated yoga sessions to alleviate student stress and anxiety during exams starting at International Yoga Day, with participation from 300+ students, resulting in a decrease in reported stress levels and physical manifestations of exam anxiety.",
        button: true
    },
    {
        id: 8,
        title: 'Competitions',
        img: Eight,
        urls: [
            {
                id: 1,
                link: ''
            },
            {
                id: 2,
                link: ''
            },
            {
                id: 3,
                link: ''
            }
        ],
        boxheading: 'Competitions',
        boxcontent: 'Led the student council to manage several Inter-school and Inter-house Competitions including Aravindakshan Debate Competition (attended by schools from across India), CISCE Regional Sports Meet, Inter-House Theatre Competition, Inter-House Sign Language Competition.',
    },
    {
        id: 9,
        title: 'Hosting',
        img: Nine,
        urls: [],
        boxheading: 'Hosting',
        boxcontent: "Hosted assemblies and events on countless occasions. Even acted as a famous Bollywood character to lighten the teachers’ faces on Teachers Day:",
        links: [
            {
                id: 1,
                url: 'https://www.youtube.com/embed/48QEjDR8KzY?si=z5LtnzMOzWqBWKEa'
            },
            {
                id: 2,
                url: ''
            }
        ]
    }
]



const PageGrid = () => {
    
    return (
        <article className=' py-28 lg:px-[200px] lg:w-[1280px] bg-primary shadow-md rounded-md flex flex-col gap-5 my-8 w-full px-3'>
            <h1 className='font-display text-center md:text-[36px] text-[32px] lg:ml-0 md:ml-2 leading-[40px] font-[400] mb-[40px] self-start'>
                School Vice-Captain <br /> (2022-2023) :
            </h1>
            <p className='text-left text-[18px] mt-[20px] lg:ml-0 md:ml-2 text-gray font-quicksand font-[400] mb-[40px] self-start'>
                As the School Vice-Captain of Billabong High International School I have spearheaded and hosted countless school events and assemblies, led a team of 17 council members and student volunteers, kickstarted initiatives from impactful workshops and competitions to implementation of survey results.
            </p>
            <article className='md:min-w-[600px] grid gap-x-[80px] gap-y-[20px] md:grid-cols-3 md:grid-rows-3 grid-cols-1 grid-rows-9 w-full  p-4'>
                {griditems.map((griditem, index) => {
                    const { id, title, img } = griditem
                    return <article key={index} className='lg:w-[300px] w-[200px] mb-4 md:mb-0 lg:h-[250px] h-[180px] rounded-sm border-2 border-secondary mx-auto flex items-center justify-center relative p-4 hover:bg-dark-purple z-10 hover:text-white transition-all' >
                        <h2 className='text-[16px] text-center font-[700] font-quicksand capitalize'>
                            {title}
                        </h2>
                        <img src={img} alt={title} className='absolute top-0 left-0 w-full h-full' />
                        <ClickedBox key={id} {...griditem}  />
                    </article>
                })}
            </article>
        </article>
    )
}

export default PageGrid