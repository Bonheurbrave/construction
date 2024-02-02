import React from 'react'
import Aboutheader from './Aboutheader'
import Aboutdesc from './Aboutdesc'
import Ourteam from './Ourteam'
import AboutImage from './AboutImage'
import History from './History'
function About() {
  return (
    <div className='pt-32' id='about'>
      <Aboutheader />
      <Aboutdesc />
      <AboutImage />
      <Ourteam />
      <History />
    </div>
  )
}

export default About
