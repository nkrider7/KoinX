import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
export default function Youmay() {

  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/search/trending"
      );
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      const result = await response.json();
      setData(result);
      // console.log(result.item.name)
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log(data)
  }, [data]);


  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
    
      if (window.innerWidth <= 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4); 
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
    <div>
    
    </div>


  <div className="w-full h-fit mt-4 rounded-md bg-white ">
    <div className="container flex  pl-4 pt-2 flex-col mx-auto">
    <h1 className="text-black font-inter text-start text-sm font-bold ">
          You may also like
    </h1>

      <div>
        <div className='h-40   '>
        <Swiper
              spaceBetween={30}
              slidesPerView={slidesPerView}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
           <div className="flex flex-col">
           
        {data &&
                  data.coins && 
                  data.coins.map((coin, i) => (
                    <>
                    <SwiperSlide>
                      <div className=" w-40 flex flex-col py-2 border-2 p-4  rounded-md items-start">
                        <div className="flex">
                        <img src={coin.item.thumb} className="h-4 w-4" alt="graph" />
                        <p className="text-xs ml-1 font-inter" key={i}>
                          {coin.item.name}
                        </p>
                        </div>
                        <div className="flex flex-col text-xs"><h1 className="font-bold">${parseFloat(coin.item.data.price.match(/\d+\.\d+/)[0]) }</h1> <img src={coin.item.data.sparkline} alt="" /></div>
                      </div>
              </SwiperSlide>
                    </>
                  ))}

           </div>
</Swiper>
        </div>


      </div>

      <h1 className="text-black font-inter text-start text-sm font-bold ">
          Tranding Coins
    </h1>
      <div>
        <div className='h-28  '>
        <Swiper
              spaceBetween={30}
              slidesPerView={slidesPerView}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
            >
           <div className="flex flex-col">
           
        {data &&
                  data.coins && 
                  data.coins.map((coin, i) => (
                    <>
                    <SwiperSlide>
                      <div className=" w-40 flex flex-col py-2 border-2 p-4  rounded-md items-start">
                        <div className="flex">
                        <img src={coin.item.thumb} className="h-4 w-4" alt="graph" />
                        <p className="text-xs ml-1 font-inter" key={i}>
                          {coin.item.name}
                        </p>
                        </div>
                        <div className="flex flex-col text-xs"><h1 className="font-bold">${parseFloat(coin.item.data.price.match(/\d+\.\d+/)[0]) }</h1> <img src={coin.item.data.sparkline} alt="" /></div>
                      </div>
              </SwiperSlide>
                    </>
                  ))}

           </div>
</Swiper>
        </div>


      </div>

    </div>
  </div>
    </>
  )
}
