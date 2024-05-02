import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const ProductList = () => {
  const { products, addToCart, addToWishlist } = useContext(CartContext);

  return (
    <div className="product-list">
      <h2 className='center'>Products</h2>
      <div className="grid-container">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="image-container">
              <img src={product.image} alt="image" className="product-image" />
            </div>
            <div className='text1'>{product.id}</div>
            <div className='text1'>{product.title}</div>
            <div className='text1'>₹ {product.price}</div>
            <div className='text1'>{product.category}</div>
            <div className='text1'>{product.description}</div>
            <div className='flxbtn'>
              <button className='btn' onClick={() => addToCart(product.id)}>Add to Cart</button>
              <button className='btn' onClick={() => addToWishlist(product.id)}>Add to Wishlist</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
