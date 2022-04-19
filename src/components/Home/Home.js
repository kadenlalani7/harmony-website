import React from 'react'
import Hands from '../../images/lovingHands.jpg'
import Emotion from '../../images/emotionalMask.jpg'

import PostsBar from './PostsBar'
const Home = () => {
  return (
<div class="h-max flex flex-col mx-auto space-y-6 bg-white">
  <div class="mx-auto h-[30rem] max-h-[30rem] w-screen bg-cover bg-center bg-doctor-background animate-animatedBackground bg-no-repeat bg-opacity-60 flex items-center justify-center border-b-[3px] border-b-[#C4A962] animate-fade1 ">
    <div class='h-full w-full backdrop-blur-sm mx-auto flex items-center justify-center bg-[#1C5367]/25'>

    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='mx-auto w-[78rem] h-1/2 flex flex-col items-center justify-center rounded-lg'>
      <h1 className='text-center lg:text-7xl md:text-7xl text-2xl text-[#C4A962] font-extrabold pb-4 tracking-tight'>
      Harmony United Research
      </h1>
      <p className='text-center text-base px-4 text-[#C4A962]'>
      Providing direct access to known patients with their trusted physicians and research practice management solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
    </div>
  </div>

  <div class="md:h-96 lg:h-96 flex flex-col md:flex-row max-w-[84rem] mx-auto animate-fade2 bg-white gap-4">
    <div class='sm:pr-14 basis-1/2 w-full mx-auto items-center'>

    <img src={Hands} className='object-fill w-full h-full border-[3px] border-[#1C5367] rounded-md ' alt='Hands'/>
    </div>
    <div className='basis-1/2 w-full text-center align-text-center'> 
      {/* Center text in a div */}
      <div className='flex flex-col h-full items-center justify-center px-2'>
        <div className='h-full w-full border-[3px] border-[#C4A962] rounded-md p-4 flex flex-col items-center justify-center px-8 mx-4 bg-[#1C5367] bg-opacity-95 visible:animate-fadeOut'>
          <h1 className='text-center text-[#C4A962] text-2xl hover:text-2xl'>
            Current Trial Now
          </h1>
          <p className='text-[#C4A962] opacity-50 text-xs pb-6'>
            Apirl 2022 - May 2022
          </p>
          <p className='text-white opacity-80 pb-8'>This is a description of the trial. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <button href="/sign_up_for_trial" class="text-white bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate w-1/2 h-14 rounded-lg" aria-current="page">Sign Up</button>
        </div>
      </div>
    </div>
  
  </div>

  <div class="md:h-[40rem] md:max-h-[40rem] w-screen max-w-[84rem] mx-auto bg-cover bg-center rounded-md animate-fade3 bg-white">
    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='w-full h-full flex flex-col md:flex-row items-center justify-center rounded-md gap-4'>

      <div id='left' class='basis-1/2 h-full w-full px-2 md:pr-14'>
        <div class='h-full w-full border-[3px] border-[#1C5367] border-opacity-95 rounded-md p-4 pt-8 bg-[#C4A962]'>

          <p className='text-center text-bold px-14 py-10 text-[#1C5367]/95 tracking-wider leading-loose first-letter:text-5xl last-letter:text-5xl'>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          </p>
          <h1 className='text-center text-2xl text-[#1C5367]/95 justify-self-start tracking-wide font-semibold pb-4'>
            Supporting Social Proof
          </h1>
          <p className='text-center text-md text-[#1C5367]/95 justify-self-start tracking-wide font-semibold'>
            Supporting Social Proof
          </p>
        </div>

      </div>
      <div id='right' class='h-full basis-1/2 w-full flex flex-col space-y-4 px-2'>
        <img src={Emotion} class='basis-1/2 w-full h-1/2 border-[3px] border-[#1C5367] border-opacity-95 rounded-md bg-[#C4A962] object-fill' alt='Emotional stuff'/>
        <div class='basis-1/2 w-full h-1/2 border-[3px] bg-[#1C5367] border-opacity-95 rounded-md p-4 border-[#C4A962] flex mx-auto justify-center items-center rounded-tr-[10rem] rounded-bl-[10rem]'>
          <p class='text-4xl text-bold text-white tracking-wide text-center leading-relaxed px-6'>
          Number 1 Clinical Trial Research Group in Texas.[Graphic]
          </p>
          {/* <p>
            -The New York Etc
          </p> */}
        </div>
      </div>

    </div>
  </div>

  <div class="mx-auto w-screen flex flex-col justify-center items-center border-b-[3px] border-[#C4A962]">
    <h1 class='text-center text-3xl tracking-wider text-[#C4A962] px-3 py-2 font-light pt-3 border-[#C4A962] bg-[#1C5367] w-full pb-3 border-y-[3px]'>Read more on what's happening</h1>
    <PostsBar/>
  </div>
</div>
  )
}

export default Home