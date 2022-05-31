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
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src='https://imgs.search.brave.com/UB7AYLuH0xGX2M8S2zxrrZ-WZdRPsYzC8pWnMwt-5JE/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/YmlyZGFuZGNvLm5l/dC91cGxvYWRzL3NY/bGxtZDdsL0NPVklE/MTktSW1hZ2UuanBn' alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-[#1C5367]/95">Coronavirus (Covid-19)</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3 text-[#1C5367]/95">COVID-19 pandemic: from origins to outcomes</h1>
                    <p class="leading-relaxed mb-3 text-[#1C5367]/95">Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2), the causative pathogen for the COVID-19, first emerged in Wuhan, China, in December 2019 and by March 2020, it was declared a pandemic. </p>
                    <div class="flex items-center flex-wrap ">
                      <a href='https://pubmed.ncbi.nlm.nih.gov/33664170/' class="bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</a>
                     
                    </div>
                  </div>
                </div>
              </div>
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden border-2 border-[#1C5367]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src='https://imgs.search.brave.com/prw7ovYNUbguVAXhR3EYSX7pFIlZ7ngw9-bjXVDCV10/rs:fit:1200:1200:1/g:ce/aHR0cDovL3d3dy5w/dWJsaWNkb21haW5w/aWN0dXJlcy5uZXQv/cGljdHVyZXMvNDAw/MDAvdmVsa2EvaGFw/cHktY2hpbGQtMTM2/MTEwNzM4M0lvOS5q/cGc' alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Children</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Childhood obesity</h1>
                  <p class="leading-relaxed mb-3">As childhood obesity is associated with premature death in adults, a research is critical. This review focuses on the recent proceedings concerning genesis, prevention, and treatment.</p>
                  <div class="flex items-center flex-wrap ">
                    <a href='https://pubmed.ncbi.nlm.nih.gov/20871401/' class="bg-gradient-to-r from-[#1C5367] to-[#2e819f] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white">Learn more</a>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-1/3">
                <div class="h-full rounded-xl shadow-cla-violate border-[3px] border-[#C4A962] overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100" src='https://imgs.search.brave.com/QOuemVruC-QtT7Os86MQEzEjWFT7NPKtnZrxwTNQ3q4/rs:fit:1030:687:1/g:ce/aHR0cHM6Ly9hc2t0/aGVzY2llbnRpc3Rz/LmNvbS93cC1jb250/ZW50L3VwbG9hZHMv/MjAxNy8xMS9BZG9i/ZVN0b2NrXzE2Mzk2/NzUxMi0xMDMweDY4/Ny5qcGVn' alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-[#1C5367]/95">Health and Wellness</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3 text-[#1C5367]/95">The PedsQL 4.0 as a pediatric population health measure</h1>
                    <p class="leading-relaxed mb-3 text-[#1C5367]/95">The application of health-related quality of life (HRQOL) as a pediatric population health measure may facilitate risk assessment and resource allocation, the tracking of community health, the identification of health disparities, and the determination of health outcomes from interventions and policy decisions.</p>
                    <div class="flex items-center flex-wrap ">
                        <a href='https://pubmed.ncbi.nlm.nih.gov/14616041/' class="bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</a>
                     
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