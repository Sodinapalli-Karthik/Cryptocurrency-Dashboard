import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useDispatch, useSelector } from "react-redux";
import { currencyListAPI } from "../redux/actions"

ChartJS.register(ArcElement, Tooltip, Legend);

const CrytoDaily = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const dispatch = useDispatch();



  useEffect(() => {
    // dispatch(currencyListAPI(data))
    // setCurrencyList()

  }, []);



  const data = {
    labels: ['Bitcoin', 'Etherum', 'Arbitrium', 'BNB Smart Coin', 'Polygon'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <>
      <div className="bg-white">
        <div className='flex space-x-60'>
          <div className='text-[20px] font-medium'>
            Portfolio
          </div>
          <div className='flex text-[20px]'>
            <span className='font-medium' >
              Total Value :
            </span>
            <span className='ml-2'>
              $1000
            </span>
          </div>
        </div>
        <div
          className="flex flex-col-reverse  items-center rounded-full px-1 mx-auto mt-10 space-y-0 md:space-y-0 md:flex-row"
        >
          <div className='h-full items-center justify-center px-32'>

          <Pie data={data} />
          </div>
        </div>
      </div>
    </>
  )
}

export default CrytoDaily