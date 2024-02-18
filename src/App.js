import React from 'react'
import Contacts from './components/Contacts'
import ContactLists from './components/ContactLists'
import ContactForm from './components/ContactForm'
import { ContactProvider } from './Context/ContactContext'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactDetails from './components/ContactDetails'

const App = () => {
     
  return (
   <ContactProvider>
    <Router>
      <Routes>
      <Route path='/' element={
        <Contacts />
      }></Route>
      <Route path='/contacts' element={
        <ContactLists/>
      }>
      </Route>
      <Route path='/new-contact' element={
        <ContactForm />
      }>

      </Route>
      <Route path='/contacts/:id' element={
        <ContactDetails/>
      }>

      </Route>
      </Routes>
    </Router>
   </ContactProvider>
    

  )
}

export default App