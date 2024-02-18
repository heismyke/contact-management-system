import { createContext, useState, useEffect } from "react";

const ContactContext = createContext()

export const ContactProvider = ({children}) => {

    const [data, setData] = useState([
      
    ])

    const [dataEdit, setDataEdit] = useState({
        item : {},
        edit : false
    })
    const updatedContact = async(id, item) => {
        const response = await fetch(`/contacts/${id}`, {
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(item)
        })
        const dataUpdate = await response.json()

        setData(data.map((element) => element.id === id ? {...element, ...dataUpdate} : element)) 
    }
    const updateContact = (item) => {
        
        setDataEdit({
            item,
            edit: true
        })
        
    }
   

    useEffect(() => {
        fetchContact()
    },[])

    const fetchContact = async  () => {
        const response = await fetch(`/contacts/`)
        const data = await response.json()
        setData(data)
    }
    const addContact = async (newContact) => {
        const response = await fetch(`/contacts/`, {
            method : 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newContact)
        })
        const dataContact = await response.json()
        setData([...data, dataContact])
    }

    const deleteContact = async(id) => {
        if(window.confirm('Are you sure you want to delete')){
            await fetch(`/contacts/${id}`,{
                method : "DELETE"
            })
            console.log(id)
            setData(data.filter((element) => element.id !== id))
        }
    }
    
    return <ContactContext.Provider value={{data, dataEdit,addContact,updateContact, updatedContact, deleteContact}}>
        {children}
    </ContactContext.Provider>
}

export default ContactContext