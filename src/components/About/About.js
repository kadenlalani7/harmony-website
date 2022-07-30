import React from 'react'
import ProfMiguel from './Miguel/Profile'
import ProfArthur from './Arthur/Profile'
import ProfKaden from './Kaden/Profile'
import Logo from '../../images/logo.png'
const About = () => {
  return (
    <div class='w-screen h-max bg-white flex flex-col gap-1'>
      <div class="py-16 bg-white animate-fade1 pt-24">  
        <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
            <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-16">
              <div class="md:w-5/12 lg:w-5/12">
                <img src={Logo} class='h-full w-full rounded-2xl' alt="logo" loading="lazy" width="" height=""/>
              </div>
              <div class="md:7/12 lg:w-6/12">
                <h2 class="text-2xl text-[#1C5367] font-bold md:text-4xl">Harmony United is dedicated to helping improve the health and well-being of society</h2>
                <p class="mt-6 text-[#C4A962]">When we first started we set out on the mission to help progress medicine and bring possibly life saving treatments and drugs to our patients. We care about the safety of our patients and work towards imporving their lives risk free and earlier than anywhere else.</p>
                <p class="mt-4 text-[#C4A962]">Our team aims to bring the highest quality treatment and care to our pateints. We are dedicated to helping you.</p>
              </div>
            </div>
        </div>
      </div>
    <div class='flex flex-col h-full items-center justify-center pt-10 pb-4 border-t-[3px] border-[#C4A962] text-7xl tracking-widest text-[#1C5367] animate-fade2 underline underline-offset-2 text-center'>Meet The Team</div>
      <div class='px-16 grid grid-cols-3 gap-16 py-6 h-full animate-fade3'>
        <ProfMiguel/>
        <ProfArthur/>
        <ProfKaden/>
      </div>

    </div>
  )
}

export default About