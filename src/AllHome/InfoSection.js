/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function InfoSection() {
  return (
    <div>
      <section className="ftco-intro">
        <div className="container-wrap">
          <div className="wrap d-md-flex">
            <div className="info">
              <div className="row no-gutters">
                <div className="col-md-4 d-flex ">
                  <div className="icon">
                    <span className="icon-phone"></span>
                  </div>
                  <div className="text">
                    <h3>000 (123) 456 7890</h3>
                    <p>A small river named Duden flows</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex ">
                  <div className="icon">
                    <span className="icon-my_location"></span>
                  </div>
                  <div className="text">
                    <h3>198 West 21th Street</h3>
                    <p>Suite 721 New York NY 10016</p>
                  </div>
                </div>
                <div className="col-md-4 d-flex ">
                  <div className="icon">
                    <span className="icon-clock-o"></span>
                  </div>
                  <div className="text">
                    <h3>Open Monday-Friday</h3>
                    <p>8:00am - 9:00pm</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="social d-md-flex pl-md-5 p-4 align-items-center">
              <ul className="social-icon">
                <li className="">
                  <a href="#">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li className="">
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default InfoSection;
