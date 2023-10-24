/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { CartProvider, useCart } from "react-use-cart";
function Header() {
  const { cartTotal, totalUniqueItems } = useCart();
  return (
    <CartProvider>
      <nav
        className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light"
        id="ftco-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="flaticon-pizza-1 mr-1"></span>Pizza
            <br />
            <small>Delicous</small>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="oi oi-menu"></span> Menu
          </button>
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/shop" className="nav-link">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/cart" className="nav-link">
                  Cart
                </Link>
              </li>
              <div className="quote_btn-container ">
                <Link to="/cart">
                  <img src="images/cart.png" alt=""
                  height={30}/>
                  <div className="cart_number">
                    <span style={{color:"#fac564"}}>{totalUniqueItems}</span></div>
                </Link>
                <span style={{color:"#fff",fontSize:"20px",fontWeight:"bold"}}>$ {cartTotal}</span>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </CartProvider>
  );
}

export default Header;
