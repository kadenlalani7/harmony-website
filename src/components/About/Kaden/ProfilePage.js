import React from 'react'
import Kaden from '../../../images/kadenSqaure.png'
const ProfilePage = () => {
  return (
        <div class="container mx-auto my-5 p-5 pt-14 h-full">
            <div class="md:flex no-wrap md:-mx-2 ">
                {/* <!-- Left Side --> */}
                <div class="w-full md:border-[3px] p-2 rounded-lg border-[#C4A962] md:w-3/12 md:mx-2">
                    {/* <!-- Profile Card --> */}
                    <div class="bg-white border-[#1C5367]">
                        <div class="image overflow-hidden">
                            <img class="h-auto w-full mx-auto"
                                src={Kaden}
                                alt="Kaden Lalani profile"/>
                        </div>
                        <h1 class="text-[#C4A962] font-bold text-xl my-1">Kaden Lalani</h1>
                        <h3 class="text-[#C4A962] font-semibold text-lg leading-6">Director of IT</h3>
                        <p class="text-sm text-[#1C5367] hover:text-[#1C5367]/80 leading-6">Kaden Lalani helps with all thinks technology at Harmony United Research 
                        to help push forward the team.</p>
                    </div>
                    {/* <!-- End of profile card --> */}
                    <div class="my-4"></div>
                    {/* <!-- Friends card --> */}
                    <div class="bg-white p-3 hover:shadow">
                    </div>
                    {/* <!-- End of friends card --> */}
                </div>
                {/* <!-- Right Side --> */}
                <div class="w-full md:w-9/12 mx-2 h-64 ">
                    {/* <!-- Profile tab --> */}
                    {/* <!-- About Section --> */}
                    <div class="bg-white p-3 shadow-sm rounded-sm md:border-[3px] rounded-lg border-[#C4A962]">
                        <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                            <span clas="text-green-500">
                                <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </span>
                            <span class="tracking-wide text-[#C4A962]">About</span>
                        </div>
                        <div class="text-gray-700">
                            <div class="grid md:grid-cols-2 text-sm">
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">First Name</div>
                                    <div class="px-4 py-2">Kaden</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Last Name</div>
                                    <div class="px-4 py-2">Lalani</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Gender</div>
                                    <div class="px-4 py-2">Male</div>
                                </div>
                                <div class="grid grid-cols-2">
                                    {/* <div class="px-4 py-2 font-semibold">Contact No.</div>
                                    <div class="px-4 py-2">+11 998001001</div> */}
                                </div>
                                <div class="grid grid-cols-2">
                                    <div class="px-4 py-2 font-semibold">Email.</div>
                                    <div class="px-4 py-2">
                                        <a class="text-blue-800" href="mailto:klalani@harmonyunitedresearch.com">klalani@harmonyunitedresearch.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- End of about section --> */}
    
                    <div class="my-4"></div>
    
                    {/* <!-- Experience and education --> */}
                    <div class="bg-white p-3 shadow-sm rounded-sm md:border-[3px] border-[#C4A962]">
    
                        <div class="grid grid-cols-2">
                            {/* <div>
                                <div class="flex items-center space-x-2 font-semibold text-[#1C5367]leading-8 mb-3">
                                    <span clas="text-[#1C5367]">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide text-[#C4A962]">Experience</span>
                                </div>
                                <ul class="list-inside space-y-2">
                                    <li>
                                        <div class="text-[#1C5367]">Owner at Her Company Inc.</div>
                                        <div class="text-[#1C5367] text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div class="text-[#1C5367]">Owner at Her Company Inc.</div>
                                        <div class="text-[#1C5367] text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div class="text-[#1C5367]">Owner at Her Company Inc.</div>
                                        <div class="text-[#1C5367] text-xs">March 2020 - Now</div>
                                    </li>
                                    <li>
                                        <div class="text-[#1C5367]">Owner at Her Company Inc.</div>
                                        <div class="text-[#1C5367] text-xs">March 2020 - Now</div>
                                    </li>
                                </ul>
                            </div> */}
                            <div>
                                <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                    <span clas="text-green-500">
                                        <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                            stroke="currentColor">
                                            <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                            <path fill="#fff"
                                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                        </svg>
                                    </span>
                                    <span class="tracking-wide text-[#C4A962]">Education</span>
                                </div>
                                <ul class="list-inside space-y-2">
                                    <li>
                                        <div class="text-[#1C5367]">Bachelors of Science in Computer Science at Arizona State University</div>
                                        <div class="text-[#1C5367] text-xs">2022</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End of Experience and education grid --> */}
                    </div>
                    {/* <!-- End of profile tab --> */}
                </div>
            </div>
        </div>
  )
}

export default ProfilePage