import React from 'react'
import officePic from '../../images/body1.jpeg'
import Doctor from '../../images/doctor.jpg'
import Hands from '../../images/lovingHands.jpg'
import Emotion from '../../images/emotionalMask.jpg'

import Profile from './Profile'
import Carousel from './Carousel'
const Home = () => {
  return (
<div class="h-max flex flex-col mx-auto space-y-6">
  <div class="mx-auto h-[30rem] max-h-[30rem] w-screen bg-cover bg-center bg-doctor-background bg-opacity-60 flex items-center justify-center border-b-[3px] border-b-[#C4A962]">
    <div class='h-full w-full backdrop-blur-sm mx-auto flex items-center justify-center bg-[#1C5367]/25'>

    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='mx-auto w-[78rem] h-1/2 flex flex-col items-center justify-center rounded-lg '>
      <h1 className='text-center text-7xl text-[#C4A962] font-extrabold pb-4 tracking-tight'>
      Harmony United Research
      </h1>
      <p className='text-center text-base px-4 text-[#C4A962]'>
      Providing direct access to known patients with their trusted physicians and research practice management solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
    </div>
  </div>

  <div class="h-96 flex flex-row max-h-96 max-w-[84rem] mx-auto">
    <img src={Hands} className='object-fill basis-1/2 w-1/2 border-[3px] border-[#1C5367] rounded-md'/>
    <div className='basis-1/2 w-full text-center align-text-center'> 
      {/* Center text in a div */}
      <div className='flex flex-col h-full items-center justify-center px-2'>
        <div className='h-full w-full border-[3px] border-[#C4A962] rounded-md p-4 flex flex-col items-center justify-center px-8 mx-4 bg-[#1C5367] bg-opacity-95'>
          <h1 className='text-center text-[#C4A962] text-2xl hover:text-2xl'>
            Current Trial Now
          </h1>
          <p className='text-[#C4A962] opacity-50 text-xs pb-6'>
            Apirl 2022 - May 2022
          </p>
          <p className='text-white opacity-80 pb-8'>This is a description of the trial. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button href="/" class="text-white bg-[#C4A962] hover:opacity-80 px-10 py-2 rounded-full text-lg tracking-wider font-medium visited:border-b-2" aria-current="page">Sign Up</button>
        </div>
      </div>
    </div>
  
  </div>

  <div class="h-96 max-h-96 w-screen max-w-[84rem] mx-auto bg-cover bg-center rounded-md pb-12">
    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='w-full h-full flex flex-col items-center justify-center bg-[#1C5367] bg-opacity-95 border-[3px] border-[#C4A962] rounded-md'>
      <h1 className='text-center text-4xl text-[#C4A962] justify-self-start tracking-wide font-semibold'>
      Our Mission
      </h1>
      <p className='text-left text-base px-12 py-8 text-white'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      </p>
    </div>
  </div>
</div>
  )
}

export default Home