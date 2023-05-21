import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { currencyMarketListAPI } from "../redux/actions"

const DailyStats = () => {
    
  const dispatch = useDispatch();
  const coinMarketList = useSelector((state)=>state.chartData.currencyListData)

  console.log("hh",coinMarketList)


  useEffect(() => {
        dispatch(currencyMarketListAPI())
  }, []);


    return (
        <>
            <div className='grid overflow-y-scroll max-h-[650px]'>
            <div className='font-extrabold text-[20px] '>
                    Cryptocurrency By
                    Market Cap
                </div>
               
                {
                   Object.keys(coinMarketList).map((index)=>(
                        <div className='flex pt-5 space-x-28  '>
                        <div className='grid '>
                            <div className='font-medium' key={index}>
                               {coinMarketList[index].name} 
                            </div>
                            <div className='flex '>
                                <span className='grey'>
                                    MKT.Cap:
                                </span>
                                <span className='grey pl-2'>
                                   {coinMarketList[index].market_cap}
                                </span>
                            </div>
                        </div>
                        <div className='flex'>
                            <span>
                            </span>
                            2.2 %
                        </div>
                    </div> 
                    ))

                } 
              
            </div>
        </>
    )
}

export default DailyStats