import React from 'react'
import TradingViewWidget from './TradingViewWidget'

export default function CryptoMain() {
  return (
    <>
    <div className='w-full h-fit rounded-md bg-white '>
        <div className='container flex justify-center p-4 items-center mx-auto'>

            <TradingViewWidget/>        
           
        </div>
    </div>
    </>
  )
}
