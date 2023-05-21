import { useState } from 'react'
import CrytoCharts from '../pages/CrytoCharts';
import CrytoDaily from '../pages/CrytoDaily';
import DailyStats from '../pages/DailyStats';
import DrawerContent from '../pages/Drawer';
import ExchangeCoins from '../pages/ExchangeCoins';


export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="grid grid-cols-3 gap-4 mt-6" style={{ gridTemplateColumns: '0.5fr 3.1fr 1fr' }}>
        <div className="bg-white w-25 ml-20 rounded-lg items-center">
        <div className="relative mt-4">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full py-2 font-medium text-gray-700 bg-white rounded-md hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={toggleDropdown}
              >
                <span>USD</span>
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {isOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >Bar Chart </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Line Chart</a>
                  </div>
                </div>
              )}
            </div>
        </div>


        <div className="col-span-2 bg-white w-3/4 rounded-md ">
          <div className='bg-white p-4 w-1/4'>
            <span className='flex w-full items-center'>
              <span className=" h-5 mb-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="40px" height="30px"><path d="M 21 3 C 11.601563 3 4 10.601563 4 20 C 4 29.398438 11.601563 37 21 37 C 24.355469 37 27.460938 36.015625 30.09375 34.34375 L 42.375 46.625 L 46.625 42.375 L 34.5 30.28125 C 36.679688 27.421875 38 23.878906 38 20 C 38 10.601563 30.398438 3 21 3 Z M 21 7 C 28.199219 7 34 12.800781 34 20 C 34 27.199219 28.199219 33 21 33 C 13.800781 33 8 27.199219 8 20 C 8 12.800781 13.800781 7 21 7 Z" /></svg></span>
              <input type="Search" className='flex p-2' placeholder='Search' />
            </span>
          </div>
        </div>

        <div className="col-span-2 bg-white p-4 ml-20 rounded-md">
          <div className='bg-white'>
            <CrytoCharts />
          </div>
        </div>
        <div className="bg-white p-4 rounded-md h-full mb-20">
          <div className='bg-white '>
        
            <DailyStats />
          </div>
        </div>
        <div className="col-span-2 whiteBlue p-4 ml-20 rounded-md">
          <div className='flex flex-row justify-between'>
            <div className=' bg-white p-10 border-2 border-white rounded-md'>
              <CrytoDaily />
            </div>
            <div className=' bg-white p-10 border-2 border-white rounded-md'>
              <ExchangeCoins />
            </div>
            <div className=' bg-white p-10 border-2 border-white rounded-md'>
              <DrawerContent />
            </div>
          </div>
        </div>

      </div>
    </>
  );
};


