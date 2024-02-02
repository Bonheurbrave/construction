import React, { useState } from 'react'
import damour from '../images/damour.jpg'
import james from '../images/james.jpg'
import steven from '../images/steven.jpg'
import arajab from '../images/arajab.jpg'
import aurora from '../images/aurora.jpg'
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {RiArrowDownDoubleLine} from 'react-icons/ri'
function Ourteam() {
    const staf = [
        {
            id:1,
            name:"Sindikubwabo Jean D'amour",
            image:damour,
            email:"sindy@gmail.com",
            role:"Structure and design engineer"
        },
        {
            id:2,
            name:"Aurora Miah",
            image:aurora,
            email:"auroramiah@gmail.com",
            role:"Co-ordinator in company"
        },
        {
            id:3,
            name:"Arajab Muhtar",
            image:arajab,
            email:"muhtararajab@gmail.com",
            role:"Stock management Director"
        } ,
        {
            id:4,
            name:"Steven Ndahayo",
            image:steven,
            email:"ndahayosteven@gmail.com",
            role:"Site-construction Engineer"
        },
        {
            id:5,
            name:"James williams",
            image:james,
            email:"jameswilly@gmail.com",
            role:"CEO of the company"
        }
        
    ]  
    const [show, setshow] =  useState(false);
    const handleshow = ()=>{
        setshow(true);
    }
    const handlehide = ()=>{
        setshow(false)
    }
  return (
    <div className=' pt-10'>
      <h1 className=' font-bold  py-7 text-3xl text-center meet'>Meet our team</h1>
      {/* <RiArrowDownDoubleLine className=' mx-auto animate-bounce' size={42}/> */}
      <div className=' flex justify-between px-10 pt-7'>
        {
            staf.map((eng)=>{
                return(
                    <div className='' key={eng.id}>
                        <img src={eng.image} alt="no internet connection" width={300} className='mx-auto h-3/4 relative'/>
                            
                            <div className=' relative -top-1/3 homeintrotransparent'>
                                <h1 className=' text-white text-center font-bold '>{eng.name}</h1>
                                <h1 className=' font-bold text-slate-300'>{eng.role}</h1>
                                <div >
                                    <h1 className=' text-center font-bold capitalize text-xl text-lime-500'>contact</h1>
                                    <h1 className=' flex mb-2 font-bold text-white'><span>{<MdEmail size={24} className=' text-slate-300'/>}</span> <span className=' mb-2 font-bold text-white'>{eng.email}</span></h1>
                                    <h1 className=' flex mb-2 font-bold text-white'><span>{<FaLinkedin size={25} className=' text-slate-300'/>}</span> <span className=' capitalize'>{eng.name}</span></h1>
                                    <h1 className=' flex mb-2 font-bold text-white'><span>{<FaFacebook size={25} className=' text-slate-300'/>}</span> <span className=' capitalize'>{eng.name}</span></h1>
                                </div>
                            </div>                        
                            
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Ourteam
