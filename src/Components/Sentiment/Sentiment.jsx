import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "./Card";

export default function Sentiment() {

  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    const handleResize = () => {
    
      if (window.innerWidth <= 768) {
        setSlidesPerView(1);
      } else {
        setSlidesPerView(2); 
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-fit mt-4 rounded-md bg-white ">
        <div className="container flex  flex-col mx-auto">
          <h1 className="text-black font-inter text-start pl-4 pt-2 text-sm font-bold ">
            Sentiments
          </h1>
          <h1 className=" text-gray-700 font-inter text-start pl-4 mb-2 pt-2 text-xs font-bold ">
            Key Events
          </h1>
          <div className="flex justify-center gap-4 mx-4 m-auto">
            <Swiper
              spaceBetween={30}
              slidesPerView={slidesPerView}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
              <SwiperSlide>
                <Card />
              </SwiperSlide>
            </Swiper>
          </div>
          <h1 className="mt-4 text-gray-700 font-inter text-start pl-4 pt-2 text-xs font-bold ">
            Analyst Estimates 
          </h1>
          <div className=" flex gap-x-10 px-4 py-4 w-full "> 
              <div >
                <div className="h-20 w-20 flex justify-center items-center rounded-full bg-[#ebf9f4]">
                    <h1 className="text-[#00b386] font-inter font-semibold text-xl">
                      76%
                    </h1>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 justify-center">
                  <div className="flex items-center gap-x-4 "><h1 className="text-xs font-semibold text-gray-700">Buy </h1> <div className=" w-20 md:w-40 h-2 rounded-full bg-[#00b386]"></div> <h1 className="text-xs font-semibold text-gray-700">76% </h1> </div>
                  <div className="flex items-center gap-x-4"><h1 className="text-xs font-semibold text-gray-700">Hold </h1> <div className="w-8 h-2 rounded-full bg-gray-300"></div> <h1 className="text-xs font-semibold text-gray-700">8% </h1> </div>
                  <div className="flex items-center gap-x-4"><h1 className="text-xs font-semibold text-gray-700">Sell</h1> <div className="w-16 h-2 rounded-full bg-red-500"></div> <h1 className="text-xs font-semibold text-gray-700">40% </h1> </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
