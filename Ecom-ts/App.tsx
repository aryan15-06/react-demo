
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'

import Products from './components/Products/Products'
import ProductDetails from './components/Products/ProductDetails'
import { useState } from 'react'

const App: React.FC = () => {
  const [ searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>
       <Navbar onSearchResults={setSearchResults}/>
      <Routes>
       <Route path="/" element={<Products searchResults={searchResults}/>}></Route>
       <Route path="/product/:id" element={<ProductDetails/>}></Route>
      </Routes>
    </BrowserRouter>
    
  
  )
}

export default App
