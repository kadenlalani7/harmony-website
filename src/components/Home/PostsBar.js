import React from 'react'
import article1 from '../../images/Article1SCFull.png'
import article2 from '../../images/Article2SC.png'
import article3 from '../../images/Article3SC.png'
import article4 from '../../images/Article4SC.png'
import article5 from '../../images/Article5SC.png'
import article6 from '../../images/Article6SC.png'
const PostsBar = () => {
  return (
    <section class="text-gray-600 body-font overflow-x-scroll">
        <div class="container px-5 py-10 mx-auto">
          <div class="flex flex-nowrap -m-4 overflow-x-auto w-max">
            {/* <div class="p-4 md:!w-96 relative">
                <div class="h-full rounded-xl shadow-cla-violate border-[3px] bg-gradient-to-r from-[#C4A962]/30 to-yellow-50 border-[#C4A962] overflow-hidden !w-auto relative">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-top scale-100 transition-all duration-400 hover:h-full hover:object-contain hover:w-[30rem] hover:absolute z-40" src={article1} alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 ">Coronavirus (Covid-19)</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3 text-[#1C5367]/95">COVID-19 pandemic: from origins to outcomes</h1>
                    <p class="leading-relaxed mb-3 text-[#1C5367]/95">Severe Acute Respiratory Syndrome Coronavirus-2 (SARS-CoV-2), the causative pathogen for the COVID-19, first emerged in Wuhan, China, in December 2019 and by March 2020, it was declared a pandemic.</p>
                    <p class="leading-relaxed mb-3 text-gray-400">Citations: RohanKumar Ochani, Ameema Asad, Farah Yasmin, and more</p>
                    <div class="flex items-center flex-wrap ">
                      <a href='https://pubmed.ncbi.nlm.nih.gov/33664170/' rel="noreferrer" target="_blank" class="bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg absolute bottom-10">Learn more</a>                     
                    </div>
                  </div>
                </div>
              </div> */}
            <div class="p-4 md:w-96 relative">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden border-2 border-[#1C5367] relative">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-400 hover:scale-110" src={article2} alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Children</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Childhood obesity</h1>
                  <p class="leading-relaxed mb-3">As childhood obesity is associated with premature death in adults, a research is critical. This review focuses on the recent proceedings concerning genesis, prevention, and treatment.</p>
                    <p class="leading-relaxed mb-3 text-gray-400">Citations: Thomas Reinehr, Martin Wabitsch</p>
                  <div class="flex items-center flex-wrap ">
                    <a href='https://pubmed.ncbi.nlm.nih.gov/20871401/' rel="noreferrer" target="_blank" class="bg-gradient-to-r from-[#1C5367] to-[#2e819f] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white absolute bottom-10">Learn more</a>
                   
                  </div>
                </div>
              </div>
            </div>
            <div class="p-4 md:w-96">
            <div class="h-full rounded-xl shadow-cla-violate border-[3px] bg-gradient-to-r from-[#C4A962]/30 to-yellow-50 border-[#C4A962] overflow-hidden">
                  <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-400 hover:scale-110" src={article3} alt="blog"/>
                  <div class="p-6">
                    <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1 text-[#1C5367]/95">Health and Wellness</h2>
                    <h1 class="title-font text-lg font-medium text-gray-600 mb-3 text-[#1C5367]/95">The PedsQL 4.0 as a pediatric population health measure</h1>
                    <p class="leading-relaxed mb-3 text-[#1C5367]/95">The application of health-related quality of life (HRQOL) as a pediatric population health measure may facilitate risk assessment and resource allocation, the tracking of community health, the identification of health disparities...</p>
                    <p class="leading-relaxed mb-3 text-gray-400">Citations: James W Varni, Tasha M Burwinkle, Michael Seid, Douglas Skarr</p>
                    <div class="flex items-center flex-wrap ">
                        <a href='https://pubmed.ncbi.nlm.nih.gov/14616041/' rel="noreferrer" target="_blank" class="bg-gradient-to-r from-[#C4A962] to-[#eecb74] hover:scale-105 drop-shadow-md shadow-cla-violate px-4 py-1 rounded-lg">Learn more</a>
                     
                    </div>
                  </div>
                </div>
              </div>            
              <div class="p-4 md:w-96">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden border-2 border-[#1C5367]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-400 hover:scale-110" src={article4} alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Trials</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">A randomized, controlled trial of immersive virtual reality analgesia, during physical therapy for pediatric burns</h1>
                  <p class="leading-relaxed mb-3">This randomized, controlled, within-subjects (crossover design) study examined the effects of immersive virtual reality...</p>
                    <p class="leading-relaxed mb-3 text-gray-400">Citations: Yuko S Schmitt, Hunter G Hoffman, David K Blough, and more</p>
                  <div class="flex items-center flex-wrap ">
                    <a href='https://pubmed.ncbi.nlm.nih.gov/20871401/' rel="noreferrer" target="_blank" class="bg-gradient-to-r from-[#1C5367] to-[#2e819f] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white">Learn more</a>
                   
                  </div>
                </div>
              </div>
            </div>
              <div class="p-4 md:w-96">
              <div class="h-full rounded-xl shadow-cla-violate border-[3px] bg-gradient-to-r from-[#C4A962]/30 to-yellow-50 border-[#C4A962] overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-400 hover:scale-110" src={article5} alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Health and Wellness</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Distribution of dietary protein intake in daily meals influences skeletal muscle hypertrophy</h1>
                  <p class="leading-relaxed mb-3">The meal distribution of proteins throughout the day is usually skewed. However, its physiological implications and the effects of better protein distribution on muscle volume are largely unknown.</p>
                    <p class="leading-relaxed mb-3 text-gray-400">Citations: Shinya Aoyama, Hyeon-Ki Kim, Rina Hirooka, and more</p>
                  <div class="flex items-center flex-wrap ">
                    <a href='https://pubmed.ncbi.nlm.nih.gov/20871401/' rel="noreferrer" target="_blank" class="bg-gradient-to-r from-[#1C5367] to-[#2e819f] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white">Learn more</a>
                   
                  </div>
                </div>
              </div>
            </div>
              <div class="p-4 md:w-96">
              <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden border-2 border-[#1C5367]">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center scale-100 transition-all duration-400 hover:scale-110" src={article6} alt="blog"/>
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Neuroendocrine System</h2>
                  <h1 class="title-font text-lg font-medium text-gray-600 mb-3">Renal Neuroendocrine Neoplasms: A Single-center Experience</h1>
                  <p class="leading-relaxed mb-3">Primary neuroendocrine neoplasms (NENs) of the kidney are exceedingly rare malignancies and the available literature is very limited. The natural history and response to treatments is not well characterized.</p>
                    <p class="leading-relaxed mb-3 text-gray-400">Citations: Patrick W McGarrah, Gustavo F M Westin, Timothy J Hobday, and more</p>
                  <div class="flex items-center flex-wrap ">
                    <a href='https://pubmed.ncbi.nlm.nih.gov/20871401/' rel="noreferrer" target="_blank" class="bg-gradient-to-r from-[#1C5367] to-[#2e819f] hover:scale-105 drop-shadow-md  shadow-cla-blue px-4 py-1 rounded-lg text-white">Learn more</a>
                   
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