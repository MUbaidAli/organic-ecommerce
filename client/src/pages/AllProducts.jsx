import AllProductHero from "../components/AllProductHero";
import FeatureProducts from "../components/FeatureProducts";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SaleCarousel from "../components/SaleCarousel";
import ShopByCategory from "../components/ShopByCategory";
import ShopCard from "../components/ShopCard";

function AllProducts() {
  return (
    <>
      <Navbar />

      <AllProductHero />
      <ShopByCategory />
      {/* <Features /> */}
      <FeatureProducts />
      <SaleCarousel />
      <ShopCard />
      <Footer />
    </>
  );
}

export default AllProducts;
