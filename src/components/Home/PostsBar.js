import React from 'react'
import Emotion from '../../images/emotionalMask.jpg'
import Doctor from '../../images/doctor.jpg'

const PostsBar = () => {
  return (
    <section class="text-gray-600 body-font">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-violate border-[3px] bg-gradient-to-r from-[#C4A962]/30 to-yellow-50 border-[#C4A962] overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={Emotion} alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-[#1C5367]/95">Coronavirus (Covid-19)</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3 text-[#1C5367]/95">Pulse Oximetry in Covid-19</h1>
                    <p class="leading-relaxed mb-3 text-[#1C5367]/95">Covid-19, A collection of articles and other resources on the Coronavirus (Covid-19) outbreak, including clinical reports, management guidelines, and commentary. See also the NEJM</p>
                    <div class="flex items-center flex-wrap ">
                      <a href='https://www.nejm.org/doi/full/10.1056/NEJMc2201541?query=featured_coronavirus' class="bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</a>
                     
                    </div>
                  </div>
                </div>
              </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden border-2 border-[#1C5367]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={Doctor} alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Coronavirus (Covid-19)</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Pulse Oximetry in Covid-19</h1>
                  <p class="leading-relaxed mb-3">Covid-19, A collection of articles and other resources on the Coronavirus (Covid-19) outbreak, including clinical reports, management guidelines, and commentary. See also the NEJM</p>
                  <div class="flex items-center flex-wrap ">
                    <a href='https://www.nejm.org/doi/full/10.1056/NEJMc2201541?query=featured_coronavirus' class="bg-gradient-to-r from-[#1C5367] to-[#2e819f] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white">Learn more</a>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-violate border-[3px] border-[#C4A962] overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src={Emotion} alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-[#1C5367]/95">Coronavirus (Covid-19)</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3 text-[#1C5367]/95">Pulse Oximetry in Covid-19</h1>
                    <p class="leading-relaxed mb-3 text-[#1C5367]/95">Covid-19, A collection of articles and other resources on the Coronavirus (Covid-19) outbreak, including clinical reports, management guidelines, and commentary. See also the NEJM</p>
                    <div class="flex items-center flex-wrap ">
                        <a href='https://www.nejm.org/doi/full/10.1056/NEJMc2201541?query=featured_coronavirus' class="bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</a>
                     
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
      </section>
  )
}

export default PostsBar