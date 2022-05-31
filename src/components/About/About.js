import React from 'react'
import Profile from './Profile'
import ProfMiguel from './Miguel/Profile'
import ProfArthur from './Arthur/Profile'
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
                <h2 class="text-2xl text-[#1C5367] font-bold md:text-4xl">Harmony United is dedicated to ___ ____ ___ _____ _______</h2>
                <p class="mt-6 text-[#C4A962]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
                <p class="mt-4 text-[#C4A962]"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
              </div>
            </div>
        </div>
      </div>
    <div class='flex flex-col h-full items-center justify-center pt-10 pb-4 border-t-[3px] border-[#C4A962] text-7xl tracking-widest text-[#1C5367] animate-fade2 underline underline-offset-2 text-center'>Meet The Team</div>
      <div class='px-16 grid grid-cols-3 gap-16 py-6 h-full animate-fade3'>
        <ProfMiguel/>
        <ProfArthur/>
        <Profile/>
        <Profile/>
        <Profile/>
        <Profile/>
      </div>

    </div>
  )
}

export default About