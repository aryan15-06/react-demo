import './App.css';
import Navbar from './components/navbar/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './components/Products/Products';
import ProductDetails from './components/Products/ProductDetails';
import { useState } from 'react';

function App() {

  const [searchResults, setSearchResults] = useState([]);

  return (
    <BrowserRouter>

      <Navbar onSearchResults={setSearchResults} />
      
      <Routes>
        <Route path="/"  element={<Products searchResults={searchResults} />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;