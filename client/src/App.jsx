import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { ParallaxProvider } from "react-scroll-parallax";
import Test from "./components/Test";
import Features from "./components/Features";
import ProductCarousel from "./components/ProductCarousel";
import ShopByCategory from "./components/ShopByCategory";
import SaleSection from "./components/SaleSection";
import ShopCard from "./components/ShopCard";
import ReviewSlider from "./components/ReviewSlider";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <HeroSection />
      <Features />
      <ShopByCategory />
      <ProductCarousel />
      <SaleSection />
      <ShopCard />
      <ReviewSlider />
      <Footer />
    </>
  );
}

export default App;
