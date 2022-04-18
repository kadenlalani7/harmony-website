import React from 'react'

const Profile = () => {
  return (
    <div class="text-center ">
        <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp"
            class="rounded-full w-full mb-4 mx-auto hover:animate-circleToSqaure hover:rounded-sm "
            alt="Avatar"
        />
        <h5 class="text-xl font-medium leading-tight mb-2 text-[#C4A962]">Miguel Gutierez</h5>
        <p class="text-[#C4A962]/75">Additional Info</p>
        <p class="text-[#C4A962]/75">Contact Link</p>
    </div>
  )
}

export default Profile