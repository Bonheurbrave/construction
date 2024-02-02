import React , {useEffect, useState} from 'react'
import logo from '../images/logo.png'
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
function Navigation() {
  const [dark , setdark] =  useState(false)
  
  const darkmode = ()=>{
    setdark(true)
   document.body.style.backgroundColor = "black";
   document.body.style.color = "white";
   localStorage.setItem('theme' , 'dark')
   
  }
  const whitemode = ()=>{
    setdark(false)
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    localStorage.setItem('theme' , 'white')
  }
   
  useEffect(()=>{
    if(localStorage.getItem("theme") == 'dark'){
      darkmode();
    }
    else{
      whitemode()
    }
  })
  return (
    <div className=' flex justify-between px-16 cursor-pointer'>
      <div className=' flex justify-around pt-10 w-1/6'>
        <a href="#home">
          <h1 className=' uppercase font-semibold  hover:text-cyan-400 hover:animate-pulse ease-in duration-300'>Home</h1>
        </a>
        <a href="#about">
          <h1 className=' uppercase font-semibold hover:text-cyan-400 hover:animate-pulse ease-in duration-300'>About us</h1>
        </a>
      </div>
      <div>
        <img src={logo} alt="no internet connection" width={140}/>
      </div>
      <div className=' flex justify-around pt-10 w-1/5'>
        <h1 className=' uppercase font-semibold hover:text-cyan-400 hover:animate-pulse ease-in duration-300'>our projects</h1>
        <h1 className=' uppercase font-semibold hover:text-cyan-400 hover:animate-pulse ease-in duration-300'>our blog</h1>
        {
            dark ?
            <h1><IoSunnySharp onClick={whitemode}/></h1>
              :
        <h1><FaMoon onClick={darkmode}/></h1>
        }
      </div>
    </div>
  )
}

export default Navigation
