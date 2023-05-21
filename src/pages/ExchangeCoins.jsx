import React, { useState } from 'react'

const ExchangeCoins = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => setIsOpen(!isOpen);


  return (
    <>
      <div className="bg-white px-6 ">
        <div className='flex space-x-60'>
          <div className='text-[20px] font-medium'>
            Exchange Coins
          </div>
        </div>
        <div
          className="flex flex-col-reverse  items-center rounded-full px-1 pb-6 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
        >
          <div className='grid'>
            <div className='flex justify-center ml-20  mb-5'>
              Enter Value
            </div>
            <div className='flex items-center '>
              <span className='font-medium text-amber-500'>
                Sell
              </span>
              <span className='ml-10'>
              <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleDropdown}
              >
                <span>Bitcoin</span>
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
              </span>
              <span className='ml-5 '>
                <input className="p-2  border-2 border-blue-100 " type="text" placeholder='value' />
              </span>
            </div>

            <div className='flex items-center mt-10 '>
              <span className='font-medium  text-emerald-500'>
                Buy
              </span>
              <span className='ml-10'>
              <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleDropdown}
              >
                <span>Ethereum</span>
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
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" >Line Chart</a>
                  </div>
                </div>
              )}
            </div>
              </span>
              <span className='ml-5 '>
                <input className="p-2 border-2 border-blue-100" type="text" placeholder='value' />
              </span>
            </div>
          </div>
        </div>

        <div className='flex justify-center space-x-30 mt-10'>
          <button type="button" className='flex bg-blue-500 text-center  rounded-md'>
            <span className='px-10 py-5 text-[20px] rounded-full text-white'>Exchange </span>
          </button>
        </div>
      </div>

    </>
  )
}

export default ExchangeCoins