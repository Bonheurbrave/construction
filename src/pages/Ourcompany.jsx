import React from 'react'
import { FaTrowelBricks } from "react-icons/fa6";

function Ourcompany() {
  return (<div className=' py-12'>
      
        <div className=' ours pt-20 py-20'>
         <FaTrowelBricks size={72} className=' text-white mx-auto'/>
         <h1 className=' mb-4 font-bold text-white text-center text-5xl'>Our company core competencies</h1>
         <h1 className=' text-white text-2xl'>Meeting the demands of the industry requires a synergy of the crucial components that make every project successfully
            At our company we prefer bringing the high quality buildings to our customers and ensuring give the resources that bring our project to the success
         </h1>
         <div className=' w-1/3 mx-auto'>

         <button className=' bg-white text-black py-4 px-14 get hover:bg-blue-600 duration-500 hover:text-white ease-in-out'>Get started</button>
         <button className=' bg-blue-600 text-white py-4 px-14 learn hover:bg-white ease-in-out duration-500 hover:text-black'>Learn more</button>
         </div>
        </div>
  </div>
  )
}

export default Ourcompany
