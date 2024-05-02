import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Wishlist = () => {
  const { wishlist, removeFromWishlist, addToCart, cart, setCart, setCartItemCount } = useContext(CartContext);

  const handleAddToCart = (item) => {
    const existingCartItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingCartItem) {

      const updatedCart = cart.map(cartItem => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
    } else {

      setCart([...cart, { ...item, quantity: 1 }]);
    }
    removeFromWishlist(item.id);
    setCartItemCount(prevCount => prevCount + 1);
  };

  return (
    <div className="wishlist">
      <h2 className='txt'>Wishlist</h2>
      {wishlist.length === 0 ? (
        <div className='empty-wishlist-message'>Your wishlist is empty</div>
      ) : (
        <>
          {wishlist.map(item => (
            <div key={item.id} className="item-card">
              <div className="image-container">
                <img src={item.image} alt="image" className="item-image" />
              </div>
              <div>
                <div className='text'>{item.id}</div>
                <div className='text'>{item.title}</div>
                <div className='text'>₹ {item.price}</div>
                <div className='text'>{item.category}</div>
                <button className='btn1' onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
              <button className='delete-icon' onClick={() => removeFromWishlist(item.id)}>
                <i className='fa fa-trash'></i>
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default Wishlist;


