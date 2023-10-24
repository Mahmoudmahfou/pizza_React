/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
// import Preloder from './Preloder';
import Header from './Header';
import Slider from './Slider';
import InfoSection from './InfoSection';
import AboutPizza from './AboutPizza';
import Services from './Services';
import PizzaMeals from './PizzaMeals';
import GalleryPizza from './GalleryPizza';
import Counter from './Counter';
import MenueSection from './MenueSection';
import BlogSection from './BlogSection';
import Footer from './Footer';
// import Preloder from './Preloder';
import { CartProvider } from "react-use-cart";



function AllHomePage() {
  return (
    <CartProvider>
      {/* <Preloder/> */}
      <Header/>
      <Slider/>
      <InfoSection/>
      <AboutPizza/>
      <Services/>
      <PizzaMeals/>
      <GalleryPizza/>
      <Counter/>
      <MenueSection/>
      <BlogSection/>
      <Footer/>
    </CartProvider>
  )
}

export default AllHomePage