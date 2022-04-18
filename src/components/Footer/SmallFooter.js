import React from 'react'

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
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cubes"
            class="w-4 mr-3" role="img" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512">
            <path fill="currentColor"
              d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z">
            </path>
          </svg>
          Harmony United Research LLC
        </h6>
        <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 text-[#C4A962] ">About</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 text-[#C4A962]">Privacy Policy</a>
            </li>
            <li>
                <a href="#" class="mr-4 hover:underline md:mr-6 text-[#C4A962]">Licensing</a>
            </li>
            <li>
                <a href="#" class="hover:underline text-[#C4A962]">Contact</a>
            </li>
        </ul>
    </div>
    <hr class="my-6 border-[#C4A962] border-[1px] sm:mx-auto lg:my-8" />
    <span class="block text-sm text-[#C4A962] sm:text-center">© 2022 <a href="https://flowbite.com" class="hover:underline">Harmony United Research LLC®</a>. All Rights Reserved.
    </span>
</footer>
  )
}

export default SmallFooter