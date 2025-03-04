import './App.css'
import Form from './components/Form/Form'
import { FormContext } from './providers/FormContext'
import React, { useState } from 'react'

function App() {
  const [formInput, setFormInput] = useState({email: '', password: ''});
  return (
  <>
  Form Application
  <FormContext.Provider value={{formInput, setFormInput}}>
     <Form />
  </FormContext.Provider>
  </>
  )
}

export default App
