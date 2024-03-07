import React from "react";

export default function Performance() {
  return (
    <>
      <div className=" overflow-hidden py-2 my-2">
        <ul className="flex flex-row  gap-x-3 font-inter text-xs ">
          <li className="text-blue-700 border-b-2 border-blue-700">Overview</li>
          <li>Fundamentals</li>
          <li>News insight</li>
          <li>Sentiments</li>
          <li>Team </li>
          <li>Technicals </li>
          <li>Tokennomics</li>
        </ul>
      </div>

      <div className="w-full h-fit mt-4 rounded-md bg-white ">
        <h1 className="text-black font-inter text-start pl-4 pt-2 text-sm font-bold ">
          Performance
        </h1>

        <div className="flex px-4  py-4 gap-x-2 gap-y-2 items-center ">
          <div>
            <h1 className="text-xs text-gray-600 font-inter">Today Low</h1>
            <p className="text-gray-700 font-semibold">46,930.22</p>
          </div>
          <div className="h-2 w-full bg-gradient-to-l from-lime-600 via-yellow-300 to-red-600 rounded-full"></div>
          <div>
            <h1 className="text-xs text-gray-600 font-inter">Today high</h1>
            <p className="text-gray-700 font-semibold">49,560.22</p>
          </div>
        </div>
        <div className="flex px-4  gap-x-2 items-center ">
          <div>
            <h1 className="text-xs text-gray-600 font-inter">Today Low</h1>
            <p className="text-gray-700 font-semibold">32,809.12</p>
          </div>
          <div className="h-2 w-full bg-gradient-to-l from-lime-600 via-yellow-300 to-red-600 rounded-full"></div>
          <div>
            <h1 className="text-xs text-gray-600 font-inter">Today high</h1>
            <p className="text-gray-700 font-semibold">44,808.03</p>
          </div>
        </div>
        <h1 className="text-black font-inter text-start pl-4 pt-2 text-sm font-bold ">
          Fundamentals
        </h1>
        <div className="main">
          <div className="grid grid-cols-1 md:grid-cols-2 px-4 py-2 gap-x-4 gap-y-4 gap-2">
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">Bitcoin price</h1> <p className="font-bold text-gray-800">$16,815.46</p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">Market Cap </h1> <p className="font-bold text-gray-800">$323,507,290,047</p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">High 24h / Low24h</h1> <p className="font-bold text-gray-800">$16,874.12 /$16,382.07</p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">Market Cap Dominance</h1> <p className="font-bold text-gray-800">38.343% </p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">High 7d / Low7d</h1> <p className="font-bold text-gray-800">$16,382.07 / $16,874.12 </p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">Volume / Market Cap</h1> <p className="font-bold text-gray-800">0.0718</p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">Trading Volume</h1> <p className="font-bold text-gray-800">$23,249,202,782</p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">All-Time High</h1> <p className="font-bold text-gray-800">$69,044.77 -75.6% </p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">Market Cap Rank</h1> <p className="font-bold text-gray-800">#1</p></div>
            <div className="flex justify-between text-xs border-b-2 "><h1 className="text-gray-500 font-semibold font-inter">All-Time Low</h1> <p className="font-bold text-gray-800">$67.81 24729.1%</p></div>
           
          </div>
        </div>
      </div>
    </>
  );
}
