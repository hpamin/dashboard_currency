import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CiLogin} from "react-icons/ci";
import { RiDashboardHorizontalFill} from 'react-icons/ri';
import { FaCreditCard, FaWallet } from 'react-icons/fa';
import { IoMdMore } from 'react-icons/io';
import { IoSend } from 'react-icons/io5';
import { LiaTableSolid } from 'react-icons/lia';

const NavSide = () => {

  const location = useLocation();
  const links = [
    {
      id: 0,
      to: "/",
      title: "Dashboard",
      icon: <RiDashboardHorizontalFill size={20}/>,
    },
    {
      id: 1,
      to: "/wallet",
      title: "Wallet",
      icon: <FaWallet size={20}/>,
    },
    {
      id: 3,
      to: "/tables",
      title: "Tables",
      icon: <LiaTableSolid size={20}/>,
    },
    {
      id: 4,
      to: "/billing",
      title: "Billing",
      icon: <FaCreditCard size={20}/>,
    },
    {
      id: 2,
      to: "/auth",
      title: "Log in",
      icon: <CiLogin size={20}/>,
    }
  ]

  return (
    <nav className='w-72 h-[100vh] py-5 flex flex-col gap-10 justify-between pr-0'>

      <div className='flex flex-col gap-10 pl-5' style={{width:"inherit"}}>
            <p className='text-3xl font-bold text-center'>HP<span className='text-secondary'>amin</span></p>
        <div className='w-full flex items-start justify-center gap-4 flex-col '>

          {links.map((item) => (
            
            <Link to={item.to}  className='w-full flex items-center gap-3 h-12 hover:opacity-70 relative' key={item.id}> 
            
              {item.icon} {item.title}
              
            {location.pathname === item.to &&
              <div className='w-1 h-full bg-secondary absolute right-0 rounded-full'  style={{background: "linear-gradient(90deg, #506FFE 0%, #6F8CFF 50%, #3A5FB8 100%)"}} />
            }
            
            </Link>
          ))}
        </div>
      </div>

        <div className='w-full flex flex-col items-center justify-center gap-5 pl-5'>
            <div className='w-full flex items-center justify-center flex-col gap-2'>
              <p className='text-sm'>Done for the day?</p>
              <button className='flex items-center justify-center gap-2 py-4 px-7  bg-secondary text-sm rounded-xl shadow-md duration-100 hover:opacity-90' style={{background: "linear-gradient(90deg, #506FFE 0%, #6F8CFF 50%, #3A5FB8 100%)", color: "white"}}  > <IoSend color='white' /> Send daily report </button>
            </div>
            
            <div className='w-full h-[2px] bg-bg_primary' />

            <div className='w-full flex items-center justify-between'>
              <div className='w-14'>
                <img src="https://d22e6o9mp4t2lx.cloudfront.net/cms/pfp2_11cfcec183.webp" className='rounded-full' alt="" />
              </div>
              <p className='text-xs'>Mohammad Amin</p>
              
              <button className='hover:opacity-80'>
                <IoMdMore size={30} />
              </button>
            </div>
        </div>

    </nav>
  )
}

export default NavSide