import React from 'react'
import logo from '../images/logo.png'
function Homedesc() {
  return (
    <div className=' flex justify-between px-10 pt-10'>
      <div>
        <img src={logo} alt="no internet connection" width={100}/>
      </div>
      <div className=' pb-0'>
        <h1 className=' text-blue-500 w-2/3 text-left font-bold text-3xl mb-4'>Our company provides building services with modern models for 
            General contractors and Owners
        </h1>
        <h1 className=' text-xl w-2/3 '>we prefered to let our customers know about our company and which services that we are giving
            via this websites and hence meet with our engineer and contact each other via this websites
        </h1>
      </div>
    </div>
  )
}

export default Homedesc

