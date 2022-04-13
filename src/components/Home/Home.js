import React from 'react'
import officePic from '../../images/body1.jpeg'
import Profile from './Profile'
const Home = () => {
  return (
<div class="h-max flex flex-col max-w-[84rem] mx-auto space-y-4">
  <div class="h-96 max-h-96 w-screen max-w-[84rem] mx-auto bg-cover bg-center bg-doctor-background">
    {/* <img src={officePic} className='w-screen h-full'/> */}
    <div className='w-full h-full flex flex-col items-center justify-center'>
      <h1 className='text-center text-2xl hover:text-3xl'>
      Harmony United Research LLC
      </h1>
      <p className='text-center text-base px-4'>
      Providing direct access to known patients with their trusted physicians and research practice management solutions. sqws dwef ewf ewf wefwe fe fewf wef we
      </p>
    </div>
  </div>

  <div class="h-80 flex flex-row max-h-80">
    <img src={officePic} className='object-fill basis-1/2 w-1/2'/>
    <div className='basis-1/2 w-full text-center align-text-center'> 
      {/* Center text in a div */}
      <div className='flex flex-col h-full items-center justify-center px-2'>
        <div className='h-3/4 w-3/4 border-2 p-4 rounded-full flex flex-col items-center justify-center px-8'>
          <h1 className='text-center text-xl hover:text-2xl'>
            Sign up! Get Paid!
          </h1>
          <p>See if you are eligible to pareticapte in a clincial trial</p>
          <button href="/" class="text-[#C4A962] hover:bg-[#C4A962] hover:text-white px-3 py-2 rounded-md text-sm font-medium" aria-current="page">Sign Up</button>
        </div>
      </div>
    </div>
  
  </div>

</div>
  )
}

export default Home