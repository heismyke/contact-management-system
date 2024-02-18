import React from 'react'
import {FaUser, FaAngleRight} from 'react-icons/fa'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import ContactContext from '../Context/ContactContext'

const Contacts = () => {
  const {data} = useContext(ContactContext)
  
  return (
    <div className='w-[100%] md:w-[25%] lg:w-[100%] h-[100vh] bg-gray-100 mx-auto '>
      <div className='w-[100%] h-[50px] flex items-center justify-start pl-2'>
      <h1 className='text-4xl text-bold'>Lists</h1>
      </div>
      <div className='w-[90%] mt-5 mx-auto h-[50px] flex bg-white rounded'>
        <div className='w-[70%] h-full flex'>
        <div className='w-[50px]  h-full flex items-center justify-center'>
          <FaUser size={'13px'}  />
          <FaUser />
          <FaUser size={'13px'}  />
        </div>
        <div className='w-[70%] md:w-[40%] lg:w-[40%]  h-full flex items-center justify-start pl-4'>
          <p>All Contacts</p>
        </div>
        </div>
        <div className='w-[30%] h-full flex items-center justify-end'>
            <p className='text-gray-500 text-xl'>{data.length}</p>
            <button>
                <Link to="/contacts">
                <FaAngleRight color='gray' size={'25px'}/>
                </Link>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Contacts