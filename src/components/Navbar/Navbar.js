import React from 'react'
import LogoSolo from '../../images/LogoSolo.png'
const Navbar = () => {

  // document.getElementById("wholeNav").style.display = "none";
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    var screenH = window.innerHeight;
    var url = window.location.href;
  
    // 20 is an arbitrary number here, just to make you think if you need the prevScrollpos variable:
    if (currentScrollPos < screenH+20 && url === 'http://localhost:3000/') 
    {
      // I am using 'display' instead of 'top':
      document.getElementById("wholeNav").style.display = "none";
    } else {
      document.getElementById("wholeNav").style.display = "initial";
    }
  }

  return (
<nav class="bg-[#1C5367] border-b-2 border-[#C4A962] fixed w-full top-0 z-40" id='wholeNav'>
  <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div class="relative flex items-center justify-between h-16">

      <div class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex-shrink-0 flex items-center">
          <img class="block lg:hidden h-12 w-auto" src={LogoSolo} alt="Harmony United LLC Logo"></img>
          {/* <p class="block lg:hidden h-12 w-auto">Harmony United LLC</p>  */}
          <img class="hidden lg:block h-12 w-auto" src={LogoSolo} alt="Harmony United LLC Logo"></img>
          <p class="text-center max-h-12 text-[#C4A962] text-sm font-light underline-offset-1 cursor-default">Harmony United <br/>Research LLC®</p> 
        </div>
        <div class="hidden sm:block sm:ml-6 items-center">
          <div class="flex space-x-4 h-full items-center">
            <a href="/" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Home</a>
            <a href="/about_us" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">About Us</a>
            <a href="/contact_us" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Contact Us</a>
            <a href="/sign_up_for_trial" class="text-[#C4A962] px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Clinical Trials</a>
            

          </div>
        </div>
      </div>
      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* <a href="/signup" class="text-[#FDD017] hover:bg-[#C4A962] hover:text-white px-3 py-2 rounded-md text-sm font-medium">Sign Up for Trial</a> */}
        <div class="ml-3 relative">
        </div>
      </div>
    </div>
  </div>

  <div class="sm:hidden" id="mobile-menu">
    <div class="px-2 pt-2 pb-3 space-y-[1px]">
      <a href="/" class="text-[#C4A962] block px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Home</a>
      <a href="/about_us" class="text-[#C4A962] block px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">About Us</a>
      <a href="/contact_us" class="text-[#C4A962] block px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Contact Us</a>
      <a href="/sign_up_for_trial" class="text-[#C4A962] block px-3 py-2 text-lg font-light hover:underline underline-offset-4 active:text-opacity-50" aria-current="page">Clinical Trials</a>

    </div>
  </div>
</nav>

  )
}

export default Navbar