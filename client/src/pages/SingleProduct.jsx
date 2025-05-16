// import Navbar from "daisyui/components/navbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductAboutSaller from "../components/ProductAboutSaller";
import ProductFeatureSection from "../components/ProductFeatureSection";
import ProductHeader from "../components/ProductHeader";
import ProductSizesFeatures from "../components/ProductSizesFeatures";
function SingleProduct() {
  return (
    <>
      <Navbar />
      <ProductHeader />
      <ProductFeatureSection />
      <ProductSizesFeatures />
      <ProductAboutSaller />
      <Footer />
    </>
  );
}

export default SingleProduct;
