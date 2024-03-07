
import React from 'react'
import { IoNewspaper } from "react-icons/io5";


export default function Card() {
  return (
    <>
    <div className="flex h-28  scale-90  w-full py-4 md:scale-100  rounded-lg  px-5 bg-[#ebf9f4]">
             <div className='bg-[#0fba83] h-fit p-2 rounded-full'>
              <IoNewspaper className="text-2xl text-white" />
             </div>
              <div>
              <h1 className="text-black font-inter text-start pl-4 pt-2 text-[11px] font-bold ">
                  Lorem ipsum dolor sit amet.
                </h1>
                <p className=" px-4 py-1 font-inter text-gray-800 text-[8px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                  quidem dolor ipsum aperiam eveniet fugit! Eos quas similique
                  voluptatum autem at. Qui ipsum ad doloremque accusamus itaque atque
                  magnam ea reiciendis distinctio tempore, delectus?
                </p> 
              </div>
              </div>
    </>
  )
}
