import React, { useState } from 'react';

const CurrencyChange = () => {

  const [amount, setAmount] = useState('')
  const [toman, setToman] = useState('')
  const [selectedCurrency, setSelectedCurrency] = useState('USD') // Default to USD

  const conversionRates = {
    USD: 68000,
    EUR: 74000,
  }

  const formatNumber = (value) => {
    if (!value) return ''
    return parseFloat(value.replace(/,/g, '')).toLocaleString(undefined, {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  }

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/,/g, '')
    setAmount(formatNumber(value))
    setToman('')
  }

  const handleTomanChange = (e) => {
    const value = e.target.value.replace(/,/g, '')
    setToman(formatNumber(value))
    setAmount('')
  }

  const convertCurrency = (value, isToman = false) => {
    if (!value) return ''
    const numericValue = parseFloat(value.replace(/,/g, ''))
    let result
    
    if (isToman) {
      if (selectedCurrency === 'USD') {
        result = numericValue / conversionRates.USD
      } else {
        result = numericValue / conversionRates.EUR
      }
    } else {
      if (selectedCurrency === 'USD') {
        result = numericValue * conversionRates.USD
      } else {
        result = numericValue * conversionRates.EUR
      }
    }
    return result.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 2 })
  }

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency)
    setAmount('')
    setToman('')
  };

  return (
    <div className='w-[40rem] bg-white p-5 flex flex-col items-center justify-between rounded-xl shadow-md gap-5'>
      <div className='w-full flex items-center justify-evenly'>
        <button
          className={`px-14 py-5 border-[3px] rounded-lg text-lg ${selectedCurrency === 'EUR' ? 'border-secondery text-secondery' : 'border-gray'}`}
          onClick={() => handleCurrencyChange('EUR')}
        >
          Euro
        </button>
        <button
          className={`px-14 py-5 border-[3px] rounded-lg text-lg ${selectedCurrency === 'USD' ? 'border-secondery text-secondery' : 'border-gray'}`}
          onClick={() => handleCurrencyChange('USD')}
        >
          US Dollars
        </button>
      </div>
      <div className='w-full flex items-center justify-center gap-4 flex-col'>
        <div className='w-full flex items-center justify-evenly'>
          <input
            type="text"
            value={amount}
            onChange={handleAmountChange}
            className='border-b-2 border-secondery w-40 outline-none pb-2 font-mono'
            placeholder={`Amount in ${selectedCurrency}`}
          />
          <input
            type="text"
            value={toman}
            onChange={handleTomanChange}
            className='border-b-2 border-secondery w-40 outline-none pb-2 font-mono'
            placeholder="Amount in Toman"
          />
        </div>
        <div className='w-full py-3 rounded-md flex items-center justify-center gap-1' style={{ backgroundColor: '#F3F3F3' }}>
          {amount ? (
            <>
              <p>{amount} {selectedCurrency}</p>
              <span>=</span>
              <p>{convertCurrency(amount)} Toman</p>
            </>
          ) : (
            <>
              <p>1 {selectedCurrency}</p>
              <span>=</span>
              <p>{conversionRates[selectedCurrency].toLocaleString()} Toman</p>
            </>
          )}
        </div>
        <div className='w-full py-3 rounded-md flex items-center justify-center gap-1' style={{ backgroundColor: '#F3F3F3' }}>
          {toman ? (
            <>
              <p>{toman} Toman</p>
              <span>=</span>
              <p>{convertCurrency(toman, true)} {selectedCurrency}</p>
            </>
          ) : (
            <>
              <p>{conversionRates[selectedCurrency].toLocaleString()} Toman</p>
              <span>=</span>
              <p>1 {selectedCurrency}</p>
            </>
          )}
        </div>
      </div>
      <div className='w-full'>
        <button className='px-10 py-3 shadow-md rounded-full bg-secondery text-white hover:opacity-90 duration-150'>
          Buy currency
        </button>
      </div>
    </div>
  );
};

export default CurrencyChange;
