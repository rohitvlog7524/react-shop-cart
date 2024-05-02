import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);



  const addToCart = (id) => {
    const itemToAdd = products.find(item => item.id === id);
    const existingItemIndex = cart.findIndex(item => item.id === id);
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: updatedCart[existingItemIndex].quantity + 1 };
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...itemToAdd, quantity: 1 }]);
    }
    setCartItemCount(cartItemCount + 1);
  };



  const addToWishlist = (id) => {
    const itemToAdd = products.find(item => item.id === id);
    setWishlist([...wishlist, itemToAdd]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const removeFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cart, wishlist, products, addToCart, addToWishlist, removeFromCart, removeFromWishlist, cartItemCount, setCart, setCartItemCount }}>
      {children}
    </CartContext.Provider>
  );
};
