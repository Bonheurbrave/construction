import React from 'react'
import ab1 from '../images/aboutheader.jpg'
import ab2 from '../images/aboutimage1.jpg'
import ab3 from '../images/aboutimage2.jpg'
function AboutImage() {
  return (
    <div className=' pt-32 px-5 pb-8'>
      <div className=' flex justify-between'>
        <div className='w-1/4 hover:w-1/3 ease-in-out duration-500'><img src={ab1} alt="no internet connection" className=' w-full '/></div>
        <div className=' w-1/4 hover:w-1/3 ease-in-out duration-500'><img src={ab2} alt="no internet connection" className=' w-full'/></div>
        <div className=' w-1/4 hover:w-1/3 ease-in-out duration-500'><img src={ab3} alt="no internet connection" className=' w-full'/></div>
      </div>
    </div>
  )
}

export default AboutImage
