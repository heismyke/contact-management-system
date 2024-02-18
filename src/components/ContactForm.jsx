import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Button from '../shared/Button'
import ContactContext from '../Context/ContactContext'
import { useContext, useEffect } from 'react'

const ContactForm = () => {
    const {addContact, dataEdit, updatedContact} = useContext(ContactContext)

    const[firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [sex, setSex] = useState('')
    const [number, setNumber] = useState('')
    const [linkEnabled, setLinkEnabled] = useState(false);

    useEffect(() => {
        setFirstName(dataEdit.item.firstName)
        setLastName(dataEdit.item.lastName)
        setEmail(dataEdit.item.email)
        setSex(dataEdit.item.sex)
        setNumber(dataEdit.item.number)

    },[dataEdit])
    const handleFirstName = (e) => {
        if(firstName !== ''  ){
            setLinkEnabled(true)
        }else{
            setLinkEnabled(false)
        }
        setFirstName(e.target.value)
    }
 
    const handleLastName = (e) => {
        if(lastName !== '' ){
            setLinkEnabled(true)
        }else{
            setLinkEnabled(false)
        }
        setLastName(e.target.value)
    }
    const handleEmail = (e) => {
        if(email !== '' ){
            setLinkEnabled(true)
        }else{
            setLinkEnabled(false)
        }
        setEmail(e.target.value)
    }
    const handleSex = (e) => {
        if(sex !== '' ){
            setLinkEnabled(true)
        }else{
            setLinkEnabled(false)
        }
        setSex(e.target.value)
    }
    const handleNumber = (e) => {
        if(number !== '' ){
            setLinkEnabled(true)
        }else{
            setLinkEnabled(false)
        }
        setNumber(e.target.value)
    }

   
   const handleSubmit = () => {
    if (firstName !== '' && lastName !== '' && email !== '' && sex !== '' && number !== '') {
        const newContact = {
            firstName,
            lastName,
            email,
            sex,
            number
        };
        if(dataEdit.edit === true){
            updatedContact(dataEdit.item.id, newContact)
            setFirstName('');
            setLastName('');
            setEmail('');
            setSex('');
            setNumber('');
        }else{
            addContact(newContact)
        }
        setFirstName('');
        setLastName('');
        setEmail('');
        setSex('');
        setNumber('');

        

    }else{
        setLinkEnabled(false)
    }
  
    
   }
    
  return (
   <div className='w-[100%] md:w-[25%] lg:w-[25%] h-[100vh] bg-gray-100 mx-auto'>
     <div className='w-[100%] h-[50px] flex'>
                <div className='w-[20%] h-[50px] flex items-center justify-center'>
                    <Link to='/contacts'>
                    <p className='text-sm text-blue-600'>Cancel</p>
                    </Link>
                    
                </div>
                <div className='w-[60%] h-[50px] flex items-center justify-center'>
                    <p>New Contact</p>
                </div>
                <div className='w-[20%] h-[50px] flex items-center justify-center'>
               {linkEnabled ?  <Link to='/contacts' type='submit'   onClick={handleSubmit}>
                    <p className='text-sm text-blue-500'>Done</p>
                </Link>: <p className='text-sm text-gray-500'>Done</p>}
                </div>
               
            </div>
             <form className='w-[100%] h-[250px] ' >
                <div className='w-[100%] h-[50px]'>
                    <input
                    onChange={handleFirstName} 
                    value={firstName}
                    type="text" 
                    placeholder='First name' 
                    className='w-full h-full border-b pl-2 focus:outline-none'/>
                </div>
                <div className='w-[100%] h-[50px]'>
                <input 
                onChange={handleLastName}
                value={lastName}
                type="text" 
                placeholder='Last name'  
                className='w-full h-full border-b pl-2 focus:outline-none'/>
                </div>
                <div className='w-[100%] h-[50px]'>
                <input 
                onChange={handleEmail}
                value={email}
                type="email" 
                placeholder='Email' 
                className='w-full h-full border-b pl-2 focus:outline-none'/>
                </div>
                <div className='w-[100%] h-[50px]'>
                <input 
                onChange={handleSex}
                value={sex}
                type="text" 
                placeholder='Sex' 
                className='w-full h-full border-b pl-2 focus:outline-none'/>
                </div>
                <div className='w-[100%] h-[50px]'>
                <input 
                onChange={handleNumber}
                value={number}
                type="text" 
                placeholder='Number' 
                className='w-full h-full border-b pl-2 focus:outline-none'/>
                </div>
             </form>
   </div>
  )
}

export default ContactForm