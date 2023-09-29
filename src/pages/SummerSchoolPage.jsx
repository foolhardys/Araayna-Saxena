import React from 'react'
import PageHero from '../components/SummerSchool/PageHero'
import BrownSchool from '../components/SummerSchool/BrownSchool'
import Videos from '../components/SummerSchool/Videos'
import EduExLabs from '../components/SummerSchool/EduExLabs'
import Harvard from '../components/SummerSchool/Harvard'

const SummerSchoolPage = () => {
  return (
    <section className='min-h-screen flex flex-col items-center'>
      <PageHero />
      <BrownSchool/>
      <Videos/>
      <EduExLabs/>
      <Harvard/>
    </section>
  )
}

export default SummerSchoolPage