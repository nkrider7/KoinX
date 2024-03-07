import React from "react";

export default function About() {
  return (
    <>
      <div></div>

      <div className="w-full h-fit mt-4 rounded-md bg-white ">
        <div className="container flex flex-col items-start mx-auto">
          <h1 className="text-black font-inter text-start pl-4 pt-2 text-lg font-bold ">
            About Bitcoin
          </h1>
          <h1 className="text-black font-inter text-start pl-4 pt-2 text-xs font-bold ">
            What is Bitcoins?
          </h1>
          <p className=" px-4 py-2 font-inter text-gray-800 text-xs">
            Bitcoin's price today is US$16,951.82, with a 24- hour trading
            volume of $19.14 B. BTC is +0.36% in the last 24 hours. It is
            currently -7.70% from its 7-day all-time high of $18,366.66, and
            3.40% from its 7-day all-time low of $16,394.75. BTC has a
            circulating supply of 19.24 M BTC and a max supply of 21 M BTC.
            <div className=" px-4 py-1 w-full  border-b-2 ">
              {" "}
              {/* Border Line */}
            </div>
          </p>
          <h1 className="text-black font-inter text-start pl-4 pt-2 text-xs font-bold ">
            {" "}
            Lorem ipsum dolor sit amet.
          </h1>
          <p className=" px-4 py-2 font-inter text-gray-800 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quidem dolor ipsum aperiam eveniet fugit! Eos quas similique
            voluptatum autem at. Qui ipsum ad doloremque accusamus itaque atque
            magnam ea reiciendis distinctio tempore, delectus, doloribus saepe
            facilis consectetur. Accusamus, fugit necessitatibus debitis fugiat
            a exercitationem corporis odit ducimus porro laudantium!
          </p>
          <p className=" px-4 py-2 font-inter text-gray-800 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            quidem dolor ipsum aperiam eveniet fugit! Eos quas similique
            voluptatum autem at. Qui ipsum ad doloremque accusamus itaque atque
            magnam ea reiciendis distinctio tempore, delectus, doloribus saepe
            facilis consectetur. Accusamus, fugit necessitatibus debitis fugiat
            a exercitationem corporis odit ducimus porro laudantium!
          </p>
          <p className=" px-4 py-2 font-inter text-gray-800 text-xs">
            Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam
            massa vel convallis duis ac. Mi adipiscing semper scelerisque
            porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
            congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in
            eget. Ullamcorper dui
            <div className=" px-4 py-1 w-full  border-b-2 ">
              {" "}
              {/* Border Line */}
            </div>
          </p>
          <div>
            <h1 className="text-black font-inter text-start pl-4 pt-2 text-lg font-bold ">
              {" "}
              Already Holiding Bitcoin?
            </h1>
            <div className="boxs  flex flex-col mb-4 md:flex-row gap-4 px-4">
              <div class="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-row w-fit  p-2 rounded-lg ">
                <img className="h-28 w-28 rounded-lg" src="https://images.unsplash.com/photo-1605792657660-596af9009e82?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhZGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" />
                <div className="text flex flex-col">
                  <p class=" pl-5  text-base pt-5 font-inter text-white font-bold">
                    Calculate your Profits
                  </p>
                  <p class=" px-5 mx-5 text-black my-2 text-[10px] font-semibold bg-white rounded-lg font-inter text-sm  w-fit">Check Now</p>
                </div>
              </div>
              <div class="bg-gradient-to-r from-orange-500 to-red-500 flex flex-row w-fit  p-2 rounded-lg ">
                <img className="h-28 w-28 rounded-lg" src="https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHRyYWRpbmd8ZW58MHx8MHx8fDA%3D" alt="" />
                <div className="text flex flex-col">
                  <p class=" pl-5  text-base font-inter pt-5 text-white font-bold">
                    Calculate your Profits
                  </p>
                  <p class=" px-5 mx-5 text-black my-2 text-[10px] font-semibold bg-white rounded-lg font-inter text-sm  w-fit">Check Now</p>
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
