import React from 'react'
import { Link } from 'react-router-dom'


const ContactItem = ({data}) => {
  return (
    <Link to={`/contacts/${data.id}`}  className='w-[100%] h-[40px] flex items-center justify-start pl-3 text-lg border-b cursor-pointer '>
        {data.firstName}
    </Link>
  )
}

export default ContactItem