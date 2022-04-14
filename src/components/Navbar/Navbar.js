import React from 'react'
import Logo from '../../images/logo.png'
import LogoHoriz from '../../images/LogoHoriz.png'
import LogoSolo from '../../images/LogoSolo.png'
const Navbar = () => {
  return (
<nav class="bg-[#1C5367] border-b-2 border-[#C4A962] sticky top-0 z-50">
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">

      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-12 w-auto" src={LogoSolo} alt="Harmony United LLC Logo"></img>
          {/* <p class="block lg:hidden h-12 w-auto">Harmony United LLC</p>  */}
          <img class="hidden lg:block h-12 w-auto" src={LogoSolo} alt="Harmony United LLC Logo"></img>
          <p class="text-center max-h-12 text-[#C4A962] text-sm font-light underline-offset-1">Harmony United <br/>Research LLC®</p> 
        </div>
        <div class="hidden sm:block sm:ml-6 items-center">
          <div class="flex space-x-4 h-full items-center">
            <a href="/" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Home</a>
            <a href="/" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">About Us</a>
            <a href="/" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Contact Us</a>
            

          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <a href="/signup" class="text-[#FDD017] hover:bg-[#C4A962] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up for Trial</a> */}
            <a href="/" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Harmony Trials</a>
        <div class="ml-3 relative">
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-1">
      <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Home</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</a>

      <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Sign Up For Trial</a>
    </div>
  </div>
</nav>

  )
}

export default Navbar