import React from 'react'
import { IoBagCheck } from "react-icons/io5";
import { FaUser, FaUsers } from "react-icons/fa";
import { TfiCup } from "react-icons/tfi";
import {GrUserWorker} from 'react-icons/gr'
function Aboutdesc() {
  return (
    <div className=' px-20 flex justify-between pt-20'>
      <div className='yy1'>
        <div className=' aboutcontainers pt-10 font-bold'>
            <IoBagCheck className='mx-10 text-slate-800 mb-3' size={44}/>
            <h1 className=' mx-10 font-bold text-blue-500 text-2xl'>32+</h1>
            <h1>Projects done</h1>
        </div>
      </div>
      <div className='yy2'>
        <div className=' aboutcontainers pt-10 font-bold'>
            <FaUser className='mx-10 text-slate-800 mb-3' size={44}/>
            <h1 className=' mx-10 font-bold text-blue-500 text-2xl'>600+</h1>
            <h1>Trusted client</h1>
        </div>
      </div>
      <div className='yy3'>
        <div className=' aboutcontainers pt-10 font-bold'>
            <GrUserWorker className='mx-10 text-slate-800 mb-3' size={44}/>
            <h1 className=' mx-10 font-bold text-blue-500 text-2xl'>1000+</h1>
            <h1>Employed workers</h1>
        </div>
      </div>
      <div className='yy4'>
      <div className=' aboutcontainers pt-10 font-bold'>
        <TfiCup className='mx-10 text-slate-800 mb-3' size={44}/>
          <h1 className=' mx-10 font-bold text-blue-500 text-2xl'>5+</h1>
          <h1>Awards earned</h1>
      </div>
      </div>
    </div>
  )
}

export default Aboutdesc
