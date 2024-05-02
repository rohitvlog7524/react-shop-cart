import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';

const ShoppingCart = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  const [cartItems, setCartItems] = useState(cart);

  const incrementQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        return { ...item, quantity: (item.quantity || 0) + 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };


  const decrementQuantity = (id) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const removeFromCartAndUpdate = (id) => {
    removeFromCart(id);
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };


  const totalPrice = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * (item.quantity || 0)), 0);
  const totalQuantity = cartItems.reduce((acc, item) => acc + (item.quantity || 0), 0);

  const GST = totalPrice * 0.18;
  const totalAmount = totalPrice + GST;

  return (
    <div className="shopping-cart">
      <div>
        {cartItems.length === 0 ? (
          <div className="empty-cart-message">Your cart is empty</div>
        ) : (
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="productcard">
                <div className="image-container">
                  <img src={item.image} alt="image" className="item-image" />
                </div>
                <div className="item-details">
                  <div className='text'>{item.title}</div>
                  <div className='text'>Price: ₹ {item.price}</div>
                  <div className="quantity-controls">
                    <button className='red' onClick={() => decrementQuantity(item.id)}>-</button>
                    <span>{item.quantity || 0}</span>
                    <button className='green' onClick={() => incrementQuantity(item.id)}>+</button>
                  </div>
                  <div className='text'>Subtotal: ₹ {(parseFloat(item.price) * (item.quantity || 0)).toFixed(2)}</div>
                  <button className='delete-icon' onClick={() => removeFromCartAndUpdate(item.id)}>
                    <i className='fa fa-trash'></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <div className="summarycard">
          <div className="summary-details">
            <h2 className='summarytxt'>Summary</h2>
            <div className="summary-row">
              <span>Total Price:</span>
              <span> ₹ {isNaN(totalPrice) ? "0.00" : (Math.round(totalPrice * 100) / 100).toFixed(2)}</span>
              
            </div>
            <div className="summary-row">
              <span>Total Quantity:</span>
              <span> {isNaN(totalQuantity) ? 0 : totalQuantity}</span>
            </div>
            <div className="summary-row">
              <span>GST (18%):</span>
              <span>₹ {isNaN(GST) ? "0.00" : (Math.round(GST * 100) / 100).toFixed(2)}</span>
            </div>
            <div className="summary-row">
              <span>Total Amount:</span>
              <span>₹ {isNaN(totalAmount) ? "0.00" : (Math.round(totalAmount * 100) / 100).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
