import React from 'react'
import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa6";

import { GrMysql } from "react-icons/gr";
import { FaJava } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaAngular } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../public/pic.jpg"

function Home() {
  
  return (
  <>
    <div name="Home" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20'>
      <div className='flex flex-col md:flex-row'>
      <div className='md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1'>
        <span className='text-xl'>Welcome In My Feed</span>
        <div className='flex space-x-1 text-2xl md:text-4xl'>
        <h1>Hello, I'm a</h1>
        {/* <span className='text-red-700 font-bold'>Developer</span> */}
        <ReactTyped
          className='text-red-700 font-bold'
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop={true}
        />
        </div>
        <br />
        <p className='text-sm md:text-md text-justify'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Quisquam, recusandae consequatur. Accusamus sint libero eligendi
            laborum fuga repudiandae? Asperiores tempore eos animi dolores
            corrupti! Sint quos, mollitia architecto aliquam nesciunt, optio
            cum delectus sit voluptatum aut ratione quaerat veniam aperiam!
        </p>
        <br />
        {/* Social media icons */}
        <div className='flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0'>
        <div className='space-y-2'>
          <h1 className='font-bold'>Available on</h1>
          <ul className='flex space-x-5'>
            <li>
              <a href="https://www.facebook.com/" target='_blank'>
            <FaSquareFacebook  className='text-2xl cursor-pointer'/> 
            </a>
            </li>
            <li>
            <a href="https://www.linkedin.com/in/mohit-kushwah-mk2786/" target='_blank'>
            <FaLinkedin  className='text-2xl cursor-pointer'/>
            </a>
            </li>
            <li>
            <a href="https://www.youtube.com/" target='_blank'>
            <FaYoutube className='text-2xl cursor-pointer'/>
            </a>
            </li>
            <li>
            <a href="https://t.me/" target='_blank'></a>
            <FaTelegram  className='text-2xl cursor-pointer'/>
            </li>
          </ul>
        </div>
        <div className='space-y-1'>
        <h1 className='font-bold'>Currently working on</h1>
          <div className='flex space-x-5'>
            <GrMysql className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <FaJava className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <SiSpringboot className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
            <FaAngular className='text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]'/>
          </div>
        </div>
        </div>
      </div>
      <div className='md:w-1/2 md:ml-48  md:mt-20 mt-8 order-1'>
        <img src={pic} className='rounded-full md:w-[450px] md:h-[450px]' alt="" />
      </div>
      </div>
    </div>
    <hr />
  </>
  )
}

export default Home
