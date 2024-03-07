import About from "./Components/About";
import BreadCrumb from "./Components/BreadCrumb";
import CryptoMain from "./Components/CryptoMain";
import Navbar from "./Components/Navbar";
import Performance from "./Components/Performance";
import Sentiment from "./Components/Sentiment/Sentiment";
import Team from "./Components/Team";
import Youmay from "./Components/Youmay";
import avtaar from "./assets/avtaar.svg";
import { useEffect, useState } from "react";
import { FaCaretUp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";


function App() {
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
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {

  }, [data]);


  return (
    <>
      <Navbar />
      {/* Main page */}
      <div className="bg-[#eff2f5] flex flex-col justify-center p-4 gap-4  md:flex-row">
        <div className="w-full md:w-[60vw]  rounded-lg">
          <BreadCrumb />
          <CryptoMain />
          <Performance />
          <Sentiment />
          <About />
          <Team />
          <Youmay />
        </div>
        <div className="card">
          {/* blue card  */}
          <div className="h-[380px] sm:w-[25vw] rounded-md flex flex-col items-center   bg-[#0052fe] ">
            <h1 className="font-white font-bold text-lg mx-8 font-inter  text-center my-3 text-white ">Get Started with KoinX for Free </h1>
            <p className="text-white  text-center mx-3  text-xs ">
              With our range of features that you can equip for free, KoinX
              allows you to be more educated and aware of your tax reports.
            </p>
            <img src={avtaar} className="h-28 my-4" alt="" />
            <button className="bg-white flex items-center gap-1  w-fit text-center font-semibold text-xs font-inter text-black p-2 rounded-md ">
              Get Started with Free  <FaArrowRightLong/>
            </button>
          </div>
          <div className="h-[250px] sm:w-[25vw] rounded-md mt-4 bg-white ">
            <h1 className="font-inter font-semibold p-4 text-xl">
              Trending Coins (24hrs)
              <div className="mt-5">
                {data &&
                  data.coins &&
                  data.coins.slice(0, 3).map((coin, i) => (
                    <>
                      <div className="flex flex-row py-2  items-center">
                        <img src={coin.item.thumb} className="h-4 w-4" alt="" />
                        <p className="text-xs ml-1 font-inter" key={i}>
                          {coin.item.name} ({coin.item.symbol})
                        </p>
                        <p className="text-xs flex l  ml-5 font-inter bg-[#ebf9f4ff ] text-green-500 " key={i}> <FaCaretUp />{Math.abs(coin.item.data.price_change_percentage_24h.usd).toFixed(2)}%</p>
                      </div>
                    </>
                  ))}
              </div>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
