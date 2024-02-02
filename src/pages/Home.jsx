import React from 'react'
import homeback from '../images/homeback.jpg';
import Navigation from './Navigation';
import Homeintro from './Homeintro';
import Homedesc from './Homedesc';
function Home() {
  return (
    <div className=' h-auto' id='home'>
     {/* <Navigation /> */}
     <Homeintro className="homeback" />
     <Homedesc />
    </div>
  )
}

export default Home
