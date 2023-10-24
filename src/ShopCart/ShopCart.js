/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import Header from "../AllHome/Header";
import Footer from "../AllHome/Footer";
import { CartProvider, useCart } from "react-use-cart";

function Cart() {
  const {
    isEmpty,
    // totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    cartTotal,
  } = useCart();

  if (isEmpty)
    return (
      <h2 className="text-center pt-5 pb-5 mb-5 mt-5">Your cart is empty</h2>
    );

  return (
    <div>
      {/* <h1>Cart ({totalUniqueItems})</h1> */}

      <section className="shopping-cart spad mt-4 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="shopping__cart__table">
                <table>
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Total</th>
                      <th>operat</th>
                    </tr>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr>
                        <td className="product__cart__item" key={item.id}>
                          <div className="product__cart__item__pic pr-2">
                            <img src={item.image_url} alt="" height={"150px"} />
                          </div>
                          <div className="product__cart__item__text pr-3">
                            <h6>{item.title}</h6>
                            <h5>${item.price}</h5>
                          </div>
                        </td>
                        <td className="quantity__item">
                          <div className="quantity">
                            <div className="pro-qty-2 d-flex">
                              <button
                                className="btn btn-success "
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity + 1)
                                }>
                                +
                              </button>
                              <input type="text" value={item.quantity} />
                              <button
                                className="btn btn-warning"
                                onClick={() =>
                                  updateItemQuantity(item.id, item.quantity - 1)
                                }>
                                -
                              </button>
                            </div>
                          </div>
                        </td>
                        <td className="cart__price">
                          $ {item.quantity * item.price}
                        </td>
                        <td className="cart__close">
                          <button onClick={() => removeItem(item.id)}>x</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 mb-5">
                  <div className="continue__btn">
                    <Link to="/shop">Continue Shopping</Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="continue__btn update__btn">
                    <a href="#">
                      <i className="fa fa-spinner"></i> Update cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="cart__discount">
                <h6>Discount codes</h6>
                <form action="#">
                  <input type="text" placeholder="Coupon code" />
                  <button type="submit">Apply</button>
                </form>
              </div>
              <div className="cart__total mb-5">
                <h6>Cart total</h6>
                <ul>
                  <li>
                    Subtotal <span>$ 169.50</span>
                  </li>
                  <li>
                    Total <span>$ {cartTotal}</span>
                  </li>
                </ul>
                <a href="#" className=" primary-btn">
                  Proceed to checkout
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default class ShopCart extends Component {
  render() {
    return (
      <CartProvider>
        <Header />
        <section className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="breadcrumb__text mt-5">
                  <h4>Shopping Cart</h4>
                  <div className="breadcrumb__links">
                    <NavLink to="/">Home {" /"}</NavLink>
                    <NavLink to="/shop"> Shop {" /"}</NavLink>
                    <span> Shopping Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cart />
        <Footer />
      </CartProvider>
    );
  }
}
