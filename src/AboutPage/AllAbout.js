import React from "react";
import Header from "../AllHome/Header";
import Footer from "../AllHome/Footer";
import { Link } from "react-router-dom";
import InfoSection from "../AllHome/InfoSection";
import AboutPizza from "../AllHome/AboutPizza";
import Counter from "../AllHome/Counter";
import { CartProvider } from "react-use-cart";

function AllAbout() {
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
                <h1 className="mb-3 mt-5 bread">About</h1>
                <p className="breadcrumbs">
                  <span className="mr-2 h4 ">
                    <Link to="/" style={{ color: "#fbff00" }}>
                      Home
                    </Link>
                  </span>
                  <span className="h5">/ About</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InfoSection />
      <AboutPizza />
      <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-3">
            <div className="col-md-7 heading-section  text-center">
              <h2 className="mb-4">Our Chef</h2>
              <p className="flip">
                <span className="deg1"></span>
                <span className="deg2"></span>
                <span className="deg3"></span>
              </p>
              <p className="mt-5">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 d-flex mb-sm-4 ">
              <div className="staff">
                <div
                  className="img mb-4"
                  style={{ backgroundImage: `url(images/person_1.jpg)` }}></div>
                <div className="info text-center">
                  <h3>
                    <a href="teacher-single.html">Tom Smith</a>
                  </h3>
                  <span className="position">Hair Specialist</span>
                  <div className="text">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex mb-sm-4 ">
              <div className="staff">
                <div
                  className="img mb-4"
                  style={{ backgroundImage: `url(images/person_2.jpg)` }}></div>
                <div className="info text-center">
                  <h3>
                    <a href="teacher-single.html">Mark Wilson</a>
                  </h3>
                  <span className="position">Beard Specialist</span>
                  <div className="text">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex mb-sm-4 ">
              <div className="staff">
                <div
                  className="img mb-4"
                  style={{ backgroundImage: `url(images/person_3.jpg)` }}></div>
                <div className="info text-center">
                  <h3>
                    <a href="teacher-single.html">Patrick Jacobson</a>
                  </h3>
                  <span className="position">Hair Stylist</span>
                  <div className="text">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 d-flex mb-sm-4 ">
              <div className="staff">
                <div
                  className="img mb-4"
                  style={{ backgroundImage: `url(images/person_4.jpg)` }}></div>
                <div className="info text-center">
                  <h3>
                    <a href="teacher-single.html">Ivan Dorchsner</a>
                  </h3>
                  <span className="position">Beard Specialist</span>
                  <div className="text">
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Counter/>
      <Footer />
    </CartProvider>
  );
}

export default AllAbout;
