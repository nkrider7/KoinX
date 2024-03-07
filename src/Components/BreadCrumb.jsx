import React from 'react'

export default function BreadCrumb() {
  return (
   <>
   <div class="flex justify-start items-center">
  <nav class="text-sm sm:text-base  rounded-md">
    <ol class="list-none p-0 inline-flex space-x-2">
      <li class="flex items-center">
      </li>
      <li class="flex items-center">
        <a href="#" class="text-gray-500 font-semibold font-inter text-xs hover:text-blue-500 transition-colors duration-300">Cryptocurencies</a>
        <span class="mx-1 text-gray-500">{'>'}</span>
      </li>
      <li class="flex items-center">
        <span class="text-gray-700 text-xs font-semibold font-inter">Bitcoin</span>
      </li>
    </ol>
  </nav>
</div>
   
   </>
  )
}
