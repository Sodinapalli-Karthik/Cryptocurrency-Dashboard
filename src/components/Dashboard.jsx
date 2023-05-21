// import React from "react";
// // import "tailwindcss/tailwind.css";
// import CrytoCharts from "../pages/CrytoCharts";
// import DailyStats from "../pages/DailyStats";
// import CrytoDaily from "../pages/CrytoDaily";
// import ExchangeCoins from "../pages/ExchangeCoins";

// const Dashboard = () => {
//   return (
//     <div className="flex flex-col h-screen">
//       <div className="flex-grow">
//         <div className="flex h-600 ">
//           <div className="w-70 bg-white"><CrytoCharts/></div>
//           <div className="w-30  bg-white"><DailyStats/></div>
//         </div>
//       </div>
//       <div className="flex">
//         <div className="w-1/2 h-400"><CrytoDaily/></div>
//         <div className="w-1/2 h-400"><ExchangeCoins/></div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


import React, { useState } from 'react';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-600">
        <div className="w-70 bg-white ml-20 rounded-lg items-center">
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
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Bar Chart</a>
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Line Chart</a>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="w-30 bg-white rounded-md"></div>
      </div>

      <div className="flex">
        <div className="w-1/2 h-400 bg-white rounded-md">hello</div>
        <div className="w-1/2 h-400 bg-white rounded-md">hai</div>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-white w-25 ml-20 rounded-lg items-center">
          {/* Content */}neww
        </div>
        <div className="col-span-2 bg-white w-3/4 rounded-md">
          {/* Content */}hi
        </div>
        <div className="col-span-2 bg-white p-4 ml-20 rounded-md">
          {/* Content */}gg
        </div>
        <div className="bg-white p-4 rounded-md h-full mb-20">
          {/* Content */}hh
        </div>
      
      </div>
    </div>
  );
};

export default Dashboard;
