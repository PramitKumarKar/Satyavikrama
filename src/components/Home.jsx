import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full '>
      <div className='max-w-screen-lg  h-full px-4 md:flex-row'>
        <div className='flex flex-col items-start justify-start ml-0'>
          <h2 className=' text-4xl sm:text-3xl font-bold text-orange-500 mt-20   font-signature flex items-start'>Truth & Power Is held by the name – Satya Vikrama – Ultimate Ram</h2>
          {/* <div>
          <Link to='portfolio' duration={500} smooth className='group text-white  w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-orange-600 to-pink-600 hover:cursor-pointer'>
              Portfolio 
              <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
              </span>
            </Link>
          </div> */}
          <div className='flex items-center justify-center'>

          <Link to='Services' duration={500} smooth className=' flex items-center justify-center bg-orange-600 group text-white  w-fit px-6 py-3 my-2  rounded-md hover:cursor-pointer'>
            Services
            <span className='group-hover:rotate-90 duration-300'>
                <MdOutlineKeyboardArrowRight size={20} className='ml-1'/>
            </span>
          </Link>
          </div>
        </div>
        {/* <div>
          <img src={ramMandir} alt="mypic" className='rounded mx-auto w-2/3 md:w-full'/>
        </div> */}
      </div>
    </div>
  )
}

export default Home