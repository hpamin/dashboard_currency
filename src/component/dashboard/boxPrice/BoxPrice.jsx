import React from 'react'
import { FaLongArrowAltUp } from 'react-icons/fa'

const BoxPrice = () => {

  
    const boxApi = [ 
    {
      id: 0,
      title: 'Bitcoin',
      present: 6.8,
      price: 71845,
      bg_color: 'bg-secondery',
      present_bg_color: 'bg-third',
      text_color: 'text-white',
    },
    {
      id: 1,
      title: 'BNB',
      present: 7,
      price: 596.17,
      bg_color: 'bg-white',
      present_bg_color: 'bg-gray',
      text_color: '',
    },
    {
      id: 2,
      title: 'Ethereum',
      present: 8,
      price: 2689,
      bg_color: 'bg-white',
      present_bg_color: 'bg-gray',
      text_color: '',
    },
    {
      id: 3,
      title: 'Tether',
      present: 9,
      price: 1,
      bg_color: 'bg-white',
      present_bg_color: 'bg-gray',
      text_color: '',
    },
  ] 

  return (
    <div className='w-full flex items-center justify-between'>
      {boxApi.map((item) => (
        <div className={`w-40 h-40 rounded-lg shadow-md flex items-center justify-evenly flex-col p-5 ${item.bg_color}`} key={item.id}>
          <div className={`w-24 flex items-center justify-center gap-1 px-7 py-2 rounded-lg ${item.present_bg_color}`}>
            <span> <FaLongArrowAltUp className={`${item.text_color}`} size={15} />  </span>
            <p className={`text-xs  ${item.text_color}`}> %{item.present} </p>
          </div>
          <div className={`w-full flex flex-col gap-2 justify-between items-center`}>
              <p className={`text-3xl font-bold ${item.text_color}`}> ${item.price.toLocaleString()} </p>
              <p className={`text-xs ${item.text_color}`}> {item.title} </p>
          </div>
        </div>
      ))}
       
    </div>
    
  )
}

export default BoxPrice