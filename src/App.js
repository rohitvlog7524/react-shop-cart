import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import Wishlist from './Components/Wishlist';
import { CartProvider } from './Components/CartContext';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
     <CartProvider>
      <div className="App">
     
        <BrowserRouter>
        <Navbar/>
         <Routes>
          <Route path="/" element={<ProductList/>}/>
          <Route path="/cart" element={<ShoppingCart/>}/>
          <Route path="/wishlist" element={<Wishlist/>}/>
         </Routes>
        </BrowserRouter>
      </div>
      </CartProvider>
    
  );
}

export default App;