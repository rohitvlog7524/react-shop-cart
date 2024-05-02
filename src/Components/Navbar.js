import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Navbar = () => {
  const { wishlist, cartItemCount } = useContext(CartContext);

  return (

    <nav className="navbar">
      <div className="navbar-brand">
        <h1>
          <a href='/'>My Shop</a>
        </h1>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/cart" className="nav-link">
            <i className="fa fa-shopping-cart carticon"></i>
            <span className="badge">{cartItemCount}</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/wishlist" className="nav-link">
            <i className="fa fa-heart hearticon"></i>
            <span className="badge">{wishlist.length}</span>
          </Link>
        </li>
      </ul>
    </nav>

  );
};

export default Navbar;
