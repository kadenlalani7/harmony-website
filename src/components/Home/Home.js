import React from 'react'
import officePic from '../../images/body1.jpeg'
import Doctor from '../../images/doctor.jpg'
import Hands from '../../images/lovingHands.jpg'
import Emotion from '../../images/emotionalMask.jpg'

import Profile from './Profile'
import Carousel from './Carousel'
const Home = () => {
  return (
<div class="h-max flex flex-col max-w-[84rem] mx-auto space-y-8">
  <div class="h-96 max-h-96 w-screen max-w-[84rem] mx-auto bg-cover bg-center bg-doctor-background bg-opacity-70 flex items-center justify-center">
    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='mx-auto w-[78rem] h-1/2 flex flex-col items-center justify-center rounded-lg bg-[#C4A962] bg-opacity-40'>
      <h1 className='text-center text-3xl hover:text-3xl text-white font-bold pb-4'>
      Harmony United Research LLC
      </h1>
      <p className='text-center text-base px-4 text-white text-opacity-90'>
      Providing direct access to known patients with their trusted physicians and research practice management solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
  </div>

  <div class="h-96 flex flex-row max-h-96">
    <img src={Hands} className='object-fill basis-1/2 w-1/2'/>
    <div className='basis-1/2 w-full text-center align-text-center'> 
      {/* Center text in a div */}
      <div className='flex flex-col h-full items-center justify-center px-2'>
        <div className='h-full w-full border-2 p-4 rounded-md flex flex-col items-center justify-center px-8 mx-4'>
          <h1 className='text-center text-white text-2xl hover:text-2xl'>
            Current Trial Now
          </h1>
          <p className='text-white opacity-50 text-xs pb-6'>
            Apirl 2022 - May 2022
          </p>
          <p className='text-white opacity-80'>This is a description of the trial. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button href="/" class="text-[#C4A962] hover:bg-[#C4A962] hover:text-white px-10 py-2 rounded-full text-lg tracking-wider font-medium" aria-current="page">Sign Up</button>
        </div>
      </div>
    </div>
  
  </div>

  <div class="h-96 max-h-96 w-screen max-w-[84rem] mx-auto bg-cover bg-center rounded-md pb-12">
    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='w-full h-full flex flex-col items-center justify-center bg-[#C4A962] bg-opacity-40'>
      <h1 className='text-center text-4xl hover:text-[#C4A962] justify-self-start tracking-wide font-semibold text-white'>
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