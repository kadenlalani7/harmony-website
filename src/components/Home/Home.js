import React from 'react'
import Hands from '../../images/caringbw.jpeg'
import Emotion from '../../images/doctorbw.jpeg'

import PostsBar from './PostsBar'
const Home = () => {
  function move (){
    var elmntToView = document.getElementById("section1");
    elmntToView.scrollIntoView({behavior: "smooth"}); 
  }

  return (
<div class="h-max flex flex-col mx-auto space-y-8 bg-white">
  {/* Desktop Header */}
  <div class=" z-50 hidden  mx-auto h-screen max-h-screen w-screen bg-cover bg-center bg-doctor-background animate-animatedBackground bg-no-repeat bg-opacity-60 sm:flex items-center justify-center border-b-[#C4A962] animate-fade1">
    <div class='h-full w-full flex flex-col bg-[#1C5367]/25'>
      <div class='h-[95%] w-screen flex flex-row'>
        <div class='h-[90%] w-2/3 mx-auto items-center justify-center'>
        <div className='mx-auto w-full align-middle flex flex-col items-center justify-center rounded-lg h-full'>
          <h1 className='w-full text-left lg:leading-[11rem] lg:text-[10rem] md:text-7xl text-2xl text-[#C4A962] font-semibold tracking-tight drop-shadow-xl pl-3'>
            Harmony<br/>United
          </h1>
          <h1 className='w-full text-left lg:leading-[11rem] lg:text-[8rem] md:text-7xl text-2xl text-[#C4A962] font-semibold tracking-tight drop-shadow-xl pl-3'>
            Research
          </h1>
          {/* <p className='text-left text-base px-4 text-[#C4A962]'>
          Providing direct access to known patients with their trusted physicians and research practice management solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p> */}
        </div>
        </div>
        <div class='flex h-full w-1/3 mx-auto items-center justify-center'>
        <a href="/sign_up_for_trial" class="text-[#C4A962] text-2xl font-bold border-2 border-[#C4A962] hover:scale-105 drop-shadow-md w-[55%] h-14 rounded-full
                                              text-center flex items-center justify-center" aria-current="page">Participate in a Trial</a>
        </div>
      </div>

      <button class='h-[5%] w-full flex justify-center' onClick={move}>
        <div class="h-full w-1/12 border-[#C4A962] border-t-2 border-x-2 rounded-tl-full rounded-tr-full text-[#C4A962] text-center text-3xl">
          <svg class="flex mx-auto align-center pb-8 h-20 w-20 justify-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </div>  
      </button>
    </div>
  </div>

  {/* Mobile Header */}
  <div class="sm:hidden mx-auto h-[34rem] max-h-[34rem] w-screen bg-cover bg-center bg-doctor-background animate-animatedBackground bg-no-repeat bg-opacity-60 flex items-center justify-center border-b-[3px] border-b-[#C4A962] animate-fade1 ">
    <div class='h-full w-full backdrop-blur-sm mx-auto flex items-center justify-center bg-[#1C5367]/25'>

    <div className='mx-auto w-[78rem] h-1/2 flex flex-col items-center justify-center rounded-lg'>
      <h1 className='text-center lg:text-7xl md:text-7xl text-2xl text-[#C4A962] font-extrabold pb-4 tracking-tight drop-shadow-xl'>
      Harmony United Research
      </h1>
      <p className='text-center text-base px-4 text-[#C4A962]'>
      Providing direct access to known patients with their trusted physicians and research practice management solutions. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
      </p>
    </div>
    </div>
  </div>

  {/* Section 1: About us and Image */}
  <div class="md:h-96 lg:h-full flex flex-col md:flex-row max-w-[84rem] mx-auto bg-white gap-4 pt-[6rem]" id='section1'>
    <div class='sm:pr-14 basis-1/2 w-full mx-auto items-center'>

    <img src={Hands} className='object-fill w-full h-full max-h-[26rem] border-[2px] border-[#1C5367] rounded-md ' alt='Hands' />
    </div>
    <div className='basis-1/2 w-full text-center align-text-center'> 
      {/* Center text in a div */}
      <div className='flex flex-col h-full items-center justify-center px-2'>
        <div className='h-full w-full border-[2px] border-[#C4A962] rounded-md p-4 flex flex-col items-center justify-center px-8 mx-4 bg-[#1C5367] bg-opacity-95 visible:animate-fadeOut'>
          <h1 className='text-center text-[#C4A962] text-4xl font-bold pb-6'>
            Harmony United Cares
          </h1>

          <p className='text-white opacity-80 pb-8 text-left leading-7'>Harmony United is dedicated to progressing clinical studies to explore and better understand topics like 
          Substance Related Disorders, Eye Diseases, and Pregnancy Conditions while ensuring the safety of our patients. Find out more about Harmony United, our team,
          and our goal.
          </p>
          <a href="/about_us" class="text-[#C4A962] text-2xl font-bold border-2 border-[#C4A962] hover:scale-105 drop-shadow-md w-[55%] h-14 rounded-full
                                              text-center flex items-center justify-center" aria-current="page">Meet Harmony</a>
        </div>
      </div>
    </div>
  
  </div>

  {/* Section 2: Benefits of a trial */}
  <div class="md:h-96 lg:h-full flex flex-col md:flex-row mx-auto gap-4 py-3" id='section2'>

    <div className='w-screen bg-[#1C5367]/95 flex flex-col h-full items-center py-8'> 
      {/* Center text in a div */}
      <div className='max-w-[84rem] flex flex-col h-full items-center justify-center px-2'>
        <div className='h-full w-full p-4 flex flex-col items-center justify-center px-8'>
          <h1 className='text-center text-[#C4A962] sm:text-3xl lg:text-5xl font-extrabold pb-6 pt-2 tracking-wide'>
            Clinical Trial Benefits
          </h1>
          {/* benfits section */}
          <div class='flex flex-row w-full pb-6'>
            <div class='basis-1/2'>
              <ul class='list-disc text-[#C4A962] text-xl'>
                <li class='pb-4'>You may have the chance to help others get a better treatment for their health problems in the future</li>
                <li class='text-white/80 pb-4'>Treatment from experts</li>
                <li class='pb-4'>Free or low-cost treatment</li>
                <li class='pb-4 text-white/80'>You may be able to get information about support groups and resources</li>
              </ul>
            </div>
            <div class='basis-1/2 pl-6'>
              <ul class='list-disc text-[#C4A962] text-lg'>
                <li class='text-white/80 pb-4'>Activating your care</li>
                <li class='pb-4'>ANOTHER REASON</li>
                <li class='text-white/80 pb-4'>ANOTHER REASON 2</li>
              </ul>
            </div>

          </div>
          <p className='text-[#C4A962] opacity-80'>Interested in finding more about infomration about the benefits, risks, and safety of participating in a clinical trial? <a href='https://www.nia.nih.gov/health/clinical-trials-benefits-risks-and-safety' class='hover:underline'>Learn more about clinical trials </a></p>
        </div>
      </div>
    </div>
  
  </div>

  {/* Section 3: Supporting Social Proof and Graphic*/}
  <div class="md:h-[40rem] md:max-h-[40rem] w-screen max-w-[84rem] mx-auto bg-cover bg-center rounded-md bg-white" id='section3'>
    <div className='w-full h-full flex flex-col md:flex-row items-center justify-center rounded-md gap-4'>

      <div id='left' class='basis-1/2 h-full w-full px-2 md:pr-14'>
        <div class='h-full w-full border-[2px] border-[#1C5367] border-opacity-95 rounded-md p-4 pt-8 bg-[#C4A962]'>

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
        <img src={Emotion} class='basis-1/2 w-full h-1/2 border-[2px] border-[#1C5367] border-opacity-95 rounded-md bg-[#C4A962] object-cover' alt='Emotional stuff'/>
        <div class='basis-1/2 w-full h-1/2 border-[2px] bg-[#1C5367] border-opacity-95 rounded-md p-4 border-[#C4A962] flex mx-auto justify-center items-center rounded-tr-[10rem] rounded-bl-[10rem]'>
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

  {/* Section 4: More articles to read*/}
  <div class="mx-auto w-max flex flex-col justify-center items-center border-b-[3px] border-[#C4A962]" id='section4'>
    <h1 class='text-center text-3xl tracking-wider text-[#C4A962] px-3 py-2 font-light pt-3 border-[#C4A962] bg-[#1C5367] w-screen pb-3 border-y-[3px]'>Read more on what's happening</h1>
    <PostsBar/>
  </div>
</div>
  )
}

export default Home