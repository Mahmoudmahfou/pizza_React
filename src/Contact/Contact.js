/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../AllHome/Header";
import Footer from "../AllHome/Footer";
import { Link } from "react-router-dom";
import { CartProvider } from "react-use-cart";

function Contact() {
  return (
    <CartProvider>
      <Header />
      <section
        className="home-slider  img"
        style={{ backgroundImage: `url(images/bg_1.jpg)` }}>
        <div
          className="slider-item"
          style={{ backgroundImage: `url(images/bg_3.jpg)`, height: "600px" }}>
          <div className="overlay"></div>
          <div className="container">
            <div className="row slider-text justify-content-center align-items-center">
              <div
                className="col-md-7 col-sm-12 text-center 
              "
                style={{ marginTop: "150px" }}>
                <h1 className="mb-3 mt-5 bread">CONTACT US</h1>
                <p className="breadcrumbs">
                  <span className="mr-2 h4 ">
                    <Link to="/" style={{ color: "#fbff00" }}>
                      Home
                    </Link>
                  </span>
                  <span className="h5">/ CONTACT</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="ftco-section contact-section">
        <div className="container mt-5">
          <div className="row block-9">
            <div className="col-md-4 contact-info ">
              <div className="row">
                <div className="col-md-12 mb-4">
                  <h2 className="h4">Contact Information</h2>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Address:</span> 198 West 21th Street, Suite 721 New
                    York NY 10016
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Phone:</span>{" "}
                    <a href="tel://1234567920">+ 1235 2355 98</a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Email:</span>{" "}
                    <a href="mailto:info@yoursite.com">info@yoursite.com</a>
                  </p>
                </div>
                <div className="col-md-12 mb-3">
                  <p>
                    <span>Website:</span> <a href="#">yoursite.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-6 ">
              <form action="#" className="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Email"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Subject"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="7"
                    className="form-control"
                    placeholder="Message"></textarea>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-primary py-3 px-5"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </CartProvider>
  );
}

export default Contact;
