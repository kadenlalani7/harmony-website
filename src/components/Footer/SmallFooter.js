import React from 'react'
import LogoSolo from '../../images/LogoSolo.png'

const SmallFooter = () => {
  return (
    <footer class="p-4 bg-[#1C5367] rounded-t-lg shadow md:px-6 md:py-8 dark:bg-[#1C5367] border-b-2 border-[#C4A962]">
    <div class="sm:flex sm:items-center sm:justify-between">
    <h6 class="
            uppercase
            text-[#C4A962]
            flex
            items-center
            justify-center
            md:justify-start
          ">
          <img class="w-6 mr-3 " alt='logo' src={LogoSolo}/>
          Harmony United Research LLC
        </h6>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="about_us" class="mr-4 hover:underline md:mr-6 text-[#C4A962] ">About</a>
            </li>
            {/* <li>
                <a href="legal" class="mr-4 hover:underline md:mr-6 text-[#C4A962]">Privacy Policy</a>
            </li> */}
            <li>
                <a href="careers" class="mr-4 hover:underline md:mr-6 text-[#C4A962]">Careers</a>
            </li>
            <li>
                <a href="sign_up_for_trial" class="hover:underline text-[#C4A962]">Sign Up</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-[#C4A962] border-[1px] sm:mx-auto lg:my-8" />
    <span class="block text-sm text-[#C4A962] sm:text-center">© 2022 <a href="https://" class="hover:underline">Harmony United Research LLC®</a>. All Rights Reserved.
    </span>
</footer>
  )
}

export default SmallFooter