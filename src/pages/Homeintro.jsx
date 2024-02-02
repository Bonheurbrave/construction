import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

function Homeintro() {
  return (
    <div className=' py-32 px-20 homeback'>
      <div className=' w-1/3'>
        <h1 className=' text-7xl font-bold text-slate-950'>QUALITY & INTEGRITY</h1>
        <div className=' homeintrotransparent py-6 px-5 rounded-lg'>
            <h1 className='pt-4 font-semibold text-lime-500'>
                Our company provides the services of buildings construction , installation bricks ,
                block & stones as we can support General Contractors and Building owners .In addition
                we also renovate older buildings to the Latest versions of buildings
            </h1>
        </div>
      </div>
      <div className=' float-right w-2/5'><button className=' font-semibold bg-blue-700 px-32 py-4 flex justify-between btn'><span>Get Started</span> <FaArrowRight className='ml-3 pt-1 animateleftright' size={24}/> </button></div>

    </div>
  )
}

export default Homeintro
