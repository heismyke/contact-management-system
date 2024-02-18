import React from 'react'
import Contacts from './Contacts'
import {FaAngleLeft, FaPlus} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ContactItem from './ContactItem'
import ContactContext from '../Context/ContactContext'
import { useContext } from 'react'

const ContactLists = () => {
    const {data} = useContext(ContactContext)
    return (
        <div className='w-[100%] md:w-[25%]  h-[100vh] bg-gray-100 mx-auto '>
            <div className='w-[100%] h-[50px] flex'>
                <div className='w-[20%] h-[50px] flex items-center justify-center'>
                    <Link to='/'>
                        <FaAngleLeft color='blue' size={'20px'}/>
                    </Link>
                    <p className='text-sm text-blue-600'>Lists</p>
                </div>
                <div className='w-[60%] h-[50px] flex items-center justify-center'>
                    <p>Contacts</p>
                </div>
                <div className='w-[20%] h-[50px] flex items-center justify-center'>
                    <Link to='/new-contact'>
                        <FaPlus color='blue' />
                    </Link>
                </div>
            </div>
            <div>
                {data.map((element, index) => (
                    <ContactItem data={element} key={index}/>
                ))}
            </div>
        </div>
      )
}

export default ContactLists