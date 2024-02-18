import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid'; 
const ContactContext = createContext()

export const ContactProvider = ({children}) => {

    const [data, setData] = useState([
      
    ])

    const [dataEdit, setDataEdit] = useState({
        item : {},
        edit : false
    })
    const updatedContact = (id, item) => {
        setData(data.map((element) => element.id === id ? {...element, ...item} : element)) 
    }
    const updateContact = (item) => {
        setDataEdit({
            item,
            edit: true
        })
        
    }
    console.log(updateContact)
    console.log(dataEdit)

    const addContact = (newContact) => {
        newContact.id = uuidv4()
        setData([...data, newContact])
    }
    
    return <ContactContext.Provider value={{data, dataEdit,addContact,updateContact, updatedContact}}>
        {children}
    </ContactContext.Provider>
}

export default ContactContext