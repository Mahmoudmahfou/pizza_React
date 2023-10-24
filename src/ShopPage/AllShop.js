import React from "react";
import Header from "../AllHome/Header";
import Footer from "../AllHome/Footer";
import { Link } from "react-router-dom";
import PizzaMeals from "../AllHome/PizzaMeals";
import MenueSection from "../AllHome/MenueSection";
import { CartProvider } from "react-use-cart";

function AllShop() {
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
                <h1 className="mb-3 mt-5 bread">Our Menu</h1>
                <p className="breadcrumbs">
                  <span className="mr-2 h4 ">
                    <Link to="/" style={{ color: "#fbff00" }}>
                      Home
                    </Link>
                  </span>
                  <span className="h5">/ Menu</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PizzaMeals />
      <MenueSection/>
      <Footer />
    </CartProvider>
  );
}

export default AllShop;
