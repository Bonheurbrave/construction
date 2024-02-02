import React from "react";
import { FaLocationArrow} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import { AiFillPhone} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'


function Footer() {
  return (
    <div className=" bg-slate-900 learn pt-20">
      <h1 className=" font-bold text-white text-3xl text-center mb-3 nn">
        Make your buildings perfect
      </h1>
      <h1 className=" text-white text-center mb-3">
        For general information provide us with your email address
      </h1>

      <div className=" w-1/3 mx-auto">
        <input
          type="email"
          placeholder="Enter Your Email"
          className=" bg-white px-14 py-2 outline-none "
          required
        />
        <button className=" px-8 py-1 border-4 border-white bg-blue-600">
          submit
        </button>
      </div>

      <div className=" flex justify-between px-10 py-5 ">
        <div className=" w-1/5 text-slate-400">
            <h1 className=" font-bold text-white py-3 uppercase">Quick links</h1>
            <h1 className=" hover:text-blue-700">Home</h1>
            <h1 className=" hover:text-blue-700">About us</h1>
            <h1 className=" hover:text-blue-700">Our Blog</h1>
            <h1 className=" hover:text-blue-700">Our projects</h1>
            <h1 className=" hover:text-blue-700">Careers</h1>
        </div>
        <div className=" w-1/5 text-slate-400">
           <h1 className=" font-bold text-white py-3 uppercase">Technology</h1>
           <h1 className=" hover:text-blue-700">previous accomplishment</h1>
           <h1 className=" hover:text-blue-700">state of art-Technology</h1>
           <h1 className=" hover:text-blue-700">How we help</h1>
           <h1 className=" hover:text-blue-700">High quality material</h1>
        </div>
        <div className=" w-1/5 text-slate-400">
            <h1 className=" font-bold text-white py-3 uppercase">Come Find us</h1>
            <h1 className=" flex mb-2"><FaLocationArrow /> Kigali , Rwanda KN72</h1>
            <h1 className=" flex mb-2"><AiOutlineMail /> senate@gmail.com</h1>
            <h1 className=" flex mb-2"><FaLocationArrow /> Kigali , Rwanda KN72</h1>
            <h1 className=" flex mb-2"><AiFillPhone />+250788408023</h1>

        </div>
        <div className=" w-1/5 text-slate-400">
            <h1 className=" font-bold text-white py-3 uppercase">Stay connected</h1>
            <div className=" flex justify-between px-4 mb-7">
              <AiFillFacebook size={32} className=" text-blue-700 rounded-full"/>
              <AiFillTwitterCircle size={32} className=" text-blue-700 rounded-full"/>
              <AiFillLinkedin size={32} className=" text-blue-700 rounded-full"/>
              <AiFillInstagram size={32} className=" text-blue-700 rounded-full"/>
            </div>
            <button className=" bg-transparent border-2 font-semibold border-blue-700 text-orange-700 py-2 px-16 hover:font-bold hover:text-blue-700 hover:border-slate-900">Get in touch</button>
        </div>
      </div>
      <div className=" flex justify-between px-7">
        <h1 className=" font-bold">&copy;copyright 2023 construction company</h1>
        <h1 className=" font-bold">Privacy Policy | Terms & Conditions</h1>
      </div>
    </div>
  );
}

export default Footer;
