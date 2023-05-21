import { React, useState,useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  BarElement,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import faker from 'faker';
import { useDispatch, useSelector } from "react-redux";
import { graphMarketListAPI } from "../redux/actions"
import { useParams } from 'react-router-dom';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);




const CrytoCharts = () => {
  const {coinId}=useParams

  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const dispatch = useDispatch();

  const time=["1D","1W","1M","3M","6M","1Y"]

  const [graphoptions, setGraphOptions] = useState([
    { id: 1, label: "Ethereum", checked: false },
    { id: 2, label: "Bitcoin", checked: false },
    { id: 3, label: "XRP", checked: false },
    { id: 4, label: "Tether", checked: false },

  ]);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleCheckboxChange = (id) => {
    const updatedOptions = options.map((option) =>
      option.id === id ? { ...option, checked: !option.checked } : option
    );
    setGraphOptions(updatedOptions);
  };

  const graphsPriceList = useSelector((state)=>state.chartData.barChartData)


  // console.log("neww",graphsPriceList.prices.map((list)=>list[0]))

 const options = {
    responsive: true,
    plugins: {
      legend: {
      },
      title: {
        display: true,
        text: '',
      },
    },
  };
  
  // const labels = graphsPriceList.prices.map((list)=>list[0]);
  
   const data = {
    // labels,
    datasets: [
      {
        label: {coinId},
        data:{},
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
  


  useEffect(() => {

    dispatch(graphMarketListAPI());
   
 
  }, [])
  
  return (
    <>
      <div className='flex flex-row '>
        <div className='flex ml-40 h-15'>
          <ul className='flex rounded-md gap-4  border-2 border-blue-100 pt-2'>
            {
              time.map((timestamps)=>(

                <li className='p-1'>
                <button
                  type="button"
                  className=" group bg-white rounded-md text-gray-500 inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-indigo-500 pb-8'"
                  onClick={() => { }}
                >
                  <span className='p-2'>{timestamps}</span>
                </button>
              </li>
              ))
            }
          </ul>
        </div>
        <div className='flex ml-60 mt-3' >
          <div className='flex'>
            <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleDropdown}
              >
                <span>Cryptocurrency</span>
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
                    {options.map((option) => (
                      <label key={option.id} className="flex items-center px-4 py-2 text-sm">
                        <input
                          type="checkbox"
                          className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                          checked={option.checked}
                          onChange={() => handleCheckboxChange(option.id)}
                        />
                        <span className="ml-2">{option.label}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>





          
          <div className='flex flex-row ml-5 '>
            <div className="relative">
              <button
                type="button"
                className="inline-flex justify-center items-center w-full px-4 py-2 font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                onClick={toggleDropdown}
              >
                <span>Charts</span>
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
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => { setSelected(true) }}>Bar Chart </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem" onClick={() => setSelected(false)}>Line Chart</a>
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

      {
        selected === true ?
          <Bar options={options} data={data} />
          :
          <Line options={options} data={data} />
      }
    </>
  )
}

export default CrytoCharts;



