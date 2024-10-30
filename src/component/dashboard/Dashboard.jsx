import React, { useMemo } from 'react'
import { CiSearch } from 'react-icons/ci'
import CurrencyChange from './currencyChangeBox/CurrencyChange'
import BoxPrice from './boxPrice/BoxPrice'
import PriceChart from './priceChart/PriceChart'

const Dashboard = () => {

   const pricesDollors = useMemo(() => ([
    { 
      date: '1403-07-15', 
      price: 60000 
    },
    { 
      date: '1403-07-20', 
      price: 61000 
    },
    { 
      date: '1403-07-25', 
      price: 63000 
    },
    { 
      date: '1403-07-30', 
      price: 67000 
    },
    { 
      date: '1403-08-05', 
      price: 65000 
    },
    { 
      date: '1403-08-10', 
      price: 68000 
    },
  ]), []);

  const pricesEuro = useMemo(() => ([
    { 
      date: '1403-07-15', 
      price: 70000 
    },
    { 
      date: '1403-07-20', 
      price: 69000 
    },
    { 
      date: '1403-07-25', 
      price: 68000 
    },
    { 
      date: '1403-07-30', 
      price: 71000 
    },
    { 
      date: '1403-08-05', 
      price: 73000 
    },
    { 
      date: '1403-08-10', 
      price: 75000 
    },
  ]), []);

  return (
    <div className='w-full h-[100vh] bg-primary '>
      <div className='w-full h-full p-5 flex items-center justify-between gap-5'>
        <div className='w-full h-full flex flex-col items-center justify-between'>

          <div className='w-[30rem] bg-white py-5 pr-7 pl-4 rounded-lg shadow-sm flex items-center justify-between'>
            <label htmlFor="search"> <CiSearch size={25} />  </label>
            <input type="text" className='w-96 outline-none h-full' name="search" id="search" placeholder='Search here ...' />
          </div>

        <div className='w-full h-full  flex items-center flex-col justify-between py-5'>

            {/* price Box */}
            <BoxPrice />

            {/* currency change */}
            <CurrencyChange />

        </div>

        </div>

          {/* chart change */}
        <div className='w-[25rem] h-full bg-white rounded-xl flex flex-col items-center justify-between py-2'>

          <div className='flex flex-col items-center justify-center gap-5'>
            <PriceChart title="1 Dollar to tomans" pricesData={pricesDollors} />
            <PriceChart title="1 Euro to tomans" pricesData={pricesEuro} />
          </div>

          <div>
            <button className='w-full px-16 py-3 rounded-full bg-secondery shadow-md text-white font-bold capitalize hover:opacity-90 duration-150'>
              see the last price
            </button>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Dashboard