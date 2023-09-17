import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const ExtraCurricularPage = () => {
  return (
    <section className='h-screen'>
      <Link to='drums'>drums</Link><br/>
      <Link to='synthesizer'>synthesizer</Link><br/>
      <Link to='bharatnatyam'>bharatnatyam</Link><br/>
      <Link to='drama'>drama</Link><br/>
      <Outlet/>
    </section>
  )
}

export default ExtraCurricularPage