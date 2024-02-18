
import { useParams } from 'react-router-dom';
import ContactContext from '../Context/ContactContext';
import { useContext,useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../shared/Button';

const ContactDetails = () => {
    const { id } = useParams(); 
    const { data , updateContact, deleteContact} = useContext(ContactContext); 
    console.log(id)
    console.log(data)
    
    const contact = data.find(dat => dat.id === parseInt(id))
    console.log(contact)

    if (!contact) {
        return <div>Contact not found</div>; 
    }

    return (
        <div className='w-[100%] md:w-[25%]  h-[100vh] bg-gray-100 mx-auto '>
            <div className='w-[100%] h-[200px] bg-slate-500'>
                <div className='w-[100%] h-[50px]  flex items-center justify-between px-3'>
                    <div className='rounded-full h-[30px] w-[30px] flex items-center justify-center bg-slate-700'>
                        <Link to='/contacts'>
                        <FaAngleLeft color='white' size={'15px'}/>
                        </Link>
                    </div>
                    <button className='w-[60px] h-[30px] bg-slate-700 rounded-full text-white'>
                        <Link to='/new-contact' onClick={() => updateContact(contact)}>
                            <p>Edit</p>
                        </Link>
                    </button>
                </div>
                <div className='w-[100%] h-[100px]  flex items-center justify-center'>
                        <div className='w-[80px] h-[80px] rounded-full bg-slate-700 flex items-center justify-center text-5xl text-white'>
                            {contact.firstName[0]}
                        </div>
                        
                </div>
                <div className='w-[100%] h-[50px] flex items-center text-white justify-center text-4xl'>
                        {contact.firstName}
                        </div>
            </div>
            <div className='w-[90%] mt-5 mx-auto h-[50px]  px-3  bg-white rounded'>
                <p>mobile</p>
                <div className='text-blue-600 '>
                <span>+234</span>{contact.number}
                </div>
            </div>
            <div className='w-[90%] mt-5 mx-auto h-[50px]  px-3  bg-white rounded'>
                <p>Gmail</p>
                <div className='text-blue-600 '>
                {contact.firstName}
                </div>
            </div>
            <div className='w-[90%] mt-5 mx-auto h-[50px]  px-3  bg-white rounded'>
                <p>{contact.email}</p>
                <div className='text-blue-600 '>
                {contact.firstName}
                </div>
            </div>
           
            <div className='w-[100%] h-[50px]  flex items-center   justify-center'>
            <Link to='/contacts' onClick={() => deleteContact(contact.id)}>
                    <p className='text-red-600'>Delete</p>
            </Link>
            </div>
            </div>
    );
}

export default ContactDetails;
