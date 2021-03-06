import React from 'react'
import Kaden from '../../../images/kadenSqaure.png'

const Profile = () => {
  return (
    <div class="text-center hover:border-[3px] border-[#C4A962]/60 rounded-lg pb-6 cursor-pointer">
        <a href='/about_us/Kaden_Lalani'>
          <img
            src={Kaden}
            class="rounded-full object-fill w-full mb-4 mx-auto hover:rounded-sm scale-90 transition-all duration-1000 hover:scale-100"
            alt="Avatar"
          />
        </a>
        <h5 class="text-xl font-medium leading-tight mb-2 text-[#C4A962] cursor-text">Kaden Lalani</h5>
        <p class="text-[#C4A962]/75">Director of IT</p>
        <p class="text-[#C4A962]/75">Contact Link</p>
    </div>
  )
}

export default Profile