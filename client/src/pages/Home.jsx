import Footer from "../components/Footer";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductCarousel";
import ReviewSlider from "../components/ReviewSlider";
import SaleSection from "../components/SaleSection";
import ShopByCategory from "../components/ShopByCategory";
import ShopCard from "../components/ShopCard";

function Home() {
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

export default Home;
