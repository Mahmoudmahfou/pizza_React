/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function GalleryPizza() {
  return (
    <div>
      <section class="ftco-gallery">
        <div class="container-wrap">
          <div class="row no-gutters">
            <div class="col-md-3">
              <a
                href="#"
                class="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(images/gallery-1.jpg)` }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-search"></span>
                </div>
              </a>
            </div>
            <div class="col-md-3 ">
              <a
                href="#"
                class="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(images/gallery-2.jpg)` }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-search"></span>
                </div>
              </a>
            </div>
            <div class="col-md-3 ">
              <a
                href="#"
                class="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(images/gallery-3.jpg)` }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-search"></span>
                </div>
              </a>
            </div>
            <div class="col-md-3 ">
              <a
                href="#"
                class="gallery img d-flex align-items-center"
                style={{ backgroundImage: `url(images/gallery-4.jpg)` }}>
                <div class="icon mb-4 d-flex align-items-center justify-content-center">
                  <span class="icon-search"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPizza;
